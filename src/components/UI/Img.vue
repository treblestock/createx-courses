<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

// import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'



const props = defineProps({
  src: String,
  absolute: Boolean,
})


const prefix = computed(() => props.absolute ? '' : 'http://localhost:3000/')
const src = computed(() => props.src ? props.src : 'src/assets/img/test.jpg')
const path = computed(() => prefix.value + src.value)


</script>

<template>
  <img :src="path" alt="">  
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

</style>