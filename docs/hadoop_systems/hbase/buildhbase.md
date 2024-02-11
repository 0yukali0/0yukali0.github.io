---
id: buildhbase
title: hbase叢集建立
---

# Hbase多節點建立
## 設定.bashrc
```
# JAVA
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH

# HBase
export HBASE_HOME=/opt/hbase
export PATH=$PATH:$HBASE_HOME/bin
```

## 建立資料夾
```
# hbase
mkdir logs
```

## 設定hbase/conf/hbase-env.sh
```
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
export HBASE_MANAGES_ZK=false
export HBASE_PID_DIR=/opt/hadoop/pids
```

## 設定hbase/conf/hbase-site.xml
```
<property>
    <name>hbase.cluster.distributed</name>
    <value>true</value>
  </property>
  <property>
    <name>hbase.rootdir</name>
    <value>hdfs://s1:9000/hbase</value>
  </property>
   <property>
    <name>hbase.zookeeper.property.dataDir</name>
    <value>hdfs://s1:9000/zookeeper</value>
  </property>
  <property>
    <name>hbase.zookeeper.quorum</name>
    <value>s1, s2</value>
  </property>
  <property>
    <name>hbase.zookeeper.property.clinetPort</name>
    <value>2181</value>
  </property>
  <property>
    <name>hbase.wal.provider</name>
    <value>filesystem</value>
  </property>
```

## 設定hbase/conf/regionservers
```
s1
s2
```

## 傳到個主機
```
scp -rq ./hbase s2:/home/user
sudo mv hbase /opt 
``` 

## 啟動hbase
```
start-hbase.sh
```


## thoubleshot
### HMaster存在hbase shell卻找不到
#### 解法1
```
hdfs dfsadmin -safemode leave
```