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
  <div class="course-details-card">
    <div class="course-details-card__body">
      <div class="course-details-card__info">
        <div class="course-details-card__info-label">dates</div>
        <div class="course-details-card__info-value">2 septem</div>
        <div class="course-details-card__info-description">Lorem ipsum dolor sit amet. Dolor sit amet.</div>
      </div>
      <div class="course-details-card__info">
        <div class="course-details-card__info-label">duration</div>
        <div class="course-details-card__info-value">2 septem</div>
        <div class="course-details-card__info-description">Lorem ipsum dolor sit amet.</div>
      </div>
      <div class="course-details-card__info">
        <div class="course-details-card__info-label">price</div>
        <div class="course-details-card__info-value">$100</div>
        <div class="course-details-card__info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nisi!</div>
      </div>

    </div>
      
    <button class="course-details-card__btn btn">Join the course  </button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.course-details-card {
  width: 50rem;
  padding: 4rem 3rem;

  border: solid 1px $color-gray-300;
  box-shadow: $box-shadow;
  &__body {
    display: flex;
    flex-direction: column;
    > * + * {
      margin-top: 3rem;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    > * + * {
      margin-top: 1rem;
    }
  }
  &__info-label {
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 700;
    text-transform: uppercase;
    color: $color-gray-900;
  }
  &__info-value {
    font-size: 2.4rem;
    line-height: 1.3;
    font-weight: 700;
    color: $color-carrot;

  }
  &__info-description {
    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-700;
  }

  &__btn {
    margin-top: 4rem;
  }
}


</style>