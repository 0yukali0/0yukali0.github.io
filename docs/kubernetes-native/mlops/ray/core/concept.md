---
id: ray_core_concept
title: Ray core介紹
---

# Ray Core
一般來說，如果你是直接跑python範例，範例裡的**ray.init()**
1. **Tasks**為Ray平行的非同步函數包裝。
2. **Actors**與Task類似，為class等級的stateful worker。
當你使用vm、k8s來建立ray cluster時，就需要遠端提交的方法，也就是**@remote**
1. **Objects**為**Task**與**Actors**在Ray cluster統一interface，只要在ray裡你都能找到。
2. **Placement groups**為Tasks與actors在ray cluster的排程機制，主要用於gang scheduling
## Task
### Nested remote func

```python
import ray
@ray.remote(num_cpus=1, num=gpus=1)
def f():
  return 1
# Blocking call
print(ray.get(f.remote()))
```
### Ray generators
基本上，跟python generator使用是一樣的。
```python
@ray.remote
def f():
  for i in range(5):
    if i == 1:
        raise ValueError
    yield i
try:
    for obj_ref in f.remote():
        print(ray.get(obj_ref))
except ValueError as e:
    print(e)
```
當使用class等級的actor時，則對應**一般**、**async**與**thread**。
1. actor -> 使用def
2. async actor -> 使用async def，也就是nonblocking。
3. thread actor -> 設定最大平行數，ray.remote(max_concurrency=N)
```python
@ray.remote
class actor:
    def f(self):
        for i in range(5):
            yield i
@ray.remote
class asyncActor:
    async def f(self):
        for i in range(5):
            yield i
@ray.remote(max_concurrency=5)
class threadActor:
    def f(self):
        for i in range(5):
            yield i

actor = Actor.remote()
for ref in actor.f.remote():
    print(ray.get(ref))

actor = AsyncActor.remote()
for ref in actor.f.remote():
    print(ray.get(ref))

actor = ThreadedActor.remote()
for ref in actor.f.remote():
    print(ray.get(ref))
# 當沒用或不繼續generator記得刪
# gen = threadActor.remote()
# del gen
```
但如果再多行時，會導致無預警停止，就需要透過**ray.cancel()**，讓執行**next(gen)**就會噴出cancel錯誤**TaskCancelledError**，獲知這是合理關閉。
那問題來了，當使用**async actor**或**thread actor**時，來源為非同步，各做各的。
#### 非同步作法(高效)
接收端也需要相應修改，讓來源端跟接收端都是非同步，優化效能。
1. 透過asyncio與await
2. 透過ray.wait
透過asyncio達到。
```python
import asyncio
@ray.remote
def task():
    for i in range(5):
        time.sleep(1)
        yield i
async def async_task():
    async for ref in task.remote():
        print(await ref)
async def main():
    t1 = async_task()
    t2 = async_task()
    await asyncio.gather(t1, t2)
asyncio.run(main())
```
透過ray.wait時，當generator未完成時，都會待在unready中，直到元素噴光，才會被歸入ready。
其中區分該remote func是否為generator請用**ObjectRefGenerator**區分。
```python
from ray._raylet import ObjectRefGenerator
@ray.remote
def generator_task():
    for i in range(5):
        time.sleep(5)
        yield i
gen = [generator_task.remote()]
ready, unready = [], [*gen, *ref]
result = []
while unready:
    ready, unready = ray.wait(unready)
    for r in ready:
        if isinstance(r, ObjectRefGenerator):
            try:
                ref = next(r)
                result.append(ray.get(ref))
            except StopIteration:
                pass
            else:
                unready.append(r)
        else:
            result.append(ray.get(r))
```
## Actors
Actor可以丟入Task，建立多個Object指向同一Actor，平行運行。
以下為官方範例，每秒Actor的value+3。
```python
import ray
import time
@ray.remote(num_cpus=2)
class Counter:
    def __init__(self):
        self.value = 0
    def increment(self):
        self.value += 1
        return self.value
    def get_counter(self):
        return self.value

@ray.remote
def f(counter):
    for _ in range(10):
        time.sleep(1)
        counter.increment.remote() # call class func

counter = Counter.options(name="demo").remote() # call class
[f.remote(counter) for _ in range(3)] #每秒+3
for _ in range(10):
    time.sleep(0.1)
    print(ray.get(counter.get_counter.remote()))
```
Actor使用**generator**或**cancel**可以回頭看上個章節。
而要區分各個actors時，可以透過**name**與**namespace**，ray cluster其中actor對應的name、namespace。
把actor當成pod，ray cluster當成namespace就好。
建立時使用**options**來建立或獲取既有actor。
透過**get_actor**指定name與namesapce來獲取。
不同的**driver**(多個rayjob)共享同一actor則透過將actor lifecycle設為**detached**。
```python
import ray
@ray.remote
class Actor:
  pass

ray.init(address="auto", namespace="colors")
Actor.options(name="orange", lifetime="detached").remote() 
ray.init(address="auto", namespace="fruit")
ray.get_actor("orange2")
ray.init(address="auto", namespace="colors")
ray.get_actor("orange")

# 當想獲取其他ray cluster的actor時，需要namespace指定。
ray.get_actor("orange2", namespace="fruit")
a = Actor.options(name="g1", get_if_exists=True).remote()

# 刪除actor
ray.kill(a) #cluster delete actor
a.exit.remote() #manual delete
```
### 平行
python的平行一般被稱為假平行，原因是Global interpreter lock(GIL)限定python code thread量為1。
後續在await/sync與multipross才得以真平行。
ray actor平行分兩種，
1. asyncio(async流)
2. threading(multiprocess、joblib流)
:::info
兩者選一種，不混用。
混用視為async actor
:::
asyncio主動
```python
import ray
import asyncio
@ray.remote
class AsyncActor:
    async def start(self):
        print("start")
        await asyncio.sleep(2)
        print("finished")

actor = AsyncActor.remote()
ray.get([actor.run_task.remote() for _ in range(4)])
async def monitor(actor):
    await actor.start().remote()

asyncio.run(async_get())
```
asyncio被動
```python
import ray
import asyncio
@ray.remote
def task()
    return 1
# way 1
ray.wait([task.remote()])
# way 2 
async def wait_obj():
    await asyncio.wait([task.remote()])
asyncio.run(wait_obj())
```
thread則是透過**options**的**max_concurrency**設定最大平行數
```
@ray.remote(concurrency_groups={"io": 2})
class ThreadedActor:
    @ray.method(concurrency_group:"hello")
    def task1(self): print("hello 1")
a = ThreadedActor.options(max_concurrency=10).remote()
ray.get([a.task1.remote(), a.task1.remote()])
```
其中可設定平行池的thread數量。
```python
@ray.remote(concurrency_groups={"io": 2, "compute": 4})
class AsyncIOActor:
    def __init__(self):
        pass
    @ray.method(concurrency_group="io")
    async def f1(self):
        pass
    @ray.method(concurrency_group="compute")
    async def f2(self):
        pass
    async def f3(self):
        pass
a.f3.options(concurrency_group="compute").remote()
```
### Utils
1. ActorPool
2. queue
使用ActorPool來存放Actor實體並透過map來丟資料處理
```python
import ray.util import ActorPool
@ray.remote
class Actor:
    def double(self, n):
        return n * 2
pool = ActorPool([Actor.remote(), Actor.remote()])
gen = pool.map(lambda a, v: a.double.remote(v), [1, 2, 3, 4])
print(list(gen)) # [2, 4, 6, 8]
```
使用Queue存放資料，在Actor或Task中，透過queue.get獲取輸入，後續處理。
```python
from ray.util.queue import Queue, Empty
ray.init()
queue = Queue(maxsize=100)
@ray.remote
def consumer(id, queue):
    try:
        while True:
            next_item = queue.get(block=True, timeout=1)
            print(f"consumer {id} got work {next_item}")
    except Empty:
        pass

[queue.put(i) for i in range(10)]
consumers = [consumer.remote(id, queue) for id in range(2)]
```
## Ray out of band commmunications
TODO 