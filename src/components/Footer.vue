<template>
    <footer class="my-8  bottom-0  bg-white heti--classic">
        <div class="text-center text-xl text-with-shadow">
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
    
<style></style>