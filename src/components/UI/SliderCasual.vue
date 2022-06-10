<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useSliderLogic } from '@/components/composable/useSliderLogic'

const props = defineProps({
  title: String,
  label: String,
  itemsCount: Number,
})

const body = ref(null)
const pagination = ref(null)
// const pagesCount = computed(() => body.value ? new Array(body.value.children.length).fill(0) : null)



const {
  setSlideActive,
  setPrevSlideActive,
  setNextSlideActive,
  currentShift,
} = useSliderLogic({
  body,
  pagination,
  shift: true,
})

onMounted(() => {
  body.value.children[0].classList.add('_active')
})

</script>


<template>
  <div class="slider">
    <div class="slider__header">
      <div class="slider__label title_label">{{ label || 'label'}}</div>
      <h2 class="slider__title title">{{ title || 'title'}}</h2>
    </div>
    <div class="slider__body">
      <ArrowLeft @click="setPrevSlideActive" />
      <div class="slider__window">
        <div class="slider__items"
          :style="`transform: translate(${currentShift}px, 0)`"
          ref="body"
        >
          <slot>
            <div></div>
          </slot>
        </div>
      </div>
      <ArrowRight @click="setNextSlideActive" />
    </div>
    <div class="slider__pagination"
      ref="pagination"
      @click="setSlideActive"
    >
      <template v-if="itemsCount">
        <div class="slider__pagination-item"
          v-for="i in itemsCount" :key="i"
        ></div>
      </template>
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
    text-align: center

  &__title
    margin-top: 1rem

  &__body
    margin-top: 6rem

    display: flex
    align-items: center
    > * + *
      margin-left: 7rem    

  &__window
    width: 102rem
    min-height: 30rem

    overflow: hidden
  &__items
    display: flex
    gap: 3rem

    transition: all ease .3s

    :slotted(> *)
      flex: 1 0 100%
      

  &__pagination
    margin-top: 6rem
    display: flex
    justify-content: center
    align-items: center
    
    > * + * 
      margin-left: 1rem
    
  &__pagination-item
    cursor: pointer
    width: 3rem
    height: 2px

    border-radius: .4px
    background: $color-gray-500

    &:hover
      background: $color-carrot
    &._active
      background: $color-gray-800




</style>



