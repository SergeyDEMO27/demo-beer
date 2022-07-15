<template>
  <div
    class="main-slider"
    :class="{ 'main-slider--reverse': direction === 'rtl' }"
  >
    <Carousel :settings="settings" :breakpoints="breakpoints" :dir="direction">
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
            <p class="main-slider__description">
              <span class="main-slider__description-tag">
                {{ item.tagline }}
              </span>
              <span class="main-slider__description-abv">
                <span class="main-slider__description-item">
                  abv <span>{{ item.abv }}%</span>
                </span>
                <span class="main-slider__description-item">
                  ibu <span>{{ item.ibu }}</span>
                </span>
                <span class="main-slider__description-item">
                  og <span>{{ item.target_og }}</span>
                </span>
              </span>
            </p>
            <p class="main-slider__date">{{ item.first_brewed }}</p>
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
  data() {
    return {
      settings: {
        autoplay: "3500",
        transition: "1500",
        itemsToShow: 3,
        snapAlign: "center",
        pauseAutoplayOnHover: "true",
        wrapAround: "true",
      },
      breakpoints: {
        320: {
          itemsToShow: 1,
          snapAlign: "start",
        },
        375: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        500: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        768: {
          itemsToShow: 4,
          snapAlign: "start",
        },
        1024: {
          itemsToShow: 3.95,
          snapAlign: "center",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.main-slider {
  padding-right: 20px;
  padding-left: 20px;

  .carousel__viewport {
    padding-top: 11px;
    padding-bottom: 13px;
  }

  .carousel__slide {
    position: relative;
    min-height: 330px;
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
    border: 2px solid #d9d9db;
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
  @include default-transition;
  width: 90%;
  min-height: 300px;
  padding-bottom: 10px;
  color: $color-black;
  border-radius: 8px;
  background-color: $color-white;
  text-decoration: none;
  text-align: center;
  box-shadow: 4px 4px 12px -2px rgb(34 60 80 / 20%);
  z-index: 9;
}

.main-slider__picture {
  position: relative;
  width: 100%;
  min-height: 220px;
  max-height: 220px;
  margin-bottom: 7px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-image: url("@/assets/images/bg/bg-brick-gray.jpg");
  background-color: #e5d0ed;
  background-size: cover;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: $color-plum;
  }

  .main-slider__image {
    @include default-transition;
    position: relative;
    width: 80%;
    height: auto;
    max-height: 200px;
    object-fit: contain;
    z-index: 2;
  }
}

.main-slider__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 63px;
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

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  position: absolute;
  top: 0;
  opacity: 1;
  transform: rotateY(0);

  &:hover {
    @include default-transition;
    width: 130%;
    z-index: 10;

    .main-slider__image {
      transform: scale(1.05);
    }

    .main-slider__title {
      color: $color-light-blue;
    }

    .main-slider__description {
      visibility: visible;
      height: auto;
      opacity: 1;
      transition: opacity 1s;
    }
  }
}

.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}

.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}

.carousel__slide--active > .carousel__item {
  @include default-transition;
  position: absolute;
  top: 0;
  transform: scale(1.1);

  &:hover {
    @include default-transition;
    width: 130%;
    z-index: 10;

    .main-slider__image {
      transform: scale(1.05);
    }

    .main-slider__title {
      color: $color-light-blue;
    }

    .main-slider__description {
      visibility: visible;
      height: auto;
      opacity: 1;
      transition: opacity 1s;
    }
  }
}

.main-slider__description {
  visibility: hidden;
  display: flex;
  flex-direction: column;
  height: 0;
  opacity: 0;

  &-tag {
    margin-right: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }

  &-item {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;

    span {
      font-size: 15px;
      font-weight: normal;
    }
  }
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .main-slider__title {
    font-size: 17px;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-slider__title {
    font-size: 16px;
  }

  .main-slider__date {
    font-size: 14px;
  }
}
</style>
