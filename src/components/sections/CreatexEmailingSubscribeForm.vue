<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreSendFormData } from '@/stores/SendFormData.js'
const storeSendFormData = useStoreSendFormData()

const email = ref('')
const form = ref(null)
function onSubmit() {
  const data = JSON.stringify({
    form: form.value.id,
    email: email.value,
  })
  storeSendFormData.sendFormData(data)
  email.value = ''
}

</script>

<template>
  <section class="subscribe-announcements">
    <div class="subscribe-announcements__label title_label">Don’t miss anything</div>
    <h2 class="subscribe-announcements__title title">Subscribe to the Createx School announcements</h2>
    <form class="subscribe-announcements__form"
      action=""
      ref="form"
      id="createx-emailing"
      @submit.prevent="onSubmit"
    >
      <Input class="subscribe-announcements__input"
        placeholder="Your working email"
        v-model="email"
      ></Input>
      <button class="subscribe-announcements__btn btn">Subsctribe</button>
    </form>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.subscribe-announcements
  &__label
    text-align: center

  &__title
    text-align: center

  &__form
    margin-top: 6rem

    display: flex

  &__input

  &__btn
    margin-left: 2.4rem



</style>