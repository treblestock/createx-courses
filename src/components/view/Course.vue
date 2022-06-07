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
  courseId: [Number, String],
})


const course = computed(() => storeCourses.findCourse(props.courseId) )

</script>

<template>
  <div v-if="course">
    <CourseCard :="course"></CourseCard>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

</style>