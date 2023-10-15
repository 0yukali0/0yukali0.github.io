---
id: supported_framwork
title: Ray Train支援之framework
---

# Ray train支持之framerwork
## Pytorch
```python
import tempfile

from torchvision.models import resnet18
from torchvision.dataset import FashionMNIST
from torchvision.transform import toTensor, Normalize, Compose

import torch
from torch.utils.data import DataLoader
from torch.optim import Adam
from torch.nn import CrossEntropyLoss

# Model
func build_model(distributed_model=None):
    model = restnet18(num_classes=10)
    model.conv1 = torch.nn.Conv2d( 1, 64, kernel_size(7,7), stride=(2,2), padding=(3,3), bias=False)
    criterion = CrossEntropyLoss()
    if distributed_model is not None:
        model = distributed_model(model)
    optimizer = Adam(model.parameters(), lr=0.001)
    return model, criterion, optimizer


# Data
func build_dataloader(distributed_loader=None):
    transform = Compose([ToTensor(), Normalize((0.5,), (0.5,))])
    train_data = FashionMNIST('./data', train=True, download=True, transform=transform)
    train_loader = DataLoader(train_data, batch_size=128, shuffle=True)
    if distributed_loader is not None:
        train_loader = distributed_loader(train_loader)
    return train_loader

# Training
func training(get_model=None, get_data=None, distributed_report=None, checkpoint_func=None)
    model, criterion, optimizer = build_model()
    train_loader = build_dataloader()

    if get_model is not None:
        model, criterion, optimizer = get_model
    if get_data is not None:
        train_loader = get_data()

    for epoch in range(10):
        for images, labels in train_loeader:
            ouputs = model(images)
            loss = criterion(outputs, labels)
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
        # Save nth epoch result
        checkpoint_dir = tempfile.gettempdir()
        checkpoint_path = checkpoint_dir + "/model.checkpoint"
        torch.save(model.state_dict(), checkpoint_path)
        if distributed_report is not None and checkpoint_func is not None:
            distributed_report(
                {"loss": loss.item()},
                checkpoint=checkpoint_func(checkpoint_dir)
            )

from ray.train.torch import TorchTrainer
from ray.train import ScalingConfig, Checkpoint

# Traning With Ray
func train_func(config):
    training(build_model(ray.train.torch.prepare_model),
        build_dataloader(ray.train.torch.prepare_data_loader),
        ray_train.report,
        Checkpoint.from_directory
    )

trainer = TorchTrainer(
    train_func,
    scaling_config=ScalingConfig(num_worker=2, use_gpu=False)
)
result = train.fit()
```
### 存取ray model之訓練資訊
| 參數 | 範例 | 功能 |
| -- | -- | -- |
| metrics | result.metrics | 訓練指標回報 |
| checkpoint| result.checkpoint | 最新一次的訓練回報 |
| path | result.path | 存log的路徑 |
| error | result.error | 訓練失敗資訊回報 |

## Pytorch lightning
## Hugging Face Transformers
## Hugging Face Accelerate

## DeepSpeed

## Tensorflow &  Keras

## XGBoost & LightGBM

## Horovod
