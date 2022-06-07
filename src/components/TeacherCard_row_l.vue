<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

import { useStoreTeachers } from '@/stores/Teachers.js'

const route = useRoute()
const router = useRouter()

const storeTeachers = useStoreTeachers()

const props = defineProps({
  id: [Number, String]
})

const teacher = computed(() => storeTeachers.findTeacher(props.id) )


</script>

<template>
  <div class="teacher-card" v-if="teacher">
    <div class="teacher-card__img">
      <Img :src="teacher.imgTeacher" />
    </div>
    <div class="teacher-card__body">
      <div class="teacher-card__role">speaker</div>
      <div class="teacher-card__name">{{ teacher.name }}</div>
      <div class="teacher-card__pos">{{ teacher.pos }}</div>
      <div class="teacher-card__description">{{ teacher.description }}</div>
      <div class="teacher-card__companies">companies</div>
      <div class="teacher-card__socials">
        <Socials :links="teacher.socials"></Socials>
      </div>
    </div>
  </div>
</template>


<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.teacher-card
  width: 123rem
  display: flex

  &__img
    flex: 0 0 50rem
    max-height: 60rem

    background: $color-yellow
    img
      width: 100%
      height: 100%
      object-fit: cover


    margin-right: 13.5rem
  &__body

  &__role
    margin-bottom: 1rem
  &__name
    font-size: 4.6rem
    font-weight: 700
    line-height: 1.3
    color: $color-gray-900

    margin-bottom: 2rem
  &__pos
    font-size: 2rem
    line-height: 1.5
    color: $color-gray-700

    margin-bottom: 2.4rem
  &__description
    font-size: 1.6rem
    line-height: 1.6
    color: $color-gray-800

    margin-bottom: 4rem
  &__companies
    margin-bottom: 4rem

</style>