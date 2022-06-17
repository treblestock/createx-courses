<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'



const props = defineProps({
  courseProgram: Array,
})

</script>

<template>

  <section class="course-program">
    <div class="course-program__body">
      <div class="course-program__label title_label">Course program</div>
      <div class="course-program__title title">What will you learn</div>
      <ul class="course-program__items">
        <li class="course-program__item"
          v-for="(item, ind) in courseProgram" :key="item"
        >
          <Spoiler>
            <template #title >
              <div class="course-program__item-title">
                <span class="red fw400">Lesson {{ ind + 1 }}.</span> {{ item.title }}
              </div>
            </template>
            <template #body >
              <div>
                {{ item.body }}
              </div>
            </template>
          </Spoiler>
        </li>
      </ul>
    </div>
    <div class="course-program__img">
      <Img src="src\assets\img\decor\illustrations\06.webp"/>
    </div>

  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.course-program
  display: flex
  align-items: center

  &__label

  &__title

  &__body
    flex: 0 0 50%

  &__items
    margin-top: 6rem
    display: flex
    flex-direction: column    
    > * + * 
      margin-top: 2.4rem
    

  &__item

  &__item-title
    font-size: 2rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900

    .fw400
      margin-right: 1rem
  
  &__img
    margin-left: 13.5rem

    img 
      width: 100%
      height: 100%
      object-fit: cover
    



</style>