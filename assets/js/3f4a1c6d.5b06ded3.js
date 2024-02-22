"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[51],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,u=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return t?r.createElement(u,i(i({ref:n},d),{},{components:t})):r.createElement(u,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={id:"datasciencelondonwithray",title:"Ray\u5206\u6563\u5f0f\u8a13\u7df4-DataScienceLondon"},i="DataScienceLondon",l={unversionedId:"AI/framework/ray/train/kaggle/datasciencelondonwithray",id:"AI/framework/ray/train/kaggle/datasciencelondonwithray",title:"Ray\u5206\u6563\u5f0f\u8a13\u7df4-DataScienceLondon",description:"\u8cc7\u6599\u4f86\u6e90",source:"@site/docs/AI/framework/ray/train/kaggle/datasciencelondonwithray.md",sourceDirName:"AI/framework/ray/train/kaggle",slug:"/AI/framework/ray/train/kaggle/datasciencelondonwithray",permalink:"/docs/AI/framework/ray/train/kaggle/datasciencelondonwithray",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/AI/framework/ray/train/kaggle/datasciencelondonwithray.md",tags:[],version:"current",frontMatter:{id:"datasciencelondonwithray",title:"Ray\u5206\u6563\u5f0f\u8a13\u7df4-DataScienceLondon"},sidebar:"tutorialSidebar",previous:{title:"Ray\u5206\u6563\u5f0f\u8a13\u7df4-\u764c\u75c7\u7d30\u80de\u8a3a\u65b7",permalink:"/docs/AI/framework/ray/train/kaggle/cancerwithray"},next:{title:"Ray Train\u652f\u63f4\u4e4bframework",permalink:"/docs/AI/framework/ray/train/ray_train_framework"}},c={},s=[{value:"\u8cc7\u6599\u4f86\u6e90",id:"\u8cc7\u6599\u4f86\u6e90",level:2},{value:"\u7a0b\u5f0f\u78bc",id:"\u7a0b\u5f0f\u78bc",level:2}],d={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"datasciencelondon"},"DataScienceLondon"),(0,a.kt)("h2",{id:"\u8cc7\u6599\u4f86\u6e90"},"\u8cc7\u6599\u4f86\u6e90"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"train.csv"),"\u8207",(0,a.kt)("inlineCode",{parentName:"p"},"trainLabels.csv"),"\u4f5c\u70baX\u8207Y\u3002\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("a",{parentName:"em",href:"https://www.kaggle.com/c/data-science-london-scikit-learn/data"},"https://www.kaggle.com/c/data-science-london-scikit-learn/data")))),(0,a.kt)("h2",{id:"\u7a0b\u5f0f\u78bc"},"\u7a0b\u5f0f\u78bc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch\nfrom torch import nn\nfrom torch.utils.data import Dataset\nfrom torch.utils.data import DataLoader\nimport pandas as pd\n\nclass CustomDataloader(Dataset):\n    def __init__(self, x, y):\n        self.dataset = x\n        self.labels = y\n    def __len__(self):\n        return len(self.labels)\n    def __getitem__(self, idx):\n        x = self.dataset.iloc[idx]\n        y = self.labels.iloc[idx, 0]\n        return torch.tensor(x.values).float(), torch.tensor([y]).float()\n\ndef createTrainDataset():\n    train_x = pd.read_csv("train.csv")\n    train_y = pd.read_csv("trainLabels.csv")\n    return CustomDataloader(x=train_x, y=train_y)\n\nclass NeuralNetwork(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.linear_relu_stack = nn.Sequential(\n            nn.Linear(40, 40),\n            nn.ReLU(),\n            nn.Linear(40, 40),\n            nn.ReLU(),\n            nn.Linear(40, 1),\n            nn.Sigmoid(),\n        )\n    def forward(self, x):\n        return self.linear_relu_stack(x)\n\ndef train(dataloader, model, criterion, optimizer):\n    for epoch in range(5):\n        for X, y in dataloader:\n            model.train()\n            optimizer.zero_grad()\n            X, y = X.to(device), y.to(device)\n            pred = model(X)\n            loss = criterion(pred, y)\n            loss.backward()\n            optimizer.step()\n        print(f"epoch: {epoch}, loss: {loss.item()}")\n\ndevice = (\n    "cuda"\n    if torch.cuda.is_available()\n    else "cpu"\n)\n\nmodel = NeuralNetwork().to(device)\ncriterion = nn.BCELoss()\noptimizer = torch.optim.SGD(model.parameters(), lr=1e-3)\ndataloader = DataLoader(createTrainDataset(), batch_size)\ntrain(dataloader, model, criterion, optimizer)\n')))}f.isMDXComponent=!0}}]);