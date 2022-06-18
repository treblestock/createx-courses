<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreBlogPosts } from '@/stores/BlogPosts.js'
import { useStoreBlogPostsFilters } from '@/stores/BlogPostsFilters.js'

import TeacherCard_row_s from '@/components/TeacherCard_row_s.vue'
import BlogPostCard_row_s from '@/components/BlogPostCard_row_s.vue'

const storeBlogPosts = useStoreBlogPosts()
const storeBlogPostsFilters = useStoreBlogPostsFilters()

const props = defineProps({
  title: String,
  teacherId: Number,
  img: String,
  content: Array,
  postType: String,
  category: String,
  date: Object,
  timeToRead: Number,
  tags: Array,
})


const shareLinks = ['facebook.com', 'twitter.com', 'linkedin.com']


const searchQuery = computed({
  get: () => storeBlogPostsFilters.searchQuery,
  set: (value) => storeBlogPostsFilters.searchQuery = value,
})
const allTags = computed(() => storeBlogPosts.tags)
const searchTags = computed({
  get: () => storeBlogPostsFilters.tagsQuery,
  set: (value) => storeBlogPostsFilters.tagsQuery = value,
})
const blogPostsFiltered = computed(() => storeBlogPostsFilters.blogPostsFiltered.slice(0, 3) )


</script>

<template>
  <section class="blog-post">
    <article class="blog-post__article blog-post-article">
      <header class="blog-post-article__header">
        <div class="blog-post-article__blog-post-types">
          {{ postType }} | <span class="red">{{ category }}</span>
        </div>
        <div class="blog-post-article__title title">
          {{ title }}
        </div>
        <div class="blog-post-article__time-and-share">
          <div class="blog-post-article__time">
            {{ date.month }} {{ date.date }} {{ date.year }} | {{ timeToRead }} min read
          </div>
          <div class="blog-post-article__share">
            <div class="blog-post-article__share-label">Tags: </div>
            <Socials class="blog-post-article__share-socials"
              :links="shareLinks"
            />
          </div>
        </div>
      </header>
      <div class="blog-post-article__body">
        <div class="blog-post-article__img">
          <Img :src="img" />
        </div>
        <div class="blog-post-article__content">
          <TextNode 
            v-for="contentItem in content" :key="contentItem.id" :="contentItem"
            :contentData="contentItem"
          />
        </div>
      </div>
      <footer class="blog-post-article__footer">
        <div class="blog-post-article__tags">
          <div class="blog-post-article__tags-label">Tags: </div>
          <AppLink class="blog-post-article__tag tag"
            v-for="tag in tags" :key="tag"
            :to="{
              name: 'blogPosts',
            }"
          >
            {{ tag }}
          </AppLink>
        </div>

        <div class="blog-post-article__share">
          <div class="blog-post-article__share-label">Tags: </div>
          <Socials class="blog-post-article__share-socials"
            :links="shareLinks"
          />
        </div>
      </footer>
    </article>
    <aside class="blog-post__sidebar blog-post-sidebar">
      <InputWithBtn class="blog-post-sidebar__search"
        placeholder="Search blog..."
        v-model="searchQuery"
      />
      <div class="blog-post-sidebar__group">
        <div class="blog-post-sidebar__group-label">Author</div>
        <div class="blog-post-sidebar__group-body">
          <TeacherCard_row_s class="blog-post-sidebar__group-card" 
            :id="teacherId"
          />
        </div>
      </div>
      <div class="blog-post-sidebar__group">
        <div class="blog-post-sidebar__group-label">Trending Articles</div>
        <div class="blog-post-sidebar__group-body">
          <BlogPostCard_row_s class="blog-post-sidebar__group-card"
            v-for="blogPost in blogPostsFiltered" :key="blogPost.id" :='blogPost'
          />
        </div>
      </div>
      <div class="blog-post-sidebar__group">
        <div class="blog-post-sidebar__group-label">Tags</div>
        <div class="blog-post-sidebar__group-body">
          <div class="blog-post-sidebar__search-tags">
            <CheckboxBtned class="tag"
              v-for="tag in allTags" :key="tag"
              :value="tag"
              v-model="searchTags"
            >
              {{ tag }}
            </CheckboxBtned>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.blog-post
  display: flex
  &__article
    flex: 1 1 auto

  &__sidebar
    margin-left: 8rem
    flex: 0 0 34rem
    align-self: start

.blog-post-article
  &__header

  &__blog-post-types
    font-weight: 700
    color: $color-gray-700
    text-transform: capitalize


  &__title
    margin-top: 2.5rem

  &__time-and-share
    margin-top: 2.5rem
    display: flex
    justify-content: space-between

  &__time
    color: $color-gray-700

  &__share
    display: flex
    flex-direction: row
    align-items: center
    > * + * 
      margin-left: 1.2rem
    
  &__share-label
    font-weight: 700

  &__share-socials
    display: flex
    flex-direction: row
    align-items: center
    > * + * 
      margin-left: 1.2rem

  &__body
    margin-top: 4rem


  &__img
    margin-bottom: 6rem

    width: 100%
    height: auto
    img 
      width: 100%
      height: 100%
      object-fit: cover
  


  &__content
    &-pb
      margin: 2.5rem 0
      font-size: 2rem
      line-height: 1.5
      font-weight: 700
      color: $color-gray-900
    &-p
      margin: 2.5rem 0
      color: $color-gray-800
    &-quote
      margin: 5rem 0
      font-size: 2rem
      line-height: 1.5
      font-weight: 700
      color: $color-gray-900

      display: flex
      &:before 
        content: url('/src/assets/img/icons/decor/quotes.svg')
        display: block
        margin-right: 3rem
        
      
    &-ul
      margin: 2.5rem 0
    &-li
      margin: 1rem 0

    

  &__footer
    margin-top: 6rem

    display: flex
    justify-content: space-between

  &__tags-label
    font-weight: 700

  &__tags
    flex: 0 0 calc(100% / 2)
    display: flex
    flex-wrap: wrap
    gap: 1.2rem

  &__tag



.blog-post-sidebar
  &__search
    margin-bottom: 6rem

  &__group
    margin-top: 4.4rem

  &__group-label
    font-size: 1.6rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900
    text-transform: uppercase

  &__group-body
    margin-top: 2.4rem

  &__group-card
    margin-top: 2.4rem

    width: 100%

  &__search-tags
    display: flex
    align-items: center
    flex-wrap: wrap
    gap: 1.2rem



</style>