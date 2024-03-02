---
id: prometheusStack
title: Prometheus stack安裝
---

# prometheus與grafana
## 獲取prometheus與grafana helm chart
Promethues、alertmanager、CRD與grafana的helm chart設定。

```
# https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```
## 透過helm安裝 
```
helm install grafana prometheus-community/kube-prometheus-stack --namespace grafana --create-namespace
```
## LoadBalance服務
```
kubectl patch svc grafana -n grafana -p '{"spec": {"type": "LoadBalancer"}}'
kubectl patch svc grafana-kube-prometheus-st-prometheus -n grafana -p '{"spec": {"type": "LoadBalancer"}}'
kubectl patch svc grafana-kube-prometheus-st-alertmanager -n grafana -p '{"spec": {"type": "LoadBalancer"}}'
```
## 預期畫面
1. Grafana網址 http://192.168.0.171
2. Prometheus網址 http://192.168.0.172:9090
3. AlertManager網址 http://192.168.0.173:9093

![Prometheus stack](/img/loadBlanacerGrafanaAndPrometheus.png)