<script>
export default {
  inheritAttrs: false,
}
</script>
<script setup>
const props = defineProps({
  label: String,
  tag: String,
})
</script>

<template>
  <div class="input-group" :class="$attrs.class">
    <div class="input-group__label">{{ label }}</div>
    <component class="input-group__input" :is="tag || 'Input'" :="$attrs"></component>
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