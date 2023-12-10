<script setup lang="ts">
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import BLOG from '@/BLOG'
</script>

<template>
  <Header />
  <main>
    <div :class="'w-full flex flex-col items-center justify-center bg-[' + BLOG.MAIN_BG_COLOR + ']'">
      <RouterView />
    </div>
  </main>
  <Footer />
</template>

<style scoped lang="scss"></style>
