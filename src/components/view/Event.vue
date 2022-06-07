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
  eventId: [Number, String],
})


const event = computed(() => storeEvents.findEvent(props.eventId) )


</script>

<template>
  <EventPreviewCard v-if="event" :="event"></EventPreviewCard>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

</style>