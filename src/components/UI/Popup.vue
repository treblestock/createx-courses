<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'



const props = defineProps({
  isActive: Boolean,
  isTransparent: Boolean,
  isNoCross: Boolean,
})
const emit = defineEmits([
  'closed',
])


</script>

<template>
  <div class="popup" v-if="isActive">
    <div class="popup__wrapper" v-if="!isTransparent"
      @click="emit('closed')"
    ></div>
    <div class="popup__body">
      <div class="popup__cross" v-if="!isNoCross"
        @click="emit('closed')"
      >&#x2573;</div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.popup
  position: fixed
  top: 0
  right: 0
  left: 0
  bottom: 0

  display: flex
  justify-content: center
  align-items: center

  z-index: 100

  &__wrapper
    position: absolute
    top: 0
    right: 0
    left: 0
    bottom: 0

    background: #000
    opacity: .3


  &__body
    max-width: 100%
    max-height: 100%
    position: relative
  
  &__cross
    position: absolute
    top: 3rem
    right: 3rem
    transform: translate(-100%, 100%)

    width: 2.4rem
    height: 2.4rem

    color: $color-gray-700
    cursor: pointer
    &:hover
      color: $color-carrot

    




</style>