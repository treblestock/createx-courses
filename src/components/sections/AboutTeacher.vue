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
  id: [Number, String],
  label: String,
})

const teacher = computed(() => storeTeachers.findTeacher(props.id) )


</script>

<template>
  <section class="about-teacher" v-if="teacher">
    <div class="about-teacher__img">
      <Img :src="teacher.imgTeacher" />
    </div>
    <div class="about-teacher__body">
      <div class="about-teacher__label title_label">{{ label || 'teacher'}}</div>
      <div class="about-teacher__name">{{ teacher.name }}</div>
      <div class="about-teacher__pos">{{ teacher.pos }}</div>
      <div class="about-teacher__description">{{ teacher.description }}</div>
      <div class="about-teacher__companies">companies</div>
      <div class="about-teacher__socials">
        <Socials :links="teacher.socials"></Socials>
      </div>
    </div>
  </section>
</template>


<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.about-teacher
  width: 123rem
  display: flex

  &__img
    flex: 0 0 50rem
    max-height: 60rem

    background: $color-yellow
    overflow: visible
    img
      width: 100%
      height: 100%
      object-fit: cover
      object-position: top


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