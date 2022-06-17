<script setup>




</script>

<template>
  <div class="not-found-warning">
    Not found on path: <br>
    <span class="blue">{{ this.$route.fullPath }}</span>
    <button @click="$router.push('/')">home page</button>
    <button @click="$router.go(-1)">back</button>
  </div>
</template>

<style scoped lang="sass">

.not-found-warning 
  height: 100vh
  width: 100vw

  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  font-size: 40px
  text-align: center

  > * 
    margin-bottom: 20px
  

.blue 
  color: turquoise



</style>