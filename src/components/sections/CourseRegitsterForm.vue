<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


const props = defineProps({
  
})

</script>

<template>
  <section class="course-register__section section">
    <div class="course-register__container container">
      <div class="course-register">
        <div class="course-register__img">
          <Img src="src\assets\img\decor\illustrations\06.webp" />
        </div>
        <div class="course-register__body">
          <div class="course-register__label title_label">Leave a request now and get 20% off!</div>
          <h2 class="course-register__title title">Register for the course</h2>
          <form class="course-register__form"
            @submit.prevent=""
          >
            <InputGroup class="course-register__form-item"
              label="Full Name"
              placeholder="Your Full Name"
            />
            <InputGroup class="course-register__form-item"
              label="Email"
              placeholder="Your working number"
            />
            <InputGroup class="course-register__form-item"
              label="Phone"
              placeholder="Your Phone number"
            />
            <button class="course-register__form-btn btn">Join the course</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.course-register
  &__section
    padding: 12rem 0
    background: $color-gray-200

  &__container

.course-register
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