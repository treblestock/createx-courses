<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import CoursesGrid from '@/components/sections/CoursesGrid.vue'
import Reviews from '@/components/sections/Reviews.vue';
import Certificate from '@/components/sections/Certificate.vue';
import SubscribeAnnouncementsForm from '@/components/sections/SubscribeAnnouncementsForm.vue';




const props = defineProps({
  
})






</script>

<template>
  <div class="courses">
    <div class="courses__label title_label">Enjoy your studying!</div>
    <div class="courses__title title">Our online courses</div>
    <CoursesGrid class="courses__courses-grid"/>
    <Reviews />
    <Certificate/>
    <SubscribeAnnouncementsForm/>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.courses
  &__section
    padding-top: 8rem
  &__container


.courses
  &__label
    margin-bottom: 1rem
    text-align: center

  &__title
    text-align: center

  &__courses-grid
    margin-top: 6rem
    padding-bottom: 22rem





</style>