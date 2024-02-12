---
id: ray_train_framework
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
    training(
	build_model(ray.train.torch.prepare_model),
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
```python
import torch
import torch.utils.data import DataLoader
from torch.nn import CrossEntropyLoss
from torch.optim import Adam

import pytorch_lightning as pl

from torchvision.models import resnet18
from torchvision.datasets import FashionMNIST
from torchvision.transforms import ToTensor, Normalize, Compose

class ImageClassifier(pl.LightningModule):
    def __init__(self):
        super(ImageClassifier, self).__init__()
	self.model = resnet18(num_classes=10)
	self.model.conv1 = torch.nn.Conv2d(1, 64, kernel_size=(7,7), stride=(2,2), padding=(3,3), bias=False)
	self.criterion = CrossEntropyLoss())

    def forward(self, x):
	return self.model(x)

    def train_step(self, batch, batch_idx):
	x, y = batch
	outputs = self.forward(x)
	loss = self.criterion(outputs, y)
	self.log("loss", loss, on_step=True, prog_bar=True)
	return loss

    def configure_optimizer(self):
	return Adam(self.model.parameters(), lr=0.001)

func build_dataloader(distributed_loader=None):
    transform = Compose([ToTensor(), Normalize((0.5,), (0.5,))])
    train_data = FashionMNIST('./data', train=True, download=True, transform=transform)
    train_loader = DataLoader(train_data, batch_size=128, shuffle=True)
    if distributed_loader is not None:
        train_loader = distributed_loader(train_loader)
    return train_loader

def train_func(config):
    model = ImageClassifier()

    # Add some parameters in pl.Trainer
    # Parameters include devices, accelerator, strategy, plugins and callbacks
    trainer = pl.Trainer(
        max_epochs = 10,
	devices="auto",
	accelerator="auto",
	strategy=ray.train.lightning.RayDDPStrategy(),
	plugins=[ray.train.lightning.RayLightningEnvironment()],
	callbacks=[ray.train.lightning.RayTrainRportCallback()],
    )

    trainer = ray.train.lightning.prepare_trainer(trainer)
    trainer.fit(model, train_dataloaders=build_dataloader())

trainer =TorchTrainer(
        train_func,
	ScalingConfig(num_worker=2, use_gpu=True),
    )
result = trainer.fit()


```
## Hugging Face Transformers
```python
import numpy as np
import evaluate
from datasets import load_dataset
from transformers import (
    Trainer,
    TrainingArguments,
    AutoTokenizer,
    AutoModelForSequenceClassification,
)

# Encapsulate the data processing and prepare the basic huggingface model.
def general_train():
    dataset = load_dataset("yelp_review_full")
    tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

    def tokenize_function(examples):
        return tokenizer(examples["text"], padding="max_length", truncation=True)

    small_train_dataset = dataset["train"].select(range(1000)).map(
        tokenize_function,
        batch=True,
    )
    small_eval_dataset = dataset["test"].select(range(1000)).map(
        tokenize_function,
        batch=True,
    )

    # Model
    model = AutoModelForSequenceClassification.from_pretrained(
        "bert-base-cased",
        num_labels=5
    )

    # Metrics
    metric = evaluate.load("accuracy")

    def compute_metrics(eval_pred):
        logits, labels = eval_pred
        predications = np.argmax(logits, axis=-1)
        return metric.compute(
	        predictions=predictions,
	        references=labels
        )

    training_args = TrainingArguments(
        output_dir="test_trainer",
        evaluation_strategy="epoch",
        report_to="none"
    )

    trainer = Trainer(
        model=model,
        args=trainging_args,
        train_dataset=small_train_dataset,
        eval_dataset=small_eval_dataset,
        compute_metrics=compute_metrics,
    )

import ray.train.huggingface.transformers
from ray.train. import ScalingConfig
from ray.train.torch import TorchTrainer

# Encapsulate the training and the evaluation after the model fits the ray config.
def train_func(config):
    trainer = general_train()
    trainer.add_callback(
        ray.train.huggingface..transformers.RayTrainReportCallback(),
    )
    trainer = ray.train.huggingface.transformers.prepare_trainer(trainer)

    trainer.train()

ray_trainer = TorchTrainer(
    train_func,
    scaling_config=ScalingConfig(
        num_worker=4,
        use_gpu=True,
    )
)
ray_trainer.fit()
```
## Hugging Face Accelerate

## DeepSpeed

## Tensorflow &  Keras

## XGBoost & LightGBM

## Horovod
