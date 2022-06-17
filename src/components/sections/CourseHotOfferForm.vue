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
  <section class="course-hot-offer">
    <div class="course-hot-offer__header">
      <h2 class="course-hot-offer__title title _32">20% discount for early birds!</h2>
      <TimeCounter />
    </div>
    <form class="course-hot-offer__form"
      action=""
      ref="form"
      id="course-register-hot-offer"
      @submit.prevent="onSubmit"
    >
      <InputGroup class="course-hot-offer__input-group"
        label="Full name"
        placeholder="Your full name"
        v-model="name"
      />
      <InputGroup class="course-hot-offer__input-group"
        label="email"
        placeholder="Your working email"
        v-model="email"
      />
      <InputGroup class="course-hot-offer__input-group"
        label="Phone"
        placeholder="Your phone number"
        v-model="phone"
      />
      <button class="course-hot-offer__btn btn">join the course</button>
    </form>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

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