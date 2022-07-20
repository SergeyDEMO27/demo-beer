<template>
  <router-link
    :to="`/product/${presentationItem.id}`"
    class="presentation-item"
    :class="{ 'presentation-item--vertical': vertical }"
    :key="presentationItem.id"
  >
    <div class="presentation-item__picture">
      <img
        class="presentation-item__image"
        :src="presentationItem.image_url"
        :alt="presentationItem.name"
        v-if="presentationItem.image_url"
      />
      <img
        class="presentation-item__image"
        :src="require(`@/assets/images/content/${'default-item'}.png`)"
        :alt="presentationItem.name"
        v-else
      />
    </div>
    <div class="presentation-item__container">
      <h3 class="presentation-item__title">
        <span>#{{ presentationItem.id }}</span>
        {{ presentationItem.name }}
      </h3>
      <p class="presentation-item__date">
        <span class="presentation-item__date-tag">{{
          presentationItem.tagline
        }}</span>
        <span class="presentation-item__date-time">{{
          presentationItem.first_brewed
        }}</span>
      </p>
      <p class="presentation-item__description">
        <span class="presentation-item__description-el"
          ><span>Abv</span>{{ presentationItem.abv }}%</span
        >
        <span class="presentation-item__description-el"
          ><span>Ibu</span>{{ presentationItem.ibu }}</span
        >
        <span>Og</span>{{ presentationItem.target_og }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PresentationItem",
  props: {
    presentationItem: Object,
    vertical: Boolean,
  },
};
</script>

<style lang="scss">
.presentation-item {
  display: flex;
  width: 100%;
  height: 100%;
  color: $color-black;
  text-decoration: none;

  &--vertical {
    flex-direction: column;
    align-items: center;
    animation: itemEnter 1s;

    .presentation-item__container {
      padding-top: 10px;
    }

    .presentation-item__picture {
      margin-right: 0;
      background-image: none;

      &::after {
        background-color: transparent;
      }
    }
  }

  &:hover {
    .presentation-item__picture {
      &:after {
        background-color: transparent;
      }

      .presentation-item__image {
        transform: scale(1.05);
      }
    }

    .presentation-item__title {
      color: $color-light-blue;

      span {
        color: $color-black;
      }
    }
  }
}

.presentation-item__picture {
  @include default-transition;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 30%;
  height: 100%;
  background-image: url("@/assets/images/bg/bg-brick-white.jpg");
  background-size: cover;
  text-align: center;

  &:after {
    @include default-transition;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: $color-plum;
  }
}

.presentation-item__image {
  @include default-transition;
  max-width: 90%;
  max-height: 200px;
  margin: 0 auto;
  z-index: 2;
}

.presentation-item__container {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 40px 10px;
}

.presentation-item__title {
  @include default-transition;
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: normal;
  text-transform: uppercase;

  span {
    @include default-transition;
    color: $color-light-blue;
  }
}

.presentation-item__date {
  margin-bottom: 15px;
  font-size: 22px;

  &-tag {
    position: relative;
    margin-right: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }

  &-time {
    position: relative;

    &::before {
      position: absolute;
      top: 4px;
      left: -16px;
      content: "";
      width: 2px;
      height: 20px;
      background-color: black;
    }
  }
}

.presentation-item__description {
  font-size: 20px;

  span {
    margin-right: 8px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .presentation-item__description-el {
    position: relative;
    margin-right: 30px;
    font-weight: normal;

    span {
      font-weight: bold;
    }

    &::after {
      position: absolute;
      top: 2px;
      right: -16px;
      content: "";
      width: 2px;
      height: 20px;
      background-color: $color-black;
    }
  }
}

@keyframes itemEnter {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .presentation-item {
    &--vertical {
      .presentation-item__picture {
        &::after {
          background-color: transparent;
        }
      }

      .presentation-item__title {
        font-size: 30px;
      }

      .presentation-item__date {
        font-size: 22px;

        &-tag {
          margin-right: 20px;
        }

        &-time {
          &::before {
            left: -9px;
          }
        }
      }

      .presentation-item__description {
        font-size: 20px;

        .presentation-item__description-el {
          margin-right: 30px;

          &::after {
            right: -16px;
          }
        }
      }
    }
  }

  .presentation-item__title {
    font-size: 28px;
  }

  .presentation-item__date {
    font-size: 20px;

    &-tag {
      margin-right: 15px;
    }

    &-time {
      &::before {
        left: -9px;
      }
    }
  }

  .presentation-item__description {
    font-size: 19px;

    .presentation-item__description-el {
      margin-right: 10px;

      &::after {
        right: -7px;
      }
    }
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .presentation-item {
    flex-direction: column;
    align-items: center;

    .presentation-item__picture {
      width: 100%;
      min-height: 220px;
    }

    &--vertical {
      .presentation-item__picture {
        &::after {
          background-color: transparent;
        }
      }
    }
  }

  .presentation-item__container {
    width: 100%;
    padding: 15px 10px 25px 10px;
    text-align: center;
  }

  .presentation-item__title {
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: normal;
    text-transform: uppercase;
  }

  .presentation-item__date {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 20px;

    &-tag {
      margin-right: 0;
    }

    &-time {
      &::before {
        width: 0;
        height: 0;
      }
    }
  }

  .presentation-item__description {
    font-size: 18px;
  }
}
</style>
