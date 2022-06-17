<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreBlogPosts } from '@/stores/BlogPosts.js'





import BlogPostArticle from '@/components/sections/BlogPostArticle.vue'
import ArticlesEmailingSubscribeForm from '@/components/sections/ArticlesEmailingSubscribeForm.vue'
import BlogPostRecommendations from '@/components/sections/BlogPostRecommendations.vue'


const storeBlogPosts = useStoreBlogPosts()

const props = defineProps({
  blogPostId: [Number, String],
})


const blogPost = computed(() => storeBlogPosts.findBlogPost(props.blogPostId) )


</script>

<template>
  <main class="blog-post" v-if="blogPost">

    <div class="blog-post__blog-post-section section">
      <div class="blog-post__blog-post-container container">
        <BlogPostArticle class="blog-post__blog-post"
          :="blogPost"
        />
      </div>
    </div>
    <div class="blog-post__emailing-subscribe-form-section section">
      <div class="blog-post__emailing-subscribe-form-container container">
        <ArticlesEmailingSubscribeForm class="blog-post__emailing-subscribe-form"/>
      </div>
    </div>
    <div class="blog-post__blog-post-recomendation-section section">
      <div class="blog-post__blog-post-recomendation-container container">
        <BlogPostRecommendations class="blog-post__blog-post-recomendation"/>
      </div>
    </div>
    
  </main>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
.blog-post
  &__blog-post-section
    padding: 8rem 0 12rem

  &__blog-post-container

  &__blog-post

  &__emailing-subscribe-form-section
    padding-top: 0
    background: $color-gray-200

  &__emailing-subscribe-form-container

  &__emailing-subscribe-form

  &__blog-post-recomendation-section
    padding: 12rem 0 18rem

  &__blog-post-recomendation-container

  &__blog-post-recomendation




</style>