"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[4733],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),g=a,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||o;return t?n.createElement(m,l(l({ref:r},d),{},{components:t})):n.createElement(m,l({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1096:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={id:"argocdbuild",title:"ArgoCD\u5b89\u88dd"},l="ArgoCD \u5b89\u88dd",i={unversionedId:"kubernetes-native/gitops/argocd/argocdbuild",id:"kubernetes-native/gitops/argocd/argocdbuild",title:"ArgoCD\u5b89\u88dd",description:"\u90e8\u5c6cArgoCD\u65bck8s",source:"@site/docs/kubernetes-native/gitops/argocd/install.md",sourceDirName:"kubernetes-native/gitops/argocd",slug:"/kubernetes-native/gitops/argocd/argocdbuild",permalink:"/docs/kubernetes-native/gitops/argocd/argocdbuild",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/gitops/argocd/install.md",tags:[],version:"current",frontMatter:{id:"argocdbuild",title:"ArgoCD\u5b89\u88dd"},sidebar:"tutorialSidebar",previous:{title:"kind\u5b89\u88dd",permalink:"/docs/kubernetes-native/devops/kind/kindInstall"},next:{title:"Helm\u5b89\u88dd",permalink:"/docs/kubernetes-native/gitops/helm/helmInstall"}},c={},s=[{value:"\u90e8\u5c6cArgoCD\u65bck8s",id:"\u90e8\u5c6cargocd\u65bck8s",level:2},{value:"\u5b89\u88ddArgoCD Cli",id:"\u5b89\u88ddargocd-cli",level:2},{value:"\u66f4\u65b0\u670d\u52d9\u70baLoadBalancer",id:"\u66f4\u65b0\u670d\u52d9\u70baloadbalancer",level:2},{value:"\u8a2d\u5b9aIngress(\u53ef\u9078)",id:"\u8a2d\u5b9aingress\u53ef\u9078",level:2},{value:"\u7372\u53d6admin\u5bc6\u78bc\u4e26\u66f4\u65b0\u5bc6\u78bc",id:"\u7372\u53d6admin\u5bc6\u78bc\u4e26\u66f4\u65b0\u5bc6\u78bc",level:2},{value:"\u9810\u671f\u756b\u9762",id:"\u9810\u671f\u756b\u9762",level:2}],d={toc:s},p="wrapper";function u(e){let{components:r,...o}=e;return(0,a.kt)(p,(0,n.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"argocd-\u5b89\u88dd"},"ArgoCD \u5b89\u88dd"),(0,a.kt)("h2",{id:"\u90e8\u5c6cargocd\u65bck8s"},"\u90e8\u5c6cArgoCD\u65bck8s"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n")),(0,a.kt)("h2",{id:"\u5b89\u88ddargocd-cli"},"\u5b89\u88ddArgoCD Cli"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -sSL -o argocd-linux-amd64 https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64\nsudo install -m 555 argocd-linux-amd64 /usr/local/bin/argocd\nrm argocd-linux-amd64\n")),(0,a.kt)("h2",{id:"\u66f4\u65b0\u670d\u52d9\u70baloadbalancer"},"\u66f4\u65b0\u670d\u52d9\u70baLoadBalancer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl patch svc argocd-server -n argocd -p \'{"spec": {"type": "LoadBalancer"}}\'\n')),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u7576\u5b8c\u6210metal-LB\u5b89\u88dd\u8207\u8a2d\u5b9a\u5f8c\uff0cload Balancer\u624d\u6709\u610f\u7fa9")),(0,a.kt)("h2",{id:"\u8a2d\u5b9aingress\u53ef\u9078"},"\u8a2d\u5b9aIngress(\u53ef\u9078)"),(0,a.kt)("p",null,"\u90e8\u5c6cIngress\u7269\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: argocd-server-http-ingress\n  namespace: argocd\n  annotations:\n    nginx.ingress.kubernetes.io/force-ssl-redirect: "true"\n    nginx.ingress.kubernetes.io/backend-protocol: "HTTP"\nspec:\n  ingressClassName: nginx\n  rules:\n  - http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: argocd-server\n            port:\n              name: http\n    host: argocd.example.com\n  tls:\n  - hosts:\n    - argocd.example.com\n    secretName: argocd-secret\n')),(0,a.kt)("p",null,"\u66f4\u6539client\u7aef\u7684\u4e3b\u6a5f\u7684hosts\u6a94\u6848"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linux\u8def\u5f91\u70ba/etc/hosts"),(0,a.kt)("li",{parentName:"ul"},"window\u8def\u5f91\u70baC:\\Windows\\System32\\drivers\n\u6211\u7684Ingress-controller\u7684service(load balancer)\u7684\u5916\u90e8IP\u70ba192.168.0.170\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"192.168.0.170 argocd.example.com\n")),(0,a.kt)("p",null,"\u56e0\u6b64\u700f\u89bd\u5668\u8f38\u5165",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("a",{parentName:"em",href:"http://argocd.example.com"},"http://argocd.example.com"))),"\uff0c\u4fbf\u6703\u627eIngress-controller\u4e26\u8f49\u63a5\u5230argocd\u670d\u52d9\u4e86\u3002"),(0,a.kt)("h2",{id:"\u7372\u53d6admin\u5bc6\u78bc\u4e26\u66f4\u65b0\u5bc6\u78bc"},"\u7372\u53d6admin\u5bc6\u78bc\u4e26\u66f4\u65b0\u5bc6\u78bc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"argocd admin initial-password -n argocd\nargocd login <ARGOCD_SERVER> //\u4e5f\u5c31\u662fload balancer\u5916\u90e8IP\nargocd account update-password\n")),(0,a.kt)("h2",{id:"\u9810\u671f\u756b\u9762"},"\u9810\u671f\u756b\u9762"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ArgoCD",src:t(8955).Z,width:"1911",height:"791"})))}u.isMDXComponent=!0},8955:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/argocdNg-98e29c27ccce1946aff43b16a2ac3acd.png"}}]);