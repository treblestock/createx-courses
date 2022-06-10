<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import ReviewCard from '@/components/ReviewCard.vue';

import { useStoreReviews } from '@/stores/Reviews.js'
const storeReviews = useStoreReviews()


const reviews = computed(() => storeReviews.reviews)
// const 
</script>

<template>
  <section class="reviews__section section">
    <div class="reviews__container container">
      <div class="reviews">
        <SliderCasual
          label="TESTIMONIALS"
          title="What our students say"
          :itemsCount="reviews.length"
        >
          <ReviewCard v-for="review in reviews" :key="review.id" :='review'/>
        </SliderCasual>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
.reviews
  &__section
    background: $color-gray-200
    padding-bottom: 8rem

  &__container



</style>