<template>
    <section class="k-edit-container">
        <div class="k-edit-range">
            <KEditNodeItem v-model:schemas="schemas" />
        </div>
    </section>
</template>
<script lang="ts" setup>
import { NodeItem } from '../../../../../types/kDesigner'
import KEditNodeItem from './KEditNodeItem.vue'
import { ref, reactive, unref, provide, useSlots } from 'vue'


const schemas = ref<NodeItem[]>([])
//  {
//     title: '页面',
//     type: 'page',
//     id: 'page',
//     children: []
// }
</script>