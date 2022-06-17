<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { getDuration } from '@/helpers'


const props = defineProps({
  description: String,
  price: Number,
  dateStart: Object,
  dateEnd: Object,
  lessons: Number,
  youWillLearn: Array,
})

const duration = computed(() => Math.round(getDuration(props.dateStart, props.dateEnd)) )
</script>

<template>
  <section class="about-course">
    <div class="about-course__body">
      <div class="about-course__title title">About the course</div>
      <div class="about-course__desctiption">{{ description }}</div>
      <div class="about-course__you-will-learn">You will learn:</div>
      <ul class="about-course__you-will-learn-list">
        <li class="about-course__you-will-learn-item _ticked"
          v-for="item in youWillLearn" :key="item"
        >{{ item }}</li>
      </ul>
    </div>

    <div class="about-course__info-card">
      <div class="about-course__info-card-group">
        <div class="about-course__info-card-label">Dates</div>
        <div class="about-course__info-card-value">
          {{ dateStart.month }} {{ dateStart.date }}
          - {{ dateEnd.month }} {{ dateEnd.date }}
        </div>
        <div class="about-course__info-card-text">Metus turpis sit lorem lacus, in elit tellus lacus.</div>
      </div>
      <div class="about-course__info-card-group">
        <div class="about-course__info-card-label">Duration</div>
        <div class="about-course__info-card-value">{{ duration }} month - {{ lessons }} lessons</div>
        <div class="about-course__info-card-text">Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</div>
      </div>
      <div class="about-course__info-card-group">
        <div class="about-course__info-card-label">Price</div>
        <div class="about-course__info-card-value">
          <span class="price big-price">{{price}}</span> per month
        </div>
        <div class="about-course__info-card-text">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</div>
      </div>
      <a class="about-course__info-card-btn btn"
        href="#register-form"
      >Join the course</a>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.about-course
  display: flex
  &__body
    flex: 1 1 auto

  &__title
    margin-bottom: 4rem

  &__desctiption
    margin-bottom: 5rem

  &__you-will-learn
    margin-bottom: 2.4rem

    font-size: 2.8rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900


  &__you-will-learn-list
    display: flex
    flex-direction: column
    
    > * + * 
      margin-top: 1rem
    
  &__you-will-learn-item

  &__info-card
    margin-left: 7rem
    padding: 4rem 3.2rem


    flex: 0 0 49.5rem
    align-self: start
    display: flex
    flex-direction: column
    
    > * + * 
      margin-top: 3.2rem
    
    // box-shadow: $box-shadow
    box-shadow: 0 0 5px .2px $color-gray-500

  &__info-card-group
    display: flex
    flex-direction: column
    
    > * + * 
      margin-top: 1rem
    

  &__info-card-label
    font-size: 1.4rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900

    text-transform: uppercase

  &__info-card-value
    font-size: 2.4rem
    line-height: 1.3
    font-weight: 700
    color: $color-carrot


  &__info-card-text
    font-size: 1.6rem
    line-height: 1.6
    color: $color-gray-700

  &__info-card-btn
    margin-top: 4rem

.big-price





</style>