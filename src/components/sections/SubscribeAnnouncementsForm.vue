<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


</script>

<template>
  <section class="subscribe-announcements__section section">
    <div class="subscribe-announcements__container container">
      <div class="subscribe-announcements">
        <div class="subscribe-announcements__label title_label">Don’t miss anything</div>
        <h2 class="subscribe-announcements__title title">Subscribe to the Createx School announcements</h2>
        <form action="" class="subscribe-announcements__form"
          @submit.prevent=""
        >
          <Input class="subscribe-announcements__input"
            placeholder="Your working email"
          ></Input>
          <button class="subscribe-announcements__btn btn">Subsctribe</button>
        </form>
        
      </div>
    </div>

    <div class="subscribe-announcements__section-decor"></div>
  </section>  
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.subscribe-announcements
  &__section
    position: relative

    padding: 12rem 0 18rem


    &:before 
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: -1


      background: $color-carrot-gradient
      opacity: 0.2
      content: ''
    
  &__section-decor
    z-index: -1
    position: absolute
    bottom: 0
    
    width: 100%
    &:after,
    &:before
      position: absolute
      bottom: 0
      content: url("src/assets/img/decor/illustrations/08.webp")
    
    &:before
      left: 0
    &:after
      right: 0

  &__container
    max-width: 65rem

.subscribe-announcements
  &__label
    text-align: center

  &__title
    text-align: center

  &__form
    margin-top: 6rem

    display: flex

  &__input

  &__btn
    margin-left: 2.4rem



</style>