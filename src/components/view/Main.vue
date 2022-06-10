<script setup>
import { ref, computed, watch } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'


import { useStoreCourses } from '@/stores/Courses.js'
import { useStoreReviews } from '@/stores/Reviews.js'
import { useStoreEvents } from '@/stores/Events.js'
import { useStoreBlogPosts } from '@/stores/BlogPosts.js'
import { useStoreTeachers } from '@/stores/Teachers.js'

// page sections
// import Intro from '@/components/sections/Intro.vue'
import WhyCreateX from '@/components/sections/WhyCreateX.vue'
import CoursesGrid from '@/components/sections/CoursesGrid.vue'
import Benefits from '@/components/sections/Benefits.vue'
import EventsGrid from '@/components/sections/EventsGrid.vue'
import Certificate from '@/components/sections/Certificate.vue'
import Team from '@/components/sections/Team.vue'
import Reviews from '@/components/sections/Reviews.vue'
import BlogPostsGrid from '@/components/sections/BlogPostsGrid.vue'
import SubscribeAnnouncementsForm from '@/components/sections/SubscribeAnnouncementsForm.vue'


const storeTeachers = useStoreTeachers()
const storeBlogPosts = useStoreBlogPosts()
const storeEvents = useStoreEvents()
const storeReviews = useStoreReviews()
const storeCourses = useStoreCourses()

const props = defineProps({
  
})


</script>

<template>
  <!-- <Intro></Intro> -->
  <WhyCreateX></WhyCreateX>
  <CoursesGrid></CoursesGrid>
  <Benefits></Benefits>
  <EventsGrid></EventsGrid>
  <Certificate></Certificate>
  <Team></Team>
  <Reviews></Reviews>
  <BlogPostsGrid></BlogPostsGrid>

  <SubscribeAnnouncementsForm></SubscribeAnnouncementsForm>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


</style>