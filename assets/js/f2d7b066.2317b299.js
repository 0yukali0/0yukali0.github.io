"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[69],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={id:"cancerwithray",title:"Ray\u5206\u6563\u5f0f\u8a13\u7df4-\u764c\u75c7\u7d30\u80de\u8a3a\u65b7"},o="Cancer",l={unversionedId:"ray/train/kaggle/cancerwithray",id:"ray/train/kaggle/cancerwithray",title:"Ray\u5206\u6563\u5f0f\u8a13\u7df4-\u764c\u75c7\u7d30\u80de\u8a3a\u65b7",description:"Kaggle URL",source:"@site/docs/ray/train/kaggle/cancerwithray.md",sourceDirName:"ray/train/kaggle",slug:"/ray/train/kaggle/cancerwithray",permalink:"/docs/ray/train/kaggle/cancerwithray",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/ray/train/kaggle/cancerwithray.md",tags:[],version:"current",frontMatter:{id:"cancerwithray",title:"Ray\u5206\u6563\u5f0f\u8a13\u7df4-\u764c\u75c7\u7d30\u80de\u8a3a\u65b7"},sidebar:"tutorialSidebar",previous:{title:"mnist",permalink:"/docs/python/pytorch/lightning/mnist"},next:{title:"Ray\u5206\u6563\u5f0f\u8a13\u7df4-DataScienceLondon",permalink:"/docs/ray/train/kaggle/datasciencelondonwithray"}},c={},s=[{value:"Kaggle URL",id:"kaggle-url",level:2},{value:"Ray\u7a0b\u5f0f\u78bc",id:"ray\u7a0b\u5f0f\u78bc",level:2}],d={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cancer"},"Cancer"),(0,a.kt)("h2",{id:"kaggle-url"},"Kaggle URL"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("a",{parentName:"em",href:"https://www.kaggle.com/datasets/erdemtaha/cancer-data/data"},"https://www.kaggle.com/datasets/erdemtaha/cancer-data/data")))),(0,a.kt)("h2",{id:"ray\u7a0b\u5f0f\u78bc"},"Ray\u7a0b\u5f0f\u78bc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch\nfrom torch import nn\nfrom torch.utils.data import Dataset\nfrom torch.utils.data import DataLoader\n\nimport pandas as pd\n\nclass CustomDataset(Dataset):\n    def __init__(self, x, y):\n        self.dataset = x\n        self.labels = y\n    def __len__(self):\n        return len(self.labels)\n    def __getitem__(self, idx):\n        x = self.dataset.iloc[idx]\n        y = self.labels.iloc[idx]\n        return torch.tensor(x.values).float(), torch.tensor([y]).float()\n\ndef CreateDataset(path="/home/user/camcer/Cancer_Data.csv"):\n    df = pd.read_csv(path)\n    df = df.loc[:, ~df.columns.str.contains(\'^Unnamed\')]\n    x = df.iloc[: ,2:].astype("float")\n    df["diagnosis"] = df["diagnosis"].apply(lambda x: 1 if x == \'M\' else 0)\n    y = df["diagnosis"].astype("int")\n    dataset = CustomDataset(x=x, y=y)\n    return dataset\n\nclass NeuralNetwork(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.linear_relu_stack = nn.Sequential(\n            nn.Linear(30, 40),\n            nn.ReLU(),\n            nn.Linear(40, 40),\n            nn.ReLU(),\n            nn.Linear(40, 40),\n            nn.ReLU(),\n            nn.Linear(40, 1),\n            nn.Sigmoid(),\n        )\n    def forward(self, x):\n        return self.linear_relu_stack(x)\n\ndef train(epoch, device, dataloader, model, criterion, optimizer):\n    for epoch in range(epoch):\n        for X, y in dataloader:\n            model.train()\n            optimizer.zero_grad()\n            X, y = X.to(device), y.to(device)\n            pred = model(X)\n            loss = criterion(pred, y)\n            loss.backward()\n            optimizer.step()\n        metrics = {"loss": loss.item(), "epoch": epoch}\n        if ray.train.get_context().get_world_rank() == 0:\n            print(metrics)\n\nimport ray.train.torch\ndef train_func(config):\n    batch_size = 64\n    device = (\n        "cuda"\n        if torch.cuda.is_available()\n        else "cpu"\n    )\n    model = NeuralNetwork().to(device)\n    criterion = nn.BCELoss()\n    optimizer = torch.optim.SGD(model.parameters(), lr=1e-3)\n\n    dataset = CreateDataset()\n    dataloader = DataLoader(dataset, batch_size)\n\n    model = ray.train.torch.prepare_model(model)\n    dataloader = ray.train.torch.prepare_data_loader(dataloader)\n\n    train(10, device, dataloader, model, criterion, optimizer)\n\nscaling_config = ray.train.ScalingConfig(num_workers=4, use_gpu=False)\ntrainer = ray.train.torch.TorchTrainer(\n    train_func,\n    scaling_config=scaling_config,\n)\nresult = trainer.fit()\n')))}f.isMDXComponent=!0}}]);