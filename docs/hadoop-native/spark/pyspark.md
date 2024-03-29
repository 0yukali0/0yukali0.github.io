---
id: pyspark
title: pyspark
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# DataFrame
## spark SQL初始化
Spark的dataframe定義於pyspark.sql的SparkSession。
可以想成sql跟dataframe都是表格，所以被內涵在sql這樣。
```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.getOrCreate()
```
## 三種Dataframe初始化來源
### Tuples
```
from datatime import datetime, datetime
df = spark.createDataFrame([
    (1, 2., 'string1', date(2000, 1 ,1), datetime(2000, 1, 1, 12, 0)),
    (3, 4., 'string2', date(2000, 2 ,1), datetime(2000, 1, 2, 12, 0)),
    (5, 6., 'string3', date(2000, 3 ,1), datetime(2000, 1, 3, 12, 0)),
], schema='a long, b double, c string, d date, e timestamp')
```
### pandas
```python
from datetime import datetime, date
import pandas as pd
pandas_df = pd.DataFrame({
    'a' : [1, 2, 3],
    'b' : [2., 3., 4.],
    'c' : ['string1', 'string2', 'string3'],
    'd' : [date(2000, 1, 1), date(2000, 2, 1), date(2000, 3, 1)],
    'e' : [datetime(2000, 1, 1, 12, 0), datetime(2000, 1, 2, 12, 0), datetime(2000, 1, 3, 12, 0)]
})
df = spark.createDataFrame(pandas_df)
```
### sparksql
```python
from datetime import datetime, date
from pyspark.sql import Row
df = spark.createDataFrame([
    Row(a=1, b=2., c='string1', d=date(2000, 1, 1), e=datetime(2000, 1, 1, 12, 0)),
    Row(a=2, b=3., c='string2', d=date(2000, 2, 1), e=datetime(2000, 1, 2, 12, 0)),
    Row(a=4, b=5., c='string3', d=date(2000, 3, 1), e=datetime(2000, 1, 3, 12, 0))
])
```


# Spark connect

# Pandas API on Spark

# Testing Pyspark
