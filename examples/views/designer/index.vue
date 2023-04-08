<template>
    <KDesigner @save="handleSubmit" />
</template>
<script lang="ts" setup>
import { KDesigner } from '../../../packages'

function handleSubmit (e) {
  console.log(e)
}
</script>
