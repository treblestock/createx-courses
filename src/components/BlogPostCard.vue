<script setup>
import { ref, computed, watch } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

import { useStoreBlogPosts } from '@/stores/BlogPosts.js'

const route = useRoute()
const router = useRouter()



const storeBlogPosts = useStoreBlogPosts()

const props = defineProps({
  id: [Number, String],
})

const blogPost = computed(() => storeBlogPosts.findBlogPost(props.id))
</script>

<template>
  <div class="blog-post-card" v-if="blogPost">
    <div class="blog-post-card__img">
      <Img :src="blogPost.img" />
      <div class="blog-post-card__img-labels">
        <div class="blog-post-card__img-label">{{ blogPost.postType }}</div>
      </div>
    </div>
    <div class="blog-post-card__body">
      <div class="blog-post-card__top">
        <span class="blog-post-card__category">{{ blogPost.category }}</span>
        <span class="blog-post-card__date">{{ blogPost.date.date }} {{ blogPost.date.month }}</span>
        <span class="blog-post-card__time-to-read">{{ blogPost.timeToRead }} min</span>
      </div>
      <AppLink class="blog-post-card__title link"
        :to="{
          name: 'blogPost',
          params: {blogPostId: blogPost.id},
        }"
      >{{ blogPost.title}}</AppLink>
      <div class="blog-post-card__description">{{ blogPost.description}}</div>
      <AppLink class="blog-post-card__read-link link"
        :to="{
          name: 'blogPost',
          params: {blogPostId: blogPost.id},
        }"
      >Read</AppLink>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.blog-post-card
  width: 39rem

  &__img
    height: 30rem
    border-radius: $border-radius

    position: relative
    img
      position: absolute
      top: 0
      left: 0

      width: 100%
      height: 100%
      object-fit: cover
   

    margin-bottom: 1.6rem
 
  &__img-labels
    width: 100%
    height: 100%

    padding: 1.2rem
    display: grid
    grid-template-columns: repeat(2, auto)
    align-items: center
    justify-items: center
 

  &__img-label
    padding: 0.4rem
    border-radius: $border-radius
    margin-bottom: .5rem

    background: $color-white
    
    font-size: 1.4rem
    line-height: 1.5
    color: $color-black

  &__label    
    padding: 0.2rem
    margin-bottom: .5rem

    border-radius: $border-radius
    background: $color-green-light

    font-size: 1.4rem
    line-height: 1.5
    color: $color-white
 
  &__body
    display: flex
    flex-direction: column
    align-items: start
    justify-content: space-between
    
    > * + *
      margin-top: 1rem
   
  &__top
    font-size: 1.4rem
    line-height: 1.5

    color: $color-gray-700

    > * + *
      &:before
        content: '|'
        padding: 0 1rem   
 
  &__category
 
  &__date

  &__title
    font-size: 2rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900
  
  &__description

  &__read-link
    font-weight: 700



</style>