---
id: metallbMonitoringSetting
title: Metal-LB Prometheus監控設定
---

# metallb Prometheus監控設定
如果你採用[Metal-LB helm chart](https://github.com/metallb/metallb/tree/main/charts/metallb)就不用以下流程了。 
## 修改metallb的service配置
```
apiVersion: v1
kind: Service
metadata:
  name: webhook-service
  namespace: metallb-system
  labels: # 添加Labels
    component: controller
spec:
  ports:
  - port: 443
    targetPort: 9443
  - name: monitoring # 把Prometheus Port放出來
    port: 9889
    targetPort: 7472
  selector:
    component: controller
```

## Prometheus Service Monitor
```
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: metallb-monitor
  namespace: grafana
  labels:
    release: grafana
spec:
  jobLabel: jobLabel
  selector:
    matchLabels:
      component: controller
  namespaceSelector:
    matchNames:
    - metallb-system
  endpoints:
  - path: /metrics
    port: monitor
    scrapeTimeout: 30s
```
## 預期結果
![Metal-lb於Prometheus](/img/metallb-monitor.png)