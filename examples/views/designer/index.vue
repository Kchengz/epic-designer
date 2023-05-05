<template>
    <KDesigner @save="handleSubmit" />
</template>
<script lang="ts" setup>
import { KDesigner } from '../../../packages'

/**
 * 点击保存按钮操作
 * @param e
 */
function handleSubmit (e) {
  console.log(e)
}
</script>
