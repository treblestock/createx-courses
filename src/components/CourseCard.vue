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
  <div class="course-card">
    <div class="course-card__img">
      <img src="@/assets/img/test.jpg" alt="">
    </div>
    <div class="course-card__body">
      <div class="course-card__label">label</div>
      <a class="course-card__title link">title</a>
      <div class="course-card__bottom">
        <span class="course-card__price">100</span>
        <span class="course-card__teacher">by teacher</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.course-card {
  width: 39rem;

  border: solid 1px $color-gray-300;
  box-shadow: $box-shadow;
  &__img {
    height: 24rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    margin-bottom: 1.6rem;
  }
  &__body {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    
    > * + * {
      margin-top: 2rem;
    }
  }
  &__label {    
    padding: 0.2rem;
    margin-bottom: .5rem;

    border-radius: $border-radius;
    background: $color-green-light;

    font-size: 1.4rem;
    line-height: 1.5;
    color: $color-white;
  }
  &__title {
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 700;
    color: $color-gray-900;
  }
  &__bottom {

  }
  &__price {
    color: $color-red;
  }
  &__teacher {
    font-size: 1.8rem;
    line-height: 1.5;

    color: $color-gray-700;

    &:before {
      content: '|';
      padding: 0 1rem;
    }
  }
}

</style>