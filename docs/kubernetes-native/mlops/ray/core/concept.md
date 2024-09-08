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
2. async actor -> 使用async def
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
```