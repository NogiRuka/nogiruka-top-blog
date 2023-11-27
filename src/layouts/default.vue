<script setup lang='ts'>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />

    <div mx-auto mt-5 text-center text-sm opacity-50>
      [Default Layout]
    </div>
  </main>
  <Footer />
</template>

<style scoped lang='scss'>

</style>
