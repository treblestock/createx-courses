<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'


import { useStoreEvents } from '@/stores/Events.js'

import EventCard from '@/components/EventCard.vue'
import EventCard_row from '@/components/EventCard_row.vue'

const route = useRoute()
const router = useRouter()


const storeEvents = useStoreEvents()

const props = defineProps({

})


const events = computed(() => storeEvents.events )

</script>

<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :='event'></EventCard>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.events
  display: grid
  grid-template-columns: repeat(auto-fit, 39rem)
  grid-gap: 1rem
</style>