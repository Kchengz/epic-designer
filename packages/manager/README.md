# @epic-designer/manager

Epic Designer 管理器模块，提供页面管理、插件管理、撤销重做等功能。

## 安装

```bash
pnpm add @epic-designer/manager
```

## 使用

### 页面管理器 (PageManager)

```typescript
import { pageManager, usePageManager } from '@epic-designer/manager';

// 使用页面管理器
const { find, findAll, findInstance, addComponentInstance } = pageManager;

// 或者在组件中使用
const pageManager = usePageManager();
```

### 插件管理器 (PluginManager)

```typescript
import { pluginManager, usePluginManager } from '@epic-designer/manager';

// 注册组件
pluginManager.component.register({
  defaultSchema: {
    type: 'input',
    label: '输入框',
  },
  component: () => import('./components/Input.vue'),
  groupName: '表单',
});

// 添加公共方法
pluginManager.publicMethods.add({
  name: 'test',
  description: '测试函数',
  handler: (data) => console.log(data),
});
```

### 撤销重做管理器 (RevokeManager)

```typescript
import { useRevoke } from '@epic-designer/manager';

const { push, undo, redo } = useRevoke(pageSchema, designerState, setSelectedNode);
```

## API

### PageManager

- `find(queryValue, queryField?)`: 查找组件的exposed属性
- `findAll(queryValue, queryField?)`: 查找所有匹配的组件的exposed属性
- `findInstance(queryValue, queryField?)`: 查找组件实例
- `findInstanceAll(queryValue, queryField?)`: 查找所有匹配的组件实例
- `addComponentInstance(id, instance)`: 添加组件实例
- `removeComponentInstance(id)`: 移除组件实例
- `setMethods(scriptStr)`: 动态创建函数
- `execAction(actions)`: 执行一组操作

### PluginManager

- `registerComponent(componentConfig)`: 注册组件
- `registerComponents(componentConfigs)`: 注册多个组件
- `removeComponent(componentType)`: 移除组件
- `hideComponent(componentType)`: 隐藏组件
- `showComponent(componentType)`: 显示组件
- `addPublicMethod(publicMethod)`: 添加公共方法
- `getComponent(componentType)`: 获取组件
- `getComponentConfig(componentType)`: 获取组件配置

### RevokeManager

- `push(type?)`: 插入历史记录
- `undo()`: 撤销操作
- `redo()`: 重做操作
- `reset()`: 重置所有记录
- `getUndoCount()`: 获取可撤销的操作数量
- `getRedoCount()`: 获取可重做的操作数量
