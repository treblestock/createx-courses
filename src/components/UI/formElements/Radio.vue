<script>
export default { 
  inheritAttrs: false,
}
</script>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: [String, Array, Boolean],
})
const emit = defineEmits([
  'input',
])

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('input', value),
})

const getElementClass = (classList) =>
  classList ? classList.split(' ').filter(cls => cls.includes('__') ).join(' ') : ''
const getBlockClass = (classList) =>
  classList ? classList.split(' ').filter(cls => !cls.includes('__') ).join(' ') : ''
</script>



<template>
  <label class="radio"
    :class="getElementClass($attrs.class)"
  >
    <input type="radio" class="radio__radio"
      :="$attrs"
      v-model="model"
    >
    <span class="radio__ui"
      :class="getBlockClass($attrs.class)"
    ></span>
  </label>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.radio
  display: inline-flex
  justify-content: center
  align-items: center
  width: 1.6rem
  height: 1.6rem

  border-radius: 50%
  box-shadow: inset 0 0 0 1px $color-gray-700
  
  &__ui
    display: inline-block
    width: 60%
    height: 60%
    border-radius: 50%

    cursor: pointer
  &__radio
    position: absolute
    opacity: 0

    &:checked ~ .radio__ui
      background: $color-carrot

        
      


</style>