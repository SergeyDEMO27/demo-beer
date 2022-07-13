<template>
  <div
    class="main-slider"
    :class="{ 'main-slider--reverse': direction === 'rtl' }"
  >
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
          <div class="main-slider__info">
            <h3 class="main-slider__title">{{ item.name }}</h3>
            <p>{{ item.first_brewed }}</p>
          </div>
        </router-link>
      </Slide>

      <template #addons>
        <navigation>
          <template #next>
            <span class="main-slider__next"></span>
          </template>
          <template #prev>
            <span class="main-slider__prev"></span>
          </template>
        </navigation>
      </template>
    </Carousel>
  </div>
</template>

<script>
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
.main-slider {
  .carousel__viewport {
    padding-top: 11px;
    padding-bottom: 13px;
  }

  .main-slider__next,
  .main-slider__prev {
    position: relative;

    &::before {
      @include default-transition;
      position: absolute;
      top: -8px;
      left: -6px;
      content: "";
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid $color-black;
    }
  }

  .main-slider__next {
    &::before {
      right: -6px;
      left: unset;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: none;
      border-left: 8px solid $color-black;
    }
  }

  .carousel__prev,
  .carousel__next {
    width: 50px;
    border-radius: 0;
    border: 1px solid #d9d9db;
    background-color: #dfdfe0;
    transition: 0.2s ease-in-out;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }

  .carousel__prev {
    &:hover {
      left: -3px;
      background-color: $color-light-gray;

      .main-slider__prev {
        &::before {
          border-right: 8px solid $color-light-blue;
        }
      }
    }
  }

  .carousel__next {
    &:hover {
      right: -3px;
      background-color: $color-light-gray;

      .main-slider__next {
        &::before {
          border-left: 8px solid $color-light-blue;
        }
      }
    }
  }

  &--reverse {
    .main-slider__next,
    .main-slider__prev {
      &::before {
        left: -2px;
        border-right: 0;
        border-left: 8px solid $color-black;
      }
    }

    .main-slider__next {
      &::before {
        right: -3px;
        left: unset;
        border-left: 0;
        border-right: 8px solid $color-black;
      }
    }

    .carousel__prev {
      &:hover {
        right: -3px;
        left: unset;
        background-color: $color-light-gray;

        .main-slider__prev {
          &::before {
            border-right: 0;
            border-left: 8px solid $color-light-blue;
          }
        }
      }
    }

    .carousel__next {
      &:hover {
        right: unset;
        left: -3px;
        background-color: $color-light-gray;

        .main-slider__next {
          &::before {
            border-left: 0;
            border-right: 8px solid $color-light-blue;
          }
        }
      }
    }
  }
}

.main-slider__item {
  width: 90%;
  min-height: 300px;
  padding-bottom: 10px;
  color: $color-black;
  border-radius: 8px;
  background-color: $color-white;
  text-decoration: none;
  text-align: center;
  box-shadow: 4px 4px 12px -2px rgb(34 60 80 / 20%);

  &:hover {
    .main-slider__image {
      transform: scale(1.05);
    }

    .main-slider__title {
      color: $color-light-blue;
    }
  }
}

.main-slider__picture {
  width: 100%;
  max-height: 220px;
  margin-bottom: 7px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-image: url("@/assets/images/bg/ravenna.png");
  background-color: $color-light-gray;
  background-size: cover;

  .main-slider__image {
    @include default-transition;
    width: 80%;
    height: auto;
    max-height: 200px;
    object-fit: contain;
  }
}

.main-slider__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 63px;
}

.main-slider__title {
  @include default-transition;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin-right: auto;
  margin-left: auto;
  max-width: 90%;
  overflow: hidden;
}
</style>
