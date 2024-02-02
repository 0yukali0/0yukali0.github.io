"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[78],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,u=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"pytorch/kaggle/mnist",id:"pytorch/kaggle/mnist",title:"mnist",description:"---",source:"@site/docs/pytorch/kaggle/mnist.md",sourceDirName:"pytorch/kaggle",slug:"/pytorch/kaggle/mnist",permalink:"/docs/pytorch/kaggle/mnist",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/pytorch/kaggle/mnist.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u502b\u6566\u79d1\u5b78\u8cc7\u6599\u5224\u65b7",permalink:"/docs/pytorch/kaggle/datasciencelondon"},next:{title:"\u4ecb\u7d39",permalink:"/docs/ray/train/"}},l={},c=[{value:"title: MNIST\u8863\u7269\u8cc7\u6599\u96c6\u5224\u65b7",id:"title-mnist\u8863\u7269\u8cc7\u6599\u96c6\u5224\u65b7",level:2},{value:"Pytorch\u7a0b\u5f0f",id:"pytorch\u7a0b\u5f0f",level:2}],d={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"id: mnist"),(0,a.kt)("h2",{id:"title-mnist\u8863\u7269\u8cc7\u6599\u96c6\u5224\u65b7"},"title: MNIST\u8863\u7269\u8cc7\u6599\u96c6\u5224\u65b7"),(0,a.kt)("h1",{id:"mnist"},"MNIST"),(0,a.kt)("h2",{id:"pytorch\u7a0b\u5f0f"},"Pytorch\u7a0b\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch\nfrom torch import nn\nfrom torch.utils.data import DataLoader\nfrom torchvision import datasets\nfrom torchvision.transforms import ToTensor\n\n# Download training data from open datasets.\ntraining_data = datasets.FashionMNIST(\n    root="data",\n    train=True,\n    download=True,\n    transform=ToTensor(),\n)\n\n# Download test data from open datasets.\ntest_data = datasets.FashionMNIST(\n    root="data",\n    train=False,\n    download=True,\n    transform=ToTensor(),\n)\n\nbatch_size = 64\n\n# Create data loaders.\ntrain_dataloader = DataLoader(training_data, batch_size=batch_size)\ntest_dataloader = DataLoader(test_data, batch_size=batch_size)\n\nfor X, y in test_dataloader:\n    print(f"Shape of X [N, C, H, W]: {X.shape}")\n    print(f"Shape of y: {y.shape} {y.dtype}")\n    break\n\n\n# Get cpu, gpu or mps device for training.\ndevice = (\n    "cuda"\n    if torch.cuda.is_available()\n    else "mps"\n    if torch.backends.mps.is_available()\n    else "cpu"\n)\nprint(f"Using {device} device")\n\n# Define model\nclass NeuralNetwork(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.flatten = nn.Flatten()\n        self.linear_relu_stack = nn.Sequential(\n            nn.Linear(28*28, 512),\n            nn.ReLU(),\n            nn.Linear(512, 512),\n            nn.ReLU(),\n            nn.Linear(512, 10)\n        )\n    def forward(self, x):\n        x = self.flatten(x)\n        logits = self.linear_relu_stack(x)\n        return logits\n\n\nmodel = NeuralNetwork().to(device)\nprint(model)\n\nloss_fn = nn.CrossEntropyLoss()\noptimizer = torch.optim.SGD(model.parameters(), lr=1e-3)\n\ndef train(dataloader, model, loss_fn, optimizer):\n    size = len(dataloader.dataset)\n    model.train()\n    for batch, (X, y) in enumerate(dataloader):\n        X, y = X.to(device), y.to(device)\n        # Compute prediction error\n        pred = model(X)\n        #print(len(pred), len(y))\n        loss = loss_fn(pred, y)\n        # Backpropagation\n        loss.backward()\n        optimizer.step()\n        optimizer.zero_grad()\n        if batch % 100 == 0:\n            loss, current = loss.item(), (batch + 1) * len(X)\n            print(f"loss: {loss:>7f}  [{current:>5d}/{size:>5d}]")\n\ndef test(dataloader, model, loss_fn):\n    size = len(dataloader.dataset)\n    num_batches = len(dataloader)\n    model.eval()\n    test_loss, correct = 0, 0\n    with torch.no_grad():\n        for X, y in dataloader:\n            X, y = X.to(device), y.to(device)\n            pred = model(X)\n            #print(len(pred), len(y))\n            test_loss += loss_fn(pred, y).item()\n            correct += (pred.argmax(1) == y).type(torch.float).sum().item()\n    test_loss /= num_batches\n    correct /= size\n    print(f"Test Error: \\n Accuracy: {(100*correct):>0.1f}%, Avg loss: {test_loss:>8f} \\n")\n\nepochs = 5\nfor t in range(epochs):\n    print(f"Epoch {t+1}\\n-------------------------------")\n    train(train_dataloader, model, loss_fn, optimizer)\n    test(test_dataloader, model, loss_fn)\n\nprint(model(test_dataloader.dataset.iloc[0]))\n')))}f.isMDXComponent=!0}}]);