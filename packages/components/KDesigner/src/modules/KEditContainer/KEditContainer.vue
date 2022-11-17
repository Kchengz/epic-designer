<template>
    <section class="k-edit-container">
        <draggable v-model="arr1" @add="deepClone" group="edit-draggable" item-key="id"
            :component-data="{ name: 'list' }">
            <template #item="{ element }">
                <div class="item">
                    {{ element.name }}
                </div>
            </template>
        </draggable>
    </section>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref } from 'vue'
const arr1 = ref([
    {
        name: '测试',
        id: 45
    },
    {
        name: '测试2',
        id: 452
    },
    {
        name: '测试3',
        id: 454
    },
])

function deepClone(e) {
    console.log(e)
}
</script>