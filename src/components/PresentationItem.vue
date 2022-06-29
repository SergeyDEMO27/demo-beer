<template>
  <router-link
    :to="`/product/${presentationItem.id}`"
    class="presentation-item"
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
        <span>{{ presentationItem.tagline }}</span>
        {{ presentationItem.first_brewed }}
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
  },
};
</script>

<style lang="scss">
.presentation-item {
  display: flex;
  width: 100%;
  height: 100%;
}

.presentation-item__picture {
  position: relative;
  width: 20%;
  height: 100%;
  margin-right: 10px;
  background-image: url("@/assets/images/bg/ravenna.png");
  //   background-color: #f1f1f2;
  //   opacity: 1;
  //   background-image: linear-gradient(#fff 0.8px, transparent 0.8px),
  //     linear-gradient(90deg, #fff 0.8px, transparent 0.8px),
  //     linear-gradient(#fff 0.4px, transparent 0.4px),
  //     linear-gradient(90deg, #fff 0.4px, #f1f1f2 0.4px);
  //   background-size: 20px 20px, 20px 20px, 4px 4px, 4px 4px;
  //   background-position: -0.8px -0.8px, -0.8px -0.8px, -0.4px -0.4px,
  //     -0.4px -0.4px;
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
  font-size: 38px;
  font-weight: normal;
  text-transform: uppercase;

  span {
    color: $color-light-blue;
  }
}

.presentation-item__date {
  margin-bottom: 15px;
  font-size: 24px;
  span {
    position: relative;
    margin-right: 30px;
    text-transform: uppercase;

    &::after {
      position: absolute;
      top: 4px;
      right: -16px;
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
