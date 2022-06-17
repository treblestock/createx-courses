<script setup>
import { ref, computed, watch } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'


// page sections
import WhyCreatex from '@/components/sections/WhyCreatex.vue'
import CoursesGridPreview from '@/components/sections/CoursesGridPreview.vue'
import Benefits from '@/components/sections/Benefits.vue'
import EventsGridPreview from '@/components/sections/EventsGridPreview.vue'
import Certificate from '@/components/sections/Certificate.vue'
import Team from '@/components/sections/Team.vue'
import Reviews from '@/components/sections/Reviews.vue'
import BlogPostsGridPreview from '@/components/sections/BlogPostsGridPreview.vue'
import CreatexEmailingSubscribeForm from '@/components/sections/CreatexEmailingSubscribeForm.vue'


</script>

<template>
  <main class="main">

    <div class="main__why-createx-section section">
      <div class="main__why-createx-container container">
        <WhyCreatex class="main__why-createx"/>
      </div>
    </div>
    <div class="main__courses-grid-preview-section section">
      <div class="main__courses-grid-preview-container container">
        <CoursesGridPreview class="main__courses-grid-preview"/>
      </div>
    </div>
    <div class="main__benefits-section section">
      <div class="main__benefits-container container">
        <Benefits class="main__benefits"/>
      </div>
    </div>
    <div class="main__events-grid-preview-section section">
      <div class="main__events-grid-preview-container container">
        <EventsGridPreview class="main__events-grid-preview"/>
      </div>
    </div>
    <div class="main__certificate-section section">
      <div class="main__certificate-container container">
        <Certificate class="main__certificate"/>
      </div>
    </div>
    <div class="main__team-section section">
      <div class="main__team-container container">
        <Team class="main__team"/>
      </div>
    </div>
    <div class="main__reviews-section section">
      <div class="main__reviews-container container">
        <Reviews class="main__reviews"/>
      </div>
    </div>
    <div class="main__blog-post-grid-preview-section section">
      <div class="main__blog-post-grid-preview-container container">
        <BlogPostsGridPreview class="main__blog-post-grid-preview"/>
      </div>
    </div>
    <div class="main__createx-emailing-subscribe-form-section section">
      <div class="main__createx-emailing-subscribe-form-container container">
        <CreatexEmailingSubscribeForm class="main__createx-emailing-subscribe-form"/>
      </div>
      <div class="section__decor"></div>
    </div>
  
  </main>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers
@import @/assets/css/_UI



.main
  &__why-createx-section
    padding-top: 18rem

  &__why-createx-container

  &__why-createx

  &__courses-grid-preview-section
    padding-top: 18rem

  &__courses-grid-preview-container

  &__courses-grid-preview

  &__benefits-section
    padding: 18rem 0 12rem

  &__benefits-container

  &__benefits

  &__events-grid-preview-section
    padding: 8rem 0
    +section-ui_carrot

  &__events-grid-preview-container

  &__events-grid-preview

  &__certificate-section
    padding-top: 12rem
    margin-bottom: -15rem

  &__certificate-container

  &__certificate

  &__team-section
    padding-top: 12rem
    background: $color-gray-200

  &__team-container

  &__team

  &__reviews-section
    padding: 18rem 0 12rem
    background: $color-gray-200

  &__reviews-container

  &__reviews

  &__blog-post-grid-preview-section
    padding: 18rem 0

  &__blog-post-grid-preview-container

  &__blog-post-grid-preview

  &__createx-emailing-subscribe-form-section
    padding: 18rem 0 12rem
    +section-ui_carrot_bg-decor

  &__createx-emailing-subscribe-form-container
    max-width: 65rem

  &__createx-emailing-subscribe-form



</style>