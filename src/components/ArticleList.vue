<script setup lang="ts">
import NogiArticleItem from '@/components/nogi/NogiArticleItem.vue'
import getArticles from '@/api/nogi-notion/getArticles'

const articles = await getArticles()

console.log(`output->articleslist`, articles)
</script>

<template>
  <div class="flex flex-col bg-white w-4/6 my-8 py-4 px-8">
    <NogiArticleItem :article="a" v-for="a in articles" :key="a.id" />
  </div>
</template>

<style scoped lang="scss"></style>
