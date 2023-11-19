<template>
  
  <div class="w-full h-screen bg-cover" style="background-image: url('/bg-6.webp')">
    <nav fixed w-full top-0>
      <div class="font-sans bg-transparent backdrop-blur-xl mt-0 p-2 z-50 flex justify-between rounded-b-lg shadow-xl">
        <div class="justify-inherit flex flex-nowrap z-20">
          <router-link to="/">
            <!-- <img src="/nogiruka-logo.svg" class="w-6 h-6 pr-1" />
                     -->
            <div inline-block i-icon:nogiruka />
            <span class="logo"
              >{{ $t('header.name') }}
              <span class="big-logo">
                <div i-icon:nogiruka class="w-150 h-150" />
              </span>
            </span>
          </router-link>
        </div>
        <div class="justify-end flex z-20">
          <div class="mx-1 flex">
            <router-link to="/home"> <i i-carbon-home />{{ $t('header.home') }} </router-link>
          </div>
          <div class="mx-1 flex hov">
            <router-link to="/home"> <i i-iconoir-page />{{ $t('header.articles') }} </router-link>
            <ul class="top-8 list-none absolute bg-white hidden subhov">
              <li>
                <router-link to="/archives"> <i i-octicon-archive-24 />{{ $t('header.archives') }} </router-link>
              </li>
              <li>
                <router-link to="/categories"> <i i-carbon-data-vis-1 />{{ $t('header.categories') }} </router-link>
              </li>
              <li>
                <router-link to="/tags"> <i i-carbon:tag-group />{{ $t('header.tags') }} </router-link>
              </li>
            </ul>
          </div>
          <div class="mx-1 flex">
            <!-- <router-link to="/about">
                        <i i-tabler:mood-heart />{{ $t('header.about') }}
                    </router-link> -->
            <a href="https://github.com/NogiRuka" target="_blank"> <i i-tabler:mood-heart />{{ $t('header.about') }} </a>
          </div>
          <div class="mx-1 flex">
            <router-link to="/friends"> <i i-solar-link-round-angle-linear />{{ $t('header.friends') }} </router-link>
          </div>
          <div class="mx-1 flex">
            <router-link to="/timeline"> <i i-carbon:document-sentiment />{{ $t('header.timeline') }} </router-link>
          </div>
          <div class="mx-1 flex">
            <a href="">
            <n-dropdown trigger="hover" :options="options" :on-select="toggleLocales">
                <i i-carbon-earth-filled :title="$t('global.toggle_langs')" />
            </n-dropdown>
            </a>
          </div>

        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { NDropdown } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import options from '@/locales/options'

const { locale } = useI18n()

function toggleLocales(key: string) {
  // console.log(key);
  locale.value = key
}

//todo 背景图片切换 图片来源显示
</script>

<style lang="scss" scoped>
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

.hov:hover .subhov {
  display: block;
}

.subhov a {
  color: black;
}
</style>
