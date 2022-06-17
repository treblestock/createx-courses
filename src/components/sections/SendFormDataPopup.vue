<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


import SendFormData from '@/components/sections/SendFormData.vue'


import { useStoreSendFormData } from '@/stores/SendFormData.js'
const storeSendFormData = useStoreSendFormData()


const isActive = computed(() => storeSendFormData.isActive)

</script>

<template>
  <teleport to="body">
    <Popup class="send-form-data-popup"
      :isActive="isActive"
      isTransparent
      isNoCross
      @closed="storeSendFormData.isActive = false"
    >
      <SendFormData />
    </Popup>
  </teleport>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI

.send-form-data-popup
  top: 2rem
  left: 2rem

  display: block
  width: 30rem
  height: 30rem


</style>