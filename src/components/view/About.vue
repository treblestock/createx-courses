<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

import AboutIntro from '@/components/sections/AboutIntro.vue'
import AboutVideo from '@/components/sections/AboutVideo.vue'
import CreatexValues from '@/components/sections/CreatexValues.vue'
import CoursesCategoriesGrid from '@/components/sections/CoursesCategoriesGrid.vue'
import LearningProcess from '@/components/sections/LearningProcess.vue'
import Team from '@/components/sections/Team.vue'
import Reviews from '@/components/sections/Reviews.vue'
import BlogPostsGridPreview from '@/components/sections/BlogPostsGridPreview.vue'
import CreatexEmailingSubscribeForm from '@/components/sections/CreatexEmailingSubscribeForm.vue'


</script>

<template>
  <main class="main about">
    <div class="about__about-intro-section section">
      <div class="about__about-intro-container container">
        <AboutIntro class="about__about-intro" />
      </div>
    </div>
    <div class="about__about-video-section section">
      <div class="about__about-video-container container">
        <AboutVideo class="about__about-video" />
      </div>
    </div>
    <div class="about__createx-values-section section">
      <div class="about__createx-values-container container">
        <CreatexValues class="about__createx-values" />
      </div>
    </div>
    <div class="about__courses-grid-preview-section section">
      <div class="about__courses-grid-preview-container container">
        <CoursesCategoriesGrid class="about__courses-grid-preview" />
      </div>
    </div>
    <div class="about__learning-process-section section">
      <div class="about__learning-process-container container">
        <LearningProcess class="about__learning-process" />
      </div>
    </div>
    <div class="about__team-section section">
      <div class="about__team-container container">
        <Team class="about__team" />
      </div>
    </div>
    <div class="about__reviews-section section">
      <div class="about__reviews-container container">
        <Reviews class="about__reviews" />
      </div>
    </div>
    <div class="about__blog-posts-slider-section section">
      <div class="about__blog-posts-slider-container container">
        <BlogPostsGridPreview class="about__blog-posts-slider" />
      </div>
    </div>
    <div class="about__createx-emailing-subscribe-form-section section">
      <div class="about__createx-emailing-subscribe-form-container container">
        <CreatexEmailingSubscribeForm class="about__createx-emailing-subscribe-form" />
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

.about
  &__about-intro-section
    padding: 8rem

  &__about-intro-container

  &__about-intro

  &__about-video-section

  &__about-video-container

  &__about-video

  &__createx-values-section

  &__createx-values-container

  &__createx-values

  &__courses-grid-preview-section

  &__courses-grid-preview-container

  &__courses-grid-preview

  &__learning-process-section

  &__learning-process-container

  &__learning-process

  &__team-section
    padding: 18rem 0 12rem

  &__team-container

  &__team

  &__reviews-section
    padding: 10rem 0
    background: $color-gray-200

  &__reviews-container

  &__reviews

  &__blog-posts-slider-section
    padding: 10rem 0 18rem

  &__blog-posts-slider-container

  &__blog-posts-slider

  &__createx-emailing-subscribe-form-section
    padding: 12rem 0 18rem
    +section-ui_carrot_bg-decor

  &__createx-emailing-subscribe-form-container
    max-width: 65rem

  &__createx-emailing-subscribe-form


</style>