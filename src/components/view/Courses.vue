<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import CoursesGrid from '@/components/sections/CoursesGrid.vue'
import Reviews from '@/components/sections/Reviews.vue';
import Certificate from '@/components/sections/Certificate.vue';
import CreatexEmailingSubscribeForm from '@/components/sections/CreatexEmailingSubscribeForm.vue';




const props = defineProps({
  
})






</script>

<template>
  <main class="courses">
    <div class="courses__label title_label">Enjoy your studying!</div>
    <div class="courses__title title">Our online courses</div>
    <div class="courses__courses-grid-section section">
      <div class="courses__courses-grid-container container">
        <CoursesGrid class="courses__courses-grid" />
      </div>
    </div>

    <div class="courses__reviews-section section">
      <div class="courses__reviews-container container">
        <Reviews  class="courses__reviews"/>
      </div>
    </div>
    <div class="courses__certificate-section section">
      <div class="courses__certificate-container container">
        <Certificate class="courses__certificate"/>
      </div>
    </div>
    <div class="courses__createx-emailing-subscribe-form-section section">
      <div class="courses__createx-emailing-subscribe-form-container container">
        <CreatexEmailingSubscribeForm class="courses__createx-emailing-subscribe-form"/>
      </div>
      <div class="section__decor"></div>
    </div>


    
    
    
  </main>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI

.courses
  &__label
    margin-bottom: 1rem
    text-align: center

  &__title
    text-align: center

  &__courses-grid-section
    padding: 6rem 0 12rem

  &__courses-grid-container

  &__courses-grid

  &__reviews-section
    padding: 8rem 0
    background: $color-gray-200

  &__reviews-container

  &__reviews

  &__certificate-section
    padding: 12rem 0 0rem

  &__certificate-container

  &__certificate

  &__createx-emailing-subscribe-form-section
    padding: 18rem 0 12rem
    +section-ui_carrot_bg-decor

  &__createx-emailing-subscribe-form-container
    max-width: 65rem

  &__createx-emailing-subscribe-form





</style>