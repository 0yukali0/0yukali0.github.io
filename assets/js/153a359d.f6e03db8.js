"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[95],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={id:"nginxController",title:"nginxController\u5b89\u88dd"},l="Nginx Controller",a={unversionedId:"kubernetes-native/nginxController",id:"kubernetes-native/nginxController",title:"nginxController\u5b89\u88dd",description:"Nginx \u5b89\u88dd",source:"@site/docs/kubernetes-native/nginx-controller.md",sourceDirName:"kubernetes-native",slug:"/kubernetes-native/nginxController",permalink:"/docs/kubernetes-native/nginxController",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/nginx-controller.md",tags:[],version:"current",frontMatter:{id:"nginxController",title:"nginxController\u5b89\u88dd"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88ddmetricserver",permalink:"/docs/kubernetes-native/metricserver/metricserver"},next:{title:"Prometheus stack\u5b89\u88dd",permalink:"/docs/kubernetes-native/prometheusStack"}},c={},u=[{value:"Nginx \u5b89\u88dd",id:"nginx-\u5b89\u88dd",level:2},{value:"\u76f8\u95dc\u6848\u4f8b",id:"\u76f8\u95dc\u6848\u4f8b",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nginx-controller"},"Nginx Controller"),(0,o.kt)("h2",{id:"nginx-\u5b89\u88dd"},"Nginx \u5b89\u88dd"),(0,o.kt)("p",null,"\u90e8\u5c6cNginx controller\u524d\uff0c\u8acb\u5b8c\u6210",(0,o.kt)("a",{parentName:"p",href:"/docs/kubernetes-native/metallb"},"Metal-LB\u5b89\u88dd")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml\n")),(0,o.kt)("h2",{id:"\u76f8\u95dc\u6848\u4f8b"},"\u76f8\u95dc\u6848\u4f8b"))}d.isMDXComponent=!0}}]);