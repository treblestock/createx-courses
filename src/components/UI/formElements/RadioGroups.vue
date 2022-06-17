<script>
export default {
  inheritAttrs: false,
}
</script>
<script setup>
const props = defineProps({
  labels: Array,
})

</script>

<template>
  <div class="radios" :class="$attrs.class">
    <RadioGroup class="raidos__item"
      v-for="label in labels" :key="label" 
      :="$attrs"
    >{{ label }}</RadioGroup>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.radios
  &__item
    display: block
    + *
      margin-top: 1rem




</style>