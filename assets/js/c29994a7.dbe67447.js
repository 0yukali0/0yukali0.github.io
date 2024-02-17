"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[762],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),y=a,d=f["".concat(c,".").concat(y)]||f[y]||s[y]||i;return n?t.createElement(d,o(o({ref:r},p),{},{components:n})):t.createElement(d,o({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5018:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=n(7462),a=(n(7294),n(3905));const i={id:"ray_overview_train",title:"Ray Train\u5927\u7db1"},o="Ray Train\u5927\u7db1",l={unversionedId:"ray/train/ray_overview_train",id:"ray/train/ray_overview_train",title:"Ray Train\u5927\u7db1",description:"AI\u8a13\u7df4\u7a0b\u5f0f\u8207Ray\u7684\u642d\u914d\u6709\u4e09\u8655\u53ef\u8abf\u6574\u3002",source:"@site/docs/ray/train/train_overviw.md",sourceDirName:"ray/train",slug:"/ray/train/ray_overview_train",permalink:"/docs/ray/train/ray_overview_train",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/ray/train/train_overviw.md",tags:[],version:"current",frontMatter:{id:"ray_overview_train",title:"Ray Train\u5927\u7db1"},sidebar:"tutorialSidebar",previous:{title:"Ray Train\u652f\u63f4\u4e4bframework",permalink:"/docs/ray/train/ray_train_framework"},next:{title:"spark-RRD",permalink:"/docs/spark/base/rrd"}},c={},u=[{value:"Training function",id:"training-function",level:2},{value:"Worker",id:"worker",level:2},{value:"Scaling configuration",id:"scaling-configuration",level:3},{value:"Trainer",id:"trainer",level:2}],p={toc:u},f="wrapper";function s(e){let{components:r,...n}=e;return(0,a.kt)(f,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ray-train\u5927\u7db1"},"Ray Train\u5927\u7db1"),(0,a.kt)("p",null,"AI\u8a13\u7df4\u7a0b\u5f0f\u8207Ray\u7684\u642d\u914d\u6709\u4e09\u8655\u53ef\u8abf\u6574\u3002\n\u5206\u5225\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"training function"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Worker"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Trainer"),"\u3002"),(0,a.kt)("h2",{id:"training-function"},"Training function"),(0,a.kt)("p",null,"\u5efa\u7acb\u6a21\u578b\u3001loss\u503c\u8a08\u7b97\u7b49\u7b49,\u539f\u5148\u55ae\u6a5f\u7a0b\u5f0f\u79fb\u82b1\u63a5\u6728\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def train_func():\n    # user-defined training function of each worker\n")),(0,a.kt)("h2",{id:"worker"},"Worker"),(0,a.kt)("p",null,"\u6bcf\u500bworker\u542b\u6709training function\u5167\u5bb9\u4e26\u57f7\u884c\u3002"),(0,a.kt)("h3",{id:"scaling-configuration"},"Scaling configuration"),(0,a.kt)("p",null,"Scaling configuration\u8a2d\u5b9aworker\u7e3d\u6578\uff0c\u5404\u500bworker\u8cc7\u6e90\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from ray.train import ScalingConfig\n\nscaling_config = ScalingConfig(num_worker=2, use_GPU=False)\n")),(0,a.kt)("h2",{id:"trainer"},"Trainer"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ray Trainer"),"\u4f9d\u64da\u63d0\u4f9b\u4e4b",(0,a.kt)("inlineCode",{parentName:"p"},"training_func"),"\u8207",(0,a.kt)("inlineCode",{parentName:"p"},"scaling configuration"),"\u69cb\u51fa\u76f8\u61c9\u6578\u91cf\u7684worker\uff0c\u57f7\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"training function"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from ray.train.torch import TorchTrainer\n\ntrainer = TorchTrainer(train_func, scaling_config=scaling_config)\ntrain.fit()\n")))}s.isMDXComponent=!0}}]);