<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

import { useStoreBlogPosts } from '@/stores/BlogPosts.js'

import BlogPostCard from '@/components/BlogPostCard.vue'
import BlogPostCard_row_s from '@/components/BlogPostCard_row_s.vue'


const route = useRoute()
const router = useRouter()

const storeBlogPosts = useStoreBlogPosts()


const props = defineProps({
  
})

const blogPosts = computed(() => storeBlogPosts.blogPosts)


</script>

<template>
  <BlogPostCard v-for="blogPost in blogPosts" :key="blogPost.id" :='blogPost'></BlogPostCard>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';

</style>