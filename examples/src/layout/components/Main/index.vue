<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import Maximize from './Maximize.vue';

const route = useRoute();
const uiKey = computed(() => {
  return route.params.ui as string;
});
</script>
<template>
  <div :key="uiKey" class="epic-page-container">
    <Maximize />
    <router-view />
  </div>
</template>
