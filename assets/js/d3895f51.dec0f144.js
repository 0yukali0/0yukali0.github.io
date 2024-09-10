"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[4503],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var l=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},p=Object.keys(e);for(l=0;l<p.length;l++)t=p[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)t=p[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=l.createContext({}),k=function(e){var n=l.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=k(e.components);return l.createElement(a.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},f=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,a=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=k(t),f=i,s=m["".concat(a,".").concat(f)]||m[f]||c[f]||p;return t?l.createElement(s,o(o({ref:n},u),{},{components:t})):l.createElement(s,o({ref:n},u))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,o=new Array(p);o[0]=f;var r={};for(var a in n)hasOwnProperty.call(n,a)&&(r[a]=n[a]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var k=2;k<p;k++)o[k]=t[k];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>r,toc:()=>k});var l=t(7462),i=(t(7294),t(3905));const p={id:"pipelineSDKIntro",title:"\u5e38\u7528Kubeflow SDK\u4ecb\u7d39"},o="Kubeflow SDK",r={unversionedId:"kubernetes-native/mlops/kubeflow/components/pipeline/pipelineSDKIntro",id:"kubernetes-native/mlops/kubeflow/components/pipeline/pipelineSDKIntro",title:"\u5e38\u7528Kubeflow SDK\u4ecb\u7d39",description:"Kubelow SDK(\u4e5f\u5c31\u662fkfp\uff0ckubeflow pipeline\u7e2e\u5beb)\u9810\u8a2d\u4ee5argo workflow\u5354\u4f5c\uff0c\u7528\u4ee5\u63cf\u8ff0\u7531\u591a\u500bcomponents\u6240\u7d44\u6210\u4e4bpipeline\uff0c\u5404components\u4e4b\u9593\u5148\u5f8c\u8207\u4e92\u52d5\u95dc\u4fc2\u3002",source:"@site/docs/kubernetes-native/mlops/kubeflow/components/pipeline/1_introduction.md",sourceDirName:"kubernetes-native/mlops/kubeflow/components/pipeline",slug:"/kubernetes-native/mlops/kubeflow/components/pipeline/pipelineSDKIntro",permalink:"/docs/kubernetes-native/mlops/kubeflow/components/pipeline/pipelineSDKIntro",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/mlops/kubeflow/components/pipeline/1_introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"pipelineSDKIntro",title:"\u5e38\u7528Kubeflow SDK\u4ecb\u7d39"},sidebar:"tutorialSidebar",previous:{title:"kubeflow profile\u8207namespaces",permalink:"/docs/kubernetes-native/mlops/kubeflow/components/centraldashboard/kubeflowprofile"},next:{title:"\u5e38\u7528Kubeflow SDK\u4ecb\u7d39",permalink:"/docs/kubernetes-native/mlops/kubeflow/components/pipeline/pipelineSDKBuildPipeline"}},a={},k=[{value:"fkp\u4ecb\u7d39",id:"fkp\u4ecb\u7d39",level:2},{value:"kfp.compiler",id:"kfpcompiler",level:3},{value:"kfp.components",id:"kfpcomponents",level:3},{value:"kfp.dsl",id:"kfpdsl",level:3},{value:"kfp.Client",id:"kfpclient",level:3}],u={toc:k},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kubeflow-sdk"},"Kubeflow SDK"),(0,i.kt)("p",null,"Kubelow SDK(\u4e5f\u5c31\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"kfp"),"\uff0ckubeflow pipeline\u7e2e\u5beb)\u9810\u8a2d\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"argo workflow"),"\u5354\u4f5c\uff0c\u7528\u4ee5\u63cf\u8ff0\u7531\u591a\u500b",(0,i.kt)("inlineCode",{parentName:"p"},"components"),"\u6240\u7d44\u6210\u4e4b",(0,i.kt)("inlineCode",{parentName:"p"},"pipeline"),"\uff0c\u5404",(0,i.kt)("inlineCode",{parentName:"p"},"components"),"\u4e4b\u9593\u5148\u5f8c\u8207\u4e92\u52d5\u95dc\u4fc2\u3002"),(0,i.kt)("h2",{id:"fkp\u4ecb\u7d39"},"fkp\u4ecb\u7d39"),(0,i.kt)("h3",{id:"kfpcompiler"},"kfp.compiler"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.compiler.Compiler.compile"),"\u8ca0\u8cac\u5c07\u76f8\u61c9Python DSL\u7a0b\u5f0f\u78bc\u8f49\u5316\u70baworkflow Pipeline\u4e4byaml\u914d\u7f6e\u6a94\u3002")),(0,i.kt)("h3",{id:"kfpcomponents"},"kfp.components"),(0,i.kt)("p",null,"Pipeline\u662f\u4e00\u6b65\u4e00\u6b65\u57f7\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"ContainerOp"),"\u3002",(0,i.kt)("br",null),"\n\u70ba\u4e86\u7522\u751f\u9019\u4e9b",(0,i.kt)("inlineCode",{parentName:"p"},"ContainerOp"),"\uff0c\u63d0\u4f9bPython code\u3001\u672c\u5730yaml\u6a94\u8207\u7db2\u7ad9yaml\u6a94\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.components.func_to_container_op")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.components.load_component_from_file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.components.load_component_from_url"))),(0,i.kt)("h3",{id:"kfpdsl"},"kfp.dsl"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.PipelineParam"),"\u70baPipeline\u7684step\u578b\u614b\uff0c\u5305\u542bpipeline\u3001component\u8207python_component\u7b49\u88dd\u98fe\u5b50"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.pipeline"),"\u88dd\u98fe\u5b50"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.component"),"\u88dd\u98fe\u5b50"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.python_component"),"\u88dd\u98fe\u5b50"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.ResourceOp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.VolumeOp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.VolumeSnapshotOp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.ParallelFor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.ExitHandler")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.dsl.Condition"))),(0,i.kt)("h3",{id:"kfpclient"},"kfp.Client"),(0,i.kt)("p",null,"\u5efa\u7acbExperiment\u74b0\u5883\uff0c\u4e26\u904b\u884cpipeline\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.Client.create_experiment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.Client.run_pipeline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.Client.create_run_from_pipeline_func")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.Client.create_run_from_pipeline_package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.Client.upload_pipeline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kfp.Client.upload_pipeline_version"))))}c.isMDXComponent=!0}}]);