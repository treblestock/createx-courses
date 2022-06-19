<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreSendFormData } from '@/stores/SendFormData.js'
const storeSendFormData = useStoreSendFormData()

const form = ref(null)

const email = ref('')
const isAgreeToRecieveEmails = ref(false)
function onSubmit() {
  const data = JSON.stringify({
    form: form.value.id,
    email: email.value,
    isAgreeToRecieveEmails: isAgreeToRecieveEmails.value,
  })
  storeSendFormData.sendFormData(data)
  email.value = ''
  isAgreeToRecieveEmails.value = false
}

</script>

<template>
  <section class="events-emailing">
    <div class="events-emailing__img">
      <Img src="/img/decor/illustrations/10.webp" />
    </div>
    <div class="events-emailing__body">
      <h2 class="events-emailing__title title _32">
        Don’t want to miss the best events?
        <br />Subscribe to our newsletter!
      </h2>
      <form class="events-emailing__form"
        action=""
        ref="form"
        id="events-emailing"
        @submit.prevent="onSubmit"
      >
        <div class="events-emailing__form-row">
          <Input 
            placeholder="Your working email"
            v-model="email"
          />
          <button class="events-emailing__form-btn btn">send message</button>
        </div>
        <CheckboxGroup class="events-emailing__form-item _col-2"
          v-model="isAgreeToRecieveEmails"
        >
          I agree to receive communications from Createx Online School
        </CheckboxGroup>
      </form>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.events-emailing
  &__section
    padding: 0

  &__container
    position: relative
    
    padding: 6rem 10rem
    &:before 
      z-index: -1
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0

      display: block
      content: ''
      background: $color-carrot
      opacity: 0.2
      
    

.events-emailing
  display: flex
  align-items: center
  &__img
    margin-right: 10.5rem

    img 
      width: 100%
      height: 80%
      object-fit: cover
    

  &__body
    flex: 0 0 65%


  &__title

  &__form-row
    margin: 4rem 0 2.5rem

    display: flex

    

  &__form-btn
    margin-left: 2.5rem
    flex: 0 0 auto





</style>