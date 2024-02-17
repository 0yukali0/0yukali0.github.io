---
id: rrd
title: spark-RRD
---

<!--
author: yuteng chen
date: 2023/05/13
-->

# Resilient Distributed Datasets (RRDs)

## 如何引用
***SparkConf***為配置檔，透過setAppName與setMaster來設定應用名稱與部屬模式。
隨後將SparkConf丟入***JavaSparkContext***中，建立spark session。
```
import org.apache.spark.SparkConf; 
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.JavaRDD;

SparkConf conf = new SparkConf().setAppName("My first spark app").setMaster("local");
JavaSparkContext sc = new JavaSparkContext(conf);
```
將資料引入後轉化為***JavaRDD***，情況分別為Parallelized Collections與External Datasets。
### Parallelized Collections
Parallelized Collections:透過spark的JavaSparkContext(也就是spark session)，將Java原生資料轉化為JavaRDD。
```
List<Integer> data = Array.asList(1, 2, 3, 4, 5);
JavaRDD<Integer> distData = sc.paralleize(data);
```

### External Datasets
External Datasets:透過spark的JavaSparkContext(也就是spark session)之textFile方法讀取。
該方法支援與Hadoop相同，如local, HDFS(hdfs://your/file/path), HBase, Amazon S3(s3a://your/s3/file/path)。
```
JavaRDD<String> distFile = sc.textFile("data.txt");
```
## RDD 操作
RRD操作分兩種，transformation產生新的Dataset，actions則返回值。
transformation為lazy，不會立即計算，直到要求結果的當下。
```
// 1.Create data myself
List<Integer> data = Arrays.asList(1, 2, 3, 4, 5);
JavaRDD<Integer> distData = sc.parallelize(data);

// 2.Read data from file in spark exmaples
JavaRDD<String> lines = sc.textFile("/opt/spark/examples/src/main/resources/employees.json");
JavaRDD<Integer> distData = lines.map(s -> s.length());

int total = distData.reduce((a,b) -> a + b);
System.out.println("Sum:" + total);
```
### 自訂資料處理函數於spark
 Spark的map、reduce等處裡資料的流程，需要使用者定義函數以處裡資料。
 一種是將定義好的實作org.apache.spark.api.java.function的class傳遞給spark。
 ```
 class GetLength implements Function<String, Integer> {
    public Integer call(String s) {return s.length();}
 }
 JavaRDD<Integer> distData = lines.map(new GetLength());
 ```

 一種則用lambda。
 ```
 JavaRDD<Integer> distData = lines.map(new Function<String, Integer>() {
     public Integer call(String s) {return s.length();}
 });
 ```