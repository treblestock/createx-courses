<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreSendFormData } from '@/stores/SendFormData.js'
const storeSendFormData = useStoreSendFormData()

const form = ref(null)

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const agreeRecieveMessages = ref(false)

function onSubmit() {
  const data = JSON.stringify({
    form: form.value.id,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    agreeRecieveMessages: agreeRecieveMessages.value,
  })
  storeSendFormData.sendFormData(data)
  firstName.value = lastName.value = email.value = phone.value = message.value = ''
  agreeRecieveMessages.value = false
}

</script>

<template>
  <section class="ask-question">
    <div class="ask-question__img">
      <Img src="/img/decor/illustrations/01.webp" />
    </div>
    <div class="ask-question__body">
      <div class="ask-question__label title_label">Any questions?</div>
      <h2 class="ask-question__title title">Drop us a line</h2>
      <form class="ask-question__form"
        action=""
        ref="form"
        id="support"
        @submit.prevent="onSubmit"
      >
        <InputGroup class="ask-question__form-item"
          label="First Name*"
          placeholder="Your First Name"
          v-model="firstName"
        />
        <InputGroup class="ask-question__form-item"
          label="First Last*"
          placeholder="Your First Last"
          v-model="lastName"
        />
        <InputGroup class="ask-question__form-item"
          label="Email*"
          placeholder="Your Working Email"
          v-model="email"
        />
        <InputGroup class="ask-question__form-item"
          label="Phone"
          placeholder="Your phone number"
          v-model="phone"
        />
        <InputGroup class="ask-question__form-item __col-2"
          label="Message*"
          placeholder="Your Message"
          tag="Textarea"
          v-model="message"
        />
        <CheckboxGroup class="ask-question__form-item"
          v-model="agreeRecieveMessages"
        >
          I agree to receive communications from Createx Online School
        </CheckboxGroup>
        <button class="ask-question__form-item btn">send message</button>
      </form>
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
    &.__col-2
      grid-column: span 2





</style>