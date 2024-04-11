---
id: kubeflowcrd
title: kubeflow CRD簡介
---

# Kubeflow CRD一覽與簡介
## Profile
[Profile CRD定義](https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml)，apiversion有`v1`與`v1beta1`。
* [owner](https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml#L37-L63)
* [plugins](https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml#L68-L84)
* [resourceQuotaSpec](https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml#L88-L146)
### Profile使用介紹
`owner`欄位需定義`kind`與`name`，`kind`值為`User`, `Group`, and `ServiceAccount`，`name`則是`string`。<br/>
`plugins`對應雲服務平台之用戶授權掛載。<br/>
`resourceQuotaSepc`為該owner可使用資源之上限。<br/>
因此在新增kubeflow用戶時，需使用此CRD，如[預設Profile](https://github.com/kubeflow/manifests/blob/v1.8.0/common/user-namespace/base/profile-instance.yaml)所示。

:::note

Profile實體不會同步於Dex使用者清單，需自行添加，[可見操作步驟](https://github.com/kubeflow/manifests/tree/master?tab=readme-ov-file#change-default-user-password)

:::