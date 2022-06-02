<script setup>
import { ref, computed, watch } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'


import { useStoreTeachers } from '@/stores/Teachers.js'
import { useStoreCourses } from '@/stores/Courses.js'
import { useStoreEvents } from '@/stores/Events.js'
import { useStoreBlogPosts } from '@/stores/BlogPosts.js'
import { useStoreReviews } from '@/stores/Reviews.js'





const props = defineProps({
  
})

//<!--* State + fetching
// const storeTeachers = useStoreTeachers()
// const teachers = computed(() => storeTeachers.teachers)
// onMounted(() => storeTeachers.fetchTeachers() )




// const storeCourses = useStoreCourses()
// const courses = computed(() => storeCourses.courses)
// onMounted(() => storeCourses.fetchCourses() )




// const storeEvents = useStoreEvents()
// const events = computed(() => storeEvents.events)
// onMounted(() => storeEvents.fetchEvents() )




// const storeBlogPosts = useStoreBlogPosts()
// const blogPosts = computed(() => storeBlogPosts.blogPosts)
// onMounted(() => storeBlogPosts.fetchBlogPosts() )




// const storeReviews = useStoreReviews()
// const reviews = computed(() => storeReviews.reviews)
// onMounted(() => storeReviews.fetchReviews() )







</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';



</style>