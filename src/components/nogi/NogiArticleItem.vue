<script setup lang="ts">
defineProps<{
  article: any
}>()
</script>

<template>
  <article class="my-4">
    <div class="flex flex-row text-black h-56 bg-cover overflow-hidden border-test">
      <!-- ARTICLE COVER -->
      <RouterLink :to="'/articles/' + article.id" class="w-1/2">
        <img :src="article.cover" alt="文章封面" class="w-full h-full object-cover" />
      </RouterLink>
      <!-- ARTICLE INFO -->
      <div class=" w-1/2 h-inner flex flex-col ">
        <div class="mx-4  h-full flex flex-col justify-center">
          <!-- ARTICLE PROPERTIES -->
          <ul class="text-3 text-[#999999] flex flex-col  ">
            <li>
              <span i-material-symbols-calendar-clock-outline />
              {{ article.createdAt }}
            </li>
            <li flex mt-1>
              <section mr-4>
                <span i-carbon-data-vis-1 />
                <RouterLink :to="'/categories/' + article.category?.name">
                  {{ article.category?.name ?? '暂无分类' }}
                </RouterLink>
              </section>
              <section flex>
                <span i-carbon:tag-group />
                <div v-for="tag in article.tags" v-if="article.tags.length > 0">
                  <RouterLink :to="'/tags/' + tag.name">
                    {{ tag.name }}
                  </RouterLink>
                  <em v-if="tag.name !== article.tags[article.tags.length - 1].name" class="mx-1">·</em>
                </div>
                <div v-else>
                  <RouterLink to="/tags/undefined">
                    暂无标签
                  </RouterLink>
                </div>
              </section>
            </li>
          </ul>
          <!-- ARTICLE TITLE -->
          <RouterLink :to="'/articles/' + article.id" :title="article.title">
            <h1 class="text-xl  font-bold truncate">
              {{ article.title }}
            </h1>
          </RouterLink>
          <!-- ARTICLE SUMMARY -->
          <div class="nogi-summary ">
            {{ article.summary ?? '暂无简介' }}
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
ul {
  li {
    margin-right: 0.5rem;
  }
}

section {
  span {
    margin-right: 0.2rem;
  }
}

.nogi-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.nogi-summary {
  color: #6a6a6a;
  font-size: 14px;
  line-height: 1.4rem;
  overflow: hidden;/*隐藏多出部分文字*/
  text-overflow: ellipsis;/*用省略号代替多出部分文字*/
  display: -webkit-box;/* 显示多行文本容器 */
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;/*显示行数*/
}
</style>
