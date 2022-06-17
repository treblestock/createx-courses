<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import CourseCategoryCard from '@/components/CourseCategoryCard.vue'
import CourseCategoryCardComingSoon from '@/components/CourseCategoryCardComingSoon.vue'

import { useStoreCoursesCategories } from '@/stores/CoursesCategories.js'
const storeCoursesCategories = useStoreCoursesCategories()

const categories = computed(() => storeCoursesCategories.coursesCategories)



</script>

<template>
  <section class="courses-categories-grid">
    <div class="courses-categories-grid__label title_label"></div>
    <div class="courses-categories-grid__title title"></div>
    <section class="courses-categories-grid__items">
      <template 
        v-for="category in categories" :key="category"  
      >
        <Component class="courses-categories-grid__item"
          :is="category.isComing ? CourseCategoryCardComingSoon : CourseCategoryCard"
          :label="category.name"
          :description="category.description"
          :img="category.img"
        />
      </template>
    </section>
  </section>  
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI


.courses-categories-grid
  
  &__label,
  &__title
    text-align: center

  &__items
    display: grid
    grid-template-columns: repeat(auto-fit, 39rem)
    justify-content: center
    grid-gap: 3rem

  &__item





</style>