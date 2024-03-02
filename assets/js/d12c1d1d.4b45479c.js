"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[833],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),o=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=o(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=o(t),v=i,d=u["".concat(s,".").concat(v)]||u[v]||p[v]||a;return t?n.createElement(d,c(c({ref:r},m),{},{components:t})):n.createElement(d,c({ref:r},m))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=v;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:i,c[1]=l;for(var o=2;o<a;o++)c[o]=t[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},3312:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=t(7462),i=(t(7294),t(3905));const a={id:"metricserver",title:"\u5b89\u88ddmetricserver"},c="\u5b89\u88ddmetric server",l={unversionedId:"kubernetes-native/metricserver/metricserver",id:"kubernetes-native/metricserver/metricserver",title:"\u5b89\u88ddmetricserver",description:"\u4e0b\u8f09metric-server yaml",source:"@site/docs/kubernetes-native/metricserver/install.md",sourceDirName:"kubernetes-native/metricserver",slug:"/kubernetes-native/metricserver/metricserver",permalink:"/docs/kubernetes-native/metricserver/metricserver",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/metricserver/install.md",tags:[],version:"current",frontMatter:{id:"metricserver",title:"\u5b89\u88ddmetricserver"},sidebar:"tutorialSidebar",previous:{title:"Metal-LB\u5b89\u88dd",permalink:"/docs/kubernetes-native/metallb"},next:{title:"nginxController\u5b89\u88dd",permalink:"/docs/kubernetes-native/nginxController"}},s={},o=[{value:"\u4e0b\u8f09metric-server yaml",id:"\u4e0b\u8f09metric-server-yaml",level:2},{value:"\u4fee\u6539metric server yaml",id:"\u4fee\u6539metric-server-yaml",level:2},{value:"\u90e8\u5c6cmetric server",id:"\u90e8\u5c6cmetric-server",level:2}],m={toc:o},u="wrapper";function p(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b89\u88ddmetric-server"},"\u5b89\u88ddmetric server"),(0,i.kt)("h2",{id:"\u4e0b\u8f09metric-server-yaml"},"\u4e0b\u8f09metric-server yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wget https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml\n")),(0,i.kt)("h2",{id:"\u4fee\u6539metric-server-yaml"},"\u4fee\u6539metric server yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- args:\n- --kubelet-preferred-address-types=InternalIP\n- --kubelet-insecure-tls\n")),(0,i.kt)("h2",{id:"\u90e8\u5c6cmetric-server"},"\u90e8\u5c6cmetric server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl apply -f components.yaml\n")))}p.isMDXComponent=!0}}]);