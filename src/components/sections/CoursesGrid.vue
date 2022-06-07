<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

import { useStoreCourses } from '@/stores/Courses.js'

import CourseCard_row from '@/components/CourseCard_row.vue'

const route = useRoute()
const router = useRouter()

const storeCourses = useStoreCourses()

const props = defineProps({
  
})

const courses = computed(() => storeCourses.courses.slice(0, 6) )


</script>

<template>
  <div class="courses">
    <div class="courses__header">
      <div class="courses__text">
        <div class="courses__label label">Ready to learn?</div>
        <h2 class="courses__title title">Featured Courses</h2>
      </div>
      <button class="courses__btn btn-outl">View all courses</button>
    </div>
    <div class="courses__items">
      <CourseCard_row v-for="course in courses" :key="course.id" :='course'></CourseCard_row>
    </div>
  </div>  
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.courses
  &__header
    display: flex
    justify-content: space-between
    align-items: end

  &__text

  &__label

  &__title
    margin-top: 1rem

  &__btn


  &__items
    margin-top: 6rem
    display: grid
    grid-template-columns: repeat(2, minmax(39rem, 1fr) )
    grid-gap: 3rem


</style>