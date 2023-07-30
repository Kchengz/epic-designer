## 组件扩展

:::tip 组件扩展
`pluginManager` 提供了registerComponent方法添加组件
:::

参考demo仓库： [https://gitee.com/kcz66/k-designer-demo](https://gitee.com/kcz66/k-designer-demo)

## 普通组件扩展

在src目录下新建designer-extensions 文件目录，下面是一个简单扩展示例

### 新建 designer-extensions/test/index.vue（组件）

```vue
<template>
  <div>
  	我是扩展的组件
  </div>
</template>
```

### 新建designer-extensions/test/index.ts(组件配置文件)

```ts
import { type ComponentConfigModel } from 'epic-designer'

export default {
  component: async () => await import('./cmp.vue'),
  defaultSchema: {
    label: '测试扩展组件',
    type: 'test',
    componentProps: {
    }
  },
  config: {
    attribute: [
      {
        label: '属性1',
        type: 'input',
        field: 'name'
      }
    ]
  }
} as ComponentConfigModel
```

### 新建designer-extensions/index.ts(扩展函数)
```ts
import { type PluginManager } from "epic-designer";
import Test from "./Test";

// 安装扩展
export function setupDesignerExtensions(pluginManager: PluginManager): void {

     // 注册组件
     pluginManager.registerComponent(Test);

     // 添加到页面左侧组件区域
     pluginManager.addSchemaGroup({
          title: "自定义",
          list: ["test"],
     });
}
```
### main.ts 添加执行扩展函数

```ts
import { setupDesignerExtensions } from "./designer-extensions";
import { pluginManager } from "epic-designer";
// 执行扩展函数
setupDesignerExtensions(pluginManager);
```

