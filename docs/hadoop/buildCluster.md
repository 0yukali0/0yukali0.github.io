---
id: buildhadoop
title: hadoopCluster
---

# Hadoop 多節點安裝
## VM環境
* Virtualbox
* ubuntu server 22.04
* 3節點(1主2奴，bridge)
/etc/hosts如下
```script
hadoop1 192.168.50.150
hadoop2 192.168.50.151
hadoop3 192.168.50.152
```

## Java 8 安裝

```bash
sudo apt install openjdk-8-jre-headless
sudo apt install openjdk-8-jdk-headless
```

## SSH 安裝

```bash
sudo apt-get install ssh
sudo apt-get install openssh-server
```

### 無密碼ssh等入設定
將主節點的pub key複製到子節點

```bash
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
chmod 0600 ~/.ssh/authorized_keys
ssh-copy-id -i ~/.ssh/authorized_keys hadoop2:/home/hadoop/.ssh/authorized_keys
ssh-copy-id -i ~/.ssh/authorized_keys hadoop3:/home/hadoop/.ssh/authorized_keys
```

## hadoop安裝
下載hadoop binary檔，解壓縮。
```bash
# /home/hadoop/
wget https://dlcdn.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz
tar -xvf hadoop-3.3.6.tar.gz
# /home/hadoop/hadoop
mv hadoop-3.3.6 hadoop
```
# 設定環境變數
**此步驟所有節點都要做**，修改.bashrc，添加以下內容。

```script
# HADOOP_HOME 以hadoop資料夾所在為主，我是放在hadoop家目錄。
# 路徑為 /home/hadoop/
export HADOOP_HOME=/home/hadoop/hadoop
export PATH=$PATH:$HADOOP_HOME/bin
export PATH=$PATH:$HADOOP_HOME/sbin
export HADOOP_MAPRED_HOME=${HADOOP_HOME}
export HADOOP_COMMON_HOME=${HADOOP_HOME}
export HADOOP_HDFS_HOME=${HADOOP_HOME}
export YARN_HOME=${HADOOP_HOME}
export PDSH_RCMD_TYPE=ssh
```

套用設定
```bash
source .bashrc
```

## hadoop配置檔設定
### hadoop的JAVA_HOME設定
#### etc/hadoop/hadoop-env.sh
```script
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
```

### 更新hdfs配置
#### etc/hadoop/core-site.xml
```script
<configuration>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://192.168.50.150:9000</value>
    </property>
</configuration>
```
#### etc/hadoop/hdfs-site.xml
```script
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>2</value>
    </property>
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>file:///usr/local/hadoop/hdfs/data</value>
    </property>
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>file:///usr/local/hadoop/hdfs/data</value>
    </property>
</configuration>
```

### 更新yarn配置
#### etc/hadoop/mapred-site.xml
```script
<configuration>
    <property>
        <name>mapreduce.jobtracker.address</name>
        <value>192.168.50.150:54311</value>
    </property>
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>
</configuration>
```

#### etc/hadoop/yarn-site.xml
```script
<configuration>
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
    </property>
    <property>
        <name>yarn.nodemanager.aux-services.mapreduce.shuffle.class</name>
        <value>org.apache.hadoop.mapred.ShuffleHandler</value>
    </property>
    <property>
       <name>yarn.resourcemanager.hostname</name>
       <value>192.168.50.150</value>
    </property>
</configuration>
```

## 設定主節點與子節點
#### 更新 etc/hadoop/workers
```script
192.168.50.151
192.168.50.152
```
#### 增加 etc/hadoop/masters
```script
192.168.50.150
```

## 複製hadoop資料夾於各子節點
主節點打包hadoop並傳到子節點
```bash
tar -zcf ./hadoop.tar.gz ./hadoop
scp ./hadoop.tart.gz hadoop2:/home/hadoop/hadoop
scp ./hadoop.tart.gz hadoop2:/home/hadoop/hadoop
```

子節點解壓縮
```bash
tar -zxf hadoop.tar.gz
```

## 啟動hdfs與yarn
```bash
# 於hadoop1輸入以下指令
hdfs namenode -format
start-dfs.sh
start-yarn.sh
```
