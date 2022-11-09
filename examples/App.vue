<template>
  <div>
    <div class="btn-box">
      <div @click="showIndex = 1">
        设计器
      </div>
      <div @click="showIndex = 2">
        生成器
      </div>
    </div>
    <Designer v-if="showIndex === 1" />
    <Builder v-if="showIndex === 2" />
  </div>
</template>
<script lang="ts" setup>
import Builder from './views/builder/index.vue'
import Designer from './views/designer/index.vue'
import { ref } from 'vue'
const showIndex = ref(1)

</script>
<style scoped>
.btn-box {
  display: flex;
}
</style>