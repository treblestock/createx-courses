<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreEvents } from '@/stores/Events.js'

import EventCard from '@/components/EventCard.vue'
import EventCard_row from '@/components/EventCard_row.vue'

const storeEvents = useStoreEvents()


const events = computed(() => storeEvents.events.slice(0, 3) )


</script>

<template>
  <section class="events-grid">
    <header class="events-grid__header">
      <div class="events-grid__label label">Ready to learn?</div>
      <h2 class="events-grid__title title">Featured Events</h2>
    </header>
    <section class="events-grid__items">
      <EventCard_row v-for="event in events" :key="event.id" :='event'></EventCard_row>
    </section>
    <footer class="events-grid__footer">
      <div class="events-grid__want-more">
        Do you want more?
      </div>
      <AppLink class="events-grid__btn btn"
        :to="{
          name: 'events',
        }"
      >explore all events</AppLink>
    </footer>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.events-grid
  &__section


    

  &__header
    text-align: center

  &__text

  &__label

  &__title
    margin-top: 1rem

  &__btn


  &__items
    margin-top: 6rem
    display: grid
    grid-template-rows: repeat(3, 12.5rem )
    grid-auto-flow: column
    grid-gap: 2.5rem

  &__footer
    margin-top: 6rem

    display: flex
    align-items: center
    justify-content: center

    text-align: center

  &__want-more
    margin-right: 4rem

    font-size: 2.8rem
    line-height: 1.5rem
    font-weight: 700

</style>