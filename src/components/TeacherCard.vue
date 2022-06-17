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
  <article class="teacher-card" v-if="teacher">
    <div class="teacher-card__img">
      <Img :src="teacher.imgTeacher" />
    </div>
    <div class="teacher-card__body">
      <div class="teacher-card__name">{{ teacher.name }}</div>
      <div class="teacher-card__pos">{{ teacher.pos }}</div>
      <!-- <div class="teacher-card__socials">
        <Socials :links="teacher.socials"></Socials>
      </div> -->
    </div>
  </article>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.teacher-card
  width: 28.5rem

  border: solid 1px $color-gray-300
  box-shadow: $box-shadow
  &__img
    height: 32rem
    background: $color-yellow
    img
      width: 100%
      height: 100%
      object-fit: cover
      object-position: top


    margin-bottom: 1.6rem
  &__name
    font-size: 2rem
    font-weight: 700
    line-height: 1.5
    color: $color-gray-800
    text-align: center

    margin-bottom: .5rem
  &__pos
    font-size: 1.6rem
    line-height: 1.6
    color: $color-gray-700
    text-align: center


</style>