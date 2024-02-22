---
id: metallb
title: Metal-LB安裝
---

# Metal-LB安裝
LoadBalancer的前提，external IP自動配置
1. 依據https://metallb.universe.tf/installation/安裝後
2. 部屬L2Advertisement
3. 部屬IPAddressPool提供external IP

## L2Advertisement
```
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: example
  namespace: metallb-system
spec:
  ipAddressPools:
  - first-pool
```

## IPAddressPool
當路由IP為192.168.50.1，Mask為24。
可以想成未來load balance服務外部IP就對應一台主機即可，即假定有擁有該外部IP的一台主機提供著服務。
```
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: first-pool
  namespace: metallb-system
spec:
  addresses:
  # 可分配的 IP 地址,可以指定多个，包括 ipv4、ipv6
  - 192.168.50.170-192.168.50.180
```