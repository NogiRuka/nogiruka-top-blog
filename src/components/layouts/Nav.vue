<script setup lang='ts'>
import { ref } from 'vue'
import { NDropdown } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { useScroll } from '@vueuse/core'
import options from '@/locales/options'

const el = ref<HTMLElement | null>(null)
const { y } = useScroll(el)

console.log(`output->y`, y)

const { locale } = useI18n()

async function toggleLocale(lang: string) {
  if (typeof document !== 'undefined')
    document.querySelector('html')?.setAttribute('lang', lang)

  localStorage.setItem('locale', lang)
  locale.value = lang
}
</script>

<template ref="el">
  <nav fixed w-full top-0 z-999>
    <div class="bg-transparent backdrop-blur-xl p-4 flex justify-between  shadow-xl text-4">
      <!-- LEFT -->
      <RouterLink to="/">
        <div class="flex">
          <div i-icon:nogiruka />
          <span class="logo">{{ $t('header.name') }}
            <span class="big-logo">
              <div i-icon:nogiruka class="w-150 h-150" />
            </span>
          </span>
        </div>
      </RouterLink>
      <!-- RIGHT -->
      <div class="justify-end flex z-20">
        <RouterLink to="/home">
          <div class="mx-1 flex">
            <div i-carbon-home />{{ $t('header.home') }}
          </div>
        </RouterLink>
        <div class="mx-1 flex hov">
          <RouterLink to="/home">
            <div i-iconoir-page />{{ $t('header.articles') }}
          </RouterLink>
          <ul class="top-8 list-none absolute bg-white hidden subhov">
            <li>
              <RouterLink to="/archives">
                <div i-octicon-archive-24 />{{ $t('header.archives') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/categories">
                <div i-carbon-data-vis-1 />{{ $t('header.categories') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/tags">
                <div i-carbon:tag-group />{{ $t('header.tags') }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="mx-1 flex">
          <!-- <RouterLink to="/about">
                        <div i-tabler:mood-heart />{{ $t('header.about') }}
                    </RouterLink> -->
          <a href="https://github.com/NogiRuka" target="_blank">
            <div i-tabler:mood-heart />{{ $t('header.about') }} </a>
        </div>
        <div class="mx-1 flex">
          <RouterLink to="/friends">
            <div i-solar-link-round-angle-linear />{{ $t('header.friends') }}
          </RouterLink>
        </div>
        <div class="mx-1 flex">
          <RouterLink to="/timeline">
            <div i-carbon:document-sentiment />{{ $t('header.timeline') }}
          </RouterLink>
        </div>
        <div class="mx-1 flex text-white p-3px items-center">
          <NDropdown trigger="hover" :options="options" :on-select="toggleLocale">
            <div i-carbon-earth-filled :title="$t('button.toggle_langs')" />
          </NDropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang='scss'>
i {
  padding-right: .2rem;
}

a {
  color: white;
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
