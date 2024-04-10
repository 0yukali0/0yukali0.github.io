---
id: kubeflowcrd
title: kubeflow CRD簡介
---

# Kubeflow CRD一覽與簡介
## Profile
[Profile CRD定義](https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml)，apiversion有v1與v1beta1。
* [owner](https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml#L37-L63)
* [plugins](https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml#L68-L84)
* [resourceQuotaSpec](https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml#L88-L146)
### Profile使用介紹
`owner`欄位需定義`kind`與`name`，`kind`值為`User`, `Group`, and `ServiceAccount`，`name`則是`string`。
`plugins`對應雲服務平台之用戶授權掛載。
`resourceQuotaSepc`為該owner可使用資源之上限。
