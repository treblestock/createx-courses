<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


const props = defineProps({
  label: String,
  description: String,
  img: String,
})


</script>

<template>
  <article class="course-category-card">
    <div class="course-category-card__text">New studying program coming soon...</div>
  </article>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.course-category-card
  min-width: 39rem
  min-height: 42rem

  padding: 6rem

  display: flex
  justify-content: center
  align-items: center

  background: $color-gray-200

  &__text
    font-size: 2rem
    line-height: 1.5
    font-weight: 700
    text-align: center


  


</style>