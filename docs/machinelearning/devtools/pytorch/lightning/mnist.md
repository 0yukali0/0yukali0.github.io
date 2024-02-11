
---
id: mnist_lightning
title: MNIST衣物資料集判斷
---

# MNIST
## Pytorch程式

```python
import torch
from torch.utils.data import DataLoader
from torchvision import datasets
from torchvision.transforms import ToTensor
from sklearn.metrics import accuracy_score

import lightning as pl

class PytorchLightningModel(pl.LightningModule):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(28*28, 512),
            nn.ReLU(),
            nn.Linear(512, 512),
            nn.ReLU(),
            nn.Linear(512, 10)
        )
        self.batch_size = 64
    def prepare_data(self):
        self.train_set = datasets.FashionMNIST(
            root="data",
            train=True,
            download=True,
            transform=ToTensor(),
        )
        self.val_set = datasets.FashionMNIST(
            root="data",
            train=False,
            download=True,
            transform=ToTensor(),
        )
    def configure_optimizer(self):
        return torch.optim.SGD(self.parameters(), lr=1e-3)
    def train_dataloader(self):
        return DataLoader(self.train_set, batch_size=self.batch_size, shuffle=True)
    def val_dataloader(self):
        return DataLoader(self.val_set, batch_size=self.batch_size, shuffle=True)
    def forward(self, x):
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits
    def traning_step(self, batch, batch_idx):
        x, y = batch
        output = self.forward(x)
        criterion = nn.CrossEntropyLoss()
        loss = criterion(output, y)
        logs = {'loss': loss}
        return {'loss':loss, 'log':logs}
    def validation_step(self, batch, batch_idx):
        x, y = batch
        logits = self.forward(x)
        criterion = nn.CrossEntropyLoss()
        loss = criterion(logits, y)
        a, y_hat = torch.max(logits, dim=1)
        val_acc = accuracy_score(y_hat.cpu(), y.cpu())
        val_acc = torch.tensor(val_acc)
        return {'val_loss': loss, 'val_acc': val_acc}
    
    def validation_epoch_end(self, outputs):
        avg_loss = torch.stack([x['val_loss'] for x in outputs]).mean()
        avg_val_acc = torch.stack([x['val_acc'] for x in outputs]).mean()
        tensorboard_logs = {'val_loss': avg_loss, 'avg_val_acc': avg_val_acc}
        return {'avg_val_loss': avg_loss, 'progress_bar': tensorboard_logs}

model = PytorchLightningModel(param1=768, param2=5)
trainer = pl.Trainer()
trainer.fit(model)
```