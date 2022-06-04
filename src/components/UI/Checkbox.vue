<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <label class="checkbox">
    <input type="checkbox" class="checkbox__checkbox">
    <span class="checkbox__ui"></span>
  </label>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.checkbox
  display: inline-block
  width: 1.6rem
  height: 1.6rem

  border-radius: $border-radius
  
  &__ui
    display: inline-block
    width: 100%
    height: 100%
    border-radius: $border-radius
    box-shadow: inset 0 0 0 1px $color-gray-700

    cursor: pointer

  &__checkbox
    position: absolute
    opacity: 0

    &:checked ~ .checkbox__ui
      box-shadow: none
      background: $color-carrot
      position: relative
      &:after 
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        font-size: 0.8em
        content: '\2713'
        color: $color-white
        
      


</style>