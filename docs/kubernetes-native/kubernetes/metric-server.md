---
id: metricserver
title: 安裝metricserver
---
# 安裝metric server
## 下載metric-server yaml
```
wget https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```
## 修改metric server yaml
```
- args:
- --kubelet-preferred-address-types=InternalIP
- --kubelet-insecure-tls
```
## 部屬metric server
```
kubectl apply -f components.yaml
```