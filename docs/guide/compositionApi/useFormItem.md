# useFormItem 表单项

:::tip 表单项 Hook
`useFormItem` 是一个用于在表单项组件中获取表单数据上下文的 Hook。它通过依赖注入的方式获取当前表单的 `formData` 对象，使子组件能够轻松访问和修改表单数据。
:::

## 基本使用

### 在表单项组件中获取 formData

```vue
<script lang="ts" setup>
import { useFormItem } from 'epic-designer'

const { formData } = useFormItem()

// 访问表单数据
console.log(formData.username)
console.log(formData.password)
</script>
```

## API 文档

### 返回值

#### formData

类型：`FormDataModel`

说明：当前表单的数据对象，是一个响应式对象，可以直接访问和修改表单字段的值。

示例：
```typescript
// 获取表单字段值
const username = formData.username

// 修改表单字段值
formData.password = 'newPassword'
```

## 注意事项

- `useFormItem` 必须在 `useForm` 提供的作用域内使用，否则将返回一个空的响应式对象
- `formData` 是响应式对象，修改其属性会自动触发视图更新
- 在旧版本中通过 `inject('formData')` 的方式获取表单数据，但推荐使用 `useFormItem` 以获得更好的类型支持和未来兼容性
- 对于嵌套的表单字段，可以使用 `getValueByPath` 和 `setValueByPath` 工具函数来访问和修改
