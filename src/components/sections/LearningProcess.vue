<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'



</script>

<template>
  <section class="learning-process">
    <div class="learning-process__body">
      <div class="learning-process__label title_label">Studying process</div>
      <div class="learning-process__title title">That’s how we do it</div>
      <ul class="learning-process__stages">

        <li class="learning-process__stage">          
          <div class="learning-process__stage-step">STEP 1</div>
          <div class="learning-process__stage-title">Watching online video lectures</div>
          <div class="learning-process__stage-text">Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</div>
        </li>
        <li class="learning-process__stage">          
          <div class="learning-process__stage-step">STEP 2</div>
          <div class="learning-process__stage-title">Passing test</div>
          <div class="learning-process__stage-text">Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. </div>
        </li>
        <li class="learning-process__stage">          
          <div class="learning-process__stage-step">STEP 3</div>
          <div class="learning-process__stage-title">Curator’s feedback</div>
          <div class="learning-process__stage-text">Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. </div>
        </li>
        <li class="learning-process__stage">          
          <div class="learning-process__stage-step">STEP 4</div>
          <div class="learning-process__stage-title">Corrections if needed</div>
          <div class="learning-process__stage-text">Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.</div>
        </li>
        
      </ul>
    </div>
    <div class="learning-process__img">
      <Img src="src/assets/img/decor/illustrations/03.webp"/>
    </div>
  </section>  
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI


=stage-ui_decor
  position: relative

  padding-left: 4rem
  &:before, 
  &:after 
    position: absolute
    top: 0

    display: block
    content: ''
    
  &:before
    left: -2px
    z-index: 1
    width: 5px
    height: 5px
    border-radius: 50%
    background: $color-carrot-gradient 

  &:after 
    z-index: -1
    left: 0
    width: 1px
    height: 100%
    background: $color-gray-600
  
  

.learning-process
  display: flex
  &__body
    flex: 1 1 auto

  &__label

  &__title

  &__stages
    margin-top: 6rem

    display: flex
    flex-direction: column
    
    > * + * 
      margin-top: 3.2rem
    

  &__stage
    +stage-ui_decor

  &__stage-item
    
  &__stage-step
    font-size: 1.2rem
    font-weight: 700
    color: $color-gray-700
    text-transform: uppercase


  &__stage-title
    font-size: 2rem
    font-weight: 700
    color: $color-gray-900

  &__stage-text
    color: $color-gray-700

  &__img
    margin-left: 21rem
    flex: 0 0 auto
    img 
      width: 100%
      height: 100%
      object-fit: cover
    



</style>