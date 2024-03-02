---
id: argocdbuild
title: ArgoCD安裝
---

# ArgoCD 安裝

## 部屬ArgoCD於k8s
```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```
## 安裝ArgoCD Cli
```
curl -sSL -o argocd-linux-amd64 https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64
sudo install -m 555 argocd-linux-amd64 /usr/local/bin/argocd
rm argocd-linux-amd64
```
## 更新服務為LoadBalancer
```
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
```
:::warning
當完成metal-LB安裝與設定後，load Balancer才有意義
:::

## 設定Ingress(可選)
部屬Ingress物件
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: argocd-server-http-ingress
  namespace: argocd
  annotations:
    nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
    nginx.ingress.kubernetes.io/backend-protocol: "HTTP"
spec:
  ingressClassName: nginx
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: argocd-server
            port:
              name: http
    host: argocd.example.com
  tls:
  - hosts:
    - argocd.example.com
    secretName: argocd-secret
```

更改client端的主機的hosts檔案
- linux路徑為/etc/hosts
- window路徑為C:\Windows\System32\drivers
我的Ingress-controller的service(load balancer)的外部IP為192.168.0.170。
```
192.168.0.170 argocd.example.com
```
因此瀏覽器輸入***http://argocd.example.com***，便會找Ingress-controller並轉接到argocd服務了。

## 獲取admin密碼並更新密碼
```
argocd admin initial-password -n argocd
argocd login <ARGOCD_SERVER> //也就是load balancer外部IP
argocd account update-password
```

## 預期畫面
![ArgoCD](/img/argocdNg.png)