<template>
  <span class="iconfont" :class="props.name" />
</template>
<script lang="ts" setup>
defineOptions({
  name: 'EIcon'
})

const props = defineProps<{ name: string }>()
</script>
