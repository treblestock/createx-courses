<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import { ref, computed, watch } from 'vue'
const props = defineProps({
  modelValue: String,
})
const emit = defineEmits([
  'input'
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
  <label class="radio" :class="$attrs.class">
    <input type="radio" class="radio__radio"
      :="$attrs"
      v-model="model"
    >
    <div class="radio__ui">
      <slot></slot>
    </div>
  </label>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.radio

  &__ui
    padding: 1rem 2rem
    border-radius: $border-radius

    font-size: 1.6rem
    line-height: 1.6
    color: $color-gray-600
    font-weight: 700

  &__radio
    position: absolute
    opacity: 0

    &:checked
      ~ .radio__ui
        box-shadow: 0 0 0 1px $color-carrot
        color: $color-carrot



        
      


</style>