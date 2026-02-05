<script lang="ts" setup>
import BaseLoader from './baseLoader.vue';
</script>
<template>
  <div class="ep-designer-skeleton relative">
    <div class="ep-skeleton-header">
      <div class="ep-skeleton-header-left">
        <div class="ep-skeleton-button"></div>
      </div>
      <div class="ep-skeleton-header-right">
        <div class="ep-skeleton-button"></div>
        <div class="ep-skeleton-button"></div>
      </div>
    </div>
    <div class="ep-skeleton-body">
      <div class="ep-skeleton-activity-bar">
        <div class="ep-skeleton-activity-item"></div>
        <div class="ep-skeleton-activity-item"></div>
        <div class="ep-skeleton-activity-item"></div>
      </div>
      <div class="ep-skeleton-sidebar">
        <div class="ep-skeleton-form-item"></div>
        <div class="ep-skeleton-form-item"></div>
        <div class="ep-skeleton-form-item"></div>
      </div>
      <div class="flex-1"></div>
      <div class="ep-skeleton-sidebar">
        <div class="ep-skeleton-form-item"></div>
        <div class="ep-skeleton-form-item"></div>
        <div class="ep-skeleton-form-item"></div>
      </div>
    </div>
    <BaseLoader class="top-50/100 left-50/100 absolute" />
  </div>
</template>
