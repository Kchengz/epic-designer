<template>
    <section class="k-edit-container">
        <div class="k-edit-range">
            <KEditNodeItem v-model:schemas="schemas" />
        </div>
    </section>
</template>
<script lang="ts" setup>
import { NodeItem, Designer } from '../../../../../types/kDesigner'
import KEditNodeItem from './KEditNodeItem.vue'
import { ref, reactive, unref, inject, useSlots } from 'vue'

const schemas = inject('schemas') as NodeItem[]

</script>