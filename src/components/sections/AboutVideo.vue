<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'



</script>

<template>
  <section class="about-video">
    <div class="about-video__img">
      <Img src="src/assets/img/content/about/video.webp"/>
    </div>
    <div class="about-video__body">
      <ul class="about-video__advantages">
        <li class="about-video__advantage">
          <div class="about-video__advantage-value">1200</div>
          <div class="about-video__advantage-label">students graduated</div>
        </li>
        <li class="about-video__advantage">
          <div class="about-video__advantage-value">84</div>
          <div class="about-video__advantage-label">completed courses</div>
        </li>
        <li class="about-video__advantage">
          <div class="about-video__advantage-value">16</div>
          <div class="about-video__advantage-label">qualified tutors</div>
        </li>
        <li class="about-video__advantage">
          <div class="about-video__advantage-value">5</div>
          <div class="about-video__advantage-label">years of experience</div>
        </li>

      </ul>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI

.about-video
  display: flex
  &__img
    flex: 0 0 81rem
    margin-right: 13.5rem
    img 
      width: 100%
      height: 100%
      object-fit: cover
    

  &__body
    align-self: center
    flex: 1 1 auto

  &__advantages
    display: flex
    flex-direction: column
    justify-content: start
    
    > * + * 
      margin-top: 3.8rem
    

  &__advantage
    display: flex
    align-items: center
    > * + *
      margin-left: 1.6rem

  &__advantage-value
    font-size: 4.6rem
    line-height: 1.3
    font-weight: 700
    color: $color-carrot

  &__advantage-label
    font-size: 1.8rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900




</style>