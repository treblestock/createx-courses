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
  <label class="checkbox-group"
    :class="getElementClass($attrs.class)"
  >
    <Checkbox class="checkbox-group__checkbox"
      :="$attrs"
      v-model="model"
    ></Checkbox>
    <span class="checkbox-group__label">
      <slot></slot>
    </span>
  </label>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.checkbox-group
  display: inline-flex
  align-items: start
  &__checkbox
    flex: 0 0 auto
    margin-top: .5rem
    margin-right: 1.2rem

  &__label
    font-size: 1.6rem
    line-height: 1.5
    color: $color-gray-800



</style>