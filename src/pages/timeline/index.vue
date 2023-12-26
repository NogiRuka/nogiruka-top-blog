<script setup lang='ts'>
import HalfBg from '@/components/layouts/HalfBg.vue';
// import blockMap from '@/api/vue-notion/getPageBlocks'
// import { NotionRenderer } from 'vue-notion'
// // prismjs
// import Prism from 'prismjs'
// import 'prismjs/themes/prism.min.css'

// console.log(`output->blockMap`,blockMap)

// onMounted(async () => {
//      setTimeout(() => {
//         Prism.highlightAll()// 全局代码高亮
//     }, 100)
// })

import { onMounted, ref } from "vue";
import { NotionRenderer, getPageBlocks } from "vue3-notion";

const data = ref()

onMounted(async () => {
  data.value = await getPageBlocks(import.meta.env.VITE_NOTION_PAGE_ID, import.meta.env.VITE_NOTION_API_WORKER)
})

// ---- or using Composables ----

// const { data } = useGetPageBlocks("4b2dc28a5df74034a943f8c8e639066a")
</script>

<template>
  <HalfBg type="route" info="时间轴" />
  <!-- <NotionRenderer :blockMap="blockMap" full-page prism /> -->
  <NotionRenderer v-if="data" :blockMap="data" fullPage />
</template>

<style>
/* optional Notion-like styles */
/* @import "vue-notion/src/styles.css"; */
@import "vue3-notion/dist/style.css"; /* optional Notion-like styles */
@import "prismjs/themes/prism.css";
/* @import "katex/dist/katex.min.css"; */
</style>

<route lang='yaml'>
meta:
  title: 时间轴
</route>
