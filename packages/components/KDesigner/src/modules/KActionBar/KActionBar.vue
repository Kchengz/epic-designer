<template>
    <div class="k-action-bar">
        <ul class="actions-container">
            <li class="action-item" :title="item" v-for="(item, index) in list"
                :class="{ checked: checkedIndex === index }" @click="checkedIndex = index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const checkedIndex = ref(0)
const list = ['组件', '节点树', '模板', '插件']
</script>
