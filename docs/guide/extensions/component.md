# 组件扩展

:::tip 组件扩展
`pluginManager` 提供了registerComponent方法添加组件
:::

参考demo仓库： [https://gitee.com/kcz66/k-designer-demo](https://gitee.com/kcz66/k-designer-demo)

## 普通组件扩展

在src目录下新建designer-extensions 文件目录，下面是一个简单扩展示例

## 新建 designer-extensions/test/index.vue（组件）

```vue
<template>
  <div>
  	我是扩展的组件
  </div>
</template>
```

## 新建designer-extensions/test/index.ts(组件配置文件)

[ComponentConfigModel 配置字段类型](#componentconfigmodel-类型及字段注释)

```ts
import { type ComponentConfigModel } from 'epic-designer'

export default {
  component: async () => await import('./cmp.vue'),
  groupName:"自定义组件",
  icon: "epic-icon-write",
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

## 新建designer-extensions/index.ts(扩展函数)
```ts
import { pluginManager } from "epic-designer";
import Test from "./Test";

// 安装扩展
export function setupDesignerExtensions(): void {

     // 注册组件
     pluginManager.registerComponent(Test);
}
```
## main.ts 添加执行扩展函数

```ts
import { setupDesignerExtensions } from "./designer-extensions";

// 执行扩展函数
setupDesignerExtensions();
```



## ComponentConfigModel 类型及字段注释

```
export interface EditConstraintsModel {
   // 当前组件是否固定不可拖动，可选
   immovable?: boolean;
   // 子节点是否固定不可拖动,只控制下一级，可选
   childImmovable?: boolean;
   // 表单字段是否固定 不添加随机UUID
   fixedField?: boolean;
}
  
export interface ComponentConfigModel {
  // 组件
  component: any;
  // 分组名称（组件分组），不设置分组时仅注册，但不会显示在组件列表中，可选
  groupName?: string;
  // 组件图标
  icon?: string;
  // 默认组件结构数据
  defaultSchema: ComponentSchema;
  // 设计编辑约束
  editConstraints?: EditConstraintsModel;
  // 配置
  config: {
    // 属性编辑列表
    attribute?: ComponentSchema[];
    // 样式编辑组件列表
    style?: ComponentSchema[];
    // 可触发事件
    event?: EventModel[];
    // 可执行函数
    action?: ActionModel[];
  };
  // 输入表单组件v-model绑定变量名称 默认 modelValue
  bindModel?: string;
  // 用于组件排序，可选 默认值1000, 值越小，组件越靠前
  sort?: number;
}
```

