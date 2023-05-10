<template>
  <header class="k-header">
    <div class="k-header-item">
      <Button
        size="small"
        :disabled="!recordList.length"
        @click="handleUndo"
      >
        <span class="iconfont icon-chexiao2x" />
      </Button>
      <Button
        size="small"
        :disabled="!undoList.length"
        @click="handleRedo"
      >
        <span class="iconfont icon-fanhui2x" />
      </Button>
    </div>
    <div class="k-header-item font-bold font-md">
      k-designer
    </div>
    <div class="k-header-item">
      <Button
        size="small"
        @click="handlePreview"
      >
        <span
          class="iconfont icon-yulan"
          style="margin-right:6px"
        />
        预览
      </Button>
      <Button
        size="small"
        @click="handleSave"
      >
        <span
          class="iconfont icon-yulan"
          style="margin-right:6px"
        />
        保存
      </Button>
    </div>
    <KPreview ref="preview" />
  </header>
</template>
<script lang="ts" setup>
import KPreview from '../KPreview/KPreview.vue'
import { ref, Ref, inject } from 'vue'
import { pluginManager, revoke, deepCompareAndModify } from '../../../../../utils/index'
import { NodeItem, Designer } from '../../../../../types/kDesigner'
const schemas = inject('schemas') as Ref<NodeItem[]>
const designer = inject('designer') as Designer
const emit = defineEmits(['save'])
const Button = pluginManager.getComponent('button')
const preview = ref<InstanceType<typeof KPreview> | null>(null)
const recordList = revoke.recordList
const undoList = revoke.undoList

function handlePreview () {
  preview.value!.handleOpen()
}

/**
 * 撤销操作
 */
function handleUndo () {
  const record = revoke.undo()
  if (!record) return
  deepCompareAndModify(schemas.value, record)
  designer.setCheckedNode(schemas.value[0])
}

/**
 * 重做操作
 */
function handleRedo () {
  const record = revoke.redo()
  if (!record) return
  deepCompareAndModify(schemas.value, record)
  designer.setCheckedNode(schemas.value[0])
}

/**
 * 触发保存操作
 */
function handleSave () {
  emit('save')
}
</script>
