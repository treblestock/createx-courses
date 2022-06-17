<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreCourses } from '@/stores/Courses.js'




import AboutCourse from '@/components/sections/AboutCourse.vue'
import AboutTeacher from '@/components/sections/AboutTeacher.vue'
import CourseLearningProcess from '@/components/sections/CourseLearningProcess.vue'
import CourseHotOfferForm from '@/components/sections/CourseHotOfferForm.vue'
import ForWhom from '@/components/sections/ForWhom.vue'
import CourseProgram from '@/components/sections/CourseProgram.vue'
import Reviews from '@/components/sections/Reviews.vue'
import CourseRegisterForm from '@/components/sections/CourseRegisterForm.vue'
import CourseRecommendations from '@/components/sections/CourseRecommendations.vue'

const storeCourses = useStoreCourses()

const props = defineProps({
  courseId: [Number, String],
})


const course = computed(() => storeCourses.findCourse(props.courseId) )

</script>

<template>
  <main class="course" v-if="course">

    <div class="course__about-course-section section">
      <div class="course__about-course-container container">
        <AboutCourse class="course__about-course"
          :description="course.description"
          :price="course.price"
          :dateStart="course.dates.start"
          :dateEnd="course.dates.end"
          :lessons="course.courseProgram.length"
          :youWillLearn="course.youWillLearn"
        />
      </div>
    </div>
    <div class="course__about-teacher-section section">
      <div class="course__about-teacher-container container">
        <AboutTeacher class="course__about-teacher"
          :id="course.teacherId"
          label="course curator"
        />
      </div>
    </div>
    <div class="course__learning-process-section section">
      <div class="course__learning-process-container container">
        <CourseLearningProcess class="course__learning-process"/>
      </div>
    </div>
    <div class="course__for-whom-section section">
      <div class="course__for-whom-container container">
        <ForWhom class="course__hot-offer-form"
          :forWhom="course.forWhom"
        />
      </div>
    </div>
    <div class="course__hot-offer-form-section section">
      <div class="course__hot-offer-form-container container">
        <CourseHotOfferForm class="course__for-whom"/>
      </div>
    </div>
    <div class="course__course-program-section section">
      <div class="course__course-program-container container">
        <CourseProgram class="course__course-program" 
          :courseProgram="course.courseProgram"
        />
      </div>
    </div>
    <div class="course__reviews-section section">
      <div class="course__reviews-container container">
        <Reviews class="course__reviews" />
      </div>
    </div>
    <div class="course__course-register-section section"
      id="register-form"
    >
      <div class="course__course-register-container container">
        <CourseRegisterForm class="course__course-register"/>
      </div>
    </div>
    <div class="course__course-recommendation-section section">
      <div class="course__course-recommendation-container container">
        <CourseRecommendations class="course__course-recommendation"/>
      </div>
    </div>

  </main>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI
.course
  &__about-course-section
    padding: 12rem 0 0

  &__about-course-container

  &__about-course

  &__about-teacher-section
    p

  &__about-teacher-container

  &__about-teacher

  &__learning-process-section
    padding: 18rem 0 0

  &__learning-process-container

  &__learning-process

  &__hot-offer-form-section

  &__hot-offer-form-container
    padding: 5rem 6rem
    +section-ui_carrot

  &__hot-offer-form

  &__for-whom-section

  &__for-whom-container

  &__for-whom

  &__course-program-section
    padding-bottom: 12rem

  &__course-program-container

  &__course-program

  &__reviews-section
    padding: 8rem 0
    background: $color-gray-200
  &__reviews-container

  &__reviews

  &__course-register-section
    padding: 0 0 8rem
    background: $color-gray-200


  &__course-register-container

  &__course-register

  &__course-recommendation-section
    padding: 12rem 0

  &__course-recommendation-container

  &__course-recommendation




</style>