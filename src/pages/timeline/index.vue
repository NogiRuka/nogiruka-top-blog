<script setup lang='ts'>
import blockMap from '@/api/vue-notion/getPageBlocks.ts'
import { NotionRenderer } from 'vue-notion'

</script>

<template>
  <div class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 text-8xl text-white">
    Timeline
  </div>

  <NotionRenderer :block-map="blockMap" full-page />
</template>

<style>
/* optional Notion-like styles */
@import "vue-notion/src/styles.css";
</style>

<route lang='yaml'>
name: timeline
</route>
