<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import EventsGrid from '@/components/sections/EventsGrid.vue'
import CreatexEmailingSubscribeForm from '@/components/sections/CreatexEmailingSubscribeForm.vue';

const props = defineProps({
  
})






</script>

<template>
  <main class="events">
    <div class="events__label title_label">Our blog</div>
    <div class="events__title title">Createx School Journal</div>
      
    <div class="events__events-grid-section section">
      <div class="events__events-grid-container container">
        <EventsGrid class="events__events-grid"/>
      </div>
    </div>
    <div class="events__createx-emailing-subscribe-form-section section">
      <div class="events__createx-emailing-subscribe-form-container container">
        <CreatexEmailingSubscribeForm class="events__createx-emailing-subscribe-form"/>
      </div>
      <div class="section__decor"></div>
    </div>

    
    
  </main>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI

.events
  &__label
    margin-bottom: 1rem
    text-align: center

  &__title
    text-align: center

  &__events-grid-section
    padding-top: 6rem
    padding-bottom: 22rem

  &__events-grid-container

  &__events-grid

  &__createx-emailing-subscribe-form-section
    padding: 18rem 0 12rem
    +section-ui_carrot_bg-decor

  &__createx-emailing-subscribe-form-container
    max-width: 65rem

  &__createx-emailing-subscribe-form



</style>