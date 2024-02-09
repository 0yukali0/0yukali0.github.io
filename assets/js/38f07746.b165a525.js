"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[669],{3905:(e,r,t)=>{t.d(r,{Zo:()=>h,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},h=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),b=i(t),c=a,d=b["".concat(p,".").concat(c)]||b[c]||u[c]||o;return t?n.createElement(d,s(s({ref:r},h),{},{components:t})):n.createElement(d,s({ref:r},h))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=c;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[b]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9125:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const o={id:"buildhbase",title:"hbase\u53e2\u96c6\u5efa\u7acb"},s="Hbase\u591a\u7bc0\u9ede\u5efa\u7acb",l={unversionedId:"hbase/buildhbase",id:"hbase/buildhbase",title:"hbase\u53e2\u96c6\u5efa\u7acb",description:"\u8a2d\u5b9a.bashrc",source:"@site/docs/hbase/buildhbase.md",sourceDirName:"hbase",slug:"/hbase/buildhbase",permalink:"/docs/hbase/buildhbase",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/hbase/buildhbase.md",tags:[],version:"current",frontMatter:{id:"buildhbase",title:"hbase\u53e2\u96c6\u5efa\u7acb"},sidebar:"tutorialSidebar",previous:{title:"hadoop\u53e2\u96c6\u5efa\u7acb",permalink:"/docs/hadoop/buildhadoop"},next:{title:"Introduction",permalink:"/docs/intro"}},p={},i=[{value:"\u8a2d\u5b9a.bashrc",id:"\u8a2d\u5b9abashrc",level:2},{value:"\u5efa\u7acb\u8cc7\u6599\u593e",id:"\u5efa\u7acb\u8cc7\u6599\u593e",level:2},{value:"\u8a2d\u5b9ahbase/conf/hbase-env.sh",id:"\u8a2d\u5b9ahbaseconfhbase-envsh",level:2},{value:"\u8a2d\u5b9ahbase/conf/hbase-site.xml",id:"\u8a2d\u5b9ahbaseconfhbase-sitexml",level:2},{value:"\u8a2d\u5b9ahbase/conf/regionservers",id:"\u8a2d\u5b9ahbaseconfregionservers",level:2},{value:"\u50b3\u5230\u500b\u4e3b\u6a5f",id:"\u50b3\u5230\u500b\u4e3b\u6a5f",level:2},{value:"\u555f\u52d5hbase",id:"\u555f\u52d5hbase",level:2},{value:"thoubleshot",id:"thoubleshot",level:2},{value:"HMaster\u5b58\u5728hbase shell\u537b\u627e\u4e0d\u5230",id:"hmaster\u5b58\u5728hbase-shell\u537b\u627e\u4e0d\u5230",level:3},{value:"\u89e3\u6cd51",id:"\u89e3\u6cd51",level:4}],h={toc:i},b="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(b,(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hbase\u591a\u7bc0\u9ede\u5efa\u7acb"},"Hbase\u591a\u7bc0\u9ede\u5efa\u7acb"),(0,a.kt)("h2",{id:"\u8a2d\u5b9abashrc"},"\u8a2d\u5b9a.bashrc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# JAVA\nexport JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64\nexport PATH=$JAVA_HOME/bin:$PATH\n\n# HBase\nexport HBASE_HOME=/opt/hbase\nexport PATH=$PATH:$HBASE_HOME/bin\n")),(0,a.kt)("h2",{id:"\u5efa\u7acb\u8cc7\u6599\u593e"},"\u5efa\u7acb\u8cc7\u6599\u593e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# hbase\nmkdir logs\n")),(0,a.kt)("h2",{id:"\u8a2d\u5b9ahbaseconfhbase-envsh"},"\u8a2d\u5b9ahbase/conf/hbase-env.sh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64\nexport HBASE_MANAGES_ZK=false\nexport HBASE_PID_DIR=/opt/hadoop/pids\n")),(0,a.kt)("h2",{id:"\u8a2d\u5b9ahbaseconfhbase-sitexml"},"\u8a2d\u5b9ahbase/conf/hbase-site.xml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<property>\n    <name>hbase.cluster.distributed</name>\n    <value>true</value>\n  </property>\n  <property>\n    <name>hbase.rootdir</name>\n    <value>hdfs://s1:9000/hbase</value>\n  </property>\n   <property>\n    <name>hbase.zookeeper.property.dataDir</name>\n    <value>hdfs://s1:9000/zookeeper</value>\n  </property>\n  <property>\n    <name>hbase.zookeeper.quorum</name>\n    <value>s1, s2</value>\n  </property>\n  <property>\n    <name>hbase.zookeeper.property.clinetPort</name>\n    <value>2181</value>\n  </property>\n  <property>\n    <name>hbase.wal.provider</name>\n    <value>filesystem</value>\n  </property>\n")),(0,a.kt)("h2",{id:"\u8a2d\u5b9ahbaseconfregionservers"},"\u8a2d\u5b9ahbase/conf/regionservers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"s1\ns2\n")),(0,a.kt)("h2",{id:"\u50b3\u5230\u500b\u4e3b\u6a5f"},"\u50b3\u5230\u500b\u4e3b\u6a5f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"scp -rq ./hbase s2:/home/user\nsudo mv hbase /opt \n")),(0,a.kt)("h2",{id:"\u555f\u52d5hbase"},"\u555f\u52d5hbase"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"start-hbase.sh\n")),(0,a.kt)("h2",{id:"thoubleshot"},"thoubleshot"),(0,a.kt)("h3",{id:"hmaster\u5b58\u5728hbase-shell\u537b\u627e\u4e0d\u5230"},"HMaster\u5b58\u5728hbase shell\u537b\u627e\u4e0d\u5230"),(0,a.kt)("h4",{id:"\u89e3\u6cd51"},"\u89e3\u6cd51"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hdfs dfsadmin -safemode leave\n")))}u.isMDXComponent=!0}}]);