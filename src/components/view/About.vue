<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'


import { useStoreCourses } from '@/stores/Courses.js'
import { useStoreReviews } from '@/stores/Reviews.js'
import { useStoreBlogPosts } from '@/stores/BlogPosts.js'
import { useStoreTeachers } from '@/stores/Teachers.js'


const route = useRoute()
const router = useRouter()


const storeTeachers = useStoreTeachers()
const storeBlogPosts = useStoreBlogPosts()
const storeReviews = useStoreReviews()
const storeCourses = useStoreCourses()

const props = defineProps({
  
})

</script>

<template>
  
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';

</style>