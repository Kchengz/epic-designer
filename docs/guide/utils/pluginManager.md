# pluginManager 插件管理器



:::tip 插件管理器

插件管理器是 Epic Designer 的核心组件，负责管理设计器中的组件、面板和公共方法。它提供了一套完整的 API 来注册、查询、隐藏/显示各种设计器元素。
:::
:::warning 版本更新提示
从 v1.1.0 版本开始，相关功能分别被组织到 `component`、`panel`、`publicMethods` 对象中，推荐使用新的访问方式 `pluginManager.component.*`、`pluginManager.panel.*`、`pluginManager.publicMethods.*`。大部分原有的直接访问方式（如 `pluginManager.registerActivitybar`）仍可正常工作，但会收到迁移警告，建议尽快迁移到新 API 以避免未来版本中的兼容性问题。

#### 以下API无法兼容旧版，请迁移到新 API。
- `pluginManager.component` → `pluginManager.publicMethods.add`
- `pluginManager.publicMethods` → `pluginManager.publicMethods.methodsMap`


### 主要变更内容：
#### 组件管理相关
- `pluginManager.registerComponent` → `pluginManager.component.register`
- `pluginManager.component` → `pluginManager.component.add`
- `pluginManager.removeComponent` → `pluginManager.component.remove`
- `pluginManager.getComponent` → `pluginManager.component.get`
- `pluginManager.getComponentConfigs` → `pluginManager.component.getComponentConfigs`
- `pluginManager.getComponents` → `pluginManager.component.getComponents`
- `pluginManager.getComponentSchemaGroups` → `pluginManager.component.getComponentSchemaGroups`
- `pluginManager.getComponentConfigByType` → `pluginManager.component.getConfigByType`
- `pluginManager.getIcon` → `pluginManager.component.getIcon`
- `pluginManager.getLabel` → `pluginManager.component.getLabel`
- `pluginManager.hideComponent` → `pluginManager.component.hide`
- `pluginManager.showComponent` → `pluginManager.component.show`
- `pluginManager.setHideComponents` → `pluginManager.component.hideComponents`
- `pluginManager.setComponentGroupNameMap` → `pluginManager.component.setGroupNameMap`
- `pluginManager.clearComponentGroupNameMap` → `pluginManager.component.clearGroupNameMap`
- `pluginManager.setSortedGroups` → `pluginManager.component.setSortedGroups`
- `pluginManager.clearSortedGroups` → `pluginManager.component.clearSortedGroups`

#### 面板管理相关
- `pluginManager.registerActivitybar` → `pluginManager.panel.registerActivitybar`
- `pluginManager.registerRightSidebar` → `pluginManager.panel.registerRightSidebar`
- `pluginManager.hideActivitybar` → `pluginManager.panel.hideActivitybar`
- `pluginManager.showActivitybar` → `pluginManager.panel.showActivitybar`
- `pluginManager.hideRightSidebar` → `pluginManager.panel.hideRightSidebar`
- `pluginManager.showRightSidebar` → `pluginManager.panel.showRightSidebar`
- `pluginManager.activityBars` → `pluginManager.panel.activityBars`
- `pluginManager.rightSidebars` → `pluginManager.panel.rightSidebars`

#### 公共方法相关
- `pluginManager.publicMethods` → `pluginManager.publicMethods.methodsMap`
- `pluginManager.addPublicMethod` → `pluginManager.publicMethods.add`
- `pluginManager.removePublicMethod` → `pluginManager.publicMethods.remove`
:::


## 使用方式

```ts
import { pluginManager } from 'epic-designer';
```

## API 文档

### component - 组件管理

组件管理模块提供组件的注册、查询、显示控制等功能。

#### 组件管理
- **`register`** - 注册组件配置到管理器
- **`add`** - 添加组件到管理器
- **`remove`** - 移除指定组件

#### 查询组件
- **`get`** - 根据类型获取组件
- **`getComponentConfigs`** - 获取所有组件配置
- **`getComponents`** - 获取所有组件
- **`getComponentSchemaGroups`** - 获取组件模式分组
- **`getConfigByType`** - 根据类型获取组件配置
- **`getIcon`** - 获取组件图标
- **`getLabel`** - 获取组件标签

#### 显示控制
- **`hide`** - 隐藏指定组件
- **`show`** - 显示指定组件
- **`hideComponents`** - 批量设置隐藏组件

