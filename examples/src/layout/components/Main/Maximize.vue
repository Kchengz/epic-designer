<template>
  <div class="maximize-box">
    <div
      class="maximize"
      @click="exitMaximize"
    >
      <CompressOutlined
        v-if="maximize"
        class="iconfont"
      />
      <ExpandOutlined
        v-else
        class="iconfont"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CompressOutlined,ExpandOutlined } from '@ant-design/icons-vue'
// const globalStore = useGlobalStore();
import { computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const exitMaximize = () => {
  router.push({
    query: {
      ...route.query,
      maximize: maximize.value ? undefined : '1'
    }
  })
};

const maximize = computed(() => {
  return route.query.maximize == '1'
})

// 监听当前页面是否最大化，动态添加 class
watch(
  () => maximize.value,
  () => {
    const app = document.getElementById("app") as HTMLElement;
    if (maximize.value) app.classList.add("main-maximize");
    else app.classList.remove("main-maximize");
  },
  { immediate: true }
);
</script>

<style scoped lang="less">
.maximize-box{
  position: absolute;
  width: 42px;
  height: 42px;
  overflow: hidden;
  top: 0;
  right: 0;
}

.maximize {
  position: absolute;
  top: -25px;
  right: -25px;
  z-index: 999;
  width: 55px;
  height: 55px;
  cursor: pointer;
  background-color: #909399;
  border-radius: 50%;
  opacity: 0.9;

  &:hover {
    background-color: #73767a;
  }

  .iconfont {
    position: relative;
    top: 53%;
    left: 19%;
    font-size: 14px;
    color: #ffffff;
  }
}
</style>
