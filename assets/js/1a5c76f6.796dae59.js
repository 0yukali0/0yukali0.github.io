"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[662],{3905:(e,a,o)=>{o.d(a,{Zo:()=>h,kt:()=>m});var t=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function p(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=t.createContext({}),s=function(e){var a=t.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):p(p({},a),e)),o},h=function(e){var a=s(e.components);return t.createElement(d.Provider,{value:a},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),i=s(o),c=r,m=i["".concat(d,".").concat(c)]||i[c]||u[c]||n;return o?t.createElement(m,p(p({ref:a},h),{},{components:o})):t.createElement(m,p({ref:a},h))}));function m(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,p=new Array(n);p[0]=c;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[i]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<n;s++)p[s]=o[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},5036:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var t=o(7462),r=(o(7294),o(3905));const n={id:"buildhadoop",title:"hadoopCluster"},p="Hadoop \u591a\u7bc0\u9ede\u5b89\u88dd",l={unversionedId:"hadoop/buildhadoop",id:"hadoop/buildhadoop",title:"hadoopCluster",description:"VM\u74b0\u5883",source:"@site/docs/hadoop/buildCluster.md",sourceDirName:"hadoop",slug:"/hadoop/buildhadoop",permalink:"/docs/hadoop/buildhadoop",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/hadoop/buildCluster.md",tags:[],version:"current",frontMatter:{id:"buildhadoop",title:"hadoopCluster"},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/docs/intro"}},d={},s=[{value:"VM\u74b0\u5883",id:"vm\u74b0\u5883",level:2},{value:"Java 8 \u5b89\u88dd",id:"java-8-\u5b89\u88dd",level:2},{value:"SSH \u5b89\u88dd",id:"ssh-\u5b89\u88dd",level:2},{value:"\u7121\u5bc6\u78bcssh\u7b49\u5165\u8a2d\u5b9a",id:"\u7121\u5bc6\u78bcssh\u7b49\u5165\u8a2d\u5b9a",level:3},{value:"hadoop\u5b89\u88dd",id:"hadoop\u5b89\u88dd",level:2},{value:"hadoop\u914d\u7f6e\u6a94\u8a2d\u5b9a",id:"hadoop\u914d\u7f6e\u6a94\u8a2d\u5b9a",level:2},{value:"hadoop\u7684JAVA_HOME\u8a2d\u5b9a",id:"hadoop\u7684java_home\u8a2d\u5b9a",level:3},{value:"etc/hadoop/hadoop-env.sh",id:"etchadoophadoop-envsh",level:4},{value:"\u66f4\u65b0hdfs\u914d\u7f6e",id:"\u66f4\u65b0hdfs\u914d\u7f6e",level:3},{value:"etc/hadoop/core-site.xml",id:"etchadoopcore-sitexml",level:4},{value:"etc/hadoop/hdfs-site.xml",id:"etchadoophdfs-sitexml",level:4},{value:"\u66f4\u65b0yarn\u914d\u7f6e",id:"\u66f4\u65b0yarn\u914d\u7f6e",level:3},{value:"etc/hadoop/mapred-site.xml",id:"etchadoopmapred-sitexml",level:4},{value:"etc/hadoop/yarn-site.xml",id:"etchadoopyarn-sitexml",level:4},{value:"\u8a2d\u5b9a\u4e3b\u7bc0\u9ede\u8207\u5b50\u7bc0\u9ede",id:"\u8a2d\u5b9a\u4e3b\u7bc0\u9ede\u8207\u5b50\u7bc0\u9ede",level:2},{value:"\u66f4\u65b0 etc/hadoop/workers",id:"\u66f4\u65b0-etchadoopworkers",level:4},{value:"\u589e\u52a0 etc/hadoop/masters",id:"\u589e\u52a0-etchadoopmasters",level:4},{value:"\u8907\u88fdhadoop\u8cc7\u6599\u593e\u65bc\u5404\u5b50\u7bc0\u9ede",id:"\u8907\u88fdhadoop\u8cc7\u6599\u593e\u65bc\u5404\u5b50\u7bc0\u9ede",level:2},{value:"\u555f\u52d5hdfs\u8207yarn",id:"\u555f\u52d5hdfs\u8207yarn",level:2}],h={toc:s},i="wrapper";function u(e){let{components:a,...o}=e;return(0,r.kt)(i,(0,t.Z)({},h,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hadoop-\u591a\u7bc0\u9ede\u5b89\u88dd"},"Hadoop \u591a\u7bc0\u9ede\u5b89\u88dd"),(0,r.kt)("h2",{id:"vm\u74b0\u5883"},"VM\u74b0\u5883"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Virtualbox"),(0,r.kt)("li",{parentName:"ul"},"ubuntu server 22.04"),(0,r.kt)("li",{parentName:"ul"},"3\u7bc0\u9ede(1\u4e3b2\u5974\uff0cbridge)\n/etc/hosts\u5982\u4e0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-script"},"hadoop1 192.168.50.150\nhadoop2 192.168.50.151\nhadoop3 192.168.50.152\n")),(0,r.kt)("h2",{id:"java-8-\u5b89\u88dd"},"Java 8 \u5b89\u88dd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install openjdk-8-jre-headless\nsudo apt install openjdk-8-jdk-headless\n")),(0,r.kt)("h2",{id:"ssh-\u5b89\u88dd"},"SSH \u5b89\u88dd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install ssh\nsudo apt-get install openssh-server\n")),(0,r.kt)("h3",{id:"\u7121\u5bc6\u78bcssh\u7b49\u5165\u8a2d\u5b9a"},"\u7121\u5bc6\u78bcssh\u7b49\u5165\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u5c07\u4e3b\u7bc0\u9ede\u7684pub key\u8907\u88fd\u5230\u5b50\u7bc0\u9ede"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa\ncat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys\nchmod 0600 ~/.ssh/authorized_keys\nssh-copy-id -i ~/.ssh/authorized_keys hadoop2:/home/hadoop/.ssh/authorized_keys\nssh-copy-id -i ~/.ssh/authorized_keys hadoop3:/home/hadoop/.ssh/authorized_keys\n")),(0,r.kt)("h2",{id:"hadoop\u5b89\u88dd"},"hadoop\u5b89\u88dd"),(0,r.kt)("p",null,"\u4e0b\u8f09hadoop binary\u6a94\uff0c\u89e3\u58d3\u7e2e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# /home/hadoop/\nwget https://dlcdn.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz\ntar -xvf hadoop-3.3.6.tar.gz\n# /home/hadoop/hadoop\nmv hadoop-3.3.6 hadoop\n")),(0,r.kt)("h1",{id:"\u8a2d\u5b9a\u74b0\u5883\u8b8a\u6578"},"\u8a2d\u5b9a\u74b0\u5883\u8b8a\u6578"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6b64\u6b65\u9a5f\u6240\u6709\u7bc0\u9ede\u90fd\u8981\u505a"),"\uff0c\u4fee\u6539.bashrc\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u5167\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-script"},"# HADOOP_HOME \u4ee5hadoop\u8cc7\u6599\u593e\u6240\u5728\u70ba\u4e3b\uff0c\u6211\u662f\u653e\u5728hadoop\u5bb6\u76ee\u9304\u3002\n# \u8def\u5f91\u70ba /home/hadoop/\nexport HADOOP_HOME=/home/hadoop/hadoop\nexport PATH=$PATH:$HADOOP_HOME/bin\nexport PATH=$PATH:$HADOOP_HOME/sbin\nexport HADOOP_MAPRED_HOME=${HADOOP_HOME}\nexport HADOOP_COMMON_HOME=${HADOOP_HOME}\nexport HADOOP_HDFS_HOME=${HADOOP_HOME}\nexport YARN_HOME=${HADOOP_HOME}\nexport PDSH_RCMD_TYPE=ssh\n")),(0,r.kt)("p",null,"\u5957\u7528\u8a2d\u5b9a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source .bashrc\n")),(0,r.kt)("h2",{id:"hadoop\u914d\u7f6e\u6a94\u8a2d\u5b9a"},"hadoop\u914d\u7f6e\u6a94\u8a2d\u5b9a"),(0,r.kt)("h3",{id:"hadoop\u7684java_home\u8a2d\u5b9a"},"hadoop\u7684JAVA_HOME\u8a2d\u5b9a"),(0,r.kt)("h4",{id:"etchadoophadoop-envsh"},"etc/hadoop/hadoop-env.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-script"},"export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64\n")),(0,r.kt)("h3",{id:"\u66f4\u65b0hdfs\u914d\u7f6e"},"\u66f4\u65b0hdfs\u914d\u7f6e"),(0,r.kt)("h4",{id:"etchadoopcore-sitexml"},"etc/hadoop/core-site.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-script"},"<configuration>\n    <property>\n        <name>fs.defaultFS</name>\n        <value>hdfs://192.168.50.150:9000</value>\n    </property>\n</configuration>\n")),(0,r.kt)("h4",{id:"etchadoophdfs-sitexml"},"etc/hadoop/hdfs-site.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-script"},"<configuration>\n    <property>\n        <name>dfs.replication</name>\n        <value>2</value>\n    </property>\n    <property>\n        <name>dfs.namenode.name.dir</name>\n        <value>file:///usr/local/hadoop/hdfs/data</value>\n    </property>\n    <property>\n        <name>dfs.datanode.data.dir</name>\n        <value>file:///usr/local/hadoop/hdfs/data</value>\n    </property>\n</configuration>\n")),(0,r.kt)("h3",{id:"\u66f4\u65b0yarn\u914d\u7f6e"},"\u66f4\u65b0yarn\u914d\u7f6e"),(0,r.kt)("h4",{id:"etchadoopmapred-sitexml"},"etc/hadoop/mapred-site.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-script"},"<configuration>\n    <property>\n        <name>mapreduce.jobtracker.address</name>\n        <value>192.168.50.150:54311</value>\n    </property>\n    <property>\n        <name>mapreduce.framework.name</name>\n        <value>yarn</value>\n    </property>\n</configuration>\n")),(0,r.kt)("h4",{id:"etchadoopyarn-sitexml"},"etc/hadoop/yarn-site.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-script"},"<configuration>\n    <property>\n        <name>yarn.nodemanager.aux-services</name>\n        <value>mapreduce_shuffle</value>\n    </property>\n    <property>\n        <name>yarn.nodemanager.aux-services.mapreduce.shuffle.class</name>\n        <value>org.apache.hadoop.mapred.ShuffleHandler</value>\n    </property>\n    <property>\n       <name>yarn.resourcemanager.hostname</name>\n       <value>192.168.50.150</value>\n    </property>\n</configuration>\n")),(0,r.kt)("h2",{id:"\u8a2d\u5b9a\u4e3b\u7bc0\u9ede\u8207\u5b50\u7bc0\u9ede"},"\u8a2d\u5b9a\u4e3b\u7bc0\u9ede\u8207\u5b50\u7bc0\u9ede"),(0,r.kt)("h4",{id:"\u66f4\u65b0-etchadoopworkers"},"\u66f4\u65b0 etc/hadoop/workers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-script"},"192.168.50.151\n192.168.50.152\n")),(0,r.kt)("h4",{id:"\u589e\u52a0-etchadoopmasters"},"\u589e\u52a0 etc/hadoop/masters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-script"},"192.168.50.150\n")),(0,r.kt)("h2",{id:"\u8907\u88fdhadoop\u8cc7\u6599\u593e\u65bc\u5404\u5b50\u7bc0\u9ede"},"\u8907\u88fdhadoop\u8cc7\u6599\u593e\u65bc\u5404\u5b50\u7bc0\u9ede"),(0,r.kt)("p",null,"\u4e3b\u7bc0\u9ede\u6253\u5305hadoop\u4e26\u50b3\u5230\u5b50\u7bc0\u9ede"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar -zcf ./hadoop.tar.gz ./hadoop\nscp ./hadoop.tart.gz hadoop2:/home/hadoop/hadoop\nscp ./hadoop.tart.gz hadoop2:/home/hadoop/hadoop\n")),(0,r.kt)("p",null,"\u5b50\u7bc0\u9ede\u89e3\u58d3\u7e2e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar -zxf hadoop.tar.gz\n")),(0,r.kt)("h2",{id:"\u555f\u52d5hdfs\u8207yarn"},"\u555f\u52d5hdfs\u8207yarn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65bchadoop1\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4\nhdfs namenode -format\nstart-dfs.sh\nstart-yarn.sh\n")))}u.isMDXComponent=!0}}]);