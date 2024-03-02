"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={id:"metallb",title:"Metal-LB\u5b89\u88dd"},o="Metal-LB\u5b89\u88dd",i={unversionedId:"kubernetes-native/kubernetes/metallb",id:"kubernetes-native/kubernetes/metallb",title:"Metal-LB\u5b89\u88dd",description:"LoadBalancer\u7684\u524d\u63d0\uff0cexternal IP\u81ea\u52d5\u914d\u7f6e",source:"@site/docs/kubernetes-native/kubernetes/metallb.md",sourceDirName:"kubernetes-native/kubernetes",slug:"/kubernetes-native/kubernetes/metallb",permalink:"/docs/kubernetes-native/kubernetes/metallb",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/kubernetes/metallb.md",tags:[],version:"current",frontMatter:{id:"metallb",title:"Metal-LB\u5b89\u88dd"},sidebar:"tutorialSidebar",previous:{title:"kubernetes\u53e2\u96c6\u5efa\u7acb",permalink:"/docs/kubernetes-native/kubernetes/buildkubernetes"},next:{title:"\u5b89\u88ddmetricserver",permalink:"/docs/kubernetes-native/kubernetes/metricserver"}},s={},p=[{value:"L2Advertisement",id:"l2advertisement",level:2},{value:"IPAddressPool",id:"ipaddresspool",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metal-lb\u5b89\u88dd"},"Metal-LB\u5b89\u88dd"),(0,a.kt)("p",null,"LoadBalancer\u7684\u524d\u63d0\uff0cexternal IP\u81ea\u52d5\u914d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f9d\u64da",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("a",{parentName:"em",href:"https://metallb.universe.tf/installation/"},"https://metallb.universe.tf/installation/"))),"\u5b89\u88dd\u5f8c"),(0,a.kt)("li",{parentName:"ol"},"\u90e8\u5c6cL2Advertisement"),(0,a.kt)("li",{parentName:"ol"},"\u90e8\u5c6cIPAddressPool\u63d0\u4f9bexternal IP")),(0,a.kt)("h2",{id:"l2advertisement"},"L2Advertisement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: metallb.io/v1beta1\nkind: L2Advertisement\nmetadata:\n  name: example\n  namespace: metallb-system\nspec:\n  ipAddressPools:\n  - first-pool\n")),(0,a.kt)("h2",{id:"ipaddresspool"},"IPAddressPool"),(0,a.kt)("p",null,"\u7576\u8def\u7531IP\u70ba192.168.50.1\uff0cMask\u70ba24\u3002\n\u53ef\u4ee5\u60f3\u6210\u672a\u4f86load balance\u670d\u52d9\u5916\u90e8IP\u5c31\u5c0d\u61c9\u4e00\u53f0\u4e3b\u6a5f\u5373\u53ef\uff0c\u5373\u5047\u5b9a\u6709\u64c1\u6709\u8a72\u5916\u90e8IP\u7684\u4e00\u53f0\u4e3b\u6a5f\u63d0\u4f9b\u8457\u670d\u52d9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: first-pool\n  namespace: metallb-system\nspec:\n  addresses:\n  # \u53ef\u5206\u914d\u7684 IP \u5730\u5740,\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\uff0c\u5305\u62ec ipv4\u3001ipv6\n  - 192.168.50.170-192.168.50.180\n")))}m.isMDXComponent=!0}}]);