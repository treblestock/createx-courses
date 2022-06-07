<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'



const props = defineProps({
  src: String,
  absolute: Boolean,
})


const prefix = props.absolute ? '' : 'http://localhost:3000/'
const src = props.src ? props.src : 'src/assets/img/test.jpg'
const path = prefix + src


</script>

<template>
  <img :src="path" alt="">  
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

</style>