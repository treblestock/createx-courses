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
    <div class="course-category-card__img">
      <Img :src="img" />
    </div>
    <div class="course-category-card__body">
      <div class="course-category-card__category"
        :class="'_' + label.split(' ')[0].toLowerCase()"
      >{{ label }}</div>
      <div class="course-category-card__description">{{ description }}</div>
      <div class="course-category-card__footer">
        <AppLink class="course-category-card__link link"
          :to="{
            name: 'courses',
          }"
        >Check courses</AppLink>
      </div>
    </div>
  </article>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.course-category-card
  width: 39rem

  border: solid 1px $color-gray-300
  box-shadow: $box-shadow
  &__img
    height: 24rem
    img
      width: 100%
      height: 100%
      object-fit: cover


    margin-bottom: 1.6rem

  &__body
    padding: 2rem
    display: flex
    flex-direction: column
    align-items: start
    justify-content: space-between
    
    > * + *
      margin-top: 2rem


  &__category
    padding: 0.5rem
    margin-bottom: .5rem

    border-radius: $border-radius

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

  &__description
    color: $color-gray-700

  &__link
    font-weight: 700
    color: $color-gray-900




  


</style>