<template>
  <div class="demo-content">
    <!-- <div class="btn-box">
      <div :class="{ active: showIndex === 1 }" @click="showIndex = 1">
        设计器
      </div>
      <div :class="{ active: showIndex === 2 }" @click="showIndex = 2">
        生成器
      </div>
    </div> -->
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
<style lang="less" scoped>
.demo-content {
  height: calc(100vh - 32px);
  height: calc(100vh);


}

.btn-box {
  display: flex;
  height: 32px;

  >div {
    @tColor: #f89;
    margin-right: 10px;
    border-radius: 6px;
    padding: 4px 8px;
    color: @tColor;
    border: 1px solid @tColor;
    cursor: pointer;

    &.active {
      background-color: @tColor;
      color: white;
    }
  }
}
</style>