<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


const props = defineProps({
  dateEnd: [Date, String],
})
const dateDefault = new Date((Date.now() + 6.741 * 24 * 60 * 60 * 1000) )

const dateTo = 
  !props.dateEnd 
    ? dateDefault
    : typeof props.dateEnd === 'Date' 
      ? props.dateEnd 
      : new Date(props.dateEnd)
let dateNow = ref(new Date() )


const restTime = computed(() => {
  let delta = dateTo - dateNow.value
  const date = Math.floor(delta / (24 * 60 * 60 * 1000) )
  delta -= date * (24 * 60 * 60 * 1000)
  const hours = Math.floor(delta / (60 * 60 * 1000) )
  delta -= hours * (60 * 60 * 1000)
  const minutes = Math.floor(delta / (60 * 1000) )
  delta -= minutes * (60 * 1000)
  const seconds = Math.floor(delta / (1000) )
  delta -= seconds * (1000)

  return {
    date,
    hours,
    minutes,
    seconds,
  }
})

// const restTime = computed(() => ({
//   hours: dateTo.getHours() - dateNow.getHours(),
//   date: dateTo.getDate() - dateNow.getDate(),
//   minutes: dateTo.getMinutes() - dateNow.getMinutes(),
//   seconds: dateTo.getSeconds() - dateNow.getMinutes(),
// }))


const dateNowUpdate = ()  => dateNow.value = new Date()
onMounted(() => {
  setInterval( () => {
    dateNowUpdate()
  }, 1000)
})


</script>

<template>
  <div class="time-counter">
    <div class="time-counter__group">
      <div class="time-counter__number">{{ restTime.date}}</div>
      <div class="time-counter__label">Date</div>
    </div>
    <div class="time-counter__group">
      <div class="time-counter__number">{{ restTime.hours}}</div>
      <div class="time-counter__label">Hours</div>
    </div>
    <div class="time-counter__group">
      <div class="time-counter__number">{{ restTime.minutes}}</div>
      <div class="time-counter__label">Mins</div>
    </div>
    <div class="time-counter__group">
      <div class="time-counter__number">{{ restTime.seconds}}</div>
      <div class="time-counter__label">sec</div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.time-counter
  display: flex
  flex-direction: row
  
  > * + * 
    margin-left: 2.4rem
  
  &__group

  &__number
    font-size: 2rem
    line-height: 1.3
    font-weight: 700
    color: $color-gray-900
    

  &__label
    margin-top: 1rem

    font-size: 1.2rem
    line-height: 1.5
    color: $color-gray-900

</style>