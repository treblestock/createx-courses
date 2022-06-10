<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()




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




// popups
let isShownSignIn = ref(false)
let isShownSignUp = ref(false)

</script>

<template>
  <header class="header__section"
    ref="header"
  >
    <div class="header__container container">
      <div class="header">
        <Logo class="header__logo"></Logo>

        <div class="burgered">
          <nav class="menu">
            <ul class="menu__links">
              <li class="menu__links-item">
                <AppLink class="menu__links-link link"
                  :to="{name: 'UI' }"
                >UI</AppLink>
              </li>
              <li class="menu__links-item">
                <AppLink class="menu__links-link link"
                  :to="{name: 'about' }"
                >About us</AppLink>
              </li>
              <li class="menu__links-item">
                <AppLink class="menu__links-link link"
                  :to="{name: 'courses' }"
                >Courses</AppLink>
              </li>
              <li class="menu__links-item">
                <AppLink class="menu__links-link link"
                  :to="{name: 'events' }"
                >Events</AppLink>
              </li>
              <li class="menu__links-item">
                <AppLink class="menu__links-link link"
                  :to="{name: 'blogPosts' }"
                >blog</AppLink>
              </li>
              <li class="menu__links-item">
                <AppLink class="menu__links-link link"
                  :to="{name: 'contacts' }"
                >Contacts</AppLink>
              </li>
            </ul>
          </nav>
        </div>
        <div class="burger">
          <span></span>
        </div>

        <div class="header__toolbar">
          <button class="btn _l header__toolbar-btn">get consultation</button>
          <div class="header__toolbar-account">
            <a class="link"
              @click.prevent="isShownSignIn = true"
            >log in</a>
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
        <div class="sign-in">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eos rem iure doloremque tempora assumenda dolorum voluptatum possimus delectus ratione in, reiciendis praesentium animi expedita eius consectetur architecto amet laudantium nobis eum, asperiores porro? Hic perspiciatis blanditiis temporibus, adipisci atque dicta consequatur ullam minus dolore accusamus mollitia voluptates at dolor optio facilis esse libero aut odit labore, explicabo soluta rem quasi. Suscipit nemo magnam officia, beatae impedit quo sint dolor dolores ullam commodi adipisci earum consequatur culpa numquam itaque nam perferendis eius unde non. Voluptatem, eum! Laboriosam et voluptatibus praesentium fugiat eos inventore neque eveniet unde, adipisci perferendis illum asperiores?
        </div>
      </Popup>

      <Popup
        :isActive="isShownSignUp"
        @closed="isShownSignUp = false"
      >
        <div class="sign-in">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eos rem iure doloremque tempora assumenda dolorum voluptatum possimus delectus ratione in, reiciendis praesentium animi expedita eius consectetur architecto amet laudantium nobis eum, asperiores porro? Hic perspiciatis blanditiis temporibus, adipisci atque dicta consequatur ullam minus dolore accusamus mollitia voluptates at dolor optio facilis esse libero aut odit labore, explicabo soluta rem quasi. Suscipit nemo magnam officia, beatae impedit quo sint dolor dolores ullam commodi adipisci earum consequatur culpa numquam itaque nam perferendis eius unde non. Voluptatem, eum! Laboriosam et voluptatibus praesentium fugiat eos inventore neque eveniet unde, adipisci perferendis illum asperiores?
        </div>
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

.menu
  &__links
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    
    > * + * 
      margin-left: 4rem
    

  &__links-item

  &__links-link

.burger


.sign-in
  max-width: 30rem
  padding: 2rem
  background: #fff


</style>