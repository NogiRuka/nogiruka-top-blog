<script setup lang='ts'>
defineProps<{
  id: string
}>()
</script>

<template>
  <div class=" text-black h-36  bg-emerald h-16 p-4 m-4 border-4 border-black border-solid">
    <div>{{ id }}</div>
  </div>
</template>

<style scoped lang='scss'>

</style>
