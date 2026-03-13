# useEventBus 事件总线

:::tip 事件总线
`useEventBus` 是一个用于组件间通信的事件总线 Hook，提供了一个简单高效的事件发布订阅机制。它支持多个独立的事件通道，包括作用域通道和根通道，并具有事件缓存和自动清理功能。

事件总线由 builder 组件通过 `createEventBus` 创建，并通过依赖注入提供给子组件使用。
:::

## 基本使用

### 获取事件总线实例

```vue
<script lang="ts" setup>
import { useEventBus } from 'epic-designer'

const eventBus = useEventBus()
</script>
```

### 发送事件

```typescript
// 发送事件到当前作用域通道
eventBus?.emit('custom-event', { data: 'hello' })
```

### 监听事件

```typescript
// 监听当前作用域通道的事件
eventBus?.on('custom-event', (data) => {
  console.log('收到事件:', data)
})
```

## API 文档

### Methods

#### emit

类型：`(event: string, ...args: any[]) => void`

说明：向当前作用域通道发送事件

示例：
```typescript
eventBus?.emit('message', 'hello', { id: 1 })
```

#### emitRoot

类型：`(event: string, ...args: any[]) => void`

说明：向根通道发送事件（全局广播）

示例：
```typescript
eventBus?.emitRoot('global-notification', '系统消息')
```

#### on

类型：`(event: string, callback: (...args: any[]) => void) => () => void`

说明：监听当前作用域通道的事件，组件卸载时自动取消监听。如果该事件之前有缓存，会立即触发回调处理最近的一次事件。

返回值：取消监听的函数

示例：
```typescript
const unsubscribe = eventBus?.on('user-update', (user) => {
  console.log('用户信息更新:', user)
})

// 手动取消监听（可选，组件卸载时会自动取消）
// unsubscribe?.()
```

#### onRoot

类型：`(event: string, callback: (...args: any[]) => void) => () => void`

说明：监听根通道的事件，组件卸载时自动取消监听

返回值：取消监听的函数

示例：
```typescript
eventBus?.onRoot('system-update', (data) => {
  console.log('系统更新:', data)
})
```

#### off

类型：`(event: string, callback: (...args: any[]) => void) => void`

说明：手动取消监听当前作用域通道的事件

示例：
```typescript
const handleMessage = (msg) => console.log(msg)
eventBus?.on('message', handleMessage)

// 手动取消监听
eventBus?.off('message', handleMessage)
```

#### offRoot

类型：`(event: string, callback: (...args: any[]) => void) => void`

说明：手动取消监听根通道的事件

#### clear

类型：`() => void`

说明：清空当前作用域通道的所有事件监听器和缓存

## 完整示例

### 组件间通信示例

```vue
<!-- 发送组件 -->
<template>
  <button @click="sendMessage">发送消息</button>
</template>

<script lang="ts" setup>
import { useEventBus } from 'epic-designer'

const eventBus = useEventBus()

function sendMessage() {
  eventBus?.emit('chat-message', {
    id: Date.now(),
    content: 'Hello World!',
    timestamp: new Date().toLocaleTimeString()
  })
}
</script>
```

```vue
<!-- 接收组件 -->
<template>
  <div>
    <h3>消息列表</h3>
    <ul>
      <li v-for="msg in messages" :key="msg.id">
        [{{ msg.timestamp }}] {{ msg.content }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useEventBus } from 'epic-designer'

const eventBus = useEventBus()
const messages = ref<Array<{ id: number; content: string; timestamp: string }>>([])

eventBus?.on('chat-message', (data) => {
  messages.value.push(data)
})
</script>
```

### 实际项目中的使用示例

```vue
<script lang="ts" setup>
import { inject } from 'vue'
import { useEventBus } from 'epic-designer'
import { Input } from 'ant-design-vue'

const props = defineProps<{
  componentSchema?: any
  dataSelector?: boolean
}>()

const formData = inject<Record<string, any>>('formData', {})
const eventBus = useEventBus()

// 打开数据选择器
const handleDataSelector = () => {
  eventBus?.emit('openDataSelector', props.componentSchema)
}

// 监听数据选择完成事件
eventBus?.on('dataSelector:selected', (data) => {
  if (data.nodeId !== props.componentSchema.id) {
    return
  }
  
  // 处理选中的数据
  const dataFieldMap = props.componentSchema.props?.dataFieldMap ?? []
  dataFieldMap.forEach((item) => {
    formData[item.formField] = data.record[item.dataField]
  })
})
</script>

<template>
  <Input>
    <template #suffix>
      <span
        v-if="dataSelector"
        @click="handleDataSelector"
        class="iconfont icon--epic icon--epic--search-rounded"
      ></span>
    </template>
  </Input>
</template>
```

## 特性说明

### 事件缓存

事件总线会自动缓存最近 10 次发送的事件。当新的监听器注册时，如果该事件有缓存，会立即触发回调处理最近的一次事件，确保不会错过重要事件。

### 自动清理

- 使用 `on` 和 `onRoot` 注册的监听器会在组件卸载时自动取消监听，避免内存泄漏
- 当通道中没有任何监听器时，会自动清理该通道

### 多通道支持

- **作用域通道**：默认通道，用于组件树内的通信
- **根通道**：全局通道，用于跨组件树的通信

## 注意事项

`useEventBus` 需要在 `createEventBus` 提供的作用域内使用，通常在 EBuilder 组件内部使用
事件名称建议使用命名空间风格（如 `module:event`）以避免命名冲突
虽然提供了自动清理功能，但对于短暂的监听器，也可以手动调用返回的取消监听函数
