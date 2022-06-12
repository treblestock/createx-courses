<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreAccount } from '@/stores/Account.js'

const storeAccount = useStoreAccount()

const props = defineProps({
  
})
const emit = defineEmits([
  'closed',
  'redirect-sign-up',
])

const links = [
  'facebook.com',
  'instagram.com',
  'twitter.com',
  'linkedin.com',
]
// document.body.addEventListener('focusin', (e) => console.log(e.target) ) // TEST TAB-INDEX


// 
const email = ref('')
const password = ref('')
const keepSignedIn = ref(false)

const signIn = () => {
  storeAccount.signIn({
    userEmail: email.value,
    userPassword: password.value,
    shouldKeepSignedIn: keepSignedIn.value,
  })
  // if (storeAccount.isSignedIn) {   <!--! Event isn't catched by any parent neither popup nor header
  //   console.log('signIn close...') <!--! but "$parent.$emit('closed')" in the template works correct
  //   emit('closed')
  // }
}

</script>

<template>
  <div class="sign-in">
    <div class="sign-in__body">
      <div class="sign-in__title">Sign in</div>
      <div class="sign-in__text">Sign in to your account usign email and password provided during registration.</div>
      <form action="" class="sign-in__form"
        @submit.prevent="signIn"
      >
        <InputGroup class="sign-in__form-item" 
          label="Email"
          placeholder="Your full name"
          tabindex="1"
          v-focus

          v-model="email"
        />
        <InputGroup class="sign-in__form-item" 
          label="Password"
          placeholder="Your Password"
          type="password"
          tabindex="2"

          v-model="password"
        />
        
        <div class="sign-in__form-item _row">
          <CheckboxGroup class="sign-in__form-item"
            tabindex="3"
            v-model="keepSignedIn"
          >
            Keep me signed in
          </CheckboxGroup>
          <span class="red">
            <a @click.prevent="">Forgot password?</a>
          </span> 
        </div>
        <button class="sign-in__form-item btn"
          tabindex="4"
        >Sign in</button>
        <div class="sign-in__form-item">
          Don't have an account?
          <span class="red">
            <a @click.prevent="$emit('redirect-sign-up')">Sign up</a>
          </span> 
        </div>
      </form>
    </div>
    <div class="sign-in__footer">
      <div class="sign-in__footer-text">Or sign in with</div>
      <Socials class="sign-in__footer-socials" 
        :links="links"
        colorInitial= "#787A80"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

=formTextUI
  font-size: 1.4rem
  line-height: 1.5
  color: $color-gray-700

.sign-in
  background: $color-white
  &__body
    padding: 4.8rem 4.8rem 2.4rem

    min-width: 29rem
    display: flex
    flex-direction: column
    
    > *
      display: block
    > * + * 
      margin-top: 2.4rem
    

  &__title
    font-size: 2.8rem
    line-height: 1.5
    font-weight: 700
    color: $color-gray-900

    text-align: center

  &__text
    +formTextUI
    text-align: center


  &__form
    display: flex
    flex-direction: column
    
    > *
      display: block
    > * + * 
      margin-top: 2.4rem

  &__form-item
    &._row
      display: flex
      justify-content: space-between
      align-items: center
      > *
        display: block

  &__footer
    padding: 2.4rem 4.8rem

  &__footer-text
    +formTextUI
    text-align: center

  &__footer-socials
    margin-top: 1.6rem

    justify-content: center



</style>