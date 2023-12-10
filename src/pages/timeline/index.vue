<script setup lang='ts'>
import { onMounted } from 'vue'
// import blockMap from '@/api/vue-notion/getPageBlocks'
import pageTable from '@/api/vue-notion/getPageTable';
import { NotionRenderer } from 'vue-notion'
// prismjs
import Prism from 'prismjs'
import 'prismjs/themes/prism.min.css'

console.log(`output->pageTable`,pageTable)

onMounted(async () => {
     setTimeout(() => {
        Prism.highlightAll()// 全局代码高亮
    }, 100)
})
</script>

<template>
  <div class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 text-8xl text-white">
    Timeline
  </div>

  <NotionRenderer :blockMap="pageTable" full-page prism />
</template>

<style>
/* optional Notion-like styles */
@import "vue-notion/src/styles.css";
</style>

<route lang='yaml'>
meta:
  title: 时间轴
</route>
