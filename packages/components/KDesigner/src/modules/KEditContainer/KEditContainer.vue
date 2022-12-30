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
import { inject } from 'vue'

const schemas = inject('schemas') as NodeItem[]

</script>
