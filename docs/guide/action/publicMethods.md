## 公共函数

:::tip 公共函数说明
`公共函数` 是设计器中的一项关键功能，它能让开发者提供一些预设方法函数给设计器使用。用户可以通过公共函数在给设计器预设方法函数，在设计器中可以通过动作配置选择使用预设的方法函数，或者在自定义函数中进行编码使用，比如预设获取路由实例或者用户状态之类hooks函数。
:::



## 添加公共函数

> 通过pluginManager对象的addPublicMetho方法添加公共函数

```ts
import { pluginManager, type MethodModel } from 'epic-designer'

const methodItem:MethodModel = {
    methodName: "myFun",
    method: ()=>{
        alert('myFun 被调用了')
    },
    describe: "这是一个测试函数描述"
}
pluginManager.addPublicMethod(methodItem)
```
