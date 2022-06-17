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
  <section class="courses-grid">
    <header class="courses-grid__toolbar">
      <div class="courses-grid__toolbar-radios">
        <RadioBtned class="courses-grid__toolbar-radio"
          v-for="(category, ind) in categories" :key="category"
          :checked="ind === 0 ? true : false"
          :value="category"
          v-model="categoryQuery"
          name="categoryQuery"
        >
          {{ category ? category : 'all' }}
        </RadioBtned>
      </div>
      <InputWithBtn class="courses-grid__toolbar-input"
        placeholder="Search course..."
        icon=""
        v-model="searchQuery"
      />
    </header>
    <section class="courses-grid__items">
      <TransitionGroup name="fade-shift">
        <CourseCard class="courses-grid__item"
          v-for="(course, ind) in coursesFiltered" :key="course.id" :='course'
        />
      </TransitionGroup>
    </section>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers



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
    grid-template-columns: repeat(auto-fit, minmax(30rem, 39rem) )
    justify-content: center
    grid-gap: 3rem
    > *
      width: 100%
  &__item




</style>