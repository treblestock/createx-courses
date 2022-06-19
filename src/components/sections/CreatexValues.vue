<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'



</script>

<template>
  <section class="createx-values">
    <div class="createx-values__label title_label">We always stand for</div>
    <div class="createx-values__title title">Our core values</div>
    <ul class="createx-values__items">
    
      <li class="createx-values__item">
        <div class="createx-values__item-icon">
          <Img src="/img/content/about/structure.webp"/>
        </div>
        <div class="createx-values__item-title">Structured Approach</div>
        <div class="createx-values__item-text">Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris</div>
      </li>
      <li class="createx-values__item">
        <div class="createx-values__item-icon">
          <Img src="/img/content/about/chat.webp"/>
        </div>
        <div class="createx-values__item-title">Professional Feedbacks</div>
        <div class="createx-values__item-text">Culpa nostrud commodo ea consequat reprehenderit aliquip.</div>
      </li>
      <li class="createx-values__item">
        <div class="createx-values__item-icon">
          <Img src="/img/content/about/target.webp"/>
        </div>
        <div class="createx-values__item-title">Efficiency</div>
        <div class="createx-values__item-text">Viverra scelerisque consequat net. Adipisicing esse consequat.</div>
      </li>
      <li class="createx-values__item">
        <div class="createx-values__item-icon">
          <Img src="/img/content/about/calendar.webp"/>
        </div>
        <div class="createx-values__item-title">Flexible Shedule</div>
        <div class="createx-values__item-text">Aute eiusmod dolore dolore deserunt veniam ad deserunt.</div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI

.createx-values

  &__label,
  &__title
    text-align: center

  &__items
    margin-top: 6rem
  
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-gap: 9rem

  &__item

  &__item-icon
    margin: 0 auto 2.4rem

    width: 5rem
    height: 5rem
    img 
      width: 100%
      height: 100%
      object-fit: cover
    

  &__item-title,
  &__item-text
    text-align: center
    
  &__item-title
    font-size: 2rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900


  &__item-text
    margin-top: 1rem
    color: $color-gray-700



</style>