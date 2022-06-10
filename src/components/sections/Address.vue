<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreCreateX } from '@/stores/CreateX.js'
const storeCreateX = useStoreCreateX()

const props = defineProps({
  
})

const contacts = computed(() => storeCreateX.createX?.contacts)
const socials = computed(() => storeCreateX.createX?.socials)

</script>

<template>
  <section class="address__section section">
    <div class="address__container container">
      <div class="address">
        <div class="address">
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
                :links="contacts.socials"
              ></Socials>
            </div>
          </div>
          <div class="address__img">
            <Img src="src/assets/img/content/contacts/map.webp"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.address
  &__section
    padding-top: 8rem

    // width: 100%
  &__container

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