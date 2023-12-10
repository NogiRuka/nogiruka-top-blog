<script setup lang="ts">
defineProps<{
  article: any
}>()
</script>

<template>
  <article class="my-4">
    <div class="flex flex-row text-black h-56 bg-cover border-test overflow-hidden">
      <!-- ARTICLE COVER -->
      <RouterLink :to="'/articles/' + article.id" class="w-1/2">
        <img :src="article.cover" alt="文章封面" class="w-full h-full object-cover" />
      </RouterLink>
      <!-- ARTICLE INFO -->
      <div class="bg-yellow w-1/2">
        <ul class="m-4 text-3 text-[#999999] flex flex-row bg-white">
          <li>
            <span i-material-symbols-calendar-clock-outline />
            {{ article.createdAt }}
          </li>
          <li>
            <span i-carbon-data-vis-1 />
            <RouterLink :to="'/categories/' + article.category.name">
              {{ article.category.name }}
            </RouterLink>
          </li>
          <li>
            <span i-carbon:tag-group />
            <RouterLink :to="'/tags/' + article.tags[0].name">
              {{ article.tags[0].name }}
            </RouterLink>
          </li>
        </ul>
        <h1 text-xl mx-4>{{ article.title }}</h1>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">

ul {

  li {
  margin-right: .5rem;
  }
}

</style>
