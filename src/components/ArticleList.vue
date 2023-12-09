<script setup lang="ts">
import NogiItem from '@/components/nogi/NogiItem.vue'
import getArticles from '@/api/nogi-notion/getArticles'

const articles = await getArticles()

console.log(`output->articleslist`, articles)
</script>

<template>
  <div class="w-full flex justify-center bg-[#f6f7f9]">
    <div class="flex flex-col bg-pink-500 w-4/6 h-1000px mt-8">
      <article v-for="a in articles" :key="a.id">
        <NogiItem :id="a.id" />
      </article>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
