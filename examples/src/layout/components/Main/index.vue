<template>
  <div
    :key="uiKey"
    class="epic-page-container"
  >
    <Maximize />
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import Maximize from './Maximize.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const uiKey = computed(() => {
    return route.params.ui as string
})
</script>