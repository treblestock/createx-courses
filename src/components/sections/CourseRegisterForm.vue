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
  <section class="course-register">
    <div class="course-register__img">
      <Img src="src\assets\img\decor\illustrations\06.webp" />
    </div>
    <div class="course-register__body">
      <div class="course-register__label title_label">Leave a request now and get 20% off!</div>
      <h2 class="course-register__title title">Register for the course</h2>
      <form class="course-register__form"
        action=""
        ref="form"
        id="course-register"
        @submit.prevent="onSubmit"
      >
        <InputGroup class="course-register__form-item"
          label="Full Name"
          placeholder="Your Full Name"
          v-model="name"
        />
        <InputGroup class="course-register__form-item"
          label="Email"
          placeholder="Your working number"
          v-model="email"
        />
        <InputGroup class="course-register__form-item"
          label="Phone"
          placeholder="Your Phone number"
          v-model="phone"
        />
        <button class="course-register__form-btn btn">Join the course</button>
      </form>
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