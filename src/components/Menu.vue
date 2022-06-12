<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


const props = defineProps({
  colorInitial: String,
})

</script>

<template>
  <nav class="menu">
    <ul class="menu__links">
      <li class="menu__links-item">
        <AppLink class="menu__links-link link"
          :class="colorInitial ? '_menu-color' : ''"
          :to="{name: 'UI' }"
        >UI</AppLink>
      </li>
      <li class="menu__links-item">
        <AppLink class="menu__links-link link"
          :class="colorInitial ? '_menu-color' : ''"
          :to="{name: 'about' }"
        >About us</AppLink>
      </li>
      <li class="menu__links-item">
        <AppLink class="menu__links-link link"
          :class="colorInitial ? '_menu-color' : ''"
          :to="{name: 'courses' }"
        >Courses</AppLink>
      </li>
      <li class="menu__links-item">
        <AppLink class="menu__links-link link"
          :class="colorInitial ? '_menu-color' : ''"
          :to="{name: 'events' }"
        >Events</AppLink>
      </li>
      <li class="menu__links-item">
        <AppLink class="menu__links-link link"
          :class="colorInitial ? '_menu-color' : ''"
          :to="{name: 'blogPosts' }"
        >blog</AppLink>
      </li>
      <li class="menu__links-item">
        <AppLink class="menu__links-link link"
          :class="colorInitial ? '_menu-color' : ''"
          :to="{name: 'contacts' }"
        >Contacts</AppLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.menu
  &__links
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    
    > * + * 
      margin-left: 4rem
    

  &__links-item

  &__links-link
    
:deep(._menu-color:not(:hover))
  color: v-bind(colorInitial)

</style>