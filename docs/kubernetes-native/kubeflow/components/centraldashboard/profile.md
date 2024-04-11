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