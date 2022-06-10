<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

import { useStoreEvents } from '@/stores/Events.js'


const route = useRoute()
const router = useRouter()

const storeEvents = useStoreEvents()

const props = defineProps({
  id: [Number, String],
})

const event = computed(() => storeEvents.findEvent(props.id) )



</script>

<template>
  <div class="event-preview-card" v-if="event">
    <div class="event-preview-card__body">
      <div class="event-preview-card__date-date">{{ event.date.date }}</div>
      <div class="event-preview-card__when">
        <div class="event-preview-card__date-month">{{ event.date.month }}</div>
        <div class="event-preview-card__time">{{ event.time }}</div>
      </div>
      <div class="event-preview-card__when">
        <AppLink class="event-preview-card__title"
          :to="{
            course: 'event',
            parmas: {eventId: event.id},
          }"
        >{{ event.title }}</AppLink>
        <div class="event-preview-card__event-type">{{ event.eventType }}</div>
      </div>
    </div>
      
    <AppLink class="event-preview-card__btn btn"
      :to="{
        name: 'event',
        params: {eventId: event.id},
      }"
    >View more</AppLink>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.event-preview-card {
  display: flex;
  justify-content: space-between;
  > * + * {
    margin-left: 4rem;
  }
  width: 123rem;
  padding: 3rem 4rem;

  border: solid 1px $color-gray-300;
  box-shadow: $box-shadow;
  background: $color-white;
  &__body {
    display: flex;
    justify-content: space-between;
    > * + * {
      margin-left: 4rem;
    }
  }
  &__when {
    margin-left: 2rem;
  }
  &__date-date {
    font-size: 4.6rem;
    line-height: 1.3;
    font-weight: 700;
    color: $color-carrot;
  }
  &__date-month {
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 700;
    color: $color-gray-900;
  }
  &__time {
    margin-top: 1rem;

    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-700
  }
  &__title {
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 700;
    color: $color-gray-900;
  }
  &__event-type {
    margin-top: 1rem;

    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-700;
  }
  &__btn {
    margin-left: 5rem;
  }
}


</style>