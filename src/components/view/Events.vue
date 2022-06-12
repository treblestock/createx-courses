<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import EventsGrid from '@/components/sections/EventsGrid.vue'
import SubscribeAnnouncementsForm from '@/components/sections/SubscribeAnnouncementsForm.vue';

const props = defineProps({
  
})






</script>

<template>
  <div class="Events">
    <div class="events__label title_label">Our blog</div>
    <div class="events__title title">Createx School Journal</div>
    <EventsGrid class="events__events-grid"/>
    <SubscribeAnnouncementsForm/>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.events
  &__section
    padding-top: 8rem
  &__container


.events
  &__label
    margin-bottom: 1rem
    text-align: center

  &__title
    text-align: center

  &__events-grid
    margin-top: 6rem
    padding-bottom: 22rem





</style>