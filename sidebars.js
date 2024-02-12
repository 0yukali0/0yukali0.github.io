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
          'spark/pysspark',
          'spark/rrd',
          'spark/spark_mllib/linear_method',
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
              'ray/train/train_overview',
              'ray/train/train_framework',
              'ray/train/train',
              {
                type: 'category',
                label: 'kaggle',
                items: [
                  'ray/train/kaggle/cancer',
                  'ray/train/kaggle/datasciencelondon',
                ]
              },
            ]
          }
        ]
      }
    ]
  },
};
