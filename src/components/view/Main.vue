<script setup>
import { ref, computed, watch } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

// page sections
import WhyCreateX from '@/components/sections/WhyCreateX.vue'
import CoursesGrid from '@/components/sections/CoursesGrid.vue'
// import Benefits from '@/components/sections/Benefits.vue'
// import EventsGrid from '@/components/sections/EventsGrid.vue'
// import Certificate from '@/components/sections/Certificate.vue'
// import Team from '@/components/sections/Team.vue'
// import Reviews from '@/components/sections/Reviews.vue'
// import BlogGrid from '@/components/sections/BlogGrid.vue'
// import SubscribeAnnouncementsForm from '@/components/sections/SubscribeAnnouncementsForm.vue'


const props = defineProps({
  
})


</script>

<template>
  <WhyCreateX></WhyCreateX>
  <CoursesGrid></CoursesGrid>
  <!-- <Benefits></Benefits> -->
  <!-- <EventsGrid></EventsGrid> -->
  <!-- <Certificate></Certificate> -->
  <!-- <Team></Team> -->
  <!-- <Reviews></Reviews> -->
  <!-- <BlogGrid></BlogGrid> -->
  <!-- <SubscribeAnnouncementsForm></SubscribeAnnouncementsForm> -->
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';



</style>