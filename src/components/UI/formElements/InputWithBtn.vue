<script>
export default { 
  inheritAttrs: false,
}
</script>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: [String, Array, Boolean],
  icon: String,
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
  <label class="input" 
    :class="getElementClass($attrs.class)"
  >
    <input type="text" class="input__input"
      :="$attrs"
      v-model="model"
    >
    <button class="input__icon">
      <slot>
        <Img :src="icon || 'src/assets/img/icons/search.svg'" />
      </slot>
    </button>
  </label>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.input
  display: inline-flex
  align-items: center
  width: 100%
  
  padding: 1rem 1.5rem
  box-shadow: 0 0 0 1px $color-gray-400

  border-radius: $border-radius
  
  &__input
    flex: 1 1 auto

    cursor: text

    font-size: 1.6rem
    line-height: 1.5
    color: $color-gray-800
    background: $color-white

    &::placeholder
      color: $color-gray-400
      text-transform: lowercase

  &__icon
    flex: 0 0 1.6rem
    height: 1.6rem
    cursor: pointer

    img 
      width: 100%
      height: 100%
      object-fit: cover
    


        
      


</style>