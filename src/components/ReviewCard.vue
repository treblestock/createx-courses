<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreReviews } from '@/stores/Reviews.js'

const storeReviews = useStoreReviews()


const props = defineProps({
  id: Number,
})

const review = computed(() => storeReviews.findReview(props.id) )

</script>

<template>
  <div class="review-card">
    <div class="review-card__body" v-if="review">
      <div class="review-card__text">{{ review.body }}</div>
      <div class="review-card__student">
        <div class="review-card__student-img">
          <Img :src="review.student.img"/>
        </div>
        <div class="review-card__student-body">
          <div class="review-card__student-name">{{ review.student.name || 'name'}}</div>
          <div class="review-card__student-pos">{{ review.student.pos }}, {{ review.student.course }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
.review-card
  max-width: 102rem
  padding: 10.5rem
  padding-right: 16.5rem
  &__body

  &__text
    font-size: 2rem
    line-height: 1.5
    color: $color-gray-800


  &__student
    margin-top: 2.4rem
  
    display: flex

  &__student-img
    margin-right: 2rem
    overflow: hidden

    width: 7rem
    height: 7rem
    border-radius: 50%
    img 
      width: 100%
      height: 100%
      object-fit: cover
      object-position: top
    

  &__student-body
    display: flex
    flex-direction: column
    justify-content: center

  &__student-name
    font-size: 1.6rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900

  &__student-pos
    margin-top: 1rem

    font-size: 1.6rem
    line-height: 1.5
    color: $color-gray-700


</style>