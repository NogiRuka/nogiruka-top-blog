<script setup lang='ts'>
import { onMounted } from 'vue'
import HalfBg from '@/components/layouts/HalfBg.vue'
import blockMap from '@/api/vue-notion/getPageBlocks'
import { NotionRenderer } from 'vue-notion'
// prismjs
import Prism from 'prismjs'
import 'prismjs/themes/prism.min.css'

console.log(`output->blockMap`,blockMap)

onMounted(async () => {
     setTimeout(() => {
        Prism.highlightAll()// 全局代码高亮
    }, 100)
})
</script>

<template>
  <HalfBg type="route" info="时间轴" />
  <NotionRenderer :blockMap="blockMap" full-page prism />
</template>

<style>
/* optional Notion-like styles */
@import "vue-notion/src/styles.css";
</style>

<route lang='yaml'>
meta:
  title: 时间轴
</route>
