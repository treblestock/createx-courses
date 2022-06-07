<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'


import { useStoreEvents } from '@/stores/Events.js'

import EventPreviewCard from '@/components/EventPreviewCard.vue'
import EventPreviewCard_row from '@/components/EventPreviewCard_row.vue'

const route = useRoute()
const router = useRouter()


const storeEvents = useStoreEvents()

const props = defineProps({

})


const events = computed(() => storeEvents.events )

</script>

<template>
  <div class="events">
    <EventPreviewCard v-for="event in events" :key="event.id" :='event'></EventPreviewCard>
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