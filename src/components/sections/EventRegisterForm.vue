<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


const props = defineProps({
  
})

</script>

<template>
  <section class="events-leave-request__section section">
    <div class="events-leave-request__container container">
      <div class="events-leave-request">
        <div class="events-leave-request__img">
          <Img src="src\assets\img\decor\illustrations\04.webp" />
        </div>
        <div class="events-leave-request__body">
          <div class="events-leave-request__label title_label">Don’t miss the event</div>
          <h2 class="events-leave-request__title title">Leave a request</h2>
          <form class="events-leave-request__form"
            @submit.prevent=""
          >
            <InputGroup class="events-leave-request__form-item"
              label="Full Name"
              placeholder="Your Full Name"
            />
            <InputGroup class="events-leave-request__form-item"
              label="Email"
              placeholder="Your working number"
            />
            <InputGroup class="events-leave-request__form-item"
              label="Phone"
              placeholder="Your Phone number"
            />
            <button class="events-leave-request__form-btn btn">Join the event</button>
            <div class="events-leave-request__form-explication">* You will receive a link to the online lecture in an email after registration.</div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.events-leave-request
  &__section
    padding: 12rem 0
    background: $color-gray-200

  &__container

.events-leave-request
  display: flex
  align-items: center
  &__img
    margin-right: 12.5rem

    img 
      width: 100%
      height: 80%
      object-fit: cover
    

  &__body
    flex: 0 0 45%

  &__label

  &__title

  &__form
    margin-top: 4rem

    display: flex
    flex-direction: column
    
    > * + * 
      margin-top: 2.4rem
    

  &__form-btn
    margin-top: 4rem

  &__form-explication

    font-size: 1.6rem
    line-height: 1.5
    color: $color-gray-800




</style>