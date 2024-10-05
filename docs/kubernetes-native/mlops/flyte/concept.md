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
1. pyflyte run
2. pyflyte register 資料夾
3. pyflyte package --pkgs 包

## Workflow的運行與排程
對本地端的flyte project進行註冊，可以在裡面定義Task、workflow與Launch plan。
這些會被統一上傳。
```python
from workflows.example import wf
execution = remote.execute(
    wf,
    inputs={"name": "Kermit"},
)
```
對已註冊的workflow，通知遠端運行。
若是遠端早已註冊，則通知使用的workflow名稱，並運行。
```python
from flytekit.configuration import Config
from flytekit.remote import FlyteRemote
from workflow.example import wf
remote = FlyteRemote(
    config=Config.auto(),
    default_project="flytesnacks",
    default_domain="development",
)
# local register
execution = remote.execute(wf, inputs={"name":"Kermit"})
# remote register
flyte_wf = remote.fetch_workflow(name="workflows.example.wf")
execution = remote.execute(flyte_wf, inputs={"name": "Kermit"})
```
當運行本地或遠端的Lauch Plan或Task時，作法雷同(你要先把上一步的workflow先註冊喔)。
```python
from workflows.example import wf, say_hello
launch_plan = LaunchPlan.get_or_create(
    wf, name="launch_plan", default_inputs={"name": "Elmo"},
)
execution = remote.execute(launch_plan, inputs={})
execution = remote.execute(say_hello, inputs={"name": "Kermit"})
# 呼叫在上述register註冊於flyte cluster的Launch Plan
flyte_launchplan = remote.fetch_launch_plan(name="workflows.example.launch_plan")
execution = remote.execute(flyte_launchplan, inputs={})
# 呼叫在上述register註冊於flyte cluster的Task
flyte_task = remote.fetch_task(name="workflows.example.say_hello")
execution = remote.execute(flyte_task, inputs={"name": "Kermit"})
```
flyte的遠端執行為非同步(non-blocking)，也就是需要等。
有兩種做法確認結果，確認input使用**remote.sync**;output則為**remote.wait**。
```
synced_execution = remote.sync(execution)
print(synced_execution.inputs)  # print out the inputs
completed_execution = remote.wait(execution)
print(completed_execution.outputs)  # print out the outputs
```
計畫何謂計畫，代表可以在每日或每月執行的計畫。
flyte支持類似Cronjob的定期作業
```
# 固定時間排成
from flytekit import LaunchPlan, CranSchedule
from workflow.example import wf
launch_plan = LaunchPlan.get_or_create(
    wf,
    name="wf_launchPlan",
    schedule=CronSchedule(schedule="*/1 * * * *"), 
    default_inputs={"name": "default"},
)
# 週期排成
from datetime import timedelta
from flytekit import FixedRate
launch_plan = LaunchPlan.get_or_create(
    wf,
    name="wf_launchplan",
    schedule=FixedRate(duration=timedelta(minutes=1)),
    default_inputs={"name": "Elmo"},
)
```