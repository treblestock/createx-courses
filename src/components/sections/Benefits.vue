<script setup>
import {ref, computed, watch} from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


const props = defineProps({
  
})

</script>

<template>
  <section class="benefits__section section">
    <div class="benefits__container container">
      <div class="benefits">
        <div class="benefits__header">
          <div class="benefits__label title_label">Our benefits</div>
          <div class="benefits__title title">That’s how we do it</div>
        </div>
        <Tabs class="benefits__tabs"
          insetsClass="benefits__tabs-insets"
          bodyClass="benefits__tabs-body"
        >
          <template #insets class="benefits__tabs-insets">
            <div class="benefits__tabs-inset">
              Experienced Tutors
            </div>
            <div class="benefits__tabs-inset">
              Feedback & Support
            </div>
            <div class="benefits__tabs-inset">
              24/7 Online Library
            </div>
            <div class="benefits__tabs-inset">
              Community
            </div>
          </template>
          <template #body class="benefits__tabs-body">
            <div class="benefits__tabs-body-item">
              <div class="benefits__tabs-body-item-body">
                <div class="benefits__tabs-body-item-title">Only practicing tutors</div>
                <div class="benefits__tabs-body-item-text">Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</div>
              </div>
              <div class="benefits__tabs-body-item-img">
                <Img />
              </div>
            </div>

            <div class="benefits__tabs-body-item">
              <div class="benefits__tabs-body-item-body">
                <div class="benefits__tabs-body-item-title">Always ready to help</div>
                <div class="benefits__tabs-body-item-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis nisi hic quod nihil nostrum expedita beatae ipsum, distinctio porro magnam in delectus laboriosam, amet commodi non vitae reprehenderit accusamus!</div>
              </div>
              <div class="benefits__tabs-body-item-img">
                <Img />
              </div>
            </div>

            <div class="benefits__tabs-body-item">
              <div class="benefits__tabs-body-item-body">
                <div class="benefits__tabs-body-item-title">Feedback & Support</div>
                <div class="benefits__tabs-body-item-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, suscipit qui quod aut optio aliquid, maiores sed error porro iusto ea similique quibusdam? Praesentium quaerat quia doloribus, tempore non quam. Nihil modi error cum tempore consequuntur similique harum culpa accusantium, quidem dolores, sint ullam architecto in veritatis suscipit odit maxime.</div>
              </div>
              <div class="benefits__tabs-body-item-img">
                <Img />
              </div>
            </div>

            <div class="benefits__tabs-body-item">
              <div class="benefits__tabs-body-item-body">
                <div class="benefits__tabs-body-item-title">Reach community</div>
                <div class="benefits__tabs-body-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laboriosam itaque minima molestiae optio eos quo alias. Architecto ipsa animi voluptate ducimus inventore ad labore, itaque laborum et, quisquam alias ab? Non provident earum debitis, commodi labore quos, quisquam consequuntur voluptates id fugiat nihil minus alias illo atque! Velit iste quos natus dolor eveniet, quidem nihil excepturi voluptatum consequatur iure qui, enim dicta at modi illum corrupti officia aperiam? Beatae at animi quo eaque repellat dolor modi qui sunt commodi.</div>
              </div>
              <div class="benefits__tabs-body-item-img">
                <Img />
              </div>
            </div>


          </template>
        </Tabs>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import @/assets/css/_vars
@import @/assets/css/_helpers


.benefits
  &__section

  &__container

  &__header
    text-align: center

  &__label
  &__title


  &__tabs
    margin-top: 6rem



  &__tabs-inset
    flex: 1 1 auto
    text-align: center
    padding: 1rem 3rem
    border-radius: $border-radius


    font-size: 1.6rem
    line-height: 1.6
    color: $color-gray-600

    &._active
      color: $color-carrot
      box-shadow: 0 0 0 1px $color-carrot


  &__tabs-body-item
    animation: fade ease .3s

@keyframes fade 
  0% 
    opacity: 0
  100% 
    opacity: 1
    
  


:deep(.benefits__tabs-insets)
  display: flex

:deep(.benefits__tabs-body)
  padding-top: 6rem


.benefits
  &__tabs-body-item
    display: flex
    align-items: center

  &__tabs-body-item-title
    margin-bottom: 2.4rem

    font-size: 3.2rem
    line-height: 1.3
    font-weight: 700
    color: $color-gray-900
  &__tabs-body-item-text
    font-size: 1.6rem
    line-height: 1.5
    color: $color-gray-800

  &__tabs-body-item-img
    margin-left: 13rem
    flex: 0 0 60rem
    img 
      width: 100%
      height: 100%
      object-fit: cover
    


</style>