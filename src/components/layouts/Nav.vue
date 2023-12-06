<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { NDropdown } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import options from '@/locales/options'


const { locale } = useI18n()

const navMenu = [
  {
    title: 'header.home',
    url: '/',
    icon: 'i-carbon-home',
  },
  {
    title: 'header.articles',
    url: '/articles',
    icon: 'i-iconoir-page',
    sub: [
      {
        title: 'header.archives',
        url: '/archives',
        icon: 'i-carbon-earth-filled',
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
    ],
  },
  {
    title: 'header.talks',
    url: '/talks',
    icon: 'i-carbon-chat',
  },
  {
    title: 'header.about',
    url: '/about',
    icon: 'i-tabler:mood-heart',
  },
  {
    title: 'header.more',
    url: '/more',
    to: false,
    icon: 'i-ci-more-grid-big',
    sub: [
      {
        title: 'header.messages',
        url: '/messages',
        icon: 'i-ic-outline-mark-unread-chat-alt',
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
    ],
  },
]

// 导航菜单
console.log(`output->navMenu`, navMenu)

// 滚动事件
const scrollY = ref(window.scrollY)
const navHide = ref(false)
const textWhite = ref(true)
const scroll = () => {
  scrollY.value = window.scrollY
}
watch(scrollY, (newValue, oldValue) => {
  // console.log('ScrollY changed:', newValue)
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
  <nav fixed w-full top-0 z-999 transition ease-out duration-300 :class="[{ 'nav-hide': navHide, 'text-white':textWhite }, '-translate-y-0']">
    <div class="bg-transparent h-12 flex justify-between text-4 shadow-xl" :class="[{  },'']">
      <!-- LEFT -->
      <div class="nav-left flex items-center">
        <RouterLink to="/">
          <span i-icon:nogiruka class="mr-2px" />
          <span class="sm:block hidden">{{ $t('header.name') }}</span>
        </RouterLink>
        <span class="big-logo">
          <div i-icon:nogiruka class="w-150 h-150" />
        </span>
      </div>
      <!-- RIGHT -->
      <div class="nav-right flex items-center">
        <div v-for="(item, index) in navMenu" :key="index">
          <!-- REDIRECTION -->
          <RouterLink :to="item.url" :title="$t(item.title)" v-if="item.to === undefined">
            <span :class="item.icon" />
            <div class="hidden md:flex">
              {{ $t(item.title) }}
            </div>
            <!-- DROPDOWN -->
            <ul class="dropdown-ul transition ease-in-out duration-300" v-if="item.sub !== undefined">
              <li v-for="(sub, index) in item.sub" :key="index" class="dropdown-li">
                <RouterLink :to="sub.url" :title="$t(sub.title)">
                  <span :class="sub.icon" />
                  <div class="text-nowrap">
                    {{ $t(sub.title) }}
                  </div>
                </RouterLink>
              </li>
            </ul>
          </RouterLink>
          <!-- NO REDIRECTION -->
          <a cursor-default :title="$t(item.title)" v-else>
            <span :class="item.icon" />
            <div class="text-nowrap">
              {{ $t(item.title) }}
            </div>
            <!-- DROPDOWN -->
            <ul class="dropdown-ul transition ease-in-out duration-300" v-if="item.sub !== undefined">
              <li v-for="(sub, index) in item.sub" :key="index" class="dropdown-li">
                <RouterLink :to="sub.url" :title="$t(sub.title)">
                  <span :class="sub.icon" />
                  <div class="text-nowrap">
                    {{ $t(sub.title) }}
                  </div>
                </RouterLink>
              </li>
            </ul>
          </a>
        </div>
        <a>
          <NDropdown trigger="hover" :options="options" @select="toggleLocale">
            <div i-carbon-earth-filled :title="$t('button.toggle_langs')" />
          </NDropdown>
        </a>
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

nav {
  backdrop-filter: blur(8px) brightness(1.2);
  -webkit-backdrop-filter: blur(8px) brightness(1.2);
}

.nav-left {
  a {
    display: flex;
    align-items: center;
    margin-left: .5rem;
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
    margin: 0 0.2rem;
    padding: 0 0.5rem;
    justify-content: center;

    &:hover {
      .dropdown-ul {
        display: block;

        a:hover {
          background-color: rgb(243, 181, 181);
        }
      }
    }

    .dropdown-ul {
      display: none;
      position: absolute;
      top: 100%;
      // background-color: #159bd4;
      // background-color: black;
      opacity: 1;
      backdrop-filter: blur(10px);
      border-radius: 5px;
      transition: all 0.3s ease-in-out;

      .dropdown-li {
        width: auto;
        margin: 0.4rem 0;
      }
    }

    span {
      margin-right: 2px;
    }
  }
}
</style>
