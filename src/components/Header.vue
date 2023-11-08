<template>
    <div class="w-full h-screen bg-cover" style="background-image: url('/bg-5.webp')">
        <div
            class=" heti--classic bg-transparent backdrop-blur-xl mt-0 p-2  z-50 flex justify-between rounded-b-lg shadow-xl ">
            <div class=" justify-inherit flex flex-nowrap z-20 ">
                <router-link to="/">
                    <img src="/nogiruka-logo.svg" class="w-6 h-6 pr-1" />
                    <span class="logo ">乃木流架
                        <span class="big-logo">
                            <img src="/nogiruka-logo.svg" class="w-150 h-150" />
                        </span>
                    </span>
                </router-link>
            </div>
            <div class="justify-end flex z-20">
                <div class="mx-1  flex ">
                    <router-link to="/home">
                        <i i-carbon-home />首页
                    </router-link>
                </div>
                <div class="mx-1  flex ">
                    <router-link to="/home">
                        <i i-iconoir-page />文章
                    </router-link>
                    <ul class="top-8 list-none absolute bg-white ">
                        <li>
                            <router-link text-black to="/archives">
                                <i i-octicon-archive-24 />归档
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/categories">
                                <i i-carbon-data-vis-1 />分类
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/tags">
                                <i i-carbon:tag-group />标签
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="mx-1 flex">
                    <router-link to="/about">
                        <i i-tabler:mood-heart />关于
                    </router-link>
                </div>
                <div class=" mx-1 flex">
                    <router-link to="/links">
                        <i i-solar-link-round-angle-linear />友人帐
                    </router-link>
                </div>
                <div class=" mx-1 flex">
                    <router-link to="/timeline">
                        <i i-carbon:document-sentiment />时光轴
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

//todo 背景图片切换 图片来源显示

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
a {
    border: 1px dashed transparent;
    /* color: white; */
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
    top: 66px;
    left: -88px;
    z-index: 50;
    display: none;
}

.logo:hover .big-logo {
    display: block;
}
</style>