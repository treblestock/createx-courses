<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useSliderLogic } from '@/components/composable/useSliderLogic'

const props = defineProps({
  title: String,
  label: String,
})

const body = ref(null)

const {
  setPrevSlideActive,
  setNextSlideActive,
  currentShift,
} = useSliderLogic({
  body,
  shift: true,
})


onMounted(() => {
  // console.log(body.value.children)
  // body.value.children[0].classList.add('_active')
})

</script>


<template>
  <div class="slider">
    <div class="slider__header">
      <div class="slider__text">
        <div class="slider__label title_label">{{ label || 'label'}}</div>
        <h2 class="slider__title title">{{ title || 'title'}}</h2>
      </div>

      <div class="slider__btns">
        <ArrowLeft @click="setPrevSlideActive" />
        <ArrowRight @click="setNextSlideActive" />
      </div>
    </div>
    <div class="slider__items"
      :style="`transform: translate(${currentShift}px, 0)`"
      ref="body"
    >
      <slot>
        <div></div>
      </slot>
    </div>
  </div>  
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.slider
  max-width: $container-inner-width
  overflow: hidden
  &__header
    display: flex
    justify-content: space-between
    align-items: end

  &__text

  &__label

  &__title
    margin-top: 1rem

  &__btns
    display: flex
    align-items: center

  &__items
    margin-top: 6rem

    width: 100%
    height: 100%

    display: flex

    transition: all ease .3s
    gap: 3rem




</style>



