<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreSendFormData } from '@/stores/SendFormData.js'
const storeSendFormData = useStoreSendFormData()


const data = computed(() => storeSendFormData.data)
</script>

<template>
  <div class="send-data-form">
    <div class="send-data-form__title">Send data:</div>
    <div class="send-data-form__message">
      {{ data }}
      <!-- <pre></pre> -->
    </div>
  </div>  
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI

.send-data-form
  padding: 2rem
  background: $color-white

  box-shadow: 0 0 3px 1px $color-gray-800
  border-radius: $border-radius

  &__title
    color: $color-gray-800
    font-size: 2.8rem
    line-height: 1.5
    font-weight: 700

    margin-bottom: 1.5rem

  &__message
    font-size: 1.6rem
    line-height: 1.5
    color: $color-gray-800

    word-wrap: break-word
    



</style>