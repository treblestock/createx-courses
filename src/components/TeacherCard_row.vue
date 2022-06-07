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
      <div class="teacher-card__name">{{ teacher.name }}</div>
      <div class="teacher-card__pos">{{ teacher.pos }}</div>
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
  width: 34rem
  display: flex

  border: solid 1px $color-gray-300
  box-shadow: $box-shadow
  &__img
    flex: 0 0 100px
    height: 100px
    background: $color-yellow
    img
      width: 100%
      height: 100%
      object-fit: cover

    margin-right: 2rem
  &__body

  &__name
    font-size: 2rem
    font-weight: 700
    line-height: 1.5
    color: $color-gray-800

    margin-bottom: .7rem
  &__pos
    font-size: 1.4rem
    line-height: 1.6
    color: $color-gray-700
    margin-bottom: 2rem


</style>