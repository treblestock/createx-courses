<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreBlogPosts } from '@/stores/blogPosts.js'

import BlogPostCard from '@/components/BlogPostCard.vue'
import BlogPostCard_row_s from '@/components/BlogPostCard_row_s.vue'

const storeBlogPosts = useStoreBlogPosts()

const props = defineProps({
  
})

const blogPosts = computed(() => storeBlogPosts.blogPosts.slice(0, 3) )


</script>

<template>
  <section class="blog-posts-grid__section section">
    <div class="blog-posts-grid__container container">

      <div class="blog-posts-grid">
        <div class="blog-posts-grid__header">
          <div class="blog-posts-grid__text">
            <div class="blog-posts-grid__label label">Ready to learn?</div>
            <h2 class="blog-posts-grid__title title">Featured blogPosts</h2>
          </div>
          <AppLink class="blog-posts-grid__btn btn-outl"
            :to="{
              name: 'blogPosts',
            }"
          >View all blogPosts</AppLink>
        </div>
        <div class="blog-posts-grid__items">
          <BlogPostCard v-for="blogPost in blogPosts" :key="blogPost.id" :='blogPost'></BlogPostCard>
        </div>
      </div>  

    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.blog-posts-grid
  &__section
    padding-top: 12rem
    padding-bottom: 18rem

  &__container



.blog-posts-grid
  &__header
    display: flex
    justify-content: space-between
    align-items: end

  &__text

  &__label

  &__title
    margin-top: 1rem

  &__btn


  &__items
    margin-top: 6rem
    display: grid
    grid-template-columns: repeat(3, minmax(39rem, 1fr) )
    grid-gap: 3rem


</style>