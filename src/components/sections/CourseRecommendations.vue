<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreCourses } from '@/stores/Courses.js'

import CourseCard_row from '@/components/CourseCard_row.vue'


const storeCourses = useStoreCourses()

const props = defineProps({

})

const courses = computed(() => storeCourses.courses)


</script>

<template>
  <section class="course-recommendation">
    <SliderCustom class="course-recommendation__slider"
      title="Check other courses"
      label="You may also like"
    >
      <CourseCard_row class="course-recommendation__slider-item"
        v-for="course in courses" :key="course.id" :='course'
      />
    </SliderCustom>
    <div class="course-recommendation__footer">
      <div class="course-recommendation__footer-label">Do you want more courses?</div>
      <AppLink class="course-recommendation__footer-btn btn"
        :to="{
          name: 'courses',
        }"
      >View all courses</AppLink>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.course-recommendation
  &__slider

  &__slider-item
    flex: 0 0 60rem
    // --100-cw: min(100vw, 1230px)
    // flex: 0 0 calc(var(--100-cw) / 3)


  &__footer
    margin-top: 8rem

    display: flex
    align-items: center
    justify-content: center

  &__footer-label
    font-size: 2.8rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900


  &__footer-btn
    margin-left: 4rem





</style>