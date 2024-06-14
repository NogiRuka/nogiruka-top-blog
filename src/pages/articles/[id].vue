<script setup lang="ts">
import HalfBg from '@/components/layouts/HalfBg.vue'
import { onMounted, ref } from 'vue'
// import NogiArticle from '@/components/nogi/NogiArticle.vue';
import getArticle from '@/api/nogi-notion/getArticle'
import { useRoute } from 'vue-router'
import { NotionRenderer } from 'vue3-notion'

// prismjs
// import Prism from 'prismjs'
// import 'prismjs/themes/prism.min.css'

const route = useRoute()
const blockMap = ref()
// const blockMap: any = await getArticle(route.params['id'])

const keys = Object.keys(blockMap)
const firstKey = keys[0]
console.log(`output->firstKey`, firstKey)
// const firstValue = blockMap[firstKey]
// const icon = firstValue.value.format?.page_icon
// console.log(`output->icon`, icon)

onMounted(async () => {
  console.log(`output->window.location.href`, window.location.href)
  
  blockMap.value = await getArticle(route.params['id'])
  
  console.log(`output->blockMap.value`,blockMap.value)
  
  console.log(`output->route.params['bg']`, route.params['bg'])
  
  // if (icon !== undefined) {
  //   const img = document.createElement('img')
  //   img.src = 'https://www.notion.so' + icon
  //   let spanElement = document.querySelector('span[role]') as HTMLElement

  //   if (spanElement.ariaLabel?.startsWith('/')) {
  //     while (spanElement.firstChild) {
  //       spanElement.removeChild(spanElement.firstChild)
  //     }
  //     spanElement?.innerHTML ?? ''
  //     spanElement?.appendChild(img)
  //   }
  // }

  // setTimeout(() => {
  //   Prism.highlightAll() // 全局代码高亮
  // }, 100)
})
</script>

<template>
  <HalfBg type="article" :info="$route.params['bg']" />
  <div class="flex flex-col bg-white w-4/6 my-8 py-4 px-8">
    
    <NotionRenderer v-if="blockMap" :blockMap="blockMap" fullPage />
  </div>
</template>

<style scoped lang="scss">
@import "vue3-notion/dist/style.css"; /* optional Notion-like styles */
@import "prismjs/themes/prism.css";
</style>

<route lang="yaml"></route>
