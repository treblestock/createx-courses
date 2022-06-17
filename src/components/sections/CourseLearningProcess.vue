<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


const props = defineProps({
  
})

</script>

<template>
  <section class="course-learning-process">
    <div class="course-learning-process__header">
      <div class="course-learning-process__label title_label">Main steps</div>
      <div class="course-learning-process__title title">Online learning process</div>
    </div>
    <ul class="course-learning-process__items">
      <li class="course-learning-process__item">
        <div class="course-learning-process__item-header">
          <div class="course-learning-process__item-number title">01</div>
          <div class="course-learning-process__item-line"></div>
        </div>
        <div class="course-learning-process__item-title">Watching online video lectures </div>
        <div class="course-learning-process__item-text">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</div>
      </li>
      <li class="course-learning-process__item">
        <div class="course-learning-process__item-header">
          <div class="course-learning-process__item-number title">02</div>
          <div class="course-learning-process__item-line"></div>
        </div>
        <div class="course-learning-process__item-title">Passing test</div>
        <div class="course-learning-process__item-text">Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.</div>
      </li>

      <li class="course-learning-process__item">
        <div class="course-learning-process__item-header">
          <div class="course-learning-process__item-number title">03</div>
          <div class="course-learning-process__item-line"></div>
        </div>
        <div class="course-learning-process__item-title">Curator’s feedback</div>
        <div class="course-learning-process__item-text">Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.</div>
      </li>

      <li class="course-learning-process__item">
        <div class="course-learning-process__item-header">
          <div class="course-learning-process__item-number title">04</div>
          <div class="course-learning-process__item-line"></div>
        </div>
        <div class="course-learning-process__item-title">Corrections if needed</div>
        <div class="course-learning-process__item-text">Sit veniam aute dolore adipisicing nulla sit culpa. M inim mollit voluptate ullamco proident ea ad.</div>
      </li>

    </ul>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

=hoverCircle
  position: relative
  &:before,
  &:after
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

    content: ''
    display: block

    border-radius: 50%
    background: $color-carrot


  &:before
    width: 2em
    height: 2em
    opacity: .12
  &:after
    width: 2.5em
    height: 2.5em
    opacity: .06

  



.course-learning-process
  &__header

  &__label,
  &__title
    text-align: center

  &__items
    margin-top: 6rem

    display: flex
    flex-wrap: wrap
    grid-gap: 3rem

  &__item
    flex: 1 0 20rem

  &__item-header
    display: flex
    align-items: center

  &__item-line
    flex: 1 1 auto
    &:after 
      margin-left: 2rem
      content: ''
      display: block
      width: 90%
      height: 1px

      background: $color-gray-400

  &__item-number
    flex: 0 0 auto
    color: $color-gray-400


    

  &__item-title
    margin-top: 1.5rem
    font-size: 2rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900

    

  &__item-text
    margin-top: 1rem

    font-size: 1.6rem
    line-height: 1.6
    color: $color-gray-700



.course-learning-process__item:hover .course-learning-process__item-number
  +hoverCircle

</style>