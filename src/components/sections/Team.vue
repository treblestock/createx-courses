<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import TeacherCard from '@/components/TeacherCard.vue';

import { useStoreTeachers } from '@/stores/teachers.js'
const storeTeachers = useStoreTeachers()


const teachers = computed(() => storeTeachers.teachers)
// const 
</script>

<template>
  <section class="teachers">
    <SliderCustom
      label="Best tutors are all here"
      title="Meet our team"
    >
      <TeacherCard v-for="teacher in teachers" :key="teacher.id" :='teacher'
        class="teachers__teacher-card"
      />
    </SliderCustom>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
.teachers

  &__section
    background: $color-gray-200

  &__container

  &__teacher-card
    flex: 0 0 28.5rem


</style>