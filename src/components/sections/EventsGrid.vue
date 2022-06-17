<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreEvents } from '@/stores/Events.js'
import { useStoreEventsFilters } from '@/stores/EventsFilters.js'

import EventCard from '@/components/EventCard.vue'


const storeEvents = useStoreEvents()
const storeEventsFilters = useStoreEventsFilters()


const props = defineProps({
  
})



const eventTypes = computed(() => 
  [...storeEvents.events.reduce(
    (eventTypes, item) => eventTypes.add(item.eventType), new Set([null]) 
)])
const categories = computed(() => 
  [...storeEvents.events.reduce(
    (categories, item) => categories.add(item.category), new Set([null]) 
)])


const eventTypeQuery = computed({
  get: () => storeEventsFilters.eventTypeQuery,
  set: (value) => storeEventsFilters.eventTypeQuery = value == 'on' ? null : value,
})
const categoryQuery = computed({
  get: () => storeEventsFilters.categoryQuery,
  set: (value) => storeEventsFilters.categoryQuery = value == 'on' ? null : value,
})
const searchQuery = computed({
  get: () => storeEventsFilters.searchQuery,
  set: (value) => storeEventsFilters.searchQuery = value == 'on' ? null : value,
})


// sorts
const eventsSorted = computed(() => storeEventsFilters.eventsSorted)

const dates = ['inc', 'dec']

const dateQuery = computed({
  get: () => storeEventsFilters.dateQuery,
  set: (value) => storeEventsFilters.dateQuery = value == 'on' ? null : value,
})



// logger


</script>

<template>
  <section class="events-grid">
    <header class="events-grid__toolbar">
      <div class="events-grid__toolbar-radios">
        <RadioBtned class="events-grid__toolbar-radio"
          v-for="(category, ind) in categories" :key="category"
          :checked="ind === 0 ? true : false"
          :value="category"
          v-model="categoryQuery"
          name="categoryQuery"
        >
          {{ category ? category : 'all' }}
        </RadioBtned>
      </div>
      <InputWithBtn class="events-grid__toolbar-input"
        placeholder="Search Event..."
        icon=""
        v-model="searchQuery"
      />
      <div class="events-grid__toolbar-radios">
        <RadioBtned class="events-grid__toolbar-radio"
          v-for="(eventType, ind) in eventTypes" :key="eventType"
          :checked="ind === 0 ? true : false"
          :value="eventType"
          v-model="eventTypeQuery"
          name="eventTypeQuery"
        >
          {{ eventType ? eventType : 'all' }}
        </RadioBtned>
      </div>
      <div class="events-grid__toolbar-radios">
        <RadioBtned class="events-grid__toolbar-radio"
          v-for="(date, ind) in dates" :key="date"
          :checked="ind === 0 ? true : false"
          :value="date"
          v-model="dateQuery"
          name="dateQuery"
        >
          {{ date === 'inc' ? 'nearest' : 'latest' }}
        </RadioBtned>
      </div>
    </header>
    <section class="events-grid__items">
      <TransitionGroup name="bubble">
        <EventCard 
          v-for="(event, ind) in eventsSorted" :key="event.id" :='event'
          :data-ind="ind" 
        />
      </TransitionGroup>
    </section>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.events-grid
  &__section
    padding-top: 0
  &__container

.events-grid
  &__toolbar
    display: flex
    flex-wrap: wrap
    justify-content: space-between

  &__toolbar-radios
    display: flex

  &__toolbar-radio,
  &__toolbar-input
    margin-bottom: 2rem

  &__toolbar-radio
    & + &
      margin-left: 1.2rem

  &__toolbar-input
    margin-left: 1.2rem
    max-width: 31.5rem


  &__items
    margin-top: 6rem

    display: grid
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr) )
    justify-content: center
    grid-gap: 3rem
    > *
      width: 100%





</style>