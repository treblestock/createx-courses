<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


</script>

<template>
  <section class="course-hot-offer__section section">
    <div class="course-hot-offer__container container">
      <div class="course-hot-offer">
        <div class="course-hot-offer__header">
          <h2 class="course-hot-offer__title title _32">20% discount for early birds!</h2>
          <TimeCounter />
        </div>
        <form action="" class="course-hot-offer__form"
          @submit.prevent=""
        >
          <InputGroup class="course-hot-offer__input-group"
            label="Full name"
            placeholder="Your full name"
          />
          <InputGroup class="course-hot-offer__input-group"
            label="email"
            placeholder="Your working email"
          />
          <InputGroup class="course-hot-offer__input-group"
            label="Phone"
            placeholder="Your phone number"
          />
          <button class="course-hot-offer__btn btn">join the course</button>
        </form>
        
      </div>
    </div>
  </section>  
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.course-hot-offer
  &__section
    position: relative
    padding: 5rem 6rem

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

  &__container

.course-hot-offer
  &__header
    display: flex
    justify-content: space-between
    align-items: center

  &__title
    text-align: center

  &__form
    margin-top: 3rem

    width: 100%
    display: flex
    align-items: end
    > * + *
      margin-left: 2.4rem

  &__input-group
    flex: 1 0 auto

  &__btn
    flex: 0 0 auto



</style>