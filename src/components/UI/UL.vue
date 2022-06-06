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

  :slotted(> *)
    --url: v-bind(cssUrl)
    list-style: var(--url)
    padding-right: 0.5rem
      
    

</style>