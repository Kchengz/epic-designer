<template>
  <header class="k-header">
    <div class="k-header-item items-center flex text-12px text-#3d3d3d">
      <img src="../../../../../static/logo.png" class="w-17px h-17px" alt="" srcset="">
      <span class="ml-4"> k-designer</span>
    </div>
    <div class="k-header-item text-12px text-#3d3d3d">
      k-designer默认项目
    </div>
    <div class="k-header-item">
      <Button size="small" :disabled="!recordList.length" @click="handleUndo">
        <span class="iconfont icon-chexiao2x" />
      </Button>
      <Button size="small" :disabled="!undoList.length" @click="handleRedo">
        <span class="iconfont icon-fanhui2x" />
      </Button>
      <Button size="small" @click="handlePreview">
        <span class="iconfont icon-yulan" style="margin-right:6px" />
        预览
      </Button>
      <Button size="small" @click="handleSave">
        <span class="iconfont icon-yulan" style="margin-right:6px" />
        保存
      </Button>
    </div>
    <KPreview ref="preview" />
  </header>
</template>
<script lang="ts" setup>
import KPreview from '../KPreview/KPreview.vue'
import { ref, inject } from 'vue'
import { pluginManager, revoke, deepCompareAndModify } from '@k-designer/utils'
import { PageSchema, Designer } from '../../../../../types/kDesigner'
const pageSchema = inject('pageSchema') as PageSchema
const designer = inject('designer') as Designer
const emit = defineEmits(['save'])
const Button = pluginManager.getComponent('button')
const preview = ref<InstanceType<typeof KPreview> | null>(null)
const recordList = revoke.recordList
const undoList = revoke.undoList

function handlePreview() {
  preview.value!.handleOpen()
}

/**
 * 撤销操作
 */
function handleUndo() {
  const record = revoke.undo()
  if (!record) return
  deepCompareAndModify(pageSchema.schemas, record)
  designer.setCheckedNode(pageSchema.schemas[0])
}

/**
 * 重做操作
 */
function handleRedo() {
  const record = revoke.redo()
  if (!record) return
  deepCompareAndModify(pageSchema.schemas, record)
  designer.setCheckedNode(pageSchema.schemas[0])
}

/**
 * 触发保存操作
 */
function handleSave() {
  emit('save')
}
</script>
