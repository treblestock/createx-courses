<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreCreatex } from '@/stores/Createx.js'
const storeCreatex = useStoreCreatex()

const props = defineProps({
  
})

const contacts = computed(() => storeCreatex.contacts)
const socials = computed(() => storeCreatex.socials)

</script>

<template>
  <section class="address">
    <div class="address__body">
      <div class="address__label title_label">Contact info</div>
      <h2 class="address__title title">Get in touch</h2>
      <ul class="address__contacts" v-if="contacts">
        <li class="address__contacts-item">
          <div class="address__contacts-item-label">Talk to us:</div>
          <div class="address__contacts-item-info">{{ contacts.email }}</div>
        </li>
        <li class="address__contacts-item">
          <div class="address__contacts-item-label">Call us:</div>
          <div class="address__contacts-item-info">{{ contacts.tel }}</div>
        </li>
        <li class="address__contacts-item">
          <div class="address__contacts-item-label">Address:</div>
          <div class="address__contacts-item-info">{{ contacts.address }}</div>
        </li>
      </ul>

      <div class="address__socials" v-if="socials">
        <div class="address__socials-label">Follow us:</div>
        <Socials
          :links="socials"
        ></Socials>
      </div>
    </div>
    <div class="address__img">
      <Img src="/img/content/contacts/map.webp"/>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.address
  display: flex
  width: 100%
  &__body


  &__label

  &__title

  &__contacts
    margin-top: 4rem

    display: flex
    flex-direction: column
    
    > * + * 
      margin-top: 2.4rem
    
  &__contacts-item

  &__contacts-item-label
    font-size: 1.4rem
    line-height: 1.5
    color: $color-gray-700

  &__contacts-item-info
    margin-top: 0.5rem

    font-size: 1.8rem
    line-height: 1.5
    color: $color-gray-900

  &__socials
    margin-top: 5rem

  &__socials-label
    margin-bottom: 2.4rem

  &__img
    margin-left: 13rem

    flex: 0 0 60%

    img 
      width: 100%
      height: 135%
      object-fit: cover
    


</style>