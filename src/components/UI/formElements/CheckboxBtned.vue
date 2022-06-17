<script>
export default { 
  inheritAttrs: false,
}
</script>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: [String, Array],
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
  <label class="checkbox" 
    :class="getElementClass($attrs?.class)"
  >
    <input type="checkbox" class="checkbox__checkbox"
      :="$attrs"
      v-model="model"
    >
    <div class="checkbox__ui"
      :class="getBlockClass($attrs?.class) || 'default-ui'"
    >
      <slot></slot>
    </div>
  </label>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


=defaultBtnUI
  padding: 1rem 2rem
  font-size: 1.6rem
  line-height: 1.6
  color: $color-gray-600
  font-weight: 700
  border-radius: $border-radius

.default-ui
  +defaultBtnUI

.checkbox

  &__ui
    cursor: pointer

  &__checkbox
    position: absolute
    opacity: 0

    &:checked
      ~ .checkbox__ui
        box-shadow: 0 0 0 1px $color-carrot
        color: $color-carrot



        
      


</style>