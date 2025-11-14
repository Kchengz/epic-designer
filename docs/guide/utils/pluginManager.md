# pluginManager 插件管理器

:::tip 插件管理器
`pluginManager` 是用于管理扩展组件，模块功能的管理器对象

:::

## Methods

#### registerComponent

类型：`(componentConfig: ComponentConfigModel) => void`

说明：注册组件到插件管理器中

示例：
```ts
import { pluginManager,type ComponentConfigModel } from 'epic-designer'

const Test = {
  component: () => import('./cmp.vue'),
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
}

// 注册组件
pluginManager.registerComponent(Test);
```

在同级目录下创建cmp.vue 

```vue
<template>
  <div>
  	我是扩展的组件
  </div>
</template>
```


#### getComponentConfigs

类型：`() => ComponentConfigModelRecords`

说明：获取所有插件管理中的所有组件配置

示例：

```tsx
import { pluginManager } from 'epic-designer'

const componentConfigs = pluginManager.getComponentConfigs();
```





#### getComponentConfigByType

类型：`(type: string) => ComponentConfigModel`

说明：通过type获取组件配置

示例：

```tsx
import { pluginManager } from 'epic-designer'

// 获取input组件的注册配置
const componentConfig = pluginManager.getComponentConfigByType('input');
```



#### getComponents

类型：`() => Components`

说明：获取已注册的组件

示例：

```tsx
import { pluginManager } from 'epic-designer'

const components = pluginManager.getComponents();
```



#### getComponent

类型：`(type: string) => any`

说明：通过类型获取的组件

示例：

```tsx
import { pluginManager } from 'epic-designer'

const components = pluginManager.getComponent('input');
```



#### registerActivitybar

类型：`(activitybar: ActivitybarModel) => void`

说明：注册活动栏

示例：

```
import { pluginManager } from 'epic-designer'

 pluginManager.panel.registerActivitybar({
 	// 组件路径 ./index.vue 根据实际情况修改
    component: () => import('./index.vue'),
    // icon图标配置
    icon: 'icon--epic--extension-outline',
    // 活动栏ID 唯一值, 相同的ID 后面注册的配置会覆盖前面的数据
    id: 'component_view',
    // 排序,值越小越靠前
    sort: 100,
    // 标题
    title: '组件',
  });
```



#### getActivitybars

类型：`() => ActivitybarModel[]`

说明：获取所有已注册活动栏配置



#### hideActivitybar

类型：`(value: string, attr?: string)=> void`

说明：隐藏活动栏



#### showActivitybar

类型：`(value: string, attr?: string)=> void`

说明：显示活动栏



#### registerRightSidebar

类型：`(rightSidebar: RightSidebarModel) => void`

说明：注册右侧栏



#### getRightSidebars

类型：`() => RightSidebarModel[]`

说明：获取所有已注册右侧栏配置



#### hideRightSidebar

类型：`(value: string, attr?: string)=> void`

说明：隐藏右侧栏



#### showRightSidebar

类型：`(value: string, attr?: string)=> void`

说明：显示右侧栏



#### ~~setComponentGroup~~(v0.9.1已删除)

类型：`(componentGroup: ComponentGroupItem[]) => void`

说明：设置分组,这个操作将会覆盖原来的数据



#### ~~addComponentGroup~~(v0.9.1已删除)

类型：`(componentGroupItem: ComponentGroupItem) => void`

说明：添加分组

#### setComponentGroupNameMap

类型：`(groupName: string, mapName: string) => void`

说明：设置组件分组名称到映射名称的关系

#### clearComponentGroupNameMap

类型：`() => void`

说明：清空组件分组名称到映射名称的关系

#### setSortedGroups

类型：`(sortedGroups: string[]) => void`

说明：设置组件分组的排序

#### clearSortedGroups

类型：`() => void`

说明：清空组件分组的排序

#### hideComponent

类型：`(type: string) => void`

说明：添加需要隐藏的组件类型

#### showComponent

类型：`(type: string) => void`

说明：移除需要隐藏的组件类型

#### setHideComponents

类型：`(types: string[]) => void`

说明：设置需要隐藏的组件类型数组

#### addPublicMethod

类型：`(method: MethodModel) => void`

说明：添加公共方法

#### removePublicMethod

类型：`(methodName: string) => void`

说明：移除公共方法

#### setGlobal

类型：`(methodName: string) => void`

说明：设置全局属性







