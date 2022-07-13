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
  }
}

.presentation-item__picture {
  position: relative;
  width: 20%;
  height: 100%;
  margin-right: 10px;
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
  padding-top: 50px;
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
      background-color: black;
    }
  }
}
</style>
