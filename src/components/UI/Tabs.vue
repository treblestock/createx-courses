<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()


const props = defineProps({
  
})

const insetsContainer = ref(null)
const body = ref(null)


function setNewActiveTab(event) {
  const bodyItems = [...body.value.children]
  const insets = [...insetsContainer.value.children]

  const inset = event.target.closest('.tabs__insets>*')
  const activeInd = [...inset.parentElement.children].indexOf(inset)

  insets.forEach(inset => inset.classList.remove('_active') )
  bodyItems.forEach(inset => inset.classList.remove('_active') )
  insets[activeInd].classList.add('_active')
  bodyItems[activeInd].classList.add('_active')
}
onMounted(() => {
  insetsContainer.value.children[0].classList.add('_active')
  body.value.children[0].classList.add('_active')
})

</script>

<template>
  <div class="tabs">
    <div class="tabs__insets"
      ref="insetsContainer"
      @click="setNewActiveTab"
    >
      <slot name="insets"></slot>
    </div>
    <div class="tabs__body"
      ref="body"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.tabs {
  &__insets {

    ._active {
      background: red;
    }
  }
  &__body {
    >*:slotted( :not(._active) ) {
      display: none;
    }
  }
}


</style>