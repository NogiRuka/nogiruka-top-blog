<script lang='ts' setup>
/*
  a 动画
  b 漫画
  c 游戏
  d 文学
  e 原创
  f 来自网络
  g 其他
  h 影视
  i 诗词
  j 网易云
  k 哲学
  l 抖机灵
*/
fetch('https://v1.hitokoto.cn?c=d&c=i&c=k')
  .then((response: Response) => response.json())
  .then((data: {
    uuid: string
    hitokoto: string
    from_who: string
    from: string
  }) => {
    console.log(`output->一言接口返回数据`, data)
    const hitokoto = document.querySelector('#hitokoto_text') as HTMLAnchorElement
    const from_who = document.querySelector('#from_who') as HTMLElement
    const from = document.querySelector('#from') as HTMLElement
    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
    hitokoto.textContent = data.hitokoto
    from_who.textContent = data.from_who
    from.textContent = data.from
  })
  .catch(console.error)
</script>

<template>
  <div id="hitokoto" class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm">
    <div class="bg-transparent  rounded-lg text-xl justify-center px-20 w-240 h-80 flex flex-col justify-items-stretch heti font-qingke text-white">
      <div class="pt-5 !text-3xl ">
        <a id="hitokoto_text" href="#" target="_blank">
          {{ $t('hitokoto.loading') }}
        </a>
      </div>
      <div class="flex flex-nowrap justify-end text-right mt-4 text-2xl">
        <p class="">
          ——
          <span id="from_who" />
          「
          <span id="from" />
          」
        </p>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
#hitokoto {
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3CforeignObject width='100%25' height='100%25'%3E%3Cbody class='wrap' xmlns='http://www.w3.org/1999/xhtml'%3E%3Cstyle%3E.wrap%7Bbox-sizing:border-box;margin:0;height:100%25;padding:10px%7D.shadow%7Bheight:100%25;background:%23000;border-radius:10px;box-shadow:0 0 5px %23000,0 0 10px %23000,0 0 15px %23000%7D%3C/style%3E%3Cdiv class='shadow'/%3E%3C/body%3E%3C/foreignObject%3E%3C/svg%3E");
}
</style>
