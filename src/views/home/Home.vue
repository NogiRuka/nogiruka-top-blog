<template>
    <div class="w-full h-screen bg-cover" style="background-image: url('src/assets/img/bg.png')">
        <Header />
        <!-- 请注意，以下的示例包含超链接，您可能需要手动配置样式使其不变色。如果您嫌麻烦，可以移除。 -->
        <div id="hitokoto" class="absolute top-1/2 left-1/2 centered-element"
            style='font-size: 20px; font-family: " Times New Roman",Georgia,Serif;'>
            <div class="bg-#17d72b rounded-lg p-5px flex flex-nowrap text-xl ">
                <a href="#" target="_blank" id="hitokoto_text" style="color:white;">:D 获取中...</a>
                <a style="color:white;">——</a>
                <a id="from_who" style="color:white;"></a>
                <a style="color:white;"> 「</a>
                <a id="from" style="color:white;"></a>
                <a style="color:white;">」</a>
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

// fetch('https://v1.hitokoto.cn?c=d&c=i')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         const hitokoto = document.querySelector('#hitokoto_text')
//         const from_who = document.querySelector('#from_who')
//         const from = document.querySelector('#from')
//         hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
//         hitokoto.innerText = data.hitokoto
//         from_who.innerText = data.from_who
//         from.innerText = data.from
//     })
//     .catch(console.error)

fetch('https://v1.hitokoto.cn?c=d&c=i')
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
    
<style>
.centered-element {
    transform: translate(-50%, -50%);
}
</style>