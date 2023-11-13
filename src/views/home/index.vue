<template>
    <Header />
    <Hitokoto />
    <Display />
    <Footer />
</template>
    
<script setup lang='ts'>
import Header from "@/components/Header.vue"
import Display from '@/components/Display.vue'
import Footer from '@/components/Footer.vue'
import Hitokoto from '@/components/Hitokoto.vue';

import { Client } from "@notionhq/client"

const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });

(async () => {
    const databaseId = import.meta.env.VITE_NOTION_PAGE_ID;
    console.log(`output->databaseId`, databaseId)
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log(response);
})();

//todo 响应式布局

//todo 一言展示组件封装及ui优化



</script>
    
<style lang="scss" scoped>

a,
p {
    color: white;
    text-shadow: 1px 0 4px black;
}

.centered-element {
    transform: translate(-50%, -50%);
}
</style>
