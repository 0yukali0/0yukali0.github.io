---
id: custmizeUI
title: Kubeflow UI自訂
---

# kubeflow links種類
調整連接，修改[kubeflow UI格式](https://github.com/kubeflow/manifests/blob/v1.8.0/apps/centraldashboard/upstream/base/configmap.yaml)便可。
## 通往叢集外部之連結
### external links
* `type`: "item"
* `iframe`: false
* `text`: <連結名稱>
* `url`: <連接>
* [icon](https://github.com/PolymerElements/iron-icons)

### doc links
* `text`: <連接名稱>
* `desc`: <此連結描述>
* `link`: <連接>

## 通往叢集內部之連結
### menu links
* `type`: "item"
* `link`: <istio轉跳路徑>
* `text`: <連接名稱>
* [icon](https://github.com/PolymerElements/iron-icons)

當`link`為`/my-app/`，意味透過瀏覽器輸入網址預期為`http://<KUBEFLOW_ISTIO_GATEWAY_IP>/my-app/`。<br/>
當`link`為`/mu-app/{ns}/`，意味透過瀏覽器輸入網址預期為`http://<KUBEFLOW_ISTIO_GATEWAY_IP>/my-app/<user>`。<br/>
:::info

需建立新的istio VirtualService與現有的kubeflow/kubeflow-gateway綁定(也就是在kubeflow安裝時的istio gateway)。

:::

### Istio CRD VirtualService
```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: my-custom-app
  namespace: <MY_APP_NAMESPACE>
spec:
  gateways: #接受來自kubeflow/kubeflow-gateway的輸入
    - kubeflow/kubeflow-gateway
  hosts: #任何domain皆可
    - '*'
  http: #http://<domain>/my-app/<任意字元>合法
    - match:
        - uri:
            prefix: /my-app/
      rewrite:
        uri: /
      route:
        - destination:
            host: <MY_APP_SERVICE_NAME>.<MY_APP_NAMESPACE>.svc.cluster.local
            port:
              number: 80
```