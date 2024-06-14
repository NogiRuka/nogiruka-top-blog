<script setup lang="ts">
import HalfBg from '@/components/layouts/HalfBg.vue';

let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer secret_991kN8zIVlzc9opZYcatlcyEaNUiEVhMNOaP8VAtH1U");
myHeaders.append("Notion-Version", "2022-06-28");
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "*/*");
myHeaders.append("Host", "api.notion.com");
myHeaders.append("Connection", "keep-alive");

let requestOptions: RequestInit = {
   method: 'POST',
   headers: myHeaders,
   redirect: 'follow'
};

fetch("/api-notion/v1/databases/" + import.meta.env.VITE_NOTION_DATABASE_ID + "/query", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
</script>

<template>
  <HalfBg type="route" info="乃木流架友人帐" />
</template>

<style scoped lang='scss'>

</style>