#### 分组管理
- **`setGroupNameMap`** - 设置组件分组名称映射
- **`clearGroupNameMap`** - 清空组件分组名称映射
- **`setSortedGroups`** - 设置组件分组排序
- **`clearSortedGroups`** - 清空组件分组排序

#### 属性数据

- **`componentConfigs`** - 组件配置记录字典
- **`componentGroupNameMap`** - 组件分组名称映射
- **`components`** - 组件对象字典
- **`componentSchemaGroups`** - 组件模式分组
- **`hiddenComponents`** - 隐藏的组件列表
- **`sortedGroups`** - 组件分组排序列表

### panel - 面板管理

面板管理模块负责活动栏和右侧边栏的注册和控制。

#### 面板管理
- **`registerActivitybar`** - 注册活动栏
- **`registerRightSidebar`** - 注册右侧边栏
- **`hideActivitybar`** - 隐藏活动栏
- **`hideRightSidebar`** - 隐藏右侧边栏
- **`showActivitybar`** - 显示活动栏
- **`showRightSidebar`** - 显示右侧边栏

#### 属性数据
- **`activityBars`** - 活动栏列表
- **`rightSidebars`** - 右侧边栏列表

### publicMethods - 公共方法

公共方法模块用于管理全局可调用的方法。

#### 方法管理
- **`add`** - 添加公共方法
- **`remove`** - 移除公共方法

#### 属性数据
- **`methodsMap`** - 公共方法映射字典

### global - 全局上下文

全局上下文模块提供应用级别的共享配置、服务、工具函数和状态管理，用于在组件间共享公共资源和配置信息。

#### 配置
- **`axiosConfig.headers`** - 请求头配置
- **`uploadFile`** - 文件上传地址
- **`uploadImage`** - 图片上传地址


## 组件管理示例

### 注册组件 register

```ts
pluginManager.component.register({
  defaultSchema: {
    type: 'custom-component',
    label: '自定义组件',
    icon: 'custom-icon'
  },
  component: CustomComponent,
  config: {
    attribute: [],
    action: []
  }
});
```

> 以上仅是简单的注册示例，详情请参考[自定义组件文档](/guide/extensions/component.html)

### 添加组件 add

添加组件到管理器，通常用于添加属性编辑组件，这种方式不需要编写复杂的组件配置

```ts

pluginManager.component.add('custom-component', CustomComponent);
```

### 移除组件 remove

从管理器中完全移除指定组件

```ts
// 移除指定组件
pluginManager.component.remove('custom-component');
```

### 获取组件 get

根据组件类型获取对应的组件

```ts
// 获取 input 组件
const inputComponent = pluginManager.component.get('input');

// 获取 button 组件
const buttonComponent = pluginManager.component.get('button');

// 获取自定义组件
const customComponent = pluginManager.component.get('custom-component');
```

### 获取组件配置 getConfigByType

类型：`(type: string) => ComponentConfigModel`

说明：通过type获取组件配置

示例：

```tsx
import { pluginManager } from 'epic-designer'

// 获取input组件的注册配置
const componentConfig = pluginManager.component.getConfigByType('input');
```

### 获取组件配置 getComponentConfigs

获取所有已注册组件的完整配置信息

```ts
// 获取所有组件配置
const allConfigs = pluginManager.component.getComponentConfigs();

// 查看配置结果结构
console.log(allConfigs);
// 返回格式: { [componentType: string]: ComponentConfigModel }
```

### 获取所有组件 getComponents

类型：`() => Components`

说明：获取已注册的组件

示例：

```tsx
import { pluginManager } from 'epic-designer'

const components = pluginManager.component.getComponents();
```


### 获取组件模式分组 getComponentSchemaGroups

获取所有组件的分组信息，包括分组名称和包含的组件

```ts
// 获取完整的组件分组信息
const schemaGroups = pluginManager.component.getComponentSchemaGroups();

// 查看分组结构
console.log(schemaGroups);
// 返回格式示例:
// {
//   '基础组件': ['input', 'button', 'textarea'],
//   '布局组件': ['container', 'flex', 'grid'],
//   '自定义组件': ['custom-component']
// }
```

### 获取组件图标 getIcon

获取指定组件类型的图标标识

