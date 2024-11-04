# 公共函数

:::tip 公共函数说明
`公共函数` 是设计器中的一项关键功能，它能让开发者提供一些预设方法函数给设计器使用。用户可以通过公共函数在给设计器预设方法函数，在设计器中可以通过动作配置选择使用预设的方法函数，或者在自定义函数中进行编码使用，比如预设获取路由实例或者用户状态之类hooks函数。
:::

参考demo仓库： [https://gitee.com/kcz66/epic-designer-demo](https://gitee.com/kcz66/epic-designer-demo)

## 公共函数扩展示例

在src目录下新建designer-extensions 文件目录，下面是一个简单扩展示例

### 新建 designer-extensions/script/index.ts

> 通过`pluginManager`对象的`addPublicMethod`方法添加公共函数

```ts
import { pluginManager, type PublicMethodModel } from 'epic-designer'

const methodItem: PublicMethodModel = {
    name: "myFun",
    handler: ()=>{
        alert('myFun 被调用了')
    },
    describe: "这是一个测试函数描述"
}


export function setupPublicMethod(): void {
  pluginManager.addPublicMethod(methodItem)  
}
```

### 新建designer-extensions/index.ts(扩展函数)

```ts
import { setupPublicMethod } from './script/index'

// 安装扩展
export function setupDesignerExtensions(): void {
	setupPublicMethod()
}
```

### main.ts 添加执行扩展函数

```ts
import { setupDesignerExtensions } from "./designer-extensions";

// 执行扩展函数
setupDesignerExtensions();
```
