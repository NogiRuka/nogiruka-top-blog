<script setup lang="ts">
import NogiPageInfo from '@/components/nogi/NogiPageInfo.vue'
// todo 背景图片切换 图片来源显示

defineProps<{
  type: 'route' | 'article'
  info?: any
}>()

const num: number[] = [1, 2, 3, 4, 5]
console.log(`output->num`, num)
const randomIndex = Math.floor(Math.random() * num.length)
const randomNum = num[randomIndex]
console.log(`output->randomNum`, randomNum)
</script>

<template>
  <div class="w-full h-50vh flex justify-center items-center">
    <img :src="'/bg-' + randomNum + '.webp'" alt="" class="w-full h-full object-cover" />
    <NogiPageInfo :type="type" :info="info" />
  </div>
</template>

<style scoped lang="scss"></style>
