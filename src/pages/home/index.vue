<script setup lang='ts'>
import Display from '@/components/Display.vue'
import Hitokoto from '@/components/Hitokoto.vue'

// todo 响应式布局

fetch('/api')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
  })
</script>

<template>
  <Hitokoto />
  <Display />
</template>

<style lang="scss" scoped>
a,
p {
    color: white;
    text-shadow: 1px 0 4px black;
}

.centered-element {
    transform: translate(-50%, -50%);
}
</style>

<route lang="yaml">
</route>

<route lang="yaml">
meta:
  layout: home
</route>
