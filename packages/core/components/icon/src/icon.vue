<template>
  <span class="iconfont" :class="props.prefix + props.name" />
</template>
<script lang="ts" setup>
defineOptions({
  name: 'EIcon'
})
const props = withDefaults(defineProps<{
  name: string;
  prefix?: string;
}>(), {
  prefix: 'epic-'
})

</script>
