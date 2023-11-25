<template>
    <Header />
    <div class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 text-8xl text-white">Timeline</div>
    
    <NotionRenderer :blockMap="blockMap" fullPage />
</template>
    
<script setup lang='ts'>
import Header from "@/components/Header.vue";
import { NotionRenderer, getPageBlocks, getPageTable } from "vue-notion";

let blockMap:any = await getPageBlocks(import.meta.env.VITE_NOTION_PAGE_ID, 'https://notion-api.1693145038.workers.dev/v1');
// let blockMap:any = await getPageTable(import.meta.env.VITE_NOTION_DATABASE_ID, 'https://notion-api.1693145038.workers.dev/v1');

console.log(`output->blockMap`, blockMap)

</script>
    
<style>
/* optional Notion-like styles */
@import "vue-notion/src/styles.css";
</style>
