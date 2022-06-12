<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreAccount } from '@/stores/Account.js'

import Menu from '@/components/Menu.vue'
import SignUp from '@/components/sections/SignUp.vue'
import SignIn from '@/components/sections/SignIn.vue'



const storeAccount = useStoreAccount()

const props = defineProps({
  
})

// calc header height with an arbitary content
// add set global css var(--header-height) for:
// .header + * margin-top: var(--header-height)
// NOTE: unfortunately this isn't dynamic because i don't know how to
// listen to DOM props changes, but watch() allows to change var dynamic
let header = ref(null)
let headerHeight = computed(() => window.getComputedStyle(header.value || document.createElement('div')).height)

onMounted(() => {
  document.documentElement.style.setProperty('--header-height', headerHeight.value)
})




// auth
let isSignedIn = computed(() =>  storeAccount.isSignedIn)

watch(
  isSignedIn,
  (value) => value ? isShownSignIn.value = isShownSignUp.value = false : null 
)


// popups
let isShownSignIn = ref(false)
let isShownSignUp = ref(false)


function redirectSignUp() {
  isShownSignIn.value = false
  isShownSignUp.value = true
}
function redirectSignIn() {
  isShownSignUp.value = false
  isShownSignIn.value = true
}


</script>

<template>
  <header class="header__section"
    ref="header"
  >
    <div class="header__container container">
      <div class="header">
        <Logo class="header__logo"></Logo>

        <div class="burgered">
          <Menu></Menu>
        </div>
        <div class="burger">
          <span></span>
        </div>

        <div class="header__toolbar">
          <button class="btn _l header__toolbar-btn">get consultation</button>
          <div class="header__toolbar-account">
            <a class="link"
              v-if="!isSignedIn"
              @click.prevent="isShownSignIn = true"
            >log in</a>
            <a class="link"
              v-else
              @click.prevent="storeAccount.signOut"
            >log out</a>
             / 
            <a class="link"
              @click.prevent="isShownSignUp = true"
            >Register</a>
          </div>
        </div>
      </div>
    </div>

    <teleport to="body">
      <Popup
        :isActive="isShownSignIn"
        @closed="isShownSignIn = false"
      >
        <SignIn 
          @redirect-sign-up="redirectSignUp"
        />
      </Popup>

      <Popup
        :isActive="isShownSignUp"
        @closed="isShownSignUp = false"
      >
        <SignUp 
          @redirect-sign-in="redirectSignIn"
        />
      </Popup>


    </teleport>
  </header>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI
@import @/assets/css/_structure


.header
  &__section
    z-index: 100
    position: fixed
    top: 0
    left: 0
    width: 100vw

    padding: 2rem 0

    background: $color-white

    :deep(+ *) // correct [data-scope] setting for non-comp items selector
      margin-top: var(--header-height)

  &__container

  align-items: center
.header
  display: flex
  flex-direction: row
  justify-content: space-between
  
  > * + * 
    margin-left: 6rem
  
  &__logo

  &__toolbar
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    
    > * + * 
      margin-left: 3.5rem
    


  &__toolbar-btn

  &__toolbar-account


.burgered

// .menu
//   &__links
//     display: flex
//     flex-direction: row
//     justify-content: space-between
//     align-items: center
    
//     > * + * 
//       margin-left: 4rem
    

//   &__links-item

//   &__links-link

.burger



</style>