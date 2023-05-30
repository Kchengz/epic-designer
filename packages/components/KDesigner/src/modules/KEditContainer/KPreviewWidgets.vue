<template>
  <div
    ref="selectorRef"
    class="item checked absolute transition-all pointer-events-none z-1200"
  >
    <div class="action-box">
      <div class="action-item">
        {{ pluginManager.getComponentConfingByType(designer.state.checkedNode?.type ?? '')?.defaultSchema.label }}
      </div>
      <div
        title="复制"
        class="action-item pointer-events-auto"
        @click="handleCopy"
      >
        <span class="iconfont icon-fuzhi3" />
      </div>
      <div
        title="删除"
        class="action-item pointer-events-auto"
        @click="handleDelete"
      >
        <span class="iconfont icon-shanchu1" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PageSchema, Designer } from '../../../../../types/kDesigner'
import { inject, computed, ref, watch, type ComponentPublicInstance } from 'vue'
import { pluginManager, getUUID, deepClone, revoke, findSchemaById, type PageManager } from '../../../../../utils/index'

const pageManager = inject('pageManager', {}) as PageManager
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer

const selectorRef = ref()

function setSeletorStyle () {
  const element = getComponentElement.value
  if (!element) return

  const h = element.offsetHeight
  const w = element.offsetWidth
  const top = element.offsetTop
  const left = element.offsetLeft
  selectorRef.value.style = `width:${w}px;height:${h}px;top:${top}px;left:${left}px;`
}

/**
 * 获取组件dom元素
 */
const getComponentElement = computed<HTMLBaseElement | null>(() => {
  const componentInstances = pageManager.componentInstances.value
  const id = designer.state.checkedNode?.id
  const componentConfing = pluginManager.getComponentConfingByType(designer.state.checkedNode?.type!) ?? null

  if (!id || !componentInstances?.[id]) {
    return null
  }
  let componentInstance = componentInstances[id] as ComponentPublicInstance
  if (componentConfing?.defaultSchema.input && componentInstance.$parent?.$parent) {
    componentInstance = componentInstance.$parent.$parent
  }

  return componentInstance.$el
})

const MutationObserver = window.MutationObserver
const DocumentObserverConfig = {
  childList: true,
  attributes: true,
  subtree: true
}
const observer = new MutationObserver(setSeletorStyle)

watch(() => getComponentElement.value, (e, oldVal) => {
  if (e) {
    observer.observe(e, DocumentObserverConfig)
    setSeletorStyle()
  }
})

/**
 * 复制选中节点元素
 */
function handleCopy () {
  const data = findSchemaById(pageSchema.schemas, designer.state.checkedNode?.id ?? 'root')
  if (!data) {
    return false
  }
  const { list, schema, index } = data
  const node = deepClone({
    ...schema,
    id: getUUID()
  })
  list.splice(index + 1, 0, node)
  const nodeArray = node.children ? [...node.children] : []
  // 存在子节点时，需要遍历修改子节点id
  while (nodeArray.length > 0) {
    const item = nodeArray.pop()
    item.id = getUUID()
    if (item.children?.length > 0) {
      nodeArray.push(...item.children)
    }
  }
  designer.setCheckedNode(node)

  revoke.push(pageSchema.schemas, '复制组件')
}

/**
 * 删除元素
 */
function handleDelete () {
  const data = findSchemaById(pageSchema.schemas, designer.state.checkedNode?.id ?? 'root')
  if (!data) {
    return false
  }
  let { list, schema: _schema, index } = data
  list.splice(index, 1)
  if (index === list.length) {
    index--
  }
  designer.setCheckedNode(list[index])
  revoke.push(pageSchema.schemas, '删除组件')
}

</script>
