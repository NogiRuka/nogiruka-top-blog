<script setup lang='ts'>
import { generateNumberArray, getRandom } from '@/utils/nogiruka';
const num: number[] = generateNumberArray(5)
console.log(`output->num`, num)
const { randomItem } = getRandom(num)
console.log(`output->randomItem`, randomItem)



// todo 背景图片切换 图片来源显示
</script>

<template>
  <div class="w-full h-screen bg-cover" >
    <img :src="'/bg-' + randomItem + '.webp'" alt="" class="w-full h-full object-cover" />
  </div>
</template>

<style scoped lang='scss'>

</style>
