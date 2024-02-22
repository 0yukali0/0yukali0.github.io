---
id: buildozone
title: ozone叢集建立
---

# 建立Ozone
## 設定.bashrc
```
# JAVA
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH

# Ozone
export OZONE_HOME=/opt/ozone
export PATH=$PATH:$OZONE_HOME/bin
```

##  ozone/etc/hadoop/ozone-env.sg
```
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
export OZONE_HOME=/opt/ozone
export OZONE_CONF_DIR=${OZONE_HOME}/etc/hadoop
export OZONE_LOG_DIR=${OZONE_HOME}/logs
```

## 建資料夾
```
# ozone
mkdir logs
```

## ozone/etc/hadoop/ozone-site.xml
產生配置檔。
```
ozone genconf /opt/ozone/etc/hadoop
```

更改localhost為各主機名稱(/etc/hosts)。
```
<property>
        <name>ozone.om.address</name>
        <value>s1,s2</value>
        <tag>OM, REQUIRED</tag>
        <description>
      The address of the Ozone OM service. This allows clients to discover
      the address of the OM.
    </description>
    </property>
    <property>
        <name>ozone.metadata.dirs</name>
        <value>/opt/ozone/data</value>
        <tag>OZONE, OM, SCM, CONTAINER, STORAGE, REQUIRED</tag>
        <description>
      This setting is the fallback location for SCM, OM, Recon and DataNodes
      to store their metadata. This setting may be used only in test/PoC
      clusters to simplify configuration.

      For production clusters or any time you care about performance, it is
      recommended that ozone.om.db.dirs, ozone.scm.db.dirs and
      dfs.container.ratis.datanode.storage.dir be configured separately.
    </description>
    </property>
    <property>
        <name>ozone.scm.client.address</name>
        <value>s1,s2</value>
        <tag>OZONE, SCM, REQUIRED</tag>
        <description>
      The address of the Ozone SCM client service. This is a required setting.

      It is a string in the host:port format. The port number is optional
      and defaults to 9860.
    </description>
    </property>
    <property>
        <name>ozone.scm.names</name>
        <value>s1, s2</value>
        <tag>OZONE, REQUIRED</tag>
        <description>
      The value of this property is a set of DNS | DNS:PORT | IP
      Address | IP:PORT. Written as a comma separated string. e.g. scm1,
      scm2:8020, 7.7.7.7:7777.
      This property allows datanodes to discover where SCM is, so that
      datanodes can send heartbeat to SCM.
    </description>
    </property>
```

## 傳到個主機
```
scp -rq ./ozone s2:/home/user
sudo mv ozone /opt 
``` 

## 各主機啟動scm與om

```
ozone scm --init
ozone om --init
ozone --daemon start scm
ozone --daemon start om
ozone --daemon start datanode
```