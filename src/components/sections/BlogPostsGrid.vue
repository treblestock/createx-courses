<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreBlogPosts } from '@/stores/BlogPosts.js'
import { useStoreBlogPostsFilters } from '@/stores/BlogPostsFilters.js'

import BlogPostCard from '@/components/BlogPostCard.vue'


const storeBlogPosts = useStoreBlogPosts()
const storeBlogPostsFilters = useStoreBlogPostsFilters()


const props = defineProps({
  
})

// filters
const blogPostsFiltered = computed(() => storeBlogPostsFilters.blogPostsFiltered || [])



const postTypes = computed(() => 
  [...storeBlogPosts.blogPosts.reduce(
    (postTypes, item) => postTypes.add(item.postType), new Set([null]) 
)])
const categories = computed(() => 
  [...storeBlogPosts.blogPosts.reduce(
    (categories, item) => categories.add(item.category), new Set([null]) 
)])


const postTypeQuery = computed({
  get: () => storeBlogPostsFilters.postTypeQuery,
  set: (value) => storeBlogPostsFilters.postTypeQuery = value == 'on' ? null : value,
})
const categoryQuery = computed({
  get: () => storeBlogPostsFilters.categoryQuery,
  set: (value) => storeBlogPostsFilters.categoryQuery = value == 'on' ? null : value,
})
const searchQuery = computed({
  get: () => storeBlogPostsFilters.searchQuery,
  set: (value) => storeBlogPostsFilters.searchQuery = value == 'on' ? null : value,
})

// sorts
const blogPostsSorted = computed(() => storeBlogPostsFilters.blogPostsSorted || [])
const dates = ['inc', 'dec']

const dateQuery = computed({
  get: () => storeBlogPostsFilters.dateQuery,
  set: (value) => storeBlogPostsFilters.dateQuery = value,
})



</script>

<template>
  <section class="blog-posts-grid__section section">
    <div class="blog-posts-grid__container container">
      <div class="blog-posts-grid">
        <div class="blog-posts-grid__toolbar">
          <div class="blog-posts-grid__toolbar-radios">
            <RadioBtned class="blog-posts-grid__toolbar-radio"
              v-for="(category, ind) in categories" :key="category"
              :checked="ind === 0 ? true : false"
              :value="category"
              @input="categoryQuery = $event"
              name="categoryQuery"
            >
              {{ category ? category : 'all' }}
            </RadioBtned>
          </div>
          <InputWithBtn class="blog-posts-grid__toolbar-input"
            placeholder="Search BlogPost..."
            icon=""
            @input="searchQuery = $event"
          />
          <div class="blog-posts-grid__toolbar-radios">
            <RadioBtned class="blog-posts-grid__toolbar-radio"
              v-for="(postType, ind) in postTypes" :key="postType"
              :checked="ind === 0 ? true : false"
              :value="postType"
              @input="postTypeQuery = $event"
              name="postTypeQuery"
            >
              {{ postType ? postType : 'all' }}
            </RadioBtned>
          </div>
          <div class="blog-posts-grid__toolbar-radios">
            <RadioBtned class="events-grid__toolbar-radio"
              v-for="(date, ind) in dates" :key="date"
              :checked="ind === 0 ? true : false"
              :value="date"
              @input="dateQuery = $event"
              name="dateQuery"
            >
              {{ date === 'inc' ? 'nearest' : 'latest' }}
            </RadioBtned>
          </div>
        </div>
        <div class="blog-posts-grid__items">
          <BlogPostCard 
            v-for="BlogPost in blogPostsSorted" :key="BlogPost.id" :='BlogPost'
          />
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
    padding-top: 0
  &__container

.blog-posts-grid
  &__toolbar
    display: flex
    flex-wrap: wrap
    justify-content: space-between

  &__toolbar-radios
    display: flex

  &__toolbar-radio,
  &__toolbar-input
    margin-bottom: 2rem

  &__toolbar-radio
    & + &
      margin-left: 1.2rem

  &__toolbar-input
    margin-left: 1.2rem
    max-width: 31.5rem


  &__items
    margin-top: 6rem

    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 3rem




</style>