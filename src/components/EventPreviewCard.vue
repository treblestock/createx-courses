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
  <div class="event-preview-card">
    <div class="event-preview-card__body">
      <div class="event-preview-card__date">2 septem</div>
      <div class="event-preview-card__time">11:30-12:20</div>
      <div class="event-preview-card__title">Lorem ipsum dolor sit amet.</div>
      <div class="event-preview-card__event-type">online lecture</div>
    </div>
      
    <button class="event-preview-card__btn btn _outl">View more</button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.event-preview-card {
  width: 39rem;
  padding: 2.4rem;
  border: solid 1px $color-gray-300;
  box-shadow: $box-shadow;
  
  &__body {
    display: flex;
    flex-direction: column;
    align-items: start;
    > * + * {
      margin-top: 1rem;
    }
  }
  &__date {
    font-size: 2.8rem;
    line-height: 1.5;
    font-weight: 700;
    color: $color-carrot;
  }
  &__time {
    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-700
  }
  &__title {
    margin-top: 2rem;

    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 700;
    color: $color-gray-900;

  }
  &__event-type {
    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-700;
  }
  &__btn {
    margin-top: 5rem;
  }
}


</style>