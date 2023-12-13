<script setup lang="ts">
import { onMounted } from 'vue'
import HalfBg from '@/components/layouts/HalfBg.vue'
// import NogiArticle from '@/components/nogi/NogiArticle.vue';
import { NotionRenderer } from 'vue-notion'
import getArticle from '@/api/nogi-notion/getArticle'
import { useRoute } from 'vue-router'

// prismjs
import Prism from 'prismjs'
import 'prismjs/themes/prism.min.css'

const route = useRoute()
const blockMap: any = await getArticle(route.params['id'])

const keys = Object.keys(blockMap)
const firstKey = keys[0]
console.log(firstKey)
const firstValue = blockMap[firstKey]
const icon = firstValue.value.format?.page_icon
console.log(`output->icon`, icon)

onMounted(() => {
  if (icon !== undefined) {
    const img = document.createElement('img')
    img.src = 'https://www.notion.so' + icon
    let spanElement = document.querySelector('span[role]') as HTMLElement

    if (spanElement.ariaLabel?.startsWith('/')) {
      while (spanElement.firstChild) {
        spanElement.removeChild(spanElement.firstChild)
      }
      spanElement?.innerHTML ?? ''
      spanElement?.appendChild(img)
    }
  }

  setTimeout(() => {
    Prism.highlightAll() // 全局代码高亮
  }, 100)
})
</script>

<template>
  <HalfBg type="article" info="文章详情" />
  <div class="flex flex-col bg-white w-4/6 my-8 py-4 px-8">
    <!-- {{ $route.params.id }} -->
    <NotionRenderer :blockMap="blockMap" full-page prism />
  </div>
</template>

<style scoped lang="scss"></style>

<route lang="yaml"></route>
