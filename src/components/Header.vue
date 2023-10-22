<template>
    <div class="mt-0 p-2 bg-sky-500/50 z-50 flex justify-between rounded-lg">
        <div class="justify-inherit flex flex-nowrap z-20">
            <router-link to="/">
                <img src="/nogiruka-logo.svg" class="w-6 h-6 pr-1" />
                <span class="logo">乃木流架
                    <span class="big-logo">
                        <img src="/nogiruka-logo.svg" class="w-150 h-150" />
                    </span>
                </span>
            </router-link>
        </div>
        <div class="justify-end flex z-20">
            <div class="mx-1  flex ">
                <router-link to="/home">
                    <div class="i-carbon:home " />首页
                </router-link>
            </div>
            <div class="mx-1 flex">
                <router-link to="/archives">
                    <div class="i-carbon:archive " />存档
                </router-link>
            </div>
            <div class="mx-1 flex">
                <router-link to="/categories">
                    <div class="i-carbon:category" />分类
                </router-link>
            </div>
            <div class="mx-1  flex">
                <router-link to="/tags">
                    <div class="i-carbon:tag-group" />标签
                </router-link>
            </div>
            <div class="mx-1 flex">
                <router-link to="/about">
                    <div class="i-tabler:mood-heart" />关于
                </router-link>
            </div>
            <div class=" mx-1 flex">
                <router-link to="/links">
                    <div class="i-carbon:link" />友人帐
                </router-link>
            </div>
            <div class=" mx-1 flex">
                <router-link to="/timeline">
                    <div class="i-carbon:document-sentiment" />时光轴
                </router-link>
            </div>
        </div>
    </div>

    <!-- <div id="fireworks-container"></div> -->

    <footer class="fixed p-4 bottom-0 w-full">
        <div class="text-center font-medium text-with-shadow">
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

    
<style scoped>
#fireworks-container {
    background-color: #fcd8d8;
    position: relative;
    width: 100%;
    height: 100vh;
}

.firework {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff0000;
    pointer-events: none;
    animation: explode 1s forwards;
}

@keyframes explode {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(10);
        opacity: 0;
    }
}

a {
    border: 1px dashed transparent;
    color: white;
    /* background-color: aquamarine; */
}

a:hover {
    border-color: #fcd8d8;
}

.text-with-shadow {
    color: white;
    text-shadow: 2px 0 4px black;
}

.logo {
    position: relative;
    display: inline-block;
}

.big-logo {
    position: absolute;
    top: 30px;
    left: -88px;
    z-index: 50;
    display: none;
}

.logo:hover .big-logo {
    display: block;
}
</style>