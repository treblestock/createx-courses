<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'



const props = defineProps({
  links: Array,
  colorInitial: String,
  colorHover: String,
})

const iconColor = computed(() => props.colorInitial || '#1E212C')
const iconColorHover = computed(() => props.colorHover || '#FF3F3A')

const spitePath = '/img/icons/socials/sprite.svg#'
const getSvgId = (link) => link.split('https://')[1].split('.')[0]
</script>

<template>
  <div class="socials">
    <a class="socials__link"
      v-for="link in links" :key="link"
      :href="link" target="_blank"
    >
      <svg class="socials__icon">
        <use :xlink:href="spitePath + getSvgId(link)"></use>
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
  

  color: v-bind(iconColor)
  &__link
    &:hover
      color: v-bind(iconColorHover)

  &__icon
    width: 2.4rem
    height: 2.4rem
    fill: currentColor

</style>