"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,f=p["".concat(i,".").concat(h)]||p[h]||m[h]||o;return r?n.createElement(f,u(u({ref:t},s),{},{components:r})):n.createElement(f,u({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,u[1]=c;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"prometheusStack",title:"Prometheus stack\u5b89\u88dd"},u="prometheus\u8207grafana",c={unversionedId:"kubernetes-native/prometheusStack",id:"kubernetes-native/prometheusStack",title:"Prometheus stack\u5b89\u88dd",description:"\u7372\u53d6prometheus\u8207grafana helm chart",source:"@site/docs/kubernetes-native/promethesuStack.md",sourceDirName:"kubernetes-native",slug:"/kubernetes-native/prometheusStack",permalink:"/docs/kubernetes-native/prometheusStack",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/promethesuStack.md",tags:[],version:"current",frontMatter:{id:"prometheusStack",title:"Prometheus stack\u5b89\u88dd"},sidebar:"tutorialSidebar",previous:{title:"nginxController\u5b89\u88dd",permalink:"/docs/kubernetes-native/nginxController"}},i={},l=[{value:"\u7372\u53d6prometheus\u8207grafana helm chart",id:"\u7372\u53d6prometheus\u8207grafana-helm-chart",level:2},{value:"\u900f\u904ehelm\u5b89\u88dd",id:"\u900f\u904ehelm\u5b89\u88dd",level:2}],s={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prometheus\u8207grafana"},"prometheus\u8207grafana"),(0,a.kt)("h2",{id:"\u7372\u53d6prometheus\u8207grafana-helm-chart"},"\u7372\u53d6prometheus\u8207grafana helm chart"),(0,a.kt)("p",null,"Promethues\u3001alertmanager\u3001CRD\u8207grafana\u7684helm chart\u8a2d\u5b9a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack\nhelm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo update\n")),(0,a.kt)("h2",{id:"\u900f\u904ehelm\u5b89\u88dd"},"\u900f\u904ehelm\u5b89\u88dd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm install grafana prometheus-community/kube-prometheus-stack --namespace grafana --create-namespace\n")))}m.isMDXComponent=!0}}]);