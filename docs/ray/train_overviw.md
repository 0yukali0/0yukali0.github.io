---
id: overview
title: Ray Train大綱
---

# Ray Train大綱
AI訓練程式與Ray的搭配有三處可調整。
分別為`training function`, `Worker`, `Trainer`。

## Training function
建立模型、loss值計算等等,原先單機程式移花接木即可。

```python
def train_func():
    # user-defined training function of each worker
```

## Worker
每個worker含有training function內容並執行。
Scaling configuration設定worker總數，各個worker資源使用

### Scaling configuration

```python
from ray.train import ScalingConfig

scaling_config = ScalingConfig(num_worker=2, use_GPU=False)
```

## Trainer

```
from ray.train.torch import TorchTrainer

trainer = TorchTrainer(train_func, scaling_config=scaling_config)
train.fit()
```
