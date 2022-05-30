<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()


const props = defineProps({
  id: Number,
  userId: Number,
  title: String,
  body: String,
})

</script>

<template>
  <div class="post" v-if="id">
    <div class="post__id">post: {{id}}</div>
    <div class="post__user-id">user: {{userId}}</div>
    <div class="post__title">{{title}}</div>
    <div class="post__body">{{body}}</div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/_vars';
@import '@/assets/css/_helpers';
.post {
  width: 60rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5rem;
  
  > * + * {
    margin-top: 1em;
  }
  &__id {
    color: red;
  }
  &__user-id {
    font-weight: 700;
  }
  &__body {
  }
  &__title {
    font-size: 2.3rem;
    font-weight: 700;
    text-transform: uppercase;
  }
}

</style>