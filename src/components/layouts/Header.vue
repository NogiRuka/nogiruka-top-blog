<script setup lang="ts">
import Nav from '@/components/layouts/Nav.vue'

</script>

<template>
  <header>
    <Nav />
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
