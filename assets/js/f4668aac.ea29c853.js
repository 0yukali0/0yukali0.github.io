"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[6698],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),c=p(r),b=o,k=c["".concat(u,".").concat(b)]||c[b]||s[b]||l;return r?n.createElement(k,a(a({ref:t},f),{},{components:r})):n.createElement(k,a({ref:t},f))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const l={id:"kubeflowcrd",title:"kubeflow CRD\u7c21\u4ecb"},a="Kubeflow CRD\u4e00\u89bd\u8207\u7c21\u4ecb",i={unversionedId:"kubernetes-native/kubeflow/kubeflowcrd",id:"kubernetes-native/kubeflow/kubeflowcrd",title:"kubeflow CRD\u7c21\u4ecb",description:"Profile",source:"@site/docs/kubernetes-native/kubeflow/crd.md",sourceDirName:"kubernetes-native/kubeflow",slug:"/kubernetes-native/kubeflow/kubeflowcrd",permalink:"/docs/kubernetes-native/kubeflow/kubeflowcrd",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/kubeflow/crd.md",tags:[],version:"current",frontMatter:{id:"kubeflowcrd",title:"kubeflow CRD\u7c21\u4ecb"},sidebar:"tutorialSidebar",previous:{title:"kubeflow profile\u8207namespaces",permalink:"/docs/kubernetes-native/kubeflow/components/centraldashboard/kubeflowprofile"},next:{title:"kubeflow\u5b89\u88dd",permalink:"/docs/kubernetes-native/kubeflow/buildkubeflow"}},u={},p=[{value:"Profile",id:"profile",level:2},{value:"Profile\u4f7f\u7528\u4ecb\u7d39",id:"profile\u4f7f\u7528\u4ecb\u7d39",level:3}],f={toc:p},c="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubeflow-crd\u4e00\u89bd\u8207\u7c21\u4ecb"},"Kubeflow CRD\u4e00\u89bd\u8207\u7c21\u4ecb"),(0,o.kt)("h2",{id:"profile"},"Profile"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml"},"Profile CRD\u5b9a\u7fa9"),"\uff0capiversion\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"v1"),"\u8207",(0,o.kt)("inlineCode",{parentName:"p"},"v1beta1"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml#L37-L63"},"owner")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml#L68-L84"},"plugins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/kubeflow/blob/master/components/profile-controller/config/crd/bases/kubeflow.org_profiles.yaml#L88-L146"},"resourceQuotaSpec"))),(0,o.kt)("h3",{id:"profile\u4f7f\u7528\u4ecb\u7d39"},"Profile\u4f7f\u7528\u4ecb\u7d39"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"owner"),"\u6b04\u4f4d\u9700\u5b9a\u7fa9",(0,o.kt)("inlineCode",{parentName:"p"},"kind"),"\u8207",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"kind"),"\u503c\u70ba",(0,o.kt)("inlineCode",{parentName:"p"},"User"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Group"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\u5247\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"\u3002",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"plugins"),"\u5c0d\u61c9\u96f2\u670d\u52d9\u5e73\u53f0\u4e4b\u7528\u6236\u6388\u6b0a\u639b\u8f09\u3002",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"resourceQuotaSepc"),"\u70ba\u8a72owner\u53ef\u4f7f\u7528\u8cc7\u6e90\u4e4b\u4e0a\u9650\u3002",(0,o.kt)("br",null),"\n\u56e0\u6b64\u5728\u65b0\u589ekubeflow\u7528\u6236\u6642\uff0c\u9700\u4f7f\u7528\u6b64CRD\uff0c\u5982",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/manifests/blob/v1.8.0/common/user-namespace/base/profile-instance.yaml"},"\u9810\u8a2dProfile"),"\u6240\u793a\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Profile\u5be6\u9ad4\u4e0d\u6703\u540c\u6b65\u65bcDex\u4f7f\u7528\u8005\u6e05\u55ae\uff0c\u9700\u81ea\u884c\u6dfb\u52a0\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/manifests/tree/master?tab=readme-ov-file#change-default-user-password"},"\u53ef\u898b\u64cd\u4f5c\u6b65\u9a5f"))))}s.isMDXComponent=!0}}]);