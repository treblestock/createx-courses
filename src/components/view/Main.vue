<script setup>
import { ref, computed, watch } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'


import { useStoreTeachers } from '@/stores/Teachers.js'





const props = defineProps({
  
})


const storeTeachers = useStoreTeachers()
const teachers = computed(() => storeTeachers.teachers)
onMounted(() => storeTeachers.fetchTeachers() )

</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';



</style>