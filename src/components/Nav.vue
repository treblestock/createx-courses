<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'





const route = useRoute()
const router = useRouter()



const props = defineProps({
  
})

</script>

<template>
  <div class="nav">
    <AppLink class="nav__link" :to="{name: 'main'}">main</AppLink>
    <AppLink class="nav__link" :to="{name: 'courses'}">courses</AppLink>
    <AppLink class="nav__link" :to="{
      name: 'course', 
      params: { courseId: 1 }
    }">course</AppLink>
    <AppLink class="nav__link link" :to="{name: 'events'}">events</AppLink>
    <AppLink class="nav__link" :to="{
      name: 'event', 
      params: { eventId: 1 }
    }">event</AppLink>
    <AppLink class="nav__link" :to="{name: 'blogPosts'}">blogPosts</AppLink>
    <AppLink class="nav__link" :to="{
      name: 'blogPost', 
      params: { blogPostId: 1 }
    }">blogPost</AppLink>
    <AppLink class="nav__link" :to="{name: 'contacts'}">contacts</AppLink>
    <AppLink class="nav__link" :to="{name: 'about'}">about</AppLink>
    <AppLink class="nav__link" :to="{name: 'notFound'}">notFound</AppLink>
  </div>
</template>


<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';


.nav {
  display: flex;
  // ::v-deep &__link,
  &__link {
    margin: 1rem;
    &:hover {
      color: red;
    }
  }
}

</style>