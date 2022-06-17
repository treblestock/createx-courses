<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'



const props = defineProps({
  forWhom: Array,
})

</script>

<template>

  <section class="for-whom">
    <div class="for-whom__header">
      <div class="for-whom__label title_label">For whom?</div>
      <div class="for-whom__title title">Who will benefit from the course:</div>
    </div>
    <div class="for-whom__body">
      <ul class="for-whom__items">
        <li class="for-whom__item _ticked"
          v-for="item in forWhom" :key="item"
        >{{ item }}</li>
      </ul>
    </div>

  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.for-whom
  display: flex

  &__header

  &__label

  &__title

  &__body
    padding-top: 3rem

    flex: 0 0 50%
    margin-left: 10.5rem

  &__items
    display: flex
    flex-direction: column    
    > * + * 
      margin-top: 2rem
    

  &__item




</style>