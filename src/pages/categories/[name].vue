<script setup lang='ts'>
import HalfBg from '@/components/layouts/HalfBg.vue'

defineProps({
  name: {
    type: String,
    default: '',
  },
});
</script>

<template>
    <HalfBg type="article" info="分类文章" />
  <h1 class="bg-pink-500 text-8xl text-white">
    {{ $route.params['name']}}
  </h1>
</template>

<style scoped lang='scss'>

</style>
