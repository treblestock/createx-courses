<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useStoreCreatex } from '@/stores/Createx.js'
const storeCreatex = useStoreCreatex()

const benefits = computed(() => storeCreatex.benefits)



</script>

<template>
  <section class="benefits">
    <div class="benefits__header">
      <div class="benefits__label title_label">Our benefits</div>
      <div class="benefits__title title">That’s how we do it</div>
    </div>
    <Tabs class="benefits__tabs"
      v-if="benefits"
      insetsClass="benefits__tabs-insets"
      bodyClass="benefits__tabs-body"
    >
      <template #insets class="benefits__tabs-insets">
        <div class="benefits__tabs-inset">
          Experienced Tutors
        </div>
        <div class="benefits__tabs-inset">
          Feedback & Support
        </div>
        <div class="benefits__tabs-inset">
          24/7 Online Library
        </div>
        <div class="benefits__tabs-inset">
          Community
        </div>
      </template>
      <template #body class="benefits__tabs-body">

        <div class="benefits__tabs-body-item"
          v-for="(benefit, ind) in benefits" :key="benefit.id" :="benefit"
        >
          <div class="benefits__tabs-body-item-body">
            <div class="benefits__tabs-body-item-title">{{ benefit.title }}</div>
            <div class="benefits__tabs-body-item-text">{{ benefit.text }}</div>
          </div>
          <div class="benefits__tabs-body-item-img">
            <Img :src="`src/assets/img/decor/illustrations/0${ind + 1}.webp`"/>
          </div>
        </div>

      </template>
    </Tabs>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.benefits
  &__section

  &__container

  &__header
    text-align: center

  &__label
  &__title


  &__tabs
    margin-top: 6rem



  &__tabs-inset
    flex: 1 1 auto
    text-align: center
    padding: 1rem 3rem
    border-radius: $border-radius


    font-size: 1.6rem
    line-height: 1.6
    color: $color-gray-600

    &._active
      color: $color-carrot
      box-shadow: 0 0 0 1px $color-carrot


  &__tabs-body-item
    animation: fade ease .3s

@keyframes fade 
  0% 
    opacity: 0
  100% 
    opacity: 1
    
  


:deep(.benefits__tabs-insets)
  display: flex

:deep(.benefits__tabs-body)
  padding-top: 6rem


.benefits
  &__tabs-body-item
    display: flex
    align-items: center

  &__tabs-body-item-title
    margin-bottom: 2.4rem

    font-size: 3.2rem
    line-height: 1.3
    font-weight: 700
    color: $color-gray-900
  &__tabs-body-item-text
    font-size: 1.6rem
    line-height: 1.5
    color: $color-gray-800

  &__tabs-body-item-img
    margin-left: 13rem
    flex: 0 0 60rem
    img 
      width: 100%
      height: 100%
      object-fit: cover
    


</style>