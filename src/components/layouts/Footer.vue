<script setup lang='ts'>

let days: number
let hours: number
let minutes: number
let seconds: number
let hnum: string
let mnum: string
let snum: string

// 更新网站运行时间
function createTime(): void {
  const now: Date = new Date()
  // 网站创建时间
  const grt: Date = new Date('10/15/2023 02:02:02')
  
  now.setTime(now.getTime() + 250)
  const timeDiff: number = now.getTime() - grt.getTime()

  days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
  minutes = Math.floor((timeDiff / (1000 * 60)) % 60)
  seconds = Math.floor((timeDiff / 1000) % 60)

  hnum = hours.toString().padStart(2, '0')
  mnum = minutes.toString().padStart(2, '0')
  snum = seconds.toString().padStart(2, '0')
}

setInterval(createTime, 250)
</script>

<template>
  <footer class="box-shadow py-6  bottom-0  bg-white heti--classic">
    <div class="text-center text-xl text-with-shadow">
      <p>
        {{ $t('footer.base', { day: days, hour: hnum, minute: mnum, second: snum }) }}
        <span id="busuanzi_value_site_pv"><i i-svg-spinners-3-dots-rotate /></span>
        {{ $t('footer.base1') }}
        <span id="busuanzi_value_site_uv"><i i-svg-spinners-3-dots-rotate /></span>
        {{ $t('footer.base2') }}
      </p>

      <div class="flex justify-center items-center">
        <a href="https://github.com/NogiRuka/nogiruka-top-blog" target="_blank" class="text-black"><i i-carbon-logo-github />Github</a>
      </div>
    </div>
  </footer>
</template>

<style>
.box-shadow {
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
}
</style>
