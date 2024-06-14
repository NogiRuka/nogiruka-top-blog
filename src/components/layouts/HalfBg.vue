<script setup lang="ts">
import NogiPageInfo from '@/components/nogi/NogiPageInfo.vue'
import { generateNumberArray, getRandom } from '@/utils/nogiruka';
const num: number[] = generateNumberArray(5)
console.log(`output->num`, num)
const { randomItem } = getRandom(num)
console.log(`output->randomItem`, randomItem)


// todo 背景图片切换 图片来源显示

defineProps<{
  type: 'route' | 'article'
  info?: any
  bg?: string
}>()



</script>

<template>
  <div class="w-full h-50vh flex justify-center items-center">
    <img :src="'/bg-' + randomItem + '.webp'" alt="" class="w-full h-full object-cover" />
    <NogiPageInfo :type="type" :info="info" />
    {{ bg }}
  </div>
</template>

<style scoped lang="scss"></style>
