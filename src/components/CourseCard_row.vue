<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'


import { useStoreCourses } from '@/stores/Courses.js'
import { useStoreTeachers } from '@/stores/Teachers.js'


const route = useRoute()
const router = useRouter()



const storeTeachers = useStoreTeachers()
const storeCourses = useStoreCourses()

const props = defineProps({
  id: [Number, String],
})

const course = computed(() => storeCourses.findCourse(props.id))
const teacher = computed(() => storeTeachers.findTeacher(course.value.teacherId))


</script>

<template>
  <article class="course-card" v-if="teacher">
    <div class="course-card__img">
      <Img :src="teacher.imgCourse" />
    </div>
    <div class="course-card__body">
      <div class="course-card__category"
        :class="'_' + course.category.split(' ')[0].toLowerCase()"
      >{{ course.category }}</div>
      <AppLink class="course-card__title link"
        :to="{
          name: 'course',
          params: {courseId: course.id},
        }"
      >{{ course.title}}</AppLink>
      <div class="course-card__bottom">
        <span class="course-card__price price">{{ course.price}}</span>
        <span class="course-card__teacher">by {{ teacher.name }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.course-card
  width: 60rem
  height: 21.5rem
  display: flex

  border: solid 1px $color-gray-300
  box-shadow: $box-shadow
  &__img
    height: 21.5rem
    flex: 0 0 21.5rem
    img
      width: 100%
      height: 100%
      object-fit: cover
      object-position: top
    

    margin-bottom: 1.6rem
  
  &__body
    padding: 3.2rem
    display: flex
    flex-direction: column
    align-items: start
    justify-content: space-between
    
    > * + *
      margin-top: 2rem
    
  
  &__category    
    padding: .5rem
    border-radius: $border-radius
    margin-bottom: 1rem

    background: $color-green-light
    
    font-size: 1.4rem
    line-height: 1
    color: $color-white

    &._marketing
      background: $color-green-light
    &._management
      background: $color-blue
    &._development
      background: $color-purple
    &._design
      background: $color-pink
    &._hr
      background: $color-orange
  
  &__title
    font-size: 2rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900
  
  &__bottom

  
  &__price
    color: $color-red
  
  &__teacher
    font-size: 1.8rem
    line-height: 1.5

    color: $color-gray-700

    &:before
      content: '|'
      padding: 0 1rem
    
  


</style>