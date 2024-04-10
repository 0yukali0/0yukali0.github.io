"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[9095],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={id:"metallb",title:"Metal-LB\u5b89\u88dd"},i="Metal-LB\u5b89\u88dd",o={unversionedId:"kubernetes-native/metallb",id:"kubernetes-native/metallb",title:"Metal-LB\u5b89\u88dd",description:"LoadBalancer\u7684\u524d\u63d0\uff0cexternal IP\u81ea\u52d5\u914d\u7f6e",source:"@site/docs/kubernetes-native/metallb.md",sourceDirName:"kubernetes-native",slug:"/kubernetes-native/metallb",permalink:"/docs/kubernetes-native/metallb",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/metallb.md",tags:[],version:"current",frontMatter:{id:"metallb",title:"Metal-LB\u5b89\u88dd"},sidebar:"tutorialSidebar",previous:{title:"Metal-LB Prometheus\u76e3\u63a7\u8a2d\u5b9a",permalink:"/docs/kubernetes-native/metallb/metallbMonitoringSetting"},next:{title:"\u5b89\u88ddmetricserver",permalink:"/docs/kubernetes-native/metricserver/metricserver"}},s={},p=[{value:"L2Advertisement",id:"l2advertisement",level:2},{value:"IPAddressPool",id:"ipaddresspool",level:2},{value:"\u9810\u671f\u756b\u9762",id:"\u9810\u671f\u756b\u9762",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(m,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metal-lb\u5b89\u88dd"},"Metal-LB\u5b89\u88dd"),(0,a.kt)("p",null,"LoadBalancer\u7684\u524d\u63d0\uff0cexternal IP\u81ea\u52d5\u914d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9075\u5faa",(0,a.kt)("a",{parentName:"li",href:"https://metallb.universe.tf/installation/"},"Metal-LB\u5b89\u88dd\u6559\u5b78\u6b65\u9a5f")),(0,a.kt)("li",{parentName:"ol"},"\u90e8\u5c6cL2Advertisement"),(0,a.kt)("li",{parentName:"ol"},"\u90e8\u5c6cIPAddressPool\u63d0\u4f9bexternal IP")),(0,a.kt)("h2",{id:"l2advertisement"},"L2Advertisement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: metallb.io/v1beta1\nkind: L2Advertisement\nmetadata:\n  name: example\n  namespace: metallb-system\nspec:\n  ipAddressPools:\n  - first-pool\n")),(0,a.kt)("h2",{id:"ipaddresspool"},"IPAddressPool"),(0,a.kt)("p",null,"\u7576\u8def\u7531IP\u70ba192.168.0.1\uff0cMask\u70ba24\u3002\n\u53ef\u4ee5\u60f3\u6210\u672a\u4f86load balance\u670d\u52d9\u5916\u90e8IP\u5c31\u5c0d\u61c9\u4e00\u53f0\u4e3b\u6a5f\u5373\u53ef\uff0c\u5373\u5047\u5b9a\u6709\u64c1\u6709\u8a72\u5916\u90e8IP\u7684\u4e00\u53f0\u4e3b\u6a5f\u63d0\u4f9b\u8457\u670d\u52d9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: first-pool\n  namespace: metallb-system\nspec:\n  addresses:\n  # \u53ef\u5206\u914d\u7684 IP \u5730\u5740,\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u5305\u62ec ipv4\u3001ipv6\n  - 192.168.0.170-192.168.0.180\n")),(0,a.kt)("h2",{id:"\u9810\u671f\u756b\u9762"},"\u9810\u671f\u756b\u9762"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"metal\u5b89\u88dd\u8207IP\u914d\u7f6e",src:r(625).Z,width:"721",height:"309"})))}u.isMDXComponent=!0},625:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/metallb-53a3e5699a6df4917a5eba8367a8c874.png"}}]);