<script setup>
import { ref, computed, watch } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import Header from '@/components/sections/Header.vue'
import Footer from '@/components/sections/Footer.vue'

</script>

<template>
  <div class="page">
    <Header class="page__header"></Header>
    <div class="page__body">
      <RouterView></RouterView>
    </div>
    <Footer class="page__footer"></Footer>
  </div>
</template>

<style scoped lang="sass">

.page
  min-height: 100vh

  display: flex
  flex-direction: column

  &__header

  &__body
    flex: 1 1 auto
  &__footer


</style>