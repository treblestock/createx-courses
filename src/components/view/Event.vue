<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreEvents } from '@/stores/Events.js'




import AboutEvent from '@/components/sections/AboutEvent.vue'
import AboutTeacher from '@/components/sections/AboutTeacher.vue'
import ForWhom from '@/components/sections/ForWhom.vue'
import EventsEmailingSubscribeForm from '@/components/sections/EventsEmailingSubscribeForm.vue'
import EventRegisterForm from '@/components/sections/EventRegisterForm.vue'
import EventRecommendations from '@/components/sections/EventRecommendations.vue'

const storeEvents = useStoreEvents()

const props = defineProps({
  eventId: [Number, String],
})


const event = computed(() => storeEvents.findEvent(props.eventId) )

</script>

<template>
  <main class="event" v-if="event">

    <div class="event__about-event-section section">
      <div class="event__about-event-container container">
        <AboutEvent class="event__about-event"
          :price="event.price"
          :date="event.date"
          :time="event.time"
          :eventProgram="event.eventProgram"
          :eventLink="event.eventLink"
        />
      </div>
    </div>
    <div class="event__about-teacher-section section">
      <div class="event__about-teacher-container container">
        <AboutTeacher class="event__about-teacher"
          :id="event.teacherId"
          label="speaker"
        />
      </div>
    </div>

    <div class="event__for-whom-section section">
      <div class="event__for-whom-container container">
        <ForWhom class="event__emailing-subscribe-form"
          :forWhom="event.forWhom"
        />
      </div>
    </div>
    <div class="event__emailing-subscribe-form-section section">
      <div class="event__emailing-subscribe-form-container container">
        <EventsEmailingSubscribeForm class="event__emailing-subscribe-form"/>
      </div>
    </div>
    <div class="event__event-register-section section"
      id="register-form"
    >
      <div class="event__event-register-container container">
        <EventRegisterForm class="event__event-register"/>
      </div>
    </div>
    <div class="event__event-recomendation-section section">
      <div class="event__event-recomendation-container container">
        <EventRecommendations class="event__event-recomendation"/>
      </div>
    </div>

  </main>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI
.event
  &__about-event-section
    padding-top: 12rem

  &__about-event-container

  &__about-event

  &__about-teacher-section

  &__about-teacher-container

  &__about-teacher

  &__for-whom-section

  &__for-whom-container

  &__for-whom

  &__emailing-subscribe-form-section

  &__emailing-subscribe-form-container
    padding: 5rem 10rem
    +section-ui_carrot

  &__emailing-subscribe-form

  &__event-register-section
    padding: 12rem

  &__event-register-container

  &__event-register

  &__event-recomendation-section
    padding: 10rem 0 18rem
    background: $color-gray-200

  &__event-recomendation-container

  &__event-recomendation




</style>