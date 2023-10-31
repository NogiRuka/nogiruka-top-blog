<template>
    <Header />
    <!-- 请注意，以下的示例包含超链接，您可能需要手动配置样式使其不变色。如果您嫌麻烦，可以移除。 -->
    <div id="hitokoto" class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-1/2">
        <div class="bg-transparent backdrop-blur-4px rounded-lg text-xl justify-center px-6 w-180 h-60 flex flex-col justify-items-stretch heti font-qingke
            ">
            <div class="pt-5 !text-3xl ">
                <a href="#" target="_blank" id="hitokoto_text" class="font-qingke">
                    (＾ｖ＾) 小兔子正在努力加载中...
                </a>
            </div>
            <div class="flex flex-nowrap justify-end text-right mt-4 text-2xl">
                <p>
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
    
<script setup lang='ts'>
import Header from "@/components/Header.vue";

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
        console.log(data);
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
    
<style scoped>
/* @font-face {
    font-family: "qingke";
    src: url("/src/assets/fonts/qingke.ttf") format("truetype")
}

.font-qingke {
    font-family: 'qingke', sans-serif;
} */

a,
p {
    color: white;
    text-shadow: 1px 0 4px black;
}

.centered-element {
    transform: translate(-50%, -50%);
}
</style>