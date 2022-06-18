<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'


const props = defineProps({
  icon: String,
})

const iconUrl = computed(() => props.icon || 'none')
const cssUrl = `url('${iconUrl.value}')`

</script>

<template>
  <ul class="ul">
    <slot></slot>
  </ul>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.ul

  :slotted(li)
    display: flex
    align-items: center
    // --url: v-bind(cssUrl)
    &:before
      display: block
      width: 2.4rem
      height: 2.4rem

      color: red
      // content: var(--url)
      content: url('/src/assets/img/icons/decor/tick-circled.svg')
      transform: translate(0, .2rem)
      // content: url('@/assets/img/test.jpg')
      padding-right: 1rem
      
    

</style>