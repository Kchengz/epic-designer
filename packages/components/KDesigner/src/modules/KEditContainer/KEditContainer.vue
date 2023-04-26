<template>
    <section class="k-edit-container">
        <div class="k-edit-range rounded-md">
            <!-- <KEditNodeItem v-model:schemas="schemas" /> -->
            <KNodeItem :element="schemas[0]" />
        </div>
    </section>
</template>
<script lang="ts" setup>
import { NodeItem } from '../../../../../types/kDesigner'
// import KEditNodeItem from './KEditNodeItem.vue'
import KNodeItem from './KNodeItem.vue'
import { inject } from 'vue'

const schemas = inject('schemas') as NodeItem[]

</script>
