---
id: nginxController
title: nginxController安裝
---

# Nginx Controller
## Nginx 安裝
部屬Nginx controller前，請完成[Metal-LB安裝](kubernetes-native/metallb.md)
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml
```
## 相關案例