<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()


const props = defineProps({
  
})

let isActive = ref(false)

</script>

<template>
  <div class="spoiler"
    :class="isActive ? '_active' : ''" 
  >
    <div class="spoiler__title"
      @click="isActive = !isActive"
    >
      <slot name="title"></slot>
    </div>
    <div class="spoiler__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.spoiler
  padding-left: 4rem
  &__title
    position: relative

    transition: all ease-out .3s
    cursor: pointer

    &:after,
    &:before
      content: ''
      position: absolute
      top: .9rem
      left: -4rem

      display: block
      width: 2rem
      height: 1px

      background: $color-carrot
      transition: transform linear .3s
    &:after 
      transform: rotate(90deg)

      .spoiler._active &
        transform: rotate(90deg) scale(0)
    
    
    
  &__body
    transition: all ease-out .3s

    :slotted(> *)
      padding-top: 1.5rem

      width: 100%
      transition: all ease-out .3s, opacity ease-in .6s

    .spoiler:not(._active) &
      :slotted(> *)
        font-size: 0
        padding: 0
        margin: 0
        opacity: 0
        
      



</style>