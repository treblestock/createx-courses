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
  <Spoiler>
    <template #title >
      title
    </template>
    <template #body >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo labore nihil quo ratione excepturi deleniti alias, laudantium dicta molestias accusantium nisi doloribus minus enim! Qui eos ducimus consectetur reiciendis quo.
    </template>
  </Spoiler>
  <Tabs> <!-- TODO: test it -->
    <template #insets >
      <div class=""> title1</div>
      <div class=""> title2</div>
    </template>
    <template #body >
      <div class="">lorem ipusem</div>
      <div class="">lorem ipusem 2</div>
    </template>
  </Tabs>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';



</style>