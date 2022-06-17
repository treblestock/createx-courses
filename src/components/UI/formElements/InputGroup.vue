<script>
export default { 
  inheritAttrs: false,
}
</script>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: [String, Array, Boolean],
  label: String,
  tag: String,
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
  <div class="input-group"
    :class="getElementClass($attrs?.class)"
  >
    <div class="input-group__label">{{ label }}</div>
    <component class="input-group__input" 
      :is="tag || 'Input'" 
      :="$attrs"
      v-model="model"
    />
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.input-group
  &__label
    margin-bottom: 1.5rem

  &__input


</style>