<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


const props = defineProps({
  
})

</script>

<template>
  <section class="articles-emailing__section section">
    <div class="articles-emailing__container container">
      <div class="articles-emailing">
        <div class="articles-emailing__img">
          <Img src="src\assets\img\decor\illustrations\02.webp" />
        </div>
        <div class="articles-emailing__body">
          <h2 class="articles-emailing__title title _32">
            Want to get the best articles weekly?
            <br/>Subscribe to our newsletter!
          </h2>
          <form class="articles-emailing__form"
            @submit.prevent=""
          >
            <div class="articles-emailing__form-row">
              <Input 
                placeholder="Your working email"
              />
              <button class="articles-emailing__form-btn btn">send message</button>
            </div>
            <CheckboxGroup class="articles-emailing__form-item _col-2">
              I agree to receive communications from Createx Online School
            </CheckboxGroup>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.articles-emailing
  &__section
    padding: 0
    background: $color-gray-200

  &__container

.articles-emailing
  display: flex
  align-items: center
  &__img
    margin-right: 10.5rem

    img 
      width: 100%
      height: 80%
      object-fit: cover
    

  &__body
    padding: 10rem 0 12rem
    flex: 0 0 50%


  &__title

  &__form-row
    margin: 4rem 0 2.5rem

    display: flex

    

  &__form-btn
    margin-left: 2.5rem
    flex: 0 0 auto





</style>