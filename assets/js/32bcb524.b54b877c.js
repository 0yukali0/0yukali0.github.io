"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[5506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:"nginxController",title:"nginxController\u5b89\u88dd"},l="Nginx Controller",i={unversionedId:"kubernetes-native/base/nginxController",id:"kubernetes-native/base/nginxController",title:"nginxController\u5b89\u88dd",description:"Nginx \u5b89\u88dd",source:"@site/docs/kubernetes-native/base/nginx-controller.md",sourceDirName:"kubernetes-native/base",slug:"/kubernetes-native/base/nginxController",permalink:"/docs/kubernetes-native/base/nginxController",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/base/nginx-controller.md",tags:[],version:"current",frontMatter:{id:"nginxController",title:"nginxController\u5b89\u88dd"},sidebar:"tutorialSidebar",previous:{title:"Metal-LB\u5b89\u88dd",permalink:"/docs/kubernetes-native/base/metallb"},next:{title:"Prometheus stack\u5b89\u88dd",permalink:"/docs/kubernetes-native/base/prometheusStack"}},c={},s=[{value:"Nginx \u5b89\u88dd",id:"nginx-\u5b89\u88dd",level:2},{value:"\u76f8\u95dc\u6848\u4f8b",id:"\u76f8\u95dc\u6848\u4f8b",level:2}],u={toc:s},p="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nginx-controller"},"Nginx Controller"),(0,o.kt)("h2",{id:"nginx-\u5b89\u88dd"},"Nginx \u5b89\u88dd"),(0,o.kt)("p",null,"\u90e8\u5c6cNginx controller\u524d\uff0c\u8acb\u5b8c\u6210",(0,o.kt)("a",{parentName:"p",href:"/docs/kubernetes-native/base/metallb"},"Metal-LB\u5b89\u88dd")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml\n")),(0,o.kt)("h2",{id:"\u76f8\u95dc\u6848\u4f8b"},"\u76f8\u95dc\u6848\u4f8b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/kubernetes-native/base/prometheusStack"},"Prometheus-stack\u8a2d\u5b9a")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/kubernetes-native/gitops/argocd/argocdbuild"},"ArgoCD\u8a2d\u5b9a")),(0,o.kt)("li",{parentName:"ol"},"Jenkins\u8a2d\u5b9a"),(0,o.kt)("li",{parentName:"ol"},"Linkerd\u8a2d\u5b9a"),(0,o.kt)("li",{parentName:"ol"},"Jeager\u8a2d\u5b9a")))}b.isMDXComponent=!0}}]);