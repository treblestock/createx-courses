<script setup>
import { ref } from 'vue'
import TeacherCard from '@/components/TeacherCard.vue'
import TeacherCard_row from '@/components/TeacherCard_row.vue'
import TeacherCard_row_l from '@/components/TeacherCard_row_l.vue'


import CourseCard from '@/components/CourseCard.vue'
import CourseCard_row from '@/components/CourseCard_row.vue'


import BlogPostCard from '@/components/BlogPostCard.vue'
import BlogPostCard_row_s from '@/components/BlogPostCard_row_s.vue'


import CourseDetailsCard from '@/components/CourseDetailsCard.vue'
import EventDetailsCard from '@/components/EventDetailsCard.vue'

import EventPreviewCard from '@/components/EventPreviewCard.vue'
import EventPreviewCard_row from '@/components/EventPreviewCard_row.vue'

const isActive = ref(true)

const links = [
  'facebook.com',
]
</script>

<template>
  <div>
    <div class="block">
      <!-- <button @click="isActive = true">on</button>
      <Popup :isActive="isActive" @closed="isActive = false">
        <div class="box"></div>
      </Popup> -->
    </div>

    <!-- <TeacherCard></TeacherCard>
    <TeacherCard_row></TeacherCard_row>
    <TeacherCard_row_l></TeacherCard_row_l>
    
    <CourseCard></CourseCard>
    <CourseCard_row></CourseCard_row>


    <BlogPostCard></BlogPostCard>
    <BlogPostCard_row_s></BlogPostCard_row_s>


    <CourseDetailsCard></CourseDetailsCard>
    <EventDetailsCard></EventDetailsCard>

    <EventPreviewCard></EventPreviewCard>
    <EventPreviewCard_row></EventPreviewCard_row> -->

  </div>
</template>


<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers




</style>