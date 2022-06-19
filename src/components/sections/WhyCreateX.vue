<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()


const props = defineProps({
  
})

</script>

<template>
  <section class="why">
    <div class="why__img">
      <img src="/img/content/why.jpg" alt="">
    </div>
    <div class="why__body">
      <div class="why__label title_label">Who we are</div>
      <h2 class="why__title title">Why Createx?</h2>
      <ul class="why__list">
        <li class="why__list-item">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
        <li class="why__list-item">Vulputate placerat amet pulvinar lorem nisl.</li>
        <li class="why__list-item">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
        <li class="why__list-item">Etiam duis lobortis in fames ultrices commodo nibh.</li>
        <li class="why__list-item">Tincidunt sagittis neque sem ac eget.</li>
        <li class="why__list-item">Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
      </ul>
      <AppLink class="why__btn btn"
        :to="{name: 'about'}"
      >More about us</AppLink>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.why
  &__section

  &__container


.why
  display: flex

  &__img
    flex: 1 1 auto
    max-width: 70rem

    margin-right: 13.5rem
    img 
      width: 100%
      height: 100%
      object-fit: cover
    

  &__body
    display: flex
    flex-direction: column
    align-items: start
    
    > * + * 
      margin-top: 4rem
    

  &__label


  &__title
    border-top: 1rem

  &__list

  &__list-item
    + *
      margin-top: 1.2rem


  &__btn
    margin-top: 5rem



</style>