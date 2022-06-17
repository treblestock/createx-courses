<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import Address from '@/components/sections/Address.vue'
import AskQuestionForm from '@/components/sections/AskQuestionForm.vue'


const props = defineProps({
  
})

</script>


<template>
  <main class="main contacts">
    <div class="contacts__address-section section">
      <div class="contacts__address-container container">
        <Address class="contacts__address"/>
      </div>
    </div>
    <div class="contacts__ask-question-form-section section">
      <div class="contacts__ask-question-form-container container">
        <AskQuestionForm class="contacts__ask-question-form"/>
      </div>
    </div>  
  </main>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.main

.contacts
  &__address-section
    padding-top: 8rem

  &__address-container

  &__address

  &__ask-question-form-section
    padding: 18rem 0

  &__ask-question-form-container

  &__ask-question-form



</style>