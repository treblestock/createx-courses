<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import { useStoreCreatex } from '@/stores/Createx.js'
import { useStoreSendFormData } from '@/stores/SendFormData.js'


const storeCreatex = useStoreCreatex()
const storeSendFormData = useStoreSendFormData()

const socials = computed(() => storeCreatex?.createx?.socials )

const form = ref(null)

const email= ref('')

function onSubmit() {
  const data = JSON.stringify({
    form: form.value.id,
    email: email.value,
  })
  storeSendFormData.sendFormData(data)
  email.value = ''
}

</script>

<template>

  <footer class="footer">
    <div class="footer__body-section">
      <div class="footer__body-container container">
        <div class="footer__body">
          <div class="footer__body-col _col-1">
            <Logo class="footer__logo" 
              colorInitial="#fff"
            />
            <div class="footer__text">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </div>
            <Socials class="footer__socials"
              colorInitial="rgba(255, 255, 255, .6)"
              :links="socials"
            />
          </div>
          <div class="footer__body-col _col-2">
            <ul class="footer__link-cols">
              <li class="footer__link-col">
                <ul class="footer__links">
                  <li class="footer__links-item _white">SITE MAP</li>
                  <li class="footer__links-item">About Us</li>
                  <li class="footer__links-item">Courses</li>
                  <li class="footer__links-item">Events</li>
                  <li class="footer__links-item">Blog</li>
                  <li class="footer__links-item">Contacts</li>
                </ul>
              </li>
              <li class="footer__link-col">
                <ul class="footer__links">
                  <li class="footer__links-item _white">COURSES</li>
                  <li class="footer__links-item">Marketing Us</li>
                  <li class="footer__links-item">Management</li>
                  <li class="footer__links-item">HR & Recruting</li>
                  <li class="footer__links-item">Design</li>
                  <li class="footer__links-item">Development</li>
                </ul>
              </li>
              <li class="footer__link-col _col-3">
                <ul class="footer__links">
                  <li class="footer__links-item _white">CONTACT US</li>
                  <li class="footer__links-item">(405) 555-0128</li>
                  <li class="footer__links-item">hello@createx.com</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="footer__body-col footer__emailing">
            <div class="footer__emailing-title _white">SIGN UP TO OUR NEWSLETTER</div>
            <form class="footer__emailing-form"
              action=""
              ref="form"
              id="createx-emailing-footer"
              @submit.prevent="onSubmit"
            >
              <Input 
                placeholder="Email address"
                v-model="email"
              />
            </form>
            <div class="footer__emailing-text">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__footer-section">
      <div class="footer__footer-container container">
        <div class="footer__footer">
          <div class="footer__footer-copy">© All rights reserved. Made with by Createx Studio </div>
          <a class="footer__footer-go-top-link">GO TO TOP</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers

.footer
  width: 100%

  &__body-section
    padding: 6rem 0 8rem
    background: $color-gray-900
    color: rgba(255, 255, 255, .6)

  &__body-container

  &__body
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-gap: 4rem 8rem

    font-size: 1.6rem
    line-height: 1.5

    @media(max-width: 120rem)
      grid-auto-flow: dense
      grid-template-columns: repeat(2, 1fr)
      grid-gap: 4rem 4rem
    @media(max-width: 76.7rem)
      // display: flex
      // flex-direction: column
      
      // > * + * 
      //   margin-top: 1rem
      grid-template-columns: 1fr
      grid-auto-flow: row
      

      
    

  &__body-col
    &._col-1
      @media(max-width: 120rem)
        grid-column: span 2
      @media(max-width: 76.7rem)
          grid-column: span 1

    &._col-2
      grid-column: span 2
      @media(max-width: 120rem)
        grid-column: span 1
      @media(max-width: 76.7rem)
        grid-column: span 1
    &._col-3
      @media(max-width: 120rem)
      @media(max-width: 76.7rem)
        grid-column: span 1
      

    

  &__logo

  &__text
    margin-top: 2.4rem

    font-size: 1.2rem


  &__socials
    margin-top: 4rem

  &__link-cols
    width: 100%
    display: flex
    flex-direction: row
    
    > * + * 
      margin-left: 8rem

    @media(max-width: 120rem)
      > * + * 
        margin-left: 4rem

  &__link-col
    flex: 1 0 auto

  &__links
    display: flex
    flex-direction: column
    
    > * + * 
      margin-top: 1rem
    

  &__links-item

  &__emailing

  &__emailing-title

  &__emailing-form
    margin-top: 2.4rem

  &__emailing-text
    margin-top: 1.2rem

  &__footer-section
    padding: 2rem 0
    background: $color-gray-800
    color: rgba(255, 255, 255, .6)
  &__footer-container

  &__footer
    display: flex
    justify-content: space-between
    align-items: center
    


  &__footer-copy
    color: rgba(255, 255, 255, 1)

  &__footer-go-top-link
    text-transform: uppercase

._white
  color: rgba(255, 255, 255, 1)
  text-transform: uppercase




</style>