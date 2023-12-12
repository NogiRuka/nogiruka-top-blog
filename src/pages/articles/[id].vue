<script setup lang='ts'>
import { onMounted } from 'vue'
import HalfBg from '@/components/layouts/HalfBg.vue'
// import NogiArticle from '@/components/nogi/NogiArticle.vue';
import { NotionRenderer } from 'vue-notion'
import getArticle from '@/api/nogi-notion/getArticle';
import { useRoute } from 'vue-router';

// prismjs
import Prism from 'prismjs'
import 'prismjs/themes/prism.min.css'

const route = useRoute();
const blockMap: any = await getArticle(route.params.id as string)

onMounted(async () => {
     setTimeout(() => {
        Prism.highlightAll()// 全局代码高亮
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

<style scoped lang='scss'>

</style>

<route lang="yaml">
</route>
