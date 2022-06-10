<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <label class="input" :class="$attrs.class">
    <input :="$attrs" type="input" class="input__input">
  </label>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.input
  display: inline-block
  width: 100%
  
  
  &__input
    display: inline-block
    width: 100%

    padding: 1rem 1.5rem
    box-shadow: 0 0 0 1px $color-gray-400

    border-radius: $border-radius
    cursor: text

    font-size: 1.6rem
    line-height: 1.5
    color: $color-gray-800
    background: $color-white

    &::placeholder
      color: $color-gray-400
      text-transform: lowercase



        
      


</style>