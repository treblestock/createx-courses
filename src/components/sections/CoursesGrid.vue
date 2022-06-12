<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreCourses } from '@/stores/Courses.js'
import { useStoreCoursesFilters } from '@/stores/CoursesFilters.js'

import CourseCard from '@/components/CourseCard.vue'


const storeCourses = useStoreCourses()
const storeCoursesFilters = useStoreCoursesFilters()


const props = defineProps({
  
})

// courses
const coursesFiltered = computed(() => storeCoursesFilters.coursesFiltered || [])


// filters
let categories = computed(() => 
  [...storeCourses.courses.reduce(
    (categories, item) => categories.add(item.category), new Set([null]) 
)])


let categoryQuery = computed({
  get: () => storeCoursesFilters.categoryQuery,
  set: (value) => storeCoursesFilters.categoryQuery = value == 'on' ? null : value,
})
let searchQuery = computed({
  get: () => storeCoursesFilters.searchQuery,
  set: (value) => storeCoursesFilters.searchQuery = value == 'on' ? null : value,
})





</script>

<template>
  <section class="courses-grid__section section">
    <div class="courses-grid__container container">        
      <div class="courses-grid">
        <div class="courses-grid__toolbar">
          <div class="courses-grid__toolbar-radios">
            <RadioBtned class="courses-grid__toolbar-radio"
              v-for="(category, ind) in categories" :key="category"
              :checked="ind === 0 ? true : false"
              :value="category"
              @input="categoryQuery = $event"
              name="categoryQuery"
            >
              {{ category ? category : 'all' }}
            </RadioBtned>
          </div>
          <InputWithBtn class="courses-grid__toolbar-input"
            placeholder="Search course..."
            icon=""
            @input="searchQuery = $event"
          />
        </div>
        <div class="courses-grid__items">
          <CourseCard 
            v-for="course in coursesFiltered" :key="course.id" :='course'
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.courses-grid
  &__section
    padding-top: 0

  &__container

.courses-grid
  &__toolbar
    display: flex
    justify-content: space-between

  &__toolbar-radios
    display: flex

  &__toolbar-radio
    & + &
      margin-left: 1.2rem

  &__toolbar-input
    margin-left: 1.2rem
    max-width: 31.5rem


  &__items
    margin-top: 6rem

    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 3rem




</style>