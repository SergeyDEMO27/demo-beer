<template>
  <section class="main-offer" id="popular">
    <div class="main-offer__container">
      <div class="main-offer__item">
        <h3 class="main-offer__title">Get your perfect type of beer</h3>
        <MainOptions
          class="main-offer__options"
          :options="nameOptions"
          :activeOption="activeName"
          @changeOption="(option) => (activeName = option)"
        />
        <div class="main-offer__slider">
          <MainSlider
            v-if="namedBeer.length"
            :items="namedBeer"
            :direction="'ltr'"
          />
        </div>
      </div>
      <div class="main-offer__item">
        <h3 class="main-offer__title">Find the mystery beer</h3>
        <MainButton class="main-offer__button" @click="generateBeer"
          >Generate</MainButton
        >
        <div class="main-offer__mystery">
          <PresentationItem
            class="main-offer__mystery-item"
            :presentationItem="randomBeer"
            :vertical="true"
          />
        </div>
      </div>
      <div class="main-offer__item">
        <h3 class="main-offer__title">
          Discover the best beer for your appetizers
        </h3>
        <MainOptions
          class="main-offer__options"
          :options="foodOptions"
          :activeOption="activeFood"
          @changeOption="(option) => (activeFood = option)"
        />
        <div class="main-offer__slider">
          <MainSlider
            v-if="foodBeers.length"
            :items="foodBeers"
            :direction="'rtl'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import _ from "lodash";
import MainOptions from "@/components/UI/MainOptions.vue";
import MainSlider from "@/components/UI/MainSlider.vue";
import PresentationItem from "@/components/PresentationItem.vue";
import MainButton from "@/components/UI/MainButton.vue";

export default {
  name: "MainOffer",
  components: {
    MainOptions,
    MainSlider,
    PresentationItem,
    MainButton,
  },
  data() {
    return {
      nameOptions: ["IPA", "Lager", "Stout", "Ale", "Pale Ale"],
      foodOptions: ["Fruit", "Beef", "Burger", "Pasta", "Salad", "Fish"],
      activeName: "IPA",
      activeFood: "Fruit",
    };
  },
  methods: {
    ...mapActions({
      getNamedBeer: "allBeers/getNamedBeer",
      getFoodsBeers: "allBeers/getFoodsBeers",
      getRandomBeer: "allBeers/getRandomBeer",
    }),
    findBeerByName(activeName) {
      this.getNamedBeer({
        beerParams: {
          beer_name: activeName,
        },
      });
    },
    findBeerByFood(activeFood) {
      this.getFoodsBeers({
        beerParams: {
          food: activeFood,
        },
      });
    },
    generateBeer: _.debounce(function () {
      this.getRandomBeer();
    }, 200),
  },
  computed: {
    ...mapState({
      namedBeer: (state) => state.allBeers.namedBeer,
      foodBeers: (state) => state.allBeers.foodBeers,
      randomBeer: (state) => state.allBeers.randomBeer,
    }),
  },
  mounted() {
    this.findBeerByName(this.activeName);
    this.findBeerByFood(this.activeFood);
    this.generateBeer();
  },
  watch: {
    activeName() {
      this.findBeerByName(this.activeName);
    },
    activeFood() {
      this.findBeerByFood(this.activeFood);
    },
  },
};
</script>

<style lang="scss">
.main-offer {
  width: 100%;
  background-image: url("@/assets/images/bg/bg-brick-gray.jpg");
}

.main-offer__container {
  @include default-container;
  padding-top: 120px;
  text-align: center;
}

.main-offer__item {
  min-height: 400px;
  margin-bottom: 35px;
  text-align: center;

  .main-offer__options {
    margin-bottom: 25px;
  }
}

.main-offer__title {
  @include main-title;
  position: relative;
  margin-bottom: 25px;
  font-size: 40px;
  color: $color-light-blue;
  text-transform: capitalize;
}

.main-offer__slider {
  min-height: 360px;
}

.main-offer__mystery {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  text-align: center;

  &-item {
    width: 600px;
    margin: 0 auto;
  }
}

.main-offer__button {
  &:hover {
    color: $color-light-blue;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.05);
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-offer__main-title {
    font-size: 34px;
  }

  .main-offer__title {
    font-size: 32px;

    &::before,
    &::after {
      min-width: auto;
    }
  }

  .main-offer__mystery {
    &-item {
      width: 100%;
    }
  }
}
</style>
