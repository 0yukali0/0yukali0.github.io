---
id: cancer
title: 癌症細胞診斷
---

# Cancer

## Kaggle URL
***https://www.kaggle.com/datasets/erdemtaha/cancer-data/data***

## Pytorch程式
```python
import torch
from torch import nn
from torch.utils.data import Dataset
from torch.utils.data import DataLoader

import pandas as pd

class CustomDataset(Dataset):
    def __init__(self, x, y):
        self.dataset = x
        self.labels = y
    def __len__(self):
        return len(self.labels)
    def __getitem__(self, idx):
        x = self.dataset.iloc[idx]
        y = self.labels.iloc[idx]
        return torch.tensor(x.values).float(), torch.tensor([y]).float()

def CreateDataset(path="Cancer_Data.csv"):
    df = pd.read_csv(path)
    df = df.loc[:, ~df.columns.str.contains('^Unnamed')]
    x = df.iloc[: ,2:].astype("float")
    df["diagnosis"] = df["diagnosis"].apply(lambda x: 1 if x == 'M' else 0)
    y = df["diagnosis"].astype("int")
    dataset = CustomDataset(x=x, y=y)
    return dataset

class NeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(30, 40),
            nn.ReLU(),
            nn.Linear(40, 40),
            nn.ReLU(),
            nn.Linear(40, 1),
            nn.Sigmoid(),
        )
    def forward(self, x):
        return self.linear_relu_stack(x)

def train(dataloader, model, criterion, optimizer):
    for epoch in range(5):
        for X, y in dataloader:
            model.train()
            optimizer.zero_grad()
            X, y = X.to(device), y.to(device)
            pred = model(X)
            loss = criterion(pred, y)
            loss.backward()
            optimizer.step()
        print(f"epoch: {epoch}, loss: {loss.item()}")

batch_size = 64
device = (
    "cuda"
    if torch.cuda.is_available()
    else "cpu"
)
model = NeuralNetwork().to(device)
criterion = nn.BCELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=1e-3)
dataset = CreateDataset()
dataloader = DataLoader(dataset, batch_size)
train(dataloader, model, criterion, optimizer)
```