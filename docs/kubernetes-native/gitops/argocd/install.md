---
id: argocdbuild
title: ArgoCD安裝
---

# ArgoCD 安裝
假定你已經有安裝kind, k9s與kubectl與argocd cli
## 步驟1
建立cluster1並安裝argocd系統
```
kind create cluster -n k1
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```
更新密碼
```
# terminal 1
kubectl port-forward svc/argocd-server -n argocd 8080:443
# terminal 2
argocd admin initial-password -n argocd
argocd login 127.0.0.1:8080
argocd account update-password
```
註冊k2(會失敗，應為找不到目標)
```
kubectl config get-contexts -o name
argocd cluster add kind-k2
```
## 步驟2
```
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' k2-control-plane

```