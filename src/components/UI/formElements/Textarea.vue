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
  <label class="textarea" 
    :class="$attrs.class"
  >
    <textarea class="textarea__textarea" 
      :="$attrs"
      v-model="model"
    />
  </label>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.textarea
  display: inline-block
  width: 100%
  
  
  &__textarea
    display: inline-block
    width: 100%
    min-height: 12rem

    padding: 1rem 1.5rem
    box-shadow: 0 0 0 1px $color-gray-400

    border-radius: $border-radius
    cursor: text

    font-size: 1.6rem
    line-height: 1.5
    color: $color-gray-800

    &::placeholder
      color: $color-gray-400
      text-transform: lowercase



        
      


</style>