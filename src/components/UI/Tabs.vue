<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import { useTabsLogic } from '@/components/composable/useTabsLogic'

const props = defineProps({
  insetsClass: String,
  bodyClass: String,
})

const insets = ref(null)
const body = ref(null)


const { setActiveTab }  = useTabsLogic({
  insets,
  body,
})

onMounted(() => {
  insets.value.children[0].classList.add('_active')
  body.value.children[0].classList.add('_active')
})

</script>

<template>
  <div class="tabs">
    <div class="tabs__insets"
      ref="insets"
      @click="setActiveTab"
      :class="insetsClass"
    >
      <slot name="insets"
        ref="ins"
        :ins="$refs.ins"
      ></slot>
    </div>
    <div class="tabs__body"
      ref="body"
      :class="bodyClass"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.tabs
  &__insets

    :slotted(> *)
      cursor: pointer
      


  &__body
    >*:slotted( :not(._active) )
      display: none


</style>