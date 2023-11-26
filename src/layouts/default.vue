<template>
  <main
    px-4 py-10
    text="center gray-700 dark:gray-200"
  >
    <RouterView />
    
    <div mx-auto mt-5 text-center text-sm opacity-50>
      [Default Layout]
    </div>
    <Footer />
  </main>
</template>
  
<script setup lang='ts'>
import Footer from '@/components/Footer.vue';
</script>
  
<style scoped lang='scss'>
  
</style>
