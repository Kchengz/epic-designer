# 组件扩展

:::tip 组件扩展
`pluginManager` 提供了registerComponent方法添加组件
:::

参考demo仓库： [https://gitee.com/kcz66/epic-designer-demo](https://gitee.com/kcz66/epic-designer-demo)

## 组件注册示例

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
  component: async () => await import('./index.vue'),
  groupName:"自定义组件",
  icon: "epic-icon-write",
  defaultSchema: {
    label: '测试扩展组件',
    type: 'test',
    props: {
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
     pluginManager.component.register(Test);
}
```
## main.ts 添加执行扩展函数

```ts
import { setupDesignerExtensions } from "./designer-extensions";

// 执行扩展函数
setupDesignerExtensions();
```

## 注册函数说明

类型：`(componentConfig: ComponentConfigModel) => void`

说明：注册组件到插件管理器中

参数：

- `componentConfig`: 组件配置对象，包含以下属性：
  - `component`: 组件本身，可以是Vue组件、异步组件加载函数或字符串组件名
  - `bindModel`: 输入表单组件v-model绑定变量名称，默认 `modelValue`
  - `groupName`: 分组名称（组件分组），不设置分组时仅注册，但不会显示在组件列表中，可选
  - `icon`: 组件图标，可选
  - `sort`: 用于组件排序，可选 默认值1000, 值越小，组件越靠前
  - `defaultSchema`: 默认组件结构数据，用于拖入画布时的初始数据
  - `editConstraints`: 设计编辑约束，用于限制组件在设计器中的操作
  - `config`: 组件配置，包含属性编辑、事件、样式和可执行函数等
    - `attribute`: 属性编辑列表，用于在属性面板中配置组件属性
    - `event`: 可触发事件列表，用于在事件面板中配置组件事件
    - `style`: 样式编辑组件列表，用于在样式面板中配置组件样式
    - `action`: 可执行函数列表，用于在动作面板中配置组件的可执行函数

示例：

```ts
import { pluginManager,type ComponentConfigModel } from 'epic-designer'

const Test = {
  // 组件，可以是异步加载函数
  component: () => import('./cmp.vue'),
  // v-model绑定变量名称，默认modelValue
  bindModel: 'value',
  // 分组名称，组件会显示在该分组下
  groupName: '自定义组件',
  // 组件图标
  icon: 'epic-icon-write',
  // 组件排序，值越小越靠前
  sort: 900,
  // 默认组件结构数据
  defaultSchema: {
    label: '测试扩展组件',
    type: 'test',
    props: {
      // 组件默认属性
    }
  },
  // 设计编辑约束
  editConstraints: {
    // 当前组件是否固定不可拖动
    immovable: false,
    // 子节点是否固定不可拖动
    childImmovable: false,
    // 表单字段是否固定 不添加随机UUID
    fixedField: false
  },
  // 组件配置
  config: {
    // 属性编辑列表
    attribute: [
      {
        label: '属性1',
        type: 'input',
        field: 'name',
        // 属性默认值
        value: '默认值'
      },
      {
        label: '属性2',
        type: 'select',
        field: 'type',
        options: [
          { label: '选项1', value: 'option1' },
          { label: '选项2', value: 'option2' }
        ]
      }
    ],
    // 事件列表
    event: [
      {
        type: 'change',
        description: '值改变时触发'
      },
      {
        type: 'click',
        description: '点击时触发'
      }
    ],
    // 样式编辑列表
    style: [
      {
        label: '宽度',
        type: 'input',
        field: 'width',
        value: '100%'
      },
      {
        label: '高度',
        type: 'input',
        field: 'height',
        value: '40px'
      }
    ],
    // 可执行函数列表
    action: [
      {
        type: 'reset',
        description: '重置组件',
        args: ['参数1', '参数2'],
        argsConfigs: [
          {
            label: '参数1',
            type: 'input',
            field: 'arg1'
          }
        ]
      }
    ]
  }
}

// 注册组件
pluginManager.component.register(Test);
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

