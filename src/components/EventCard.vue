<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreEvents } from '@/stores/Events.js'


const storeEvents = useStoreEvents()

const props = defineProps({
  id: [Number, String],
})

const event = computed(() => storeEvents.findEvent(props.id) )



</script>

<template>
  <div class="event-preview-card" v-if="event">
    <div class="event-preview-card__body">
      <div class="event-preview-card__date">{{ event.date.date }} {{event.date.month}}</div>
      <div class="event-preview-card__time">{{ event.time }}</div>
      <AppLink class="event-preview-card__title"
        :to="{
          name: 'event',
          params: {eventId: event.id},
        }"
      >{{ event.title }}</AppLink>
      <div class="event-preview-card__event-type">{{ event.eventType }}</div>
    </div>
      
    <AppLink class="event-preview-card__btn btn _outl"
      :to="{
        name: 'event',
        params: {eventId: event.id }
      }"
    >View more</AppLink>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.event-preview-card {
  width: 39rem;
  padding: 2.4rem;
  border: solid 1px $color-gray-300;
  box-shadow: $box-shadow;
  

  background: $color-white;
  &__body {
    display: flex;
    flex-direction: column;
    align-items: start;
    > * + * {
      margin-top: 1rem;
    }
  }
  &__date {
    font-size: 2.8rem;
    line-height: 1.5;
    font-weight: 700;
    color: $color-carrot;
  }
  &__time {
    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-700
  }
  &__title {
    margin-top: 2rem;

    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 700;
    color: $color-gray-900;

  }
  &__event-type {
    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-700;
  }
  &__btn {
    margin-top: 5rem;
  }
}


</style>