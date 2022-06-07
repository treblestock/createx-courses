<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

import { useStoreCreateX } from '@/stores/CreateX.js'


const route = useRoute()
const router = useRouter()


const storeCreateX = useStoreCreateX()

const props = defineProps({
  
})

</script>

<template>
  
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';

</style>