<template>
    <div class="k-action-bar">
        <ul class="actions-container">
            <li class="action-item" :title="item" v-for="(item, index) in list"
                :class="{ checked: designer.state.actionBarCheckedIndex === index }"
                @click="handleClick(index)">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { ref, inject } from 'vue'
const designer = inject('designer') as Designer

const checkedIndex = ref(0)
const list = ['组件', '节点树', '模板', '插件']

function handleClick(index){
    if(designer.state.actionBarCheckedIndex === index) {
        designer.state.actionBarCheckedIndex = null
        return false
    }
    designer.state.actionBarCheckedIndex = index
}
</script>
