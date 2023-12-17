<script setup lang='ts'>
import HalfBg from '@/components/layouts/HalfBg.vue'
import ArticleList from '@/components/ArticleList.vue'

// import { Client, LogLevel }  from '@notionhq/client';

// const notion = new Client({ auth: import.meta.env.NOTION_API_KEY, logLevel: LogLevel.DEBUG, });

// (async () => {
//   const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID;
//   const response = await notion.databases.query({
//     database_id: databaseId,
//     filter: {
//       or: [
//         {
//           property: 'In stock',
//           checkbox: {
//             equals: true,
//           },
//         },
//         {
//           property: 'Cost of next trip',
//           number: {
//             greater_than_or_equal_to: 2,
//           },
//         },
//       ],
//     },
//     sorts: [
//       {
//         property: 'Last ordered',
//         direction: 'ascending',
//       },
//     ],
//   });
//   console.log('notion---->', response);
// })();
</script>

<template>
  <HalfBg type="route" info="文章列表" />
  <ArticleList />
</template>

<style scoped lang='scss'>

</style>

<route lang='yaml'>

</route>
