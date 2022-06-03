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
  <div class="teacher-card">
    <div class="teacher-card__img">
      <img src="@/assets/img/test.jpg" alt="">
    </div>
    <div class="teacher-card__body">
      <div class="teacher-card__name">name</div>
      <div class="teacher-card__pos">pos</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.teacher-card {
  width: 28.5rem;

  border: solid 1px $color-gray-300;
  box-shadow: $box-shadow;
  &__img {
    height: 32rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    margin-bottom: 1.6rem;
  }
  &__name {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    color: $color-gray-800;
    text-align: center;

    margin-bottom: .5rem;
  }
  &__pos {
    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-700;
    text-align: center;

  }
}

</style>