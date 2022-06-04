<template>
  <label class="arrow__bg">
    <svg class="arrow__icon">
      <use xlink:href="@/assets/img/icons/decor/sprite.svg#arrow-top"></use>
    </svg>
  </label>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.arrow__bg
  color: $color-gray-900

  display: flex
  justify-content: center
  align-items: center

  width: 4.8rem
  height: 4.8rem
  border-radius: 50%

  transform: rotate(90deg)
  &:hover
    background: $color-carrot
    color: $color-white

.arrow__icon
  width: 2.4rem
  height: 2.4rem
  fill: currentColor

</style>