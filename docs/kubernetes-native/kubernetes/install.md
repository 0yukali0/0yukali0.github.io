---
id: prometheusStack
title: Prometheus stack安裝
---

# prometheus與grafana
## 獲取prometheus與grafana helm chart
***https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack***為promethues與grafana的helm chart設定。

```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```
## 透過helm安裝 
```
helm install grafana prometheus-community/kube-prometheus-stack --namespace grafana --create-namespace
```