```ts
// 获取 input 组件的图标
const inputIcon = pluginManager.component.getIcon('input');
console.log(inputIcon); // 例如: 'input'

// 获取自定义组件的图标
const customIcon = pluginManager.component.getIcon('custom-component');
```

### 获取组件标签 getLabel

获取指定组件类型的显示标签

```ts
// 获取 input 组件的标签
const inputLabel = pluginManager.component.getLabel('input');
console.log(inputLabel); // 例如: '输入框'

// 获取自定义组件的标签
const customLabel = pluginManager.component.getLabel('custom-component');
console.log(customLabel); // '自定义组件'
```

### 隐藏/显示组件

```ts
// 隐藏指定类型的组件，使其在组件面板中不可见
pluginManager.component.hide('input');

// 显示指定类型的组件
pluginManager.component.show('input');
```

### 批量设置隐藏组件 hideComponents

一次性设置多个组件的隐藏状态

```ts
// 隐藏多个基础组件
pluginManager.component.hideComponents(['input', 'button', 'textarea']);
```

### 设置组件分组映射 setGroupNameMap

类型：`(groupName: string, mapName: string) => void`

说明：设置组件分组名称到映射名称的关系

示例：

```ts
import { pluginManager } from 'epic-designer'

// 设置分组名称为"我是表单组件"的映射名称为"form"
pluginManager.component.setGroupNameMap('我是表单组件', 'form')
```

### 清空组件分组映射 clearGroupNameMap

类型：`() => void`

说明：清空组件分组名称到映射名称的关系

示例：

```ts
import { pluginManager } from 'epic-designer'

// 清空所有组件分组名称映射
pluginManager.component.clearGroupNameMap()
```

### 设置组件分组排序 setSortedGroups

类型：`(sortedGroups: string[]) => void`

说明：设置组件分组的排序

示例：
```ts
import { pluginManager } from 'epic-designer'

// 设置分组显示顺序：布局组件在前，表单组件在后
pluginManager.component.setSortedGroups(['布局组件', '表单组件'])
```

### 清空组件分组排序 clearSortedGroups

类型：`() => void`

说明：清空组件分组的排序

示例：
```ts
import { pluginManager } from 'epic-designer'

pluginManager.component.clearSortedGroups()
```

## 面板管理示例

`pluginManager.panel` 是用于管理设计器面板相关功能的对象，包含活动栏、侧边栏和视图容器等功能。

### 注册活动栏 registerActivitybar

类型：`(activitybar: ActivitybarModel) => void`

说明：注册活动栏，用于在设计器左侧活动栏中添加新的面板

示例：
```ts
import { pluginManager } from 'epic-designer'

// 推荐方式 - 使用 panel 对象
pluginManager.panel.registerActivitybar({
  // 组件路径，根据实际文件路径修改
  component: () => import('./ComponentPanel.vue'),
  icon: 'icon--epic--extension-outline',
  // 活动栏唯一标识符，相同ID会覆盖之前的注册
  id: 'test_1',
  // 排序权重，数值越小显示越靠前（默认100）
  sort: 100,
  // 面板显示标题
  title: '组件面板',
  // 可选：面板描述
  description: '组件库管理面板',
});

```
> 以上仅是简单的注册示例，详情请参考[自定义活动栏文档](/guide/extensions/activityBar.html)
### 隐藏活动栏 hideActivitybar

类型：`(value: string, attr?: string) => void`

说明：隐藏指定的活动栏面板

示例：
```ts
import { pluginManager } from 'epic-designer'

// 隐藏组件面板
pluginManager.panel.hideActivitybar('component_view');
```

### 显示活动栏 showActivitybar

类型：`(value: string, attr?: string) => void`

说明：显示活动栏

示例：
```ts
import { pluginManager } from 'epic-designer'

// 显示指定ID的活动栏
pluginManager.panel.showActivitybar('component_view');
```

### 注册右侧栏 registerRightSidebar

类型：`(rightSidebar: RightSidebarModel) => void`

说明：注册右侧栏，用于在设计器右侧边栏中添加新的面板

示例：
```ts
import { pluginManager } from 'epic-designer'

// 使用 panel 对象
pluginManager.panel.registerRightSidebar({
  // 侧边栏组件路径
  component: () => import('./PropertySidebar.vue'),
  // 侧边栏唯一标识符
  id: 'icon--epic--extension-outline',
  // 侧边栏显示标题
  title: '属性面板',
  // 可选：排序权重
  sort: 100,
  // 可选：面板描述
  description: '组件属性配置面板'
});
```
> 以上仅是简单的注册示例，详情请参考[自定义右侧栏文档](/guide/extensions/rightSidebar.html)
### 隐藏右侧栏 hideRightSidebar

类型：`(value: string, attr?: string) => void`

说明：隐藏右侧栏

示例：
```ts
import { pluginManager } from 'epic-designer'

// 隐藏指定ID的右侧栏，隐藏事件面板
pluginManager.panel.hideRightSidebar('event_view');
```

### 显示右侧栏 showRightSidebar

类型：`(value: string, attr?: string) => void`

说明：显示右侧栏

示例：
```ts
import { pluginManager } from 'epic-designer'

// 推荐方式 - 显示指定ID的右侧栏
pluginManager.panel.showRightSidebar('event_view');
```

### 活动栏数组 activityBars

类型：`Ref<ActivitybarModel[]>`

说明：获取所有未隐藏的活动栏配置数组（这是一个响应式引用）

示例：
```ts
import { pluginManager } from 'epic-designer'

// 推荐方式 - 获取响应式的活动栏数组
const activityBars = pluginManager.panel.activityBars;
```

### 右侧栏数组 rightSidebars

类型：`Ref<RightSidebarModel[]>`

说明：获取所有未隐藏的右侧栏配置数组（这是一个响应式引用）

示例：
```ts
import { pluginManager } from 'epic-designer'

// 推荐方式 - 获取响应式的右侧栏数组
const rightSidebars = pluginManager.panel.rightSidebars;
```

## 公共方法管理示例

### 添加公共方法 add

类型：`(method: MethodModel) => void`

说明：添加公共方法到设计器实例中，供所有组件和插件使用

示例：
```ts
import { pluginManager } from 'epic-designer'

// 基础公共方法示例
pluginManager.publicMethods.add({
  name: 'showAlert',
  description: '显示提示框',
  handler: (message) => {
    alert(message)
  }
})

// API调用公共方法
pluginManager.publicMethods.add({
  name: 'apiRequest',
  description: '统一API请求方法',
  handler: async (url, options = {}) => {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });
      
      if (!response.ok) {
        throw new Error(`HTTP错误: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API请求失败:', error);
      throw error;
    }
  }
});

// 工具函数公共方法
pluginManager.publicMethods.add({
  name: 'formatDate',
  description: '日期格式化工具',
  handler: (date, format = 'YYYY-MM-DD') => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day);
  }
});

// 批量添加公共方法
const addMultipleMethods = () => {
  const methods = [
    {
      name: 'showToast',
      description: '显示Toast消息',
      handler: (message, type = 'info') => {
        // 根据类型显示不同样式的Toast
        const toastClass = `toast-${type}`;
        console.log(`[${type.toUpperCase()}] ${message}`);
        // 这里可以集成具体的Toast组件
      }
    },
    {
      name: 'downloadFile',
      description: '文件下载',
      handler: (url, filename) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    {
      name: 'copyToClipboard',
      description: '复制到剪贴板',
      handler: async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch (err) {
          console.error('复制失败:', err);
          return false;
        }
      }
    }
  ];
  
  methods.forEach(method => {
    pluginManager.publicMethods.add(method);
  });
};
```

### 移除公共方法 remove

类型：`(methodName: string) => void`

说明：从设计器实例中移除已添加的公共方法

示例：
```ts
import { pluginManager } from 'epic-designer'

// 移除单个公共方法
pluginManager.publicMethods.remove('showAlert')
```

### 函数映射数据 methodsMap

类型：`Map<string, MethodModel>`

说明：获取所有已添加的公共方法映射表

示例：
```ts
import { pluginManager } from 'epic-designer'

// 获取响应式的公共方法映射表
const methodsMap = pluginManager.publicMethods.methodsMap;
```

## 全局上下文使用示例

配置请求头
```ts
// 配置token
pluginManager.global.axiosConfig.headers = {
  Authorization: 'Bearer token'
};
```
修改组件默认的上传地址
```ts
// 设置默认文件上传地址
pluginManager.global.uploadFile = '/api/upload/file';
// 设置默认图片上传地址
pluginManager.global.uploadImage = '/api/upload/image';
```