<script setup lang='ts'>
defineProps<{
  type: 'route' | 'article'
  info?: any
}>()
</script>

<template>
  <div class="absolute border-test text-8xl">
    <section v-if="type === 'route'">
      <div >{{ info }}</div>
    </section>
    <section v-else>
      <div >{{ info }}</div>
    </section>
  </div>
</template>

<style scoped lang='scss'>

</style>
