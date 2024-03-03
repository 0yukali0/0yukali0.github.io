---
id: installNFS
title: NFS建立
---

# NFS伺服器建立
## Client端
### 安裝Client工具
```
sudo apt update
sudo apt install nfs-common
```
## Server端
### 安裝Server工具
```
sudo apt update
sudo apt install nfs-kernel-server
```
### 建立資料夾
```
sudo mkdir /var/nfs/data -p
sudo chown nobody:nogroup /var/nfs/data
```
### 設定對外開放
更改/etc/hots
```
192.168.0.108 s1
```

更改/etc/exports檔案
```
/var/nfs/data    s1(rw,sync,no_subtree_check)
/home            s1(rw,sync,no_root_squash,no_subtree_check)
```
### 啟動服務
```
sudo systemctl enable nfs-kernel-server
sudo systemctl restart nfs-kernel-server
```