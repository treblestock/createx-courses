<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreBlogPosts } from '@/stores/BlogPosts.js'
import { useStoreBlogPostsFilters } from '@/stores/BlogPostsFilters.js'

import BlogPostCard from '@/components/BlogPostCard.vue'


const storeBlogPosts = useStoreBlogPosts()
const storeBlogPostsFilters = useStoreBlogPostsFilters()


const postTypes = computed(() => 
  [...storeBlogPosts.blogPosts.reduce(
    (postTypes, item) => postTypes.add(item.postType), new Set([null]) 
)])
const categories = computed(() => 
  [...storeBlogPosts.blogPosts.reduce(
    (categories, item) => categories.add(item.category), new Set([null]) 
)])

const tags = computed(() => storeBlogPosts.tags)



const postTypeQuery = computed({
  get: () => storeBlogPostsFilters.postTypeQuery,
  set: (value) => storeBlogPostsFilters.postTypeQuery = value == 'on' ? null : value,
})
const categoryQuery = computed({
  get: () => storeBlogPostsFilters.categoryQuery,
  set: (value) => storeBlogPostsFilters.categoryQuery = value == 'on' ? null : value,
})
const tagsQuery = computed({
  get: () => storeBlogPostsFilters.tagsQuery,
  set: (value) => storeBlogPostsFilters.tagsQuery = value == 'on' ? null : value,
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


// <!--* Animations
function onBeforeEnter(el, done) {
  gsap.from(el, {
    opacity: 0,
    onComplete: done,
  })
}
function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    delay: el.dataset.ind * .15,
    onComplete: done,
  })
}
function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    delay: el.dataset.ind * .15,
    onComplete: done,
  })
}


</script>

<template>
  <section class="blog-posts-grid">
    <header class="blog-posts-grid__toolbar">
      <div class="blog-posts-grid__toolbar-radios">
        <RadioBtned class="blog-posts-grid__toolbar-radio"
          v-for="(category, ind) in categories" :key="category"
          :checked="ind === 0 ? true : false"
          :value="category"
          v-model="categoryQuery"
          name="categoryQuery"
        >
          {{ category ? category : 'all' }}
        </RadioBtned>
      </div>
      <InputWithBtn class="blog-posts-grid__toolbar-input"
        placeholder="Search BlogPost..."
        icon=""
        v-model="searchQuery"
      />
      <div class="blog-posts-grid__toolbar-radios">
        <RadioBtned class="blog-posts-grid__toolbar-radio"
          v-for="(postType, ind) in postTypes" :key="postType"
          :checked="ind === 0 ? true : false"
          :value="postType"
          v-model="postTypeQuery"
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
          {{ date === 'inc' ? 'nearest' : 'furthest' }}
        </RadioBtned>
      </div>
      <div class="blog-posts-grid__toolbar-checkboxes">
        <CheckboxBtned class="events-grid__toolbar-checkbox tag"
          v-for="(tag, ind) in tags" :key="tag"
          :checked="ind === 0 ? true : false"
          :value="tag"
          v-model="tagsQuery"
          name="tagQuery"
        >
          {{ tag }}
        </CheckboxBtned>
      </div>
    </header>
    <section class="blog-posts-grid__items">
      <TransitionGroup
        name="_move-smooth"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
      >
        <BlogPostCard class="blog-posts-grid__item"
          v-for="(blogPost, ind) in blogPostsSorted" :key="blogPost.id" :='blogPost'
          :data-ind="ind"
        />
      </TransitionGroup>
    </section> 
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.blog-posts-grid
  &__toolbar
    display: flex
    flex-wrap: wrap
    justify-content: space-between

  &__toolbar-radios
    display: flex

  &__toolbar-radio,
  &__toolbar-checkboxes,
  &__toolbar-input
    margin-bottom: 2rem

  &__toolbar-input
    margin-left: 1.2rem
    max-width: 31.5rem


  &__toolbar-radio,
  &__toolbar-checkbox
    & + &
      margin-left: 1.2rem
  
  &__toolbar-checkboxes
    display: flex
    flex-wrap: wrap
    flex-direction: row
    align-items: center
    
    > * + * 
      margin-left: 1.2rem
    


  &__items
    margin-top: 6rem

    display: grid
    grid-template-columns: repeat(auto-fit, minmax(30rem, 39rem) )
    justify-content: center
    grid-gap: 3rem
    > *
      width: 100%

  &__item
    transition: all ease .3s



</style>