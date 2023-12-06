<script setup lang='ts'>
defineProps({
  options: {
    type: String,
    default: 'NogiDropdown'
  }
})
</script>

<template>
  <p>
    {{ options }}
  </p>
</template>

<style scoped lang='scss'>

</style>
