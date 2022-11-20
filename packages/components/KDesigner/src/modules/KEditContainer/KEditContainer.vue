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
import { FormDataModel } from '../../../../../types/kDesigner'


const formData = reactive<FormDataModel>({});
const slots = useSlots()
provide('formData', formData)
provide('slots', slots)
const schemas = ref<NodeItem[]>([{
    title: '页面',
    type: 'page',
    id: 'page',
    children: []
}])

</script>