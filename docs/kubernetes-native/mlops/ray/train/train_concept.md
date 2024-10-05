---
id: ray_train_concept
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

### Scaling configuration
Scaling configuration設定worker總數，各個worker資源使用
```python
from ray.train import ScalingConfig

scaling_config = ScalingConfig(num_worker=2, use_GPU=False)
```

## Trainer
`Ray Trainer`依據提供之`training_func`與`scaling configuration`構出相應數量的worker，執行`training function`。

```
from ray.train.torch import TorchTrainer

trainer = TorchTrainer(train_func, scaling_config=scaling_config)
train.fit()
```
