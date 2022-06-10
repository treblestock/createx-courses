<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <label class="textarea" :class="$attrs.class">
    <textarea :="$attrs" class="textarea__textarea" />
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