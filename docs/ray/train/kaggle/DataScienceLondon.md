---
id: datasciencelondonwithray
title: DataScienceLondonWithRay
---

# Ray使用案例:DataScienceLondon
## 資料來源
使用`train.csv`與`trainLabels.csv`作為X與Y。
***https://www.kaggle.com/c/data-science-london-scikit-learn/data***

'''python
import torch
from torch import nn
from torch.utils.data import Dataset
from torch.utils.data import DataLoader
import pandas as pd

class CustomDataloader(Dataset):
    def __init__(self, x, y):
        self.dataset = x
        self.labels = y
    def __len__(self):
        return len(self.labels)
    def __getitem__(self, idx):
        x = self.dataset.iloc[idx]
        y = self.labels.iloc[idx, 0]
        return torch.tensor(x.values).float(), torch.tensor([y]).float()

def createTrainDataset():
    train_x = pd.read_csv("train.csv")
    train_y = pd.read_csv("trainLabels.csv")
    return CustomDataloader(x=train_x, y=train_y)

class NeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(40, 40),
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
            optimizer.zero_grad()
            X, y = X.to(device), y.to(device)
            pred = model(X)
            loss = criterion(pred, y)
            loss.backward()
            optimizer.step()
        print(f"epoch: {epoch}, loss: {loss.item()}")

device = (
    "cuda"
    if torch.cuda.is_available()
    else "cpu"
)

model = NeuralNetwork().to(device)
criterion = nn.BCELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=1e-3)
dataloader = DataLoader(createTrainDataset(), batch_size)
train(dataloader, model, criterion, optimizer)
'''