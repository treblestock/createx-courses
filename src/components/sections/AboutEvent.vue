<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { getDuration } from '@/helpers'


const props = defineProps({
  price: Number,
  date: Object,
  time: String,
  eventProgram: Array,
  eventLink: String,
})

const duration = computed(() => Math.round(getDuration(props.dateStart, props.dateEnd)) )
</script>

<template>
  <section class="about-event">
    <div class="about-event__body">
      <div class="about-event__title title">We will talk about:</div>
      <ul class="about-event__event-program event-program">
        <li class="event-program__item"
          v-for="(item, ind) in eventProgram" :key="item"
        >
          <Spoiler>
            <template #title >
              <div class="event-program__item-title">
                <span class="red fw400">Theme {{ ind + 1 }}.</span> {{item.title }}
              </div>
            </template>
            <template #body >
              <div>{{ item.body }}</div>
              
            </template>
          </Spoiler>
        </li>
      </ul>
    </div>

    <div class="about-event__info-card">
      <div class="about-event__info-card-group">
        <div class="about-event__info-card-label">Time</div>
        <div class="about-event__info-card-value">
          {{ date.month }} {{ date.date }}, {{ time }}
        </div>
        <div class="about-event__info-card-text">Metus turpis sit lorem lacus, in elit tellus lacus.</div>
      </div>
      <div class="about-event__info-card-group">
        <div class="about-event__info-card-label">Price</div>
        <div class="about-event__info-card-value">
          <span class="price big-price">{{price}}</span> per month
        </div>
        <div class="about-event__info-card-text">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</div>
      </div>
      <a class="about-event__info-card-btn btn"
        href="#register-form"
      >Join the event</a>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.about-event
  display: flex
  &__body
    flex: 1 1 auto

  &__title
    margin-bottom: 4rem

  &__desctiption
    margin-bottom: 5rem

  &__event-program
    display: flex
    flex-direction: column
    
    > * + * 
      margin-top: 2.4rem
    


  &__event-program-list
    display: flex
    flex-direction: column
    
    > * + * 
      margin-top: 1rem
    
  &__event-program-item

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

.event-program
  &__item
    
  &__item-title
    font-size: 2rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900

    .fw400
      margin-right: 1rem 






</style>