<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()


const props = defineProps({
  
})

</script>

<template>
  <article class="event-details-card">
    <div class="event-details-card__body">
      <div class="event-details-card__info">
        <div class="event-details-card__info-label">dates</div>
        <div class="event-details-card__info-value">2 septem</div>
        <div class="event-details-card__info-description">Lorem ipsum dolor sit amet. Dolor sit amet.</div>
      </div>
      <div class="event-details-card__info">
        <div class="event-details-card__info-label">duration</div>
        <div class="event-details-card__info-value">2 septem</div>
        <div class="event-details-card__info-description">Lorem ipsum dolor sit amet.</div>
      </div>
      <a class="event-details-card__link link">event on facebook</a>
    </div>
      
    <button class="event-details-card__btn btn">Join the event</button>
  </article>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.event-details-card
  width: 50rem
  padding: 4rem 3rem

  border: solid 1px $color-gray-300
  box-shadow: $box-shadow
  
  &__body
    display: flex
    flex-direction: column
    > * + *
      margin-top: 3rem

  &__info
    display: flex
    flex-direction: column
    > * + *
      margin-top: 1rem

  &__info-label
    font-size: 1.4rem
    line-height: 1.5
    font-weight: 700
    text-transform: uppercase
    color: $color-gray-900
  &__info-value
    font-size: 2.4rem
    line-height: 1.3
    font-weight: 700
    color: $color-carrot

  &__info-description
    font-size: 1.6rem
    line-height: 1.6
    color: $color-gray-700

  &__link
    text-decoration: underline
  &__btn
    margin-top: 4rem


</style>