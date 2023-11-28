<script setup lang='ts'>
import { NotionRenderer, getPageBlocks, getPageTable } from 'vue-notion'

const blockMap: any = await getPageBlocks(import.meta.env.VITE_NOTION_PAGE_ID, import.meta.env.VITE_NOTION_API_WORKER)
const tableMap: any = await getPageTable(import.meta.env.VITE_NOTION_DATABASE_ID, import.meta.env.VITE_NOTION_API_WORKER)

console.log(`output->blockMap`, blockMap)
console.log(`output->tableMap`, tableMap)
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
