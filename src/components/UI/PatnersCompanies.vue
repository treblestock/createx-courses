<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'



const props = defineProps({
  logos: Array,
})


</script>

<template>
  <div class="patners-logos">
    <a class="patners-logos__link"
      v-for="logo in logos" :key="logo"
      href="https://" target="_blank"
    >
      <div class="patners-logos__icon">
        <Img class="patners-logos__icon-static" :src='logo.static' />
        <Img class="patners-logos__icon-hover" :src='logo.hover' />

      </div>
    </a>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.patners-logos
  display: flex
  flex-direction: row
  align-items: center
  
  > * + * 
    margin-left: 2rem
  

  &__icon
    width: 2.4rem
    height: 2.4rem
    &:not(&:hover) 
      .patners-logos__icon-hover
        display: none
    &:hover 
      .patners-logos__icon-static
        display: none    
  

  

</style>