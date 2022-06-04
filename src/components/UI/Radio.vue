<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <label class="checkbox">
    <input type="radio" class="checkbox__checkbox"
      :="$attrs"
    >
    <span class="checkbox__ui"></span>
  </label>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.checkbox
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
  &__checkbox
    position: absolute
    opacity: 0

    &:checked ~ .checkbox__ui
      background: $color-carrot

        
      


</style>