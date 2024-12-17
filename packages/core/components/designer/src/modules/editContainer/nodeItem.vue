<template>
  <ENode ref="nodeRef" :componentSchema="props.schema">
    <!-- childImmovable不可拖拽设计 start -->
    <template v-if="pluginManager.getComponentConfingByType(props.schema.type)?.editConstraints?.childImmovable" #edit-node>
      <ENodeItem v-for="schema in props.schema.children" :key="schema.id" :schema="schema" />
    </template>
    <!-- childImmovable不可拖拽设计 end -->

    <template v-else #edit-node>
      <EditNodeItem v-if="props.schema.children" v-model:schemas="props.schema.children" />
    </template>
  </ENode>
</template>
<script lang="ts" setup>
import ENode from '../../../../node'
import EditNodeItem from './editNodeItem.vue'
import { ComponentSchema, Designer, PageSchema } from '../../../../../types/epic-designer'
import { useAttrs, provide, watch, ref, onUnmounted, computed, inject } from 'vue';
import { pluginManager, type PageManager } from '@epic-designer/utils'

const attrs = useAttrs()
const designer = inject('designer') as Designer
const pageManager = inject('pageManager', {}) as PageManager
const pageSchema = inject('pageSchema', {}) as PageSchema

const nodeRef = ref<HTMLBaseElement | null>(null)

provide("nodeAttrs", attrs)
defineOptions({
  name: 'ENodeItem'
})
const props = defineProps<{
  schema: ComponentSchema
  name?: string
}>()

// 判断是否为叶子节点
const isLeaf = computed(() => !props.schema.children);

/**
 * 获取当前组件dom元素
 */
const getComponentElement = computed<HTMLBaseElement | null>(() => {
  const componentInstances = pageManager.componentInstances.value
  const id = props.schema?.id
  const componentConfing = pluginManager.getComponentConfingByType(props.schema?.type!) ?? null
  if (!id || !componentInstances?.[id]) {
    return null
  }
  if (componentConfing?.defaultSchema.input && props.schema?.noFormItem !== true) {
    return componentInstances[id + 'formItem']?.$el
  }
  const componentInstance = componentInstances[id]
  if (componentInstance?.$el?.nodeName === '#text') {
    return null
  }
  return componentInstance?.$el
})

// 监听选中dom元素变化
watch(() => getComponentElement.value, (componentElement) => {
  if(!componentElement) return
  componentElement.addEventListener('click', setCheckedNode, false)
  componentElement.addEventListener('mouseover', setHoverNode, false)
  componentElement.addEventListener('mouseout', clearHoverNode, false)

  if(isLeaf.value) {
    componentElement.classList?.add("epic-node-mask");
  }else{
    componentElement.classList?.remove("epic-node-mask");
  }
})

onUnmounted(() => {
  getComponentElement.value?.removeEventListener('click', setCheckedNode, false)
  getComponentElement.value?.removeEventListener('mouseover', setHoverNode, false)
  getComponentElement.value?.removeEventListener('mouseout', clearHoverNode, false)
})



function setCheckedNode(event: Event) {
  event.stopPropagation()
  designer.setCheckedNode(props.schema)
}

function setHoverNode(event: Event) {
  // 根节点不显示hover
  if (props.schema.id === pageSchema.schemas[0]?.id) return
  event.stopPropagation()
  designer.setHoverNode(props.schema)
}

function clearHoverNode(event: Event) {
  event.stopPropagation()
  designer.setHoverNode(null)
}



</script>
