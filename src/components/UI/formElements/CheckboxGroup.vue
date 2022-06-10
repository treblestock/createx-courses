<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <label class="checkbox-group" :class="$attrs.class">
    <Checkbox class="checkbox-group__checkbox"></Checkbox>
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