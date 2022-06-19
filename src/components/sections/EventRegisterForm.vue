<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreSendFormData } from '@/stores/SendFormData.js'
const storeSendFormData = useStoreSendFormData()

const form = ref(null)

const name = ref('')
const email = ref('')
const phone = ref('')
function onSubmit() {
  const data = JSON.stringify({
    form: form.value.id,
    name: name.value,
    email: email.value,
    phone: phone.value,
  })
  storeSendFormData.sendFormData(data)
  name.value = email.value = phone.value = ''
}
</script>

<template>
  <section class="events-register">
    <div class="events-register__img">
      <Img src="/img/decor/illustrations/04.webp" />
    </div>
    <div class="events-register__body">
      <div class="events-register__label title_label">Don’t miss the event</div>
      <h2 class="events-register__title title">Leave a request</h2>
      <form class="events-register__form"
        action=""
        ref="form"
        id="event-register"
        @submit.prevent="onSubmit"
      >
        <InputGroup class="events-register__form-item"
          label="Full Name"
          placeholder="Your Full Name"
          v-model="name"
        />
        <InputGroup class="events-register__form-item"
          label="Email"
          placeholder="Your working number"
          v-model="email"
        />
        <InputGroup class="events-register__form-item"
          label="Phone"
          placeholder="Your Phone number"
          v-model="phone"
        />
        <button class="events-register__form-btn btn">Join the event</button>
        <div class="events-register__form-explication">* You will receive a link to the online lecture in an email after registration.</div>
      </form>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.events-register
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