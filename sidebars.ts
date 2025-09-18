import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'english',
      items: ['english/opinion_write'],
    },
    {
      type: 'category',
      label: 'ray',
      items: ['kubernetes-native/mlops/ray/core/ray_core_concept'],
    },
    {
      type: 'category',
      label: 'flyte',
      items: ['kubernetes-native/mlops/flyte/flyte_concept'],
    },
    {
      type: 'category',
      label: 'leetcode',
      items: [
        "leetcode/203/leetcode_202",
      ],
    },
  ]
};

export default sidebars;
