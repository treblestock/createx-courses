<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreBlogPosts } from '@/stores/BlogPosts.js'


const storeBlogPosts = useStoreBlogPosts()

const props = defineProps({
  id: [Number, String]
})

const blogPost = computed(() => storeBlogPosts.findBlogPost(props.id) )


</script>

<template>
  <article class="blog-post-card">
    <div class="blog-post-card__img">
      <Img :src="blogPost.img"/>
        <div class="blog-post-card__img-labels">
      </div>
    </div>
    <div class="blog-post-card__body">
      <div class="blog-post-card__top">
        <span class="blog-post-card__date">{{ blogPost.date.date }} {{ blogPost.date.month }}, {{ blogPost.date.year }}</span>
      </div>
      <AppLink class="blog-post-card__title link"
        :to="{
          name: 'blogPost',
          params: {blogPostId: blogPost.id},
        }"
      >{{ blogPost.title }}</AppLink>
    </div>
  </article>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.blog-post-card
  width: 39rem
  height: 10rem
  display: flex

  &__img
    flex: 0 0 10rem
    height: 10rem
    border-radius: $border-radius
    img
      width: 100%
      height: 100%
      object-fit: cover
    

    margin-right: 2rem
  
  &__body
    display: flex
    flex-direction: column
    align-items: start
    
    > * + *
      margin-top: 1rem
    
  
  &__title
    font-size: 1.6rem
    line-height: 1.6
    font-weight: 700
    color: $color-gray-900
  
  &__top
    font-size: 1.4rem
    line-height: 1.5

    color: $color-gray-700

    > * + *
      &:before
        content: '|'
        padding: 0 1rem
      
    
  


</style>