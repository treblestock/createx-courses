<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreAccount } from '@/stores/Account.js'

const storeAccount = useStoreAccount()


const emit = defineEmits([
  'redirect-sign-in'
])

const links = [
  'https://facebook.com',
  'https://instagram.com',
  'https://twitter.com',
  'https://linkedin.com',
]
// document.body.addEventListener('focusin', (e) => console.log(e.target) ) // TEST TAB-INDEX


// 
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const name = ref('')
const rememberMe = ref(false)

const signUp = () => storeAccount.signUp({
  userEmail: email.value,
  userPassword: password.value,
  userConfirmPassword: confirmPassword.value,
  userName: name.value,
  shouldRemember: rememberMe.value,
})

</script>

<template>
  <section class="sign-up">
    <div class="sign-up__body">
      <div class="sign-up__title">Sign up</div>
      <div class="sign-up__text">Registration takes less than a minute but gives you full control over your studying.</div>
      <form action="" class="sign-up__form"
        @submit.prevent="signUp"
      >
        <InputGroup class="sign-up__form-item" 
          label="Full Name"
          placeholder="Your full name"
          tabindex="1"
          v-focus

          v-model="name"
        />
        <InputGroup class="sign-up__form-item" 
          label="Email"
          placeholder="Your working email"
          tabindex="2"

          v-model="email"
        />
        <InputGroup class="sign-up__form-item" 
          label="Password"
          placeholder="Your Password"
          type="password"
          tabindex="3"

          v-model="password"
        />
        <InputGroup class="sign-up__form-item" 
          label="Confirm Password"
          placeholder="Your Password"
          type="password"
          tabindex="4"

          v-model="confirmPassword"
        />
        <CheckboxGroup class="sign-up__form-item"
          tabindex="5"

          v-model="rememberMe"
        >
          Remember me
        </CheckboxGroup>
        <button class="sign-up__form-item btn"
          tabindex="6"
        >Sign up</button>
        <div class="sign-up__form-item">
          Already have an account?
          <span class="red">
            <a @click.prevent="$emit('redirect-sign-in')">Sign in</a>
          </span> 
        </div>
      </form>
    </div>
    <div class="sign-up__footer">
      <div class="sign-up__footer-text">Or sign in with</div>
      <Socials class="sign-up__footer-socials" 
        :links="links"
        colorInitial= "#787A80"
      />
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

=formTextUI
  font-size: 1.4rem
  line-height: 1.5
  color: $color-gray-700

.sign-up
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

  &__footer
    padding: 2.4rem 4.8rem

  &__footer-text
    +formTextUI
    text-align: center

  &__footer-socials
    margin-top: 1.6rem

    justify-content: center



</style>