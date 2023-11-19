<template>
    <Header />
    <Hitokoto />
    <Display />
    <Footer />
</template>
    
<script setup lang='ts'>
import Header from "@/components/Header.vue"
import Display from '@/components/Display.vue'
import Footer from '@/components/Footer.vue'
import Hitokoto from '@/components/Hitokoto.vue';

//todo 响应式布局



</script>
    
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
