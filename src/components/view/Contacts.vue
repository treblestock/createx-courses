<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreCreateX } from '@/stores/CreateX.js'

import Address from '@/components/sections/Address.vue'
import AskQuestionForm from '@/components/sections/AskQuestionForm.vue'
import ArticlesEmailingSubscribeForm from '@/components/sections/ArticlesEmailingSubscribeForm.vue'
import EventsEmailingSubscribeForm from '@/components/sections/EventsEmailingSubscribeForm.vue'
import EventRegisterForm from '@/components/sections/EventRegisterForm.vue'
import CourseRegitsterForm from '@/components/sections/CourseRegitsterForm.vue'
import CourseHotOfferForm from '@/components/sections/CourseHotOfferForm.vue'

const storeCreateX = useStoreCreateX()

const props = defineProps({
  
})

</script>


<template>
  <Address />
  <AskQuestionForm />
  <ArticlesEmailingSubscribeForm />
  <EventsEmailingSubscribeForm />
  <EventRegisterForm />
  <CourseRegitsterForm />
  <CourseHotOfferForm />
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers



</style>