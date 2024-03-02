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
1. [Prometheus-stack設定](kubernetes-native\promethesuStack.md)
2. [ArgoCD設定](kubernetes-native\argocd\install.md)
3. Jenkins設定
4. Linkerd設定
5. Jeager設定