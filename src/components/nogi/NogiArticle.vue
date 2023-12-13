<script setup lang="ts">
import { onMounted } from 'vue'
import { NotionRenderer } from 'vue-notion'
import getArticle from '@/api/nogi-notion/getArticle'

// prismjs
import Prism from 'prismjs'
import 'prismjs/themes/prism.min.css'

const props = defineProps<{
  id: string
}>()

console.log(`output->id`, props.id)
let blockMap: any

onMounted(async () => {
  blockMap = await getArticle(props.id)
  console.log(`output->blockMap`, blockMap)

  var values = Object.values(blockMap)
  var firstValue = values[0]

  console.log(`output->firstValue`, firstValue)

  setTimeout(() => {
    Prism.highlightAll() // 全局代码高亮
  }, 100)
})
</script>

<template>
  <NotionRenderer :blockMap="blockMap" full-page prism />
</template>

<style scoped lang="scss">
/* optional Notion-like styles */
@import 'vue-notion/src/styles.css';
</style>
