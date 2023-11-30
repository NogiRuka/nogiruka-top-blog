<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, h } from 'vue'
import { NDropdown, NIcon } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import options from '@/locales/options'

const renderIcon = (icon: string) => {
  return () => {
    return h('div', { class: icon })
  }
}

const { locale } = useI18n()
const navMenu = [
  {
    title: 'header.home',
    url: '/',
    icon: 'i-carbon-home',
    sub: [
      {
        label: '简体',
        icon: renderIcon('i-carbon-earth-filled'),
      },
      {
        label: '繁體',
        icon: renderIcon('i-carbon-earth-filled'),
      },
      {
        label: '日本語',
        icon: renderIcon('i-carbon-earth-filled'),
      },
    ]
  },
  {
    title: 'header.archives',
    url: '/archives',
    icon: 'i-iconoir-page',
  },
  {
    title: 'header.categories',
    url: '/categories',
    icon: 'i-carbon-data-vis-1',
  },
  {
    title: 'header.tags',
    url: '/tags',
    icon: 'i-carbon:tag-group',
  },
  {
    title: 'header.about',
    url: '/about',
    icon: 'i-tabler:mood-heart',
  },
  {
    title: 'header.friends',
    url: '/friends',
    icon: 'i-solar-link-round-angle-linear',
  },
  {
    title: 'header.timeline',
    url: '/timeline',
    icon: 'i-carbon:document-sentiment',
  },
]

console.log(`output->navMenu`, navMenu)

// 滚动事件
const scrollY = ref(window.scrollY)
const navHide = ref(false)
const textWhite = ref(true)
const scroll = () => {
  scrollY.value = window.scrollY
}
watch(scrollY, (newValue, oldValue) => {
  console.log('ScrollY changed:', newValue)
  if (newValue > oldValue) {
    navHide.value = true
  } else {
    navHide.value = false
  }
  
  if (newValue > 100) {
    textWhite.value = false
  } else {
    textWhite.value = true
  }
})

onMounted(() => {
  window.addEventListener('scroll', scroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', scroll)
})

// 国际化
async function toggleLocale(lang: string) {
  if (typeof document !== 'undefined') {
    document.querySelector('html')?.setAttribute('lang', lang)
  }
  localStorage.setItem('locale', lang)
  locale.value = lang
}


</script>

<template>
  <nav  fixed w-full top-0 z-999 transition ease-in-out duration-300 :class="[{ 'nav-hide': navHide, 'text-white': textWhite }, '-translate-y-0']">
    <div class="bg-transparent backdrop-blur-xl shadow-xl h-12 flex justify-between text-4">
      <!-- LEFT -->
      <div class="nav-left flex">
        <RouterLink to="/">
          <span i-icon:nogiruka class="mr-2px" />
          <span class="sm:block hidden">{{ $t('header.name') }}</span>
        </RouterLink>
        <span class="big-logo">
          <div i-icon:nogiruka class="w-150 h-150" />
        </span>
      </div>
      <!-- RIGHT -->
      <div class="nav-right md:flex hidden">
        <!-- <div class="mx-1 flex text-white p-3px items-center">
          <NDropdown trigger="hover" :options="undefined" >
            <div>
            <div i-carbon-earth-filled />首页
            </div>
          </NDropdown>
        </div> -->
        <!-- <RouterLink :to="item.url" v-for="(item, index) in navMenu" :key="index">
          <span :[item.icon]="''" class="mr-2px" />
          {{$t(item.title)}}
           <ul class="drop absolute list-none w-full top-10 bg-black mt-2">
              <li>scss</li>
              <li>jquery</li>
              <li>html</li>
          </ul>  
        </RouterLink> -->
        
        <NDropdown trigger="hover" :options="item.sub" v-for="(item, index) in navMenu" :key="index">
          <RouterLink :to="item.url" v-if="item.sub === undefined">
            <span :[item.icon]="''" class="mr-2px" />
            {{$t(item.title)}}
          </RouterLink>
          <!-- DROPDOWN -->
          <a v-else class="select-none">
            <span :[item.icon]="''" class="mr-2px" />
            {{$t(item.title)}}
          </a>
        </NDropdown>
        
        <div class="mx-1 flex text-white p-3px items-center">
          <NDropdown trigger="hover" :options="options" :on-select="toggleLocale">
            <div i-carbon-earth-filled :title="$t('button.toggle_langs')" />
          </NDropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.big-logo {
  position: fixed;
  top: 5rem;
  left: 0;
  z-index: 50;
  // background-color: bisque;
  display: none;
}


.nav-hide {
  transform: translateY(-100%);
}

.nav-left {
  a {
    display: flex;
    align-items: center;
  }
  
  &:hover {
    .big-logo {
      display: block;
    }
  }
}

.nav-right {
  a {
    display: flex;
    position: relative;
    align-items: center;
    margin-left: 0.5rem;
    
    &:hover {
     background-color: aqua;
    }

  }
}
</style>
