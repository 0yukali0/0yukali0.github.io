---
id: angularInstall
title: Angular 安裝
---

# Angular基本
## 安裝
指令來自於[Angular distibution安裝](https://github.com/nodesource/distributions?tab=readme-ov-file#using-ubuntu-2)
```
# 安裝nodejs 與 npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

# 安裝 Angular Cli
sudo npm install -g @angular/cli
```

## 建立Angular專案
```
ng create my-app
```

## 運行並可外部拜訪
```
# 在 my-app 資料夾
# 允許外部拜訪且使用30000埠
ng erve --host 0.0.0.0 --port 30000
```