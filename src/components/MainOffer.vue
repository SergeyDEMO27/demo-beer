<template>
  <section class="main-offer">
    <h2>Find the perfect beer</h2>
    <!-- <button type="button" @click="findBeerByName">Find</button> -->
    <div class="main-offer__item">
      <h3>Popular Beers</h3>
      <MainOptions
        class="main-offer__options"
        :options="nameOptions"
        :activeOption="activeName"
        @changeOption="(option) => (activeName = option)"
      />
      <div v-if="namedBeer.length">
        <MainSlider :items="namedBeer" :direction="'ltr'" />
      </div>
    </div>
    <div class="main-offer__item">
      <h3>Open new beer</h3>
      <button type="button" @click="generateBeer">Generate random beer</button>
      <div>{{ randomBeer.name }}</div>
    </div>
    <div class="main-offer__item">
      <h3>Popular Beers</h3>
      <MainOptions
        class="main-offer__options"
        :options="foodOptions"
        :activeOption="activeFood"
        @changeOption="(option) => (activeFood = option)"
      />
      <div v-if="foodBeers.length">
        <MainSlider :items="foodBeers" :direction="'rtl'" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MainOptions from "@/components/UI/MainOptions.vue";
import MainSlider from "@/components/UI/MainSlider.vue";

export default {
  name: "MainOffer",
  components: {
    MainOptions,
    MainSlider,
  },
  data() {
    return {
      nameOptions: ["IPA", "Lager", "Stout", "Ale", "Porter", "Weisse"],
      foodOptions: ["Chicken", "Beef", "Burger", "Pasta", "Salad", "Fish"],
      activeName: "IPA",
      activeFood: "Chicken",
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
    generateBeer() {
      this.getRandomBeer();
    },
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
  @include default-container;
  text-align: center;
}

.main-offer__item {
  margin-bottom: 60px;
  text-align: center;

  .main-offer__options {
    margin-bottom: 25px;
  }
}
</style>
