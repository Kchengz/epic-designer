# @epic-designer/utils

Epic Designer 核心工具库，提供通用工具函数、页面管理器、插件管理器等核心功能模块。

## 📦 安装

```bash
npm install @epic-designer/utils
# 或
yarn add @epic-designer/utils
# 或
pnpm add @epic-designer/utils
```

## 🚀 快速开始

```typescript
import { 
  debounce, 
  deepClone, 
  getUUID, 
  usePageManager, 
  usePluginManager,
  useRevoke 
} from '@epic-designer/utils';
```

## 📚 API 文档

### 通用工具函数 (Common)

#### 防抖函数
```typescript
import { debounce } from '@epic-designer/utils';

const debouncedHandler = debounce(() => {
  console.log('执行防抖函数');
}, 300);
```

#### 深拷贝
```typescript
import { deepClone } from '@epic-designer/utils';

const originalData = { name: 'test', items: [1, 2, 3] };
const clonedData = deepClone(originalData);
```

#### UUID 生成
```typescript
import { getUUID } from '@epic-designer/utils';

// 生成字符串类型 UUID（默认长度 6）
const stringId = getUUID();

// 生成数字类型 UUID
const numberId = getUUID(8, 'number');
```

#### 字符串工具
```typescript
import { capitalizeFirstLetter, getFileNameByUrl } from '@epic-designer/utils';

// 首字母大写
const capitalized = capitalizeFirstLetter('hello'); // 'Hello'

// 从 URL 提取文件名
const fileName = getFileNameByUrl('https://example.com/path/file.jpg'); // 'file.jpg'
```

#### 异步组件加载
```typescript
import { loadAsyncComponent } from '@epic-designer/utils';

const AsyncComponent = loadAsyncComponent(
  () => import('./MyComponent.vue')
);
```

### 管理器类 (Managers)

#### 页面管理器 (PageManager)
用于管理页面组件实例、表单数据和组件交互。

```typescript
import { usePageManager } from '@epic-designer/utils';

const pageManager = usePageManager();

// 查找组件实例
const componentInstance = pageManager.find('componentId');

// 执行组件方法
pageManager.executeActions([{
  type: 'component',
  componentId: 'myComponent',
  methodName: 'submit',
  args: '{}'
}]);

// 设置表单数据
pageManager.setFormData('formId', { name: 'value' });
```

#### 插件管理器 (PluginManager)
用于管理组件插件的注册、配置和生命周期。

```typescript
import { usePluginManager } from '@epic-designer/utils';

const pluginManager = usePluginManager();

// 注册组件
pluginManager.registerComponent({
  type: 'MyComponent',
  component: MyComponent,
  groupName: 'custom',
  title: '我的组件',
  icon: 'icon-component'
});

// 获取组件配置
const config = pluginManager.getComponentConfig('MyComponent');
```

#### 撤销重做管理器 (Revoke)
提供页面编辑的撤销和重做功能。

```typescript
import { useRevoke } from '@epic-designer/utils';

const revoke = useRevoke(pageSchema, state, setSelectedNode);

// 撤销操作
revoke.undo();

// 重做操作
revoke.redo();

// 推送新记录
revoke.push('操作描述');
```

### 数据处理工具

#### Schema 处理
```typescript
import { 
  generateNewSchema, 
  findSchemas, 
  mapSchemas,
  findSchemaById 
} from '@epic-designer/utils';

// 生成新的 schema（深拷贝 + 生成新 ID）
const newSchema = generateNewSchema(originalSchema);

// 查找 schemas
const foundSchemas = findSchemas(schemas, (item) => item.type === 'input');

// 映射 schemas
const mappedSchemas = mapSchemas(schemas, (item) => ({
  ...item,
  modified: true
}));
```

## 🔧 开发

### 构建
```bash
npm run build
```

### 测试
```bash
npm test
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

- [【epic-designer 交流群：747609683】](https://jq.qq.com/?_wv=1027&k=CtrM9ce2)

---

更多详细信息请查看 [Epic Designer 文档](https://docs.epicjs.cn/)
