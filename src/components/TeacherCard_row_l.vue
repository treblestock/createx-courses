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
      <div class="teacher-card__role">speaker</div>
      <div class="teacher-card__name">name</div>
      <div class="teacher-card__pos">pos</div>
      <div class="teacher-card__description">description</div>
      <div class="teacher-card__companies">companies</div>
      <div class="teacher-card__socials">socials</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.teacher-card {
  width: 123rem;
  display: flex;

  &__img {
    flex: 0 0 50rem;
    max-height: 60rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    margin-right: 13.5rem;
  }
  &__body {

  }
  &__role {
    margin-bottom: 1rem;
  }
  &__name {
    font-size: 4.6rem;
    font-weight: 700;
    line-height: 1.3;
    color: $color-gray-900;

    margin-bottom: 2rem;
  }
  &__pos {
    font-size: 2rem;
    line-height: 1.5;
    color: $color-gray-700;

    margin-bottom: 2.4rem;
  }
  &__description {
    font-size: 1.6rem;
    line-height: 1.6;
    color: $color-gray-800;

    margin-bottom: 4rem;
  }
  &__companies {
    margin-bottom: 4rem;
  }
}

</style>