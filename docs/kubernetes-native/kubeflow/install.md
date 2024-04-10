---
id: buildkubeflow
title: kubeflow安裝
---

# 啟動k8s流程
## 自動配置pv
```
wget https://raw.githubusercontent.com/rancher/local-path-provisioner/master/deploy/local-path-storage.yaml
```
請在storage class添加default annotation
```
kind: StorageClass
metadata:
  name: local-path
  annotations:
    storageclass.beta.kubernetes.io/is-default-class: "true"
```
隨後安裝
```
kubectl apply -f local-path-storage.yaml
```
## kustmize安裝
```
mkdir kustmize && cd kustmize
curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh"  | bash
```

更改.profile並`source .profile`
```
PATH=$PATH:/home/user/kustmize
```
## kubeflow 1.8安裝
```
mkdir kubeflow && cd kubeflow
git clone https://github.com/kubeflow/manifests.git -b v1.8.0 && cd manifests

kustomize build common/cert-manager/cert-manager/base | kubectl apply -f -
kubectl wait --for=condition=ready pod -l 'app in (cert-manager,webhook)' --timeout=180s -n cert-manager
kustomize build common/cert-manager/kubeflow-issuer/base | kubectl apply -f -

kustomize build common/istio-1-17/istio-crds/base | kubectl apply -f -
kustomize build common/istio-1-17/istio-namespace/base | kubectl apply -f -
kustomize build common/istio-1-17/istio-install/base | kubectl apply -f -

kustomize build common/oidc-client/oidc-authservice/base | kubectl apply -f -
kustomize build common/dex/overlays/istio | kubectl apply -f -

kustomize build common/knative/knative-serving/overlays/gateways | kubectl apply -f -
kustomize build common/istio-1-17/cluster-local-gateway/base | kubectl apply -f -
kustomize build common/knative/knative-eventing/base | kubectl apply -f -

kustomize build common/kubeflow-namespace/base | kubectl apply -f -
kustomize build common/kubeflow-roles/base | kubectl apply -f -
kustomize build common/istio-1-17/kubeflow-istio-resources/base | kubectl apply -f -
kustomize build apps/pipeline/upstream/env/cert-manager/platform-agnostic-multi-user | kubectl apply -f -

kustomize build contrib/kserve/kserve | kubectl apply -f -
kustomize build contrib/kserve/models-web-app/overlays/kubeflow | kubectl apply -f -

kustomize build apps/katib/upstream/installs/katib-with-kubeflow | kubectl apply -f -

kustomize build apps/centraldashboard/upstream/overlays/kserve | kubectl apply -f -

kustomize build apps/admission-webhook/upstream/overlays/cert-manager | kubectl apply -f -

kustomize build apps/jupyter/notebook-controller/upstream/overlays/kubeflow | kubectl apply -f -
kustomize build apps/jupyter/jupyter-web-app/upstream/overlays/istio | kubectl apply -f -

kustomize build apps/pvcviewer-controller/upstream/default | kubectl apply -f -

kustomize build apps/profiles/upstream/overlays/kubeflow | kubectl apply -f -

kustomize build apps/volumes-web-app/upstream/overlays/istio | kubectl apply -f -

kustomize build apps/tensorboard/tensorboards-web-app/upstream/overlays/istio | kubectl apply -f -
kustomize build apps/tensorboard/tensorboard-controller/upstream/overlays/kubeflow | kubectl apply -f -

kustomize build apps/training-operator/upstream/overlays/kubeflow | kubectl apply -f -
```
### 註冊使用者
```
kustomize build common/user-namespace/base | kubectl apply -f -
```

部屬certicate.yml
```
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: kubeflow-ingressgateway-certs
  namespace: istio-system
spec:
  secretName: kubeflow-ingressgateway-certs
  issuerRef:
    name: kubeflow-self-signing-issuer
    kind: ClusterIssuer
  commonName: kubeflow.example.com
  dnsNames:
    - kubeflow.example.com
```

### Https設定
'kubectl edit gateway -n kubeflow kubeflow-gateway' 將HTTP改為HTTPS，Port改用443

## 暴露istio服務
kubectl port-forward svc/istio-ingressgateway -n istio-system 8080:80 --address='0.0.0.0'