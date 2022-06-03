<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()


const props = defineProps({
  
})

</script>

<template>
  <div class="blog-post-card">
    <div class="blog-post-card__img">
      <img src="@/assets/img/test.jpg" alt="">
        <div class="blog-post-card__img-labels">
      </div>
    </div>
    <div class="blog-post-card__body">
      <div class="blog-post-card__top">
        <span class="blog-post-card__date">sept 12</span>
      </div>
      <a href="" class="blog-post-card__title link">title</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.blog-post-card {
  width: 39rem;
  height: 10rem;
  display: flex;

  &__img {
    height: 10rem;
    width: 10rem;
    border-radius: $border-radius;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    margin-right: 2rem;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: start;
    
    > * + * {
      margin-top: 1rem;
    }
  }
  &__title {
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 700;
    color: $color-gray-900;
  }
  &__top {
    font-size: 1.4rem;
    line-height: 1.5;

    color: $color-gray-700;

    > * + * {
      &:before {
        content: '|';
        padding: 0 1rem;
      }
    }
  }
}

</style>