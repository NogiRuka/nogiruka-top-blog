<script setup lang="ts">
import Nav from '@/components/layouts/Nav.vue'
import Bg from '@/components/layouts/Bg.vue'
</script>

<template>
  <header>
    <Nav />
    <Bg />
  </header>
</template>

<style lang="scss" scoped>
a {
  border: 1px dashed transparent;
}

a:hover {
  border-color: #fcd8d8;
}

.text-with-shadow {
  color: white;
  text-shadow: 2px 0 4px black;
}
</style>
