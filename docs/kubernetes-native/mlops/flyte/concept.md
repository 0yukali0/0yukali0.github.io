---
id: flyte_concept
title: flyte基本介紹
---
# 基本
1. Task
2. Workflow
3. LaunchPlan
Task與workflow使用@task與@workflow來標誌，且兩者皆是強型態。
Workflow可以互相兼容。
```python
from typing import List
from math import sqrt
from flytekit import task, workflow, LaunchPlan
@task
def mean(values: List[float]) -> float:
    return sum(values) / len(values)

@task
def standard_deviation(values: List[float], mu: float) -> float:
    variance = sum([(x - mu) ** 2 for x in values])
    return sqrt(variance)

@task
def standard_scale(values: List[float], mu: float, sigma: float) -> List[float]:
    return [(x - mu) / sigma for x in values]

@workflow
def standard_scale_workflow(values: List[float]) -> List[float]:
    mu = mean(values=values)
    sigma = standard_deviation(values=values, mu=mu)
    return standard_scale(values=values, mu=mu, sigma=sigma)

mean(values=[float(i) for i in range(1, 11)])
try:
    mean(values="tmp")
    standard_scale_workflow(values=[float(i) for i in range(1, 11)])
except Exception as e:
    print(e)
# stateful workflow，你可以直接獲得過往結果，省時間，類似git。
standard_scale_launch_plan = LaunchPlan.get_or_create(
    standard_scale_workflow,
    name="standard_scale_lp",
    default_inputs={"values": [3.0, 4.0, 5.0]}
)
# Plan也算workflow，可以被包含在workflow中。
@workflow
def workflow_with_launchplan(num_samples: int, seed: int) -> List[float]:
    data = generate_data(num_samples=num_samples, seed=seed)
    return standard_scale_launch_plan(values=data)

workflow_with_launchplan(num_samples=10, seed=3)
```
那workflow之間的關係除了上面直接在code裡面寫關係之外。
也可以在workflow中直接描寫依賴關係
```python
@workflow
def wf():
    # t1 -> t2 -> wf
    promise1 = task1()
    promise2 = task2()
    promise3 = wf()
    promise1 >> promise2
    promeis2 >> promise3
```
## 註冊workflow