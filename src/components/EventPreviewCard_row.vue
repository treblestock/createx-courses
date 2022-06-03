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
      <div class="event-preview-card__date-date">2</div>
      <div class="event-preview-card__when">
        <div class="event-preview-card__date-month">sept</div>
        <div class="event-preview-card__time">11:30-12:20</div>
      </div>
      <div class="event-preview-card__when">
        <div class="event-preview-card__title">Lorem ipsum dolor sit amet.</div>
        <div class="event-preview-card__event-type">online lecture</div>
      </div>
    </div>
      
    <button class="event-preview-card__btn btn">View more</button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.event-preview-card {
  display: flex;
  justify-content: space-between;
  > * + * {
    margin-left: 4rem;
  }
  width: 123rem;
  padding: 3rem 4rem;

  border: solid 1px $color-gray-300;
  box-shadow: $box-shadow;
  
  &__body {
    display: flex;
    justify-content: space-between;
    > * + * {
      margin-left: 4rem;
    }
  }
  &__when {
    margin-left: 2rem;
  }
  &__date-date {
    font-size: 4.6rem;
    line-height: 1.3;
    font-weight: 700;
    color: $color-carrot;
  }
  &__date-month {
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 700;
    color: $color-gray-900;
  }
  &__time {
    margin-top: 1rem;

    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-700
  }
  &__title {
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 700;
    color: $color-gray-900;
  }
  &__event-type {
    margin-top: 1rem;

    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-700;
  }
  &__btn {
    margin-left: 5rem;
  }
}


</style>