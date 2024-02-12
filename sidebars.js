module.exports = {
  docs: {
    'Hadoop Systems': [
      {
        type: 'category',
        label: 'Hadoop',
        items: [
          'hadoop/buildhadoop',
        ]
      },
      {
        type: 'category',
        label: 'HBase',
        items: [
          'hbase/buildhbase',
        ]
      },
      {
        type: 'category',
        label: 'Ozone',
        items: [
          'ozone/buildozone',
        ]
      },
      {
        type: 'category',
        label: 'Spark',
        items: [
          'spark/pyspark',
          'spark/rrd',
          'spark/spark_mllib/mllib-linear',
        ]
      },
      {
        type: 'category',
        label: 'Zookeeper',
        items: [
          'zookeeper/buildzookeeper',
        ]
      },
    ],
    'Machine Learning': [
      {
        type: 'category',
        label: 'pytorch',
        items: [
          {
            type: 'category',
            label: 'kaggle',
            items: [
              'pytorch/kaggle/cancer',
              'pytorch/kaggle/datasciencelondon',
              'pytorch/kaggle/mnist',
            ]
          },
          {
            type: 'category',
            label: 'lightning',
            items: [
              'pytorch/lightning/mnist',
            ]
          },
        ]
      },
      {
        type: 'category',
        label: 'ray',
        items: [
          {
            type: 'category',
            label: 'train',
            items: [
              'ray/train/ray_overview_train',
              'ray/train/ray_train_framework',
              {
                type: 'category',
                label: 'kaggle',
                items: [
                  'ray/train/kaggle/cancerwithray',
                  'ray/train/kaggle/datasciencelondonwithray',
                ]
              },
            ]
          }
        ]
      }
    ]
  },
};
