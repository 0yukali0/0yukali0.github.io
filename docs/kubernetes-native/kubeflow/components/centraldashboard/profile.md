---
id: kubeflowprofile
title: kubeflow profile與namespaces
---

# Kubeflow CRD Profile
* Profile與namespace為一對一
* [istio authoirizationPolicies](https://istio.io/latest/docs/reference/config/security/authorization-policy/)
對於`profile擁有者`產生`ns-owner-access-istio`的`AuthorizationPolicy`;對於`contributor`產生`user-{EMAIL}-clusterrole-{ROLE}`。`ROLE`可為`edit`或`view`。<br/>
* [Kubernetes RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)之於Profile owner(Users與ServiceAccounts)
設為`Users`時，`profile擁有者`將獲得`Rolebinding`(名`namespaceAdmin`)並綁定於`ClusterRole/kubeflow-admin`，該`擁有者所建之contributor`則有`Rolebinding`(名`user-{EMAIL}-clusterrole-{ROLE}`)綁定於`ClusterRole/kubeflow-{ROLE}`;設為`ServiceAccounts`時，`ServiceAcount/default-<editor\viewer>`，`RoleBinding`(`default-<editor\viewer>`)綁到`ClusterRole/kubeflow-<edit\view>`。
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