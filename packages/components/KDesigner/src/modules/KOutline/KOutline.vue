<template>
    <div class="k-outline">
        <KTree :options="schemas" v-model:selectedKeys="selectedKeys" />
    </div>
</template>
<script lang="ts" setup>
import KTree from '../../../../KTree'
import { Ref, inject, computed } from 'vue'
import { NodeItem, Designer } from '../../../../../types/kDesigner'
const designer = inject('designer') as Designer
const schemas = inject('schemas') as Ref<NodeItem[]>

const selectedKeys = computed({
  get: () => {
    const id = designer.state.checkedNode?.id
    return id ? [id] : []
  },
  set: (e: any) => {
    designer.setCheckedNode(e.record)
  }
})

</script>
