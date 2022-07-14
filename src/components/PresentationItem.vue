<template>
  <router-link
    :to="`/product/${presentationItem.id}`"
    class="presentation-item"
    :class="{ 'presentation-item--vertical': vertical }"
  >
    <div class="presentation-item__picture">
      <img
        class="presentation-item__image"
        :src="presentationItem.image_url"
        alt=""
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

    .presentation-item__container {
      padding-top: 10px;
    }

    .presentation-item__picture {
      margin-right: 0;
      background-image: none;
    }
  }
}

.presentation-item__picture {
  position: relative;
  width: 30%;
  height: 100%;
  background-image: url("@/assets/images/bg/ravenna.png");
}

.presentation-item__image {
  @include center-element;
  max-width: 90%;
  max-height: 90%;
}

.presentation-item__container {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 40px 10px;
}

.presentation-item__title {
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: normal;
  text-transform: uppercase;

  span {
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

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .presentation-item {
    &--vertical {
      .presentation-item__description {
        .presentation-item__description-el {
          margin-right: 30px;

          &::after {
            right: -16px;
          }
        }
      }
    }
  }

  .presentation-item__description {
    .presentation-item__description-el {
      margin-right: 5px;

      &::after {
        right: -4px;
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
