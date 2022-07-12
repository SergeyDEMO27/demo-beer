<template>
  <div class="main-slider">
    <Carousel
      :autoplay="3500"
      :transition="1500"
      :dir="direction"
      :items-to-show="5"
      :wrap-around="true"
    >
      <Slide v-for="item in items" :key="item.name">
        <router-link
          class="carousel__item main-slider__item"
          :to="`/product/${item.id}`"
        >
          <div class="main-slider__picture">
            <img
              class="main-slider__image"
              :src="item.image_url"
              :alt="item.name"
            />
          </div>
          <h3>{{ item.name }}</h3>
        </router-link>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
// import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  name: "MainSlider",
  props: {
    items: Array,
    direction: String,
  },
  components: { Carousel, Navigation, Slide },
};
</script>

<style lang="scss">
.main-slider__item {
  width: 90%;
}

.main-slider__picture {
  width: 100%;
  max-height: 200px;
  background-color: lightcoral;

  .main-slider__image {
    width: 80%;
    height: auto;
    // width: 62%;
    max-height: 200px;
    object-fit: contain;
  }
}
</style>
