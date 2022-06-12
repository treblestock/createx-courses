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
  <div class="blogPosts">
    <div class="blogPosts__label title_label">Our blog</div>
    <div class="blogPosts__title title">Createx School Journal</div>
    <BlogPostsGrid class="blogPosts__BlogPosts-grid"/>
    <ArticlesEmailingSubscribeForm/>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.blogPosts
  &__section
    padding-top: 8rem
  &__container


.blogPosts
  &__label
    margin-bottom: 1rem
    text-align: center

  &__title
    text-align: center

  &__BlogPosts-grid
    margin-top: 6rem
    padding-bottom: 22rem





</style>