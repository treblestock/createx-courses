<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreEvents } from '@/stores/Events.js'

import EventCard from '@/components/EventCard.vue'


const storeEvents = useStoreEvents()

const props = defineProps({

})

const events = computed(() => storeEvents.events)


</script>

<template>
  <section class="event-recommendation">
    <SliderCustom class="event-recommendation__slider"
      title="Check other Events"
      label="You may also like"
    >
      <EventCard class="event-recommendation__slider-item"
        v-for="event in events" :key="event.id" :='event'
      />
    </SliderCustom>
    <div class="event-recommendation__footer">
      <div class="event-recommendation__footer-label">Do you want more Events?</div>
      <AppLink class="event-recommendation__footer-btn btn"
        :to="{
          name: 'events',
        }"
      >View all events</AppLink>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.event-recommendation
  &__slider
  &__slider-item
    --100-cw: min(100vw, 1270px)
    flex: 0 0 clamp(30rem, var(--100-cw) / 3 - 2 * 3rem, 39rem)


  &__footer
    margin-top: 8rem

    display: flex
    align-items: center
    justify-content: center

  &__footer-label
    font-size: 2.8rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900


  &__footer-btn
    margin-left: 4rem





</style>