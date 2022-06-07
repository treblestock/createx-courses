<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

import { useStoreCourses } from '@/stores/Courses.js'
import { useStoreReviews } from '@/stores/Reviews.js'

import CourseCard from '@/components/CourseCard.vue'
import CourseCard_row from '@/components/CourseCard_row.vue'

const route = useRoute()
const router = useRouter()

const storeCourses = useStoreCourses()
const storeReviews = useStoreReviews()




const props = defineProps({
  
})


const courses = computed(() => storeCourses.courses )




</script>

<template>
  <div class="courses">
    <CourseCard v-for="course in courses" :key="course.id" :='course'></CourseCard>
    
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.courses 
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(39rem, 1fr) )
  grid-gap: 10px



</style>