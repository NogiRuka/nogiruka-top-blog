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
  <HalfBg type="article" info="文章详情" />
  <div class="flex flex-col bg-white w-4/6 my-8 py-4 px-8">
    <NotionRenderer :blockMap="blockMap" full-page prism />
  </div>
</template>

<style scoped lang='scss'>
/* optional Notion-like styles */
@import "vue-notion/src/styles.css";
</style>

<route lang="yaml">
</route>
