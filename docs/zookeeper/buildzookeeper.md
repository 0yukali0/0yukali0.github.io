---
id: buildzookeeper
title: zookeeper叢集建立
---

# Zookeeper多節點安裝
## 設定/etc/hosts
```script
master 192.168.50.179
slave 192.168.50.171
```

## 設定.bashrc
配置後請source .bashrc
```
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
export ZOOKEEPER_HOME=/opt/zookeeper
export PATH=$PATH:$ZOOKEEPER_HOME/bin
```

## 下載zookeeper

```script
# /home/hadoop
wget https://dlcdn.apache.org/zookeeper/zookeeper-3.9.1/apache-zookeeper-3.9.1-bin.tar.gz
tar -zxf apache-zookeeper-3.9.1-bin.tar.gz
mv apache-zookeeper-3.9.1-bin zookeeper
```

## zoo.cfg配置檔設定
建立zoo.cfg
```
cp zoo_sample.cfg zoo.cfg
```

會將zookeeper放到***/opt***，並設定zookeeper資料夾中創資料夾來存data與log。
需要設定zoo.cfg，通知zookeeper配置
```
#data與log路徑設定
dataDir=/opt/zookeeper/data
dataLogDir=/opt/zookeeper/logs

#zookeeper port預設就是2181就是了...
clientPort=2181
maxClientCnxns=60
maxSessionTimeout=30000
minSessionTimeout=30000

# zookeeper多節點配置，格式為server.myid=ip:2888:3888
# myid對應data/myid內容的值
server.0=master:2888:3888
server.1=slave:2888:3888
```

## 建資料夾

```
# /home/hadoop
mkdir zookeeper/data
mkdir zookeeper/logs
```

## 每台主機myid建立
主機1 master
```
echo 0 >> zookeeper/data/myid
```

主機2 slave
```
echo 1 >> zookeeper/data/myid
```

## 複製zookeeper到每台主機
```
# 我有跑ssh無密碼登入，沒有的話請用user@ip:路徑
scp -rq zookeeper slave:/home/hadoop/
sudo mv zookeeper /opt  
```

## 啟動zookeeper
每台主機皆跑
```
zkServer.sh start
```