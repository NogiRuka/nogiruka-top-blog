<template>
    <div class="mt-0 p-2 bg-sky-500/50 z-50 flex justify-between">
        <div class="justify-inherit mr-4px flex flex-nowrap m-5px">
            <router-link to="/home">
                <!-- <div class="i-fluent-emoji-flat-rabbit" /> -->
                <img src="/favicon.png" class="w-auto" />のぎるか
            </router-link>
        </div>
        <div class="justify-end ml-4px flex z-20">
            <div class="m-5px">
                <router-link to="/home">
                    <div class="nogiruka-logo" />首页
                </router-link>
            </div>
            <div class="m-5px">
                <router-link to="/home">
                    <div class="i-carbon:home" />首页
                </router-link>
            </div>
            <div class="m-5px">
                <router-link to="/archives">
                    <div class="i-carbon:archive" />存档
                </router-link>
            </div>
            <div class="m-5px">
                <router-link to="/categories">
                    <div class="i-carbon:category" />分类
                </router-link>
            </div>
            <div class="m-5px">
                <router-link to="/tags">
                    <div class="i-carbon:tag-group" />标签
                </router-link>
            </div>
            <div class="m-5px">
                <router-link to="/about">
                    <div class="i-tabler:mood-heart" />关于
                </router-link>
            </div>
            <div class="m-5px">
                <router-link to="/links">
                    <div class="i-carbon:link" />友人帐
                </router-link>
            </div>
            <div class="m-5px">
                <router-link to="/timeline">
                    <div class="i-carbon:document-sentiment" />时光轴
                </router-link>
            </div>
        </div>
    </div>

    <footer class="fixed p-6 bottom-0 w-full">
        <div class="text-center font-bold text-with-shadow">
            <span id="timeDate"></span><span id="times"><i class="fa fa-spinner fa-spin"></i></span>
            <span id="busuanzi_container_site_pv">，浏览量：<span id="busuanzi_value_site_pv"><i
                        class="fa fa-spinner fa-spin"></i></span> 次</span>
            <span id="busuanzi_container_site_uv">，访客数：<span id="busuanzi_value_site_uv"><i
                        class="fa fa-spinner fa-spin"></i></span> 人</span>
        </div>
    </footer>
</template>

<script setup lang='ts'>

// 引入不蒜子计数
function createTime(): void {
    const now: Date = new Date();
    const grt: Date = new Date("10/15/2023 02:02:02");
    now.setTime(now.getTime() + 250);
    const timeDiff: number = now.getTime() - grt.getTime();

    const days: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes: number = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds: number = Math.floor((timeDiff / 1000) % 60);

    const hnum: string = hours.toString().padStart(2, "0");
    const mnum: string = minutes.toString().padStart(2, "0");
    const snum: string = seconds.toString().padStart(2, "0");

    document.getElementById("timeDate")!.innerHTML = `本站已运行 ${days} 天`;
    document.getElementById("times")!.innerHTML = `${hnum} 小时 ${mnum} 分 ${snum} 秒`;
}

setInterval(createTime, 250);

</script>

    
<style>
.text-with-shadow {
    color: rgb(255, 255, 255);
    /* 设置文字颜色 */
    text-shadow: 2px 2px 0 #17d72b, -1px -1px 0 #17d72b, 1px -1px 0 #17d72b, -1px 1px 0 #17d72b, 1px 1px 0 #17d72b;
    /* 设置文字阴影 */
}
</style>