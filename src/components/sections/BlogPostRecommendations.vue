<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreBlogPosts } from '@/stores/BlogPosts.js'

import BlogPostCard from '@/components/BlogPostCard.vue'


const storeBlogPosts = useStoreBlogPosts()

const props = defineProps({

})

const blogPosts = computed(() => storeBlogPosts.blogPosts)


</script>

<template>
  <section class="blog-post-recommendation">
    <SliderCustom
      title="Check other BlogPosts"
      label="You may also like"
    >
      <BlogPostCard class="blog-post-recommendation__blog-post-card"
        v-for="blogPost in blogPosts" :key="blogPost.id" :='blogPost'
      />
    </SliderCustom>
    <div class="blog-post-recommendation__footer">
      <div class="blog-post-recommendation__footer-label">Do you want more BlogPosts?</div>
      <AppLink class="blog-post-recommendation__footer-btn btn"
        :to="{
          name: 'blogPosts',
        }"
      >View all blogPosts</AppLink>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.blog-post-recommendation
  &__blog-post-card
    flex: 0 0 39rem


  &__footer
    margin-top: 8rem

    display: flex
    align-items: center
    justify-content: center

  &__footer-label
    font-size: 2.8rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900


  &__footer-btn
    margin-left: 4rem





</style>