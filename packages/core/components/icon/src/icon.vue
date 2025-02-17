<template>
  <span
    class="iconfont"
    :class="computedClass"
  />
</template>
<script lang="ts" setup>
defineOptions({
  name: 'EIcon'
})
import { computed } from 'vue'
const props = withDefaults(defineProps<{
  name: string;
  prefix?: string;
}>(), {
  prefix: ''
})

const computedClass = computed(() => {
  let baseClass = props.name;
  // 兼容iconify处理
  if (props.name.startsWith('icon--')) {
    const parts = props.name.split('--');
    if (parts.length > 1) {
      baseClass += ` icon--${parts[1]}`;
    }
  }
  return `${props.prefix}${baseClass}`;
});

</script>
