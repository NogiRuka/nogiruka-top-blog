<script setup lang='ts'>
import HalfBg from '@/components/layouts/HalfBg.vue'
import getArticles from '@/api/nogi-notion/getArticles';

getArticles();
</script>

<template>
  <HalfBg type="route" info="留言板" />
</template>

<style scoped lang='scss'>

</style>
