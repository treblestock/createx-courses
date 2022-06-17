<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'



</script>

<template>
  <section class="about-intro">
    <div class="about-intro__body">
      <div class="about-intro__label title_label">About us</div>
      <div class="about-intro__title title">Createx Online School</div>
      <div class="about-intro__text-bold">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</div>
      <div class="about-intro__text">We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</div>
      <div class="about-intro__btns">
        <AppLink class="about-intro__btn btn-outl"
          :to="{name: 'events'}"
        >
          Explore events
        </AppLink>
        <AppLink class="about-intro__btn btn"
          :to="{name: 'courses'}"
        >
          Browse courses
        </AppLink>
      </div>
    </div>
    <div class="about-intro__img">
      <Img src="src/assets/img/decor/illustrations/05.webp"/>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI


.about-intro
  display: flex
  &__body
    display: flex
    flex-direction: column
    align-items: start
    
    > * + * 
      margin-top: rem
    

  &__label

  &__title
    margin-top: 1rem

  &__text-bold
    margin-top: 3.4rem
    font-size: 2rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900

  &__text
    margin-top: 2.4rem

  &__btns
    margin-top: 6rem

    display: flex
    flex-direction: row
    align-items: center
    
    > * + * 
      margin-left: 2.4rem
    

  &__btn

  &__img
    margin-left: 16.5rem
    flex: 0 0 auto
    
    img 
      width: 100%
      height: 100%
      object-fit: cover
    



</style>