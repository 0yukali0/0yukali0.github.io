---
id: ray_core_concept
title: Ray core介紹
---

# Ray Core
一般來說，如果你是直接跑python範例，範例裡的**ray.init()**
1. **Tasks**為Ray平行的非同步函數包裝。
2. **Actors**為Task類似，為class等級的stateful worker。
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