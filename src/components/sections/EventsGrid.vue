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



// filters
const eventsFiltered = computed(() => storeEventsFilters.eventsFiltered || [])


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


</script>

<template>
  <section class="events-grid__section section">
    <div class="events-grid__container container">
      <div class="events-grid">
        <div class="events-grid__toolbar">
          <div class="events-grid__toolbar-radios">
            <RadioBtned class="events-grid__toolbar-radio"
              v-for="(category, ind) in categories" :key="category"
              :checked="ind === 0 ? true : false"
              :value="category"
              @input="categoryQuery = $event"
              name="categoryQuery"
            >
              {{ category ? category : 'all' }}
            </RadioBtned>
          </div>
          <InputWithBtn class="events-grid__toolbar-input"
            placeholder="Search Event..."
            icon=""
            @input="searchQuery = $event"
          />
          <div class="events-grid__toolbar-radios">
            <RadioBtned class="events-grid__toolbar-radio"
              v-for="(eventType, ind) in eventTypes" :key="eventType"
              :checked="ind === 0 ? true : false"
              :value="eventType"
              @input="eventTypeQuery = $event"
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
              @input="dateQuery = $event"
              name="dateQuery"
            >
              {{ date === 'inc' ? 'nearest' : 'latest' }}
            </RadioBtned>
          </div>
        </div>
        <div class="events-grid__items">
          <EventCard 
            v-for="Event in eventsSorted" :key="Event.id" :='Event'
          />
        </div>
      </div>
    </div>
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
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 3rem




</style>