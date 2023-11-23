<template>
    <Header />
    <div class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2 text-8xl text-white">Timeline</div>
    
    <NotionRenderer :blockMap="blockMap" fullPage />
</template>
    
<script setup lang='ts'>
import Header from "@/components/Header.vue";
import { NotionRenderer, getPageBlocks } from "vue-notion";

let blockMap:any = await getPageBlocks('8c1ab01960b049f6a282dda64a94afc7');

// blockMap = await getPageBlocks('8c1ab01960b049f6a282dda64a94afc7');

console.log(`output->blockMap`, blockMap)

</script>
    
<style>
/* optional Notion-like styles */
@import "vue-notion/src/styles.css";
</style>
