<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


const props = defineProps({
  
})

</script>

<template>
  <section class="ask-question__section section">
    <div class="ask-question__container container">
      <div class="ask-question">
        <div class="ask-question__img">
          <Img src="src\assets\img\decor\illustrations\01.webp" />
        </div>
        <div class="ask-question__body">
          <div class="ask-question__label title_label">Any questions?</div>
          <h2 class="ask-question__title title">Drop us a line</h2>
          <form class="ask-question__form"
            @submit.prevent=""
          >
            <InputGroup class="ask-question__form-item"
              label="First Name*"
              placeholder="Your First Name"
            />
            <InputGroup class="ask-question__form-item"
              label="First Last*"
              placeholder="Your First Last"
            />
            <InputGroup class="ask-question__form-item"
              label="Email*"
              placeholder="Your Working Email"
            />
            <InputGroup class="ask-question__form-item"
              label="Phone"
              placeholder="Your phone number"
            />
            <InputGroup class="ask-question__form-item _col-2"
              label="Message*"
              placeholder="Your Message"
              tag="Textarea"
            />
            <CheckboxGroup class="ask-question__form-item">
              I agree to receive communications from Createx Online School
            </CheckboxGroup>
            <button class="ask-question__form-item btn">send message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.ask-question
  &__section
    padding: 18rem 0

  &__container

.ask-question
  display: flex
  align-items: center
  &__img
    margin-right: 10.5rem

    img 
      width: 100%
      height: 80%
      object-fit: cover
    

  &__body
    flex: 0 0 60%

  &__label

  &__title

  &__form
    margin-top: 4rem

    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 2.5rem

  &__form-item
    &._col-2
      grid-column: span 2





</style>