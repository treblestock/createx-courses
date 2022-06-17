<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import BlogPostsGrid from '@/components/sections/BlogPostsGrid.vue'
import ArticlesEmailingSubscribeForm from '@/components/sections/ArticlesEmailingSubscribeForm.vue';

const props = defineProps({
  
})






</script>

<template>
  <main class="blog-posts">
    <div class="blog-posts__label title_label">Our blog</div>
    <div class="blog-posts__title title">Createx School Journal</div>
    <div class="blog-posts__blog-posts-grid-section section">
      <div class="blog-posts__blog-posts-grid-container container">        
        <BlogPostsGrid class="blog-posts__blog-posts-grid"/>
      </div>
    </div>
    <div class="blog-posts__articles-emailing-subscribe-form-section section">
      <div class="blog-posts__articles-emailing-subscribe-form-container container">        
        <ArticlesEmailingSubscribeForm class="blog-posts__articles-emailing-subscribe-form"/>
      </div>
    </div>
    
    
  </main>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI


.blog-posts
  &__label
    margin-bottom: 1rem
    text-align: center

  &__title
    text-align: center

  &__blog-posts-grid-section
    padding: 8rem 0 18rem


  &__blog-posts-grid-container

  &__blog-posts-grid

  &__articles-emailing-subscribe-form-section
    padding: 0
    background: $color-gray-200

  &__articles-emailing-subscribe-form-container

  &__articles-emailing-subscribe-form





</style>