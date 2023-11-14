<template>
        <div id="hitokoto" class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm">
          <div class="bg-transparent  rounded-lg text-xl justify-center px-6 w-180 h-60 flex flex-col justify-items-stretch heti font-qingke
            ">
              <div class="pt-5 !text-3xl ">
                  <a href="#" target="_blank" id="hitokoto_text">
                      {{ $t('hitokoto.loading') }}
                  </a>
              </div>
              <div class="flex flex-nowrap justify-end text-right mt-4 text-2xl">
                  <p class="text-white">
                      ——
                      <span id="from_who"></span>
                      「
                      <span id="from"></span>
                      」
                  </p>
              </div>
          </div>
      </div>
</template>
  
<script lang='ts' setup>
/*
a	动画
b	漫画
c	游戏
d	文学
e	原创
f	来自网络
g	其他
h	影视
i	诗词
j	网易云
k	哲学
l	抖机灵
*/
fetch('https://v1.hitokoto.cn?c=d&c=i&c=k')
  .then((response: Response) => response.json())
  .then((data: {
    uuid: string;
    hitokoto: string;
    from_who: string;
    from: string;
  }) => {
    console.log(`output->一言接口返回数据`, data)
    const hitokoto = document.querySelector('#hitokoto_text') as HTMLAnchorElement;
    const from_who = document.querySelector('#from_who') as HTMLElement;
    const from = document.querySelector('#from') as HTMLElement;
    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`;
    hitokoto.innerText = data.hitokoto;
    from_who.innerText = data.from_who;
    from.innerText = data.from;
  })
  .catch(console.error);
</script>
  
<style lang='scss' scoped>

</style>
