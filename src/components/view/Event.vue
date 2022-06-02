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
  eventId: [Number, String],
})

</script>

<template>
  weoj{{eventId}}
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';

</style>