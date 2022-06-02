<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'


import { useStoreCourses } from '@/stores/Courses.js'
import { useStoreTeachers } from '@/stores/Teachers.js'



const route = useRoute()
const router = useRouter()





const storeCourses = useStoreCourses()
const storeTeachers = useStoreTeachers()

const props = defineProps({
  courseId: [Number, String],
})



const course = computed(() => storeCourses.findCourse(props.courseId) )
const teacher = computed(() => storeTeachers.findTeacher(course.value.teacherId) )



</script>

<template>
  <div>
    <div class="course">
      <div class="course__id">Course id: {{course.id}}</div>
      <div class="course__title">{{course.title}}</div>
      <div class="course__teacher">teacher from course: {{course.teacherId}}</div>
    </div>
    <div class="teacher">
      <div class="teacher__id">Teacher id: {{teacher.id}}</div>
      <div class="teacher__name">{{teacher.name}}</div>
      <div class="teacher__img">
        <img :src="teacher.imgCourse" alt="">
      </div>
    </div>
    <button @click="$router.back">back</button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';

</style>