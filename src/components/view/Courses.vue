<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'



import { useStoreCourses } from '@/stores/Courses.js'
import { useStoreTeachers } from '@/stores/Teachers.js'


const route = useRoute()
const router = useRouter()


const props = defineProps({
  
})


const storeCourses = useStoreCourses()
const courses = computed(() => storeCourses.courses )

const storeTeachers = useStoreTeachers()



</script>

<template>
  <div class="courses">
    <div class="course-card" v-for="course in courses" :key="course.id">
      <div class="course-card__img">
        <img :src="storeTeachers.findTeacher(course.teacherId).imgCourse" alt="">
      </div>
      <div class="course-card__category">{{ course.category}}</div>
      <AppLink class="course-card__title link"
        :to="{
          name: 'course',
          params: { courseId: course.id }
        }"
      >{{ course.title}}</AppLink>
      <div class="course-card__price">{{ course.price}}</div>
      <div class="course-card__author">{{ storeTeachers.findTeacher(course.teacherId).name}}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';

.courses {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr) );
  grid-gap: 10px;
}
.course-card {
  width: 20rem;
  &__img {
    width: 20rem;
    height: 10rem;

    img {
      object-fit: cover;
      width: 100%;
      height:100%;
    }
  }
  &__category {
  }
  &__title {
  }
  &__price {
  }
  &__author {
  }
}

</style>