<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'



const props = defineProps({
  links: Array,
})


</script>

<template>
  <div class="socials">
    <a class="socials__link"
      v-for="link in links" :key="link"
      :href="'https://' + link" target="_blank"
    >
      <svg class="socials__icon">
        <use :xlink:href="'src/assets/img/icons/socials/sprite.svg#' + link.split('.')[0]"></use>
      </svg>
    </a>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.socials
  display: flex
  flex-direction: row
  align-items: center
  
  > * + * 
    margin-left: 2rem
  

  color: $color-gray-900
  &__link
    &:hover
      color: $color-carrot

  &__icon
    width: 2.4rem
    height: 2.4rem
    fill: currentColor

</style>