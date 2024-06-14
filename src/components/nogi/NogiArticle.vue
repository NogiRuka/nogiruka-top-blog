<script setup lang="ts">
import getArticle from '@/api/nogi-notion/getArticle';
import { onMounted, ref } from "vue";
import { NotionRenderer } from "vue3-notion";

const props = defineProps<{
  id: string
}>()

console.log(`output->id`, props.id)

const data = ref()

onMounted(async () => {
  data.value = await getArticle(props.id)
})
</script>

<template>
  <!-- <NotionRenderer :blockMap="blockMap" full-page prism /> -->
  <NotionRenderer v-if="data" :blockMap="data" fullPage />
</template>

<style scoped lang="scss">
@import "vue3-notion/dist/style.css"; /* optional Notion-like styles */
@import "prismjs/themes/prism.css";
/* @import "katex/dist/katex.min.css"; */
</style>
