<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: String,
    icon: String
  },
}
</script>

<template>
  <label class="input" :class="$attrs.class">
    <input type="text" class="input__input"
      :="$attrs"
      @input="$emit('input', $event.target.value)"
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