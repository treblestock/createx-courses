<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()


const props = defineProps({
  
})

let isActive = ref(false)

</script>

<template>
  <div class="spoiler"
    :class="isActive ? '_active' : ''" 
  >
    <div class="spoiler__title"
      @click="isActive = !isActive"
    >
      <slot name="title"></slot>
    </div>
    <div class="spoiler__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.spoiler {
  &__title {
  }
  &__body {
    .spoiler:not(._active) & {
      display: none;
    }
  }
}


</style>