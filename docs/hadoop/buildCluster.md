---
id: buildhadoop
title: hadoop叢集建立
---

# Hadoop 多節點安裝
## VM環境
* Virtualbox
* ubuntu server 22.04
* 3節點(1主2奴，bridge)
/etc/hosts如下
```script
master 192.168.50.170
slave 192.168.50.171
```

## Java 8 安裝

```bash
sudo apt install openjdk-8-jre-headless -y
sudo apt install openjdk-8-jdk-headless -y
```

## SSH 安裝

```bash
sudo apt-get install ssh -y
sudo apt-get install openssh-server -y
```

### 無密碼ssh等入設定
將主節點的pub key複製到子節點

```bash
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
chmod 0600 ~/.ssh/authorized_keys
ssh-copy-id -i ~/.ssh/authorized_keys slave:/home/hadoop/.ssh/authorized_keys #使用scp也可
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
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
export HADOOP_CLASSPATH=${JAVA_HOME}/lib/tools.jar
export HADOOP_HOME=/home/hadoop/hadoop
export PATH=$PATH:$HADOOP_HOME/bin
export PATH=$PATH:$HADOOP_HOME/sbin
export HADOOP_MAPRED_HOME=${HADOOP_HOME}
export HADOOP_COMMON_HOME=${HADOOP_HOME}
export HADOOP_HDFS_HOME=${HADOOP_HOME}
export YARN_HOME=${HADOOP_HOME}
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
        <value>hdfs://hadoop1:9000</value>
    </property>
</configuration>
```
#### etc/hadoop/hdfs-site.xml
```script
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>1</value>
    </property>
</configuration>
```

### 更新yarn配置
#### etc/hadoop/mapred-site.xml
`mapreduce.application.classpath`值來至於`hadoop classpath`指令
```script
<configuration>
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
        <name>mapreduce.application.classpath</name>
        <value>/opt/hadoop/etc/hadoop:/opt/hadoop/share/hadoop/common/lib/*:/opt/hadoop/share/hadoop/common/*:/opt/hadoop/share/hadoop/hdfs:/opt/hadoop/share/hadoop/hdfs/lib/*:/opt/hadoop/share/hadoop/hdfs/*:/opt/hadoop/share/hadoop/mapreduce/*:/opt/hadoop/share/hadoop/yarn:/opt/hadoop/share/hadoop/yarn/lib/*:/opt/hadoop/share/hadoop/yarn/*:/usr/lib/jvm/java-1.8.0-openjdk-amd64/lib/tools.jar</value>
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
</configuration>
```

## 設定主節點與子節點
#### 更新 etc/hadoop/workers
```script
hadoop1
hadoop2
hadoop3
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
