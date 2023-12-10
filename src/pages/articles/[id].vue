<script setup lang='ts'>
import HalfBg from '@/components/layouts/HalfBg.vue'
import NogiPageInfo from '@/components/nogi/NogiPageInfo.vue';
</script>

<template>
  <HalfBg type="article" info="文章详情" />
  <NogiPageInfo type="article" />
  <h1 class="bg-pink-500 text-8xl text-white">
    {{ $route.params.id }}
  </h1>
</template>

<style scoped lang='scss'>

</style>

<route lang="yaml">
</route>
