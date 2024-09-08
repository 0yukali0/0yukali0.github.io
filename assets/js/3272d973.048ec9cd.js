"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[9518],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(i,".").concat(m)]||u[m]||y[m]||o;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7779:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={id:"ray_core_concept",title:"Ray core\u4ecb\u7d39"},c="Ray Core",l={unversionedId:"kubernetes-native/mlops/ray/core/ray_core_concept",id:"kubernetes-native/mlops/ray/core/ray_core_concept",title:"Ray core\u4ecb\u7d39",description:"\u4e00\u822c\u4f86\u8aaa\uff0c\u5982\u679c\u4f60\u662f\u76f4\u63a5\u8dd1python\u7bc4\u4f8b\uff0c\u7bc4\u4f8b\u88e1\u7684ray.init()",source:"@site/docs/kubernetes-native/mlops/ray/core/concept.md",sourceDirName:"kubernetes-native/mlops/ray/core",slug:"/kubernetes-native/mlops/ray/core/ray_core_concept",permalink:"/docs/kubernetes-native/mlops/ray/core/ray_core_concept",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/mlops/ray/core/concept.md",tags:[],version:"current",frontMatter:{id:"ray_core_concept",title:"Ray core\u4ecb\u7d39"},sidebar:"tutorialSidebar",previous:{title:"kubeflow\u5b89\u88dd",permalink:"/docs/kubernetes-native/mlops/kubeflow/buildkubeflow"},next:{title:"Ray\u5206\u6563\u5f0f\u8a13\u7df4-\u764c\u75c7\u7d30\u80de\u8a3a\u65b7",permalink:"/docs/kubernetes-native/mlops/ray/train/kaggle/cancerwithray"}},i={},s=[{value:"Task",id:"task",level:2},{value:"Nested remote func",id:"nested-remote-func",level:3},{value:"Ray generators",id:"ray-generators",level:3}],p={toc:s},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ray-core"},"Ray Core"),(0,a.kt)("p",null,"\u4e00\u822c\u4f86\u8aaa\uff0c\u5982\u679c\u4f60\u662f\u76f4\u63a5\u8dd1python\u7bc4\u4f8b\uff0c\u7bc4\u4f8b\u88e1\u7684",(0,a.kt)("strong",{parentName:"p"},"ray.init()")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Tasks"),"\u70baRay\u5e73\u884c\u7684\u975e\u540c\u6b65\u51fd\u6578\u5305\u88dd\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Actors"),"\u70baTask\u985e\u4f3c\uff0c\u70baclass\u7b49\u7d1a\u7684stateful worker\u3002\n\u7576\u4f60\u4f7f\u7528vm\u3001k8s\u4f86\u5efa\u7acbray cluster\u6642\uff0c\u5c31\u9700\u8981\u9060\u7aef\u63d0\u4ea4\u7684\u65b9\u6cd5\uff0c\u4e5f\u5c31\u662f",(0,a.kt)("strong",{parentName:"li"},"@remote")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Objects"),"\u70ba",(0,a.kt)("strong",{parentName:"li"},"Task"),"\u8207",(0,a.kt)("strong",{parentName:"li"},"Actors"),"\u5728Ray cluster\u7d71\u4e00interface\uff0c\u53ea\u8981\u5728ray\u88e1\u4f60\u90fd\u80fd\u627e\u5230\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Placement groups"),"\u70baTasks\u8207actors\u5728ray cluster\u7684\u6392\u7a0b\u6a5f\u5236\uff0c\u4e3b\u8981\u7528\u65bcgang scheduling")),(0,a.kt)("h2",{id:"task"},"Task"),(0,a.kt)("h3",{id:"nested-remote-func"},"Nested remote func"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import ray\n@ray.remote(num_cpus=1, num=gpus=1)\ndef f():\n  return 1\n# Blocking call\nprint(ray.get(f.remote()))\n")),(0,a.kt)("h3",{id:"ray-generators"},"Ray generators"),(0,a.kt)("p",null,"\u57fa\u672c\u4e0a\uff0c\u8ddfpython generator\u4f7f\u7528\u662f\u4e00\u6a23\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@ray.remote\ndef f():\n  for i in range(5):\n    if i == 1:\n        raise ValueError\n    yield i\ntry:\n    for obj_ref in f.remote():\n        print(ray.get(obj_ref))\nexcept ValueError as e:\n    print(e)\n")),(0,a.kt)("p",null,"\u7576\u4f7f\u7528class\u7b49\u7d1a\u7684actor\u6642\uff0c\u5247\u5c0d\u61c9",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u822c"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"async"),"\u8207",(0,a.kt)("strong",{parentName:"p"},"thread"),"\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"actor -> \u4f7f\u7528def"),(0,a.kt)("li",{parentName:"ol"},"async actor -> \u4f7f\u7528async def"),(0,a.kt)("li",{parentName:"ol"},"thread actor -> \u8a2d\u5b9a\u6700\u5927\u5e73\u884c\u6578\uff0cray.remote(max_concurrency=N)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@ray.remote\nclass actor:\n    def f(self):\n        for i in range(5):\n            yield i\n@ray.remote\nclass asyncActor:\n    async def f(self):\n        for i in range(5):\n            yield i\n@ray.remote(max_concurrency=5)\nclass threadActor:\n    def f(self):\n        for i in range(5):\n            yield i\n")))}y.isMDXComponent=!0}}]);