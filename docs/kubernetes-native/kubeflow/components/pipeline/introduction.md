---
id: pipelineSDKIntro
title: 常用Kubeflow SDK介紹
---

# Kubeflow SDK
Kubelow SDK(也就是`kfp`，kubeflow pipeline縮寫)預設以`argo workflow`協作，用以描述由多個`components`所組成之`pipeline`，各`components`之間先後與互動關係。
## fkp介紹
### kfp.compiler
* `kfp.compiler.Compiler.compile`負責將相應Python DSL程式碼轉化為workflow Pipeline之yaml配置檔。
### kfp.components
Pipeline是一步一步執行`ContainerOp`。<br/>
為了產生這些`ContainerOp`，提供Python code、本地yaml檔與網站yaml檔。
* `kfp.components.func_to_container_op`
* `kfp.components.load_component_from_file`
* `kfp.components.load_component_from_url`
### kfp.dsl
* `kfp.dsl.PipelineParam`為Pipeline的step型態，包含pipeline、component與python_component等裝飾子
* `kfp.dsl.pipeline`裝飾子
* `kfp.dsl.component`裝飾子
* `kfp.dsl.python_component`裝飾子
* `kfp.dsl.types`
* `kfp.dsl.ResourceOp`
* `kfp.dsl.VolumeOp`
* `kfp.dsl.VolumeSnapshotOp`
* `kfp.dsl.ParallelFor`
* `kfp.dsl.ExitHandler`
* `kfp.dsl.Condition`
### kfp.Client
建立Experiment環境，並運行pipeline。
* `kfp.Client.create_experiment`
* `kfp.Client.run_pipeline`
* `kfp.Client.create_run_from_pipeline_func`
* `kfp.Client.create_run_from_pipeline_package`
* `kfp.Client.upload_pipeline`
* `kfp.Client.upload_pipeline_version`