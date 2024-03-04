---
id: pythonPingPong
title: python prometheus ping範例
---

# ping範例
## 程式碼
```python
from flask import Flask, Response
from prometheus_client import Counter, generate_latest

app = Flask(__name__)
metricName = "ping_count"
metricDes = "count the number of visit /ping "
counter = Counter(metricName, metricDes)

@app.route('/metrics')
def metrics():
    return Response(generate_latest(counter), mimetype='text/plain')

@app.route('/pong')
def ping():
    counter.inc(1)
    return "pong"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```
## Docker file
```
FROM python
RUN pip install -U Flask
RUN pip install prometheus-client
ENTRYPOINT ["python", "ping.py"]
```
## Kubernetes deployment
```
apiVersion: v1
kind: Service
metadata:
  name: ping-service
  labels:
    app: ping
spec:
  type: LoadBalancer
  selector:
    app: ping
  ports:
    - name: backend
      port: 30000
      targetPort: 5000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ping-deployment
  labels:
    app: ping
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ping
  template:
    metadata:
      labels:
        app: ping
    spec:
      containers:
      - name: ping
        image: 0yukali0/ping:python
        ports:
        - containerPort: 5000
```

## Prometheus Service Monitor
```
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: ping-monitor
  namespace: grafana
  labels:
    release: grafana
spec:
  jobLabel: jobLabel
  selector:
    matchLabels:
      app: ping
  namespaceSelector:
    matchNames:
    - default
  endpoints:
  - path: /metrics
    port: backend
    scrapeTimeout: 30s
```

## 確認ServiceMonitor生效
![Traget Rule](/img/ping-python-target.png)

## 預期畫面
![Prometheus](/img/ping-python-result.png)