<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


</script>

<template>
  <section class="certificate">
    <div class="certificate__body">
      <div class="certificate__label title_label">Createx Certificate</div>
      <div class="certificate__title title">Your expertise will be confirmed</div>
      <div class="certificate__text">We are accredited by international professional organizations and institutes:</div>
    </div>
    <div class="certificate__img">
      <Img src="src/assets/img/content/sertificate.webp"/>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

  
.certificate
  display: flex
  &__body
    flex: 0 0 calc(30%)

  &__label

  &__title

  &__text
    margin-top: 5rem

    font-size: 1.6rem
    line-height: 1.5
    color: $color-gray-800

  &__img
    margin-left: 13rem

    img 
      width: 100%
      height: 100%
      object-fit: cover
    

.section

.container


</style>