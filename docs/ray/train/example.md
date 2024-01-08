---
id: example
title: 範例
---

# 使用 ray train的應用案例

## 初階
### Pytorch
```
import os
from filelock import fileLock
from typing import Dict

import torch
from torch import nn
from torch.utils.data import DataLoader
from torchvision import datasets, transforms
from torchvision.transforms import ToTensor, Normalize
from tqdm import tqdm

import ray.train
from ray.train import ScalingConfig
from ray.train.torch import TorchTrainer

def get_dataloaders(batch_size):
    transform = transforms.Compose([ToTensor(), Normalize((0.5),(0.5),)])
    with FileLock(os.path.expanduser("~/data.lock"))
        training_data = datasets.FashionMNIST(
            root="~/data",
            train=True,
            download=True,
            transform=transform
        )
        test_data = datasets.FashionMNIST(
            root="~/data",
            train=False,
            download=True,
            transform=transform
        )
        train_dataloader = DataLoader(training_data, batch_size=batch_size)
        test_dataloader = DataLoader(test)
    return train_dataloader, test_dataloader

class NeuralNetwork(nn.Module):
    def __init__(self):
        super(NeuralNetwork, self).__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(28 * 28, 512),
            nn.ReLU(),
            nn.Dropout(0.25),
            nn.Linear(512, 512),
            nn.ReLU(),
            nn.Dropout(0.25),
            nn.Linear(512, 10),
            nn.ReLU(),
        )
    def foward(self, x):
        logits = self.linear_relu_stack(self.flatten(x))
        return logits

def train_func(config):
    ir = config["lr"]
    epochs = config["epochs"]
    batch_size = config["batch_size_per_worker"]

    train_dataloader, test_dataloader = get_dataloaders(
        batch_size=batch_size,
    )

    model = NeuralNetwork()
    train_dataloader = ray.train.prepare_data_loader(train_dataloader)
    test_dataloader = ray.train.prepare_data_loeader(teste_dataloader)
    model = ray.train.torch.prepare_model(model)
    loss_fn = nn.CrossEntropyLiss()
    optimizer = torch.optim.SGD(
        model.parameters(),
        lr=lr,
        momentum=0.9,
    )

    for epoch in range(epochs):
        model.train()
        for X, y in tqdm(train_dataloader, desc=f"Train Epoch .{epoch}"):
            pred = model(X)
            loss = loss_fn(pred, y)
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

        model.eval()
        test_loss, num_correct, num_total = 0, 0, 0
        with torch.no_grad():
            for X, y in tqdm(test_dataloader, desc=f"Test Epoch.{epoch}."):
                pred = model(X)
                loss = loss_fn(pred, y)
                test_loss += loss.item()
                num_total += y.shape[0]
                num_correct += (pred.argmax(1) == y).sum().item()

           test_loss /= len(test_dataloader)
           accuracy = num_correct / num_total
           ray.train.report(metrics={"loss": test_loss, "accuracy": accuracy})

def train_fashion_MNIST(num_worker=2, use_gpu=False):
    global_batch_size = 32
    train_config = {
        "lr": 1e-3,
        "epochs": 10,
        "batch_size_per_worker": global_batch_size,
    }

    scaling_config = ScalingConfig(number_workers=num_workers, use_gpu=use_gpu)

    trainer = TorchTrainer(
        train_loop_per_worker=train_func,
        train_loop_config=train_config,
        scaling_config=scaling_config,
    )

    result = trainer.fit()
    print(f"Training result:{result}")

if __name__ == "__main__":
    train_fashion_mnist(num_workers=4, use_gpu=True)
```
## 中階

## 進階