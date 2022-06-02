<script setup>
import { ref, computed, watch } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'


import Nav from '@/components/Nav.vue'
import Post from '@/components/Post.vue'

import { useVirtualPagination } from '@/components/composable/useVirtualPagination.js'

const route = useRoute()
const router = useRouter()






const posts = ref([])

const {
  limit,
  pages,
  currentPage,
  currentPageItems: currentPagePosts,
} = useVirtualPagination(posts)

limit.value = 10






onMounted(async () => {
  // posts.value = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(r => r.json())
})

</script>

<template>
  <Nav></Nav>
  <RouterView></RouterView>
  <!-- <div class="posts">
    <div class="pagination">
      <button class="pagination__item"
        v-for="page in pages" :key="page.id"
        @click="currentPage = page"
      >
        {{page}}
      </button>
    </div>

    <div class="limiter">
      <div class="limiter__value">Кол-во постов на странице: {{limit}}</div>
      <button class="limiter__btn" @click="limit++">+</button>
      <button class="limiter__btn" @click="limit--">-</button>
    </div>


    <Post v-for="post in currentPagePosts" :key="post.id" :='post'/>
  </div> -->
</template>

<style lang="scss">
// Preset
@import '@/assets/css/_null';
@import '@/assets/css/_helpers';

html,
body {
  font-size: 10px;
}
body * {
  font-size: 2rem;
}

#app {

}
</style>

<style scoped lang="scss">
@import '@/assets/css/_helpers';
@import '@/assets/css/_vars';

.search {
  border: 1px solid #000;
}

.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 2rem;
  
  > * + * {
    margin-left: 1rem;
  }
  &__item {
    padding: 0.5rem;
    text-align: center;
    box-shadow: 0 0 0 1px #000;
  }
}


.limiter {
  display: flex;
  flex-direction: row;
  align-items: center;
  
  margin-bottom: 5rem;
  > * + * {
    margin-left: 1rem;
  }
  &__value {
    font-weight: 700;
  }
  &__btn {
    padding: 1rem;
    background: #eee;
  }

}



</style>