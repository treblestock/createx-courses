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
    &:before
      display: block
      width: 2.4rem
      height: 2.4rem

      color: red
      content: var(--url)
      // content: url('@/assets/img/test.jpg')
      padding-right: 0.5rem
    --url: v-bind(cssUrl)
    // list-style: var(--url)
      
    

</style>