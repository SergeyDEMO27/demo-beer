<template>
  <div class="main-filter">
    <h2 class="main-filter__title">FILTER OPTIONS</h2>
    <form class="main-filter__form" action="">
      <MainInput
        class="main-filter__input"
        :title="'name'"
        :inputType="'search'"
        v-model:inputValue="searchNameValue"
        :isInputActive="isInputActive.searchName"
        @inputActive="() => (isInputActive.searchName = true)"
        @inputNotActive="() => (isInputActive.searchName = false)"
      />
      <MainInput
        class="main-filter__input"
        :title="'food'"
        :inputType="'search'"
        v-model:inputValue="searchFoodValue"
        :isInputActive="isInputActive.searchFood"
        @inputActive="() => (isInputActive.searchFood = true)"
        @inputNotActive="() => (isInputActive.searchFood = false)"
      />
      <MainRange
        class="main-filter__input"
        :title="abvValue.title"
        :minValue="abvValue.abvMin"
        :maxValue="abvValue.abvMax"
        @updateMinValue="(value) => (abvValue.abvMin = value)"
        @updateMaxValue="(value) => (abvValue.abvMax = value)"
        :isInputActive="isInputActive.abv"
        @minInputActive="() => (isInputActive.abv.min = true)"
        @maxInputActive="() => (isInputActive.abv.max = true)"
        @minInputNotActive="() => (isInputActive.abv.min = false)"
        @maxInputNotActive="() => (isInputActive.abv.max = false)"
      />
      <MainRange
        class="main-filter__input"
        :title="ibuValue.title"
        :minValue="ibuValue.ibuMin"
        :maxValue="ibuValue.ibuMax"
        :isInputActive="isInputActive.ibu"
        @updateMinValue="(value) => (ibuValue.ibuMin = value)"
        @updateMaxValue="(value) => (ibuValue.ibuMax = value)"
        @minInputActive="() => (isInputActive.ibu.min = true)"
        @maxInputActive="() => (isInputActive.ibu.max = true)"
        @minInputNotActive="() => (isInputActive.ibu.min = false)"
        @maxInputNotActive="() => (isInputActive.ibu.max = false)"
      />
      <MainRange
        class="main-filter__input"
        :title="ebcValue.title"
        :minValue="ebcValue.ebcMin"
        :maxValue="ebcValue.ebcMax"
        :isInputActive="isInputActive.ebc"
        @updateMinValue="(value) => (ebcValue.ebcMin = value)"
        @updateMaxValue="(value) => (ebcValue.ebcMax = value)"
        @minInputActive="() => (isInputActive.ebc.min = true)"
        @maxInputActive="() => (isInputActive.ebc.max = true)"
        @minInputNotActive="() => (isInputActive.ebc.min = false)"
        @maxInputNotActive="() => (isInputActive.ebc.max = false)"
      />
      <!-- <button onClick="clearFilter" type="button">Reset</button> -->
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import _ from "lodash";
import MainInput from "@/components/UI/MainInput.vue";
import MainRange from "@/components/UI/MainRange.vue";

export default {
  name: "MainFilter",
  components: {
    MainInput,
    MainRange,
  },
  data() {
    return {
      searchNameValue: "",
      searchFoodValue: "",
      abvValue: { title: "abv", abvMin: "", abvMax: "" },
      ibuValue: { title: "ibu", ibuMin: "", ibuMax: "" },
      ebcValue: { title: "ebc", ebcMin: "", ebcMax: "" },
      observer: null,
      isInputActive: {
        searchName: false,
        searchFood: false,
        abv: { min: false, max: false },
        ibu: { min: false, max: false },
        ebc: { min: false, max: false },
      },
    };
  },
  methods: {
    ...mapActions({
      getSearchBeer: "allBeers/getSearchBeer",
    }),
    ...mapMutations({
      clearBeers: "allBeers/clearBeers",
      increasePage: "allBeers/increasePage",
      resetPage: "allBeers/resetPage",
    }),
    searchBeer: _.debounce(function (isNewReq = true) {
      this.getSearchBeer({
        beerParams: {
          beer_name: this.searchNameValue,
          food: this.searchFoodValue,
          abv_gt: this.abvValue.abvMin,
          abv_lt: this.abvValue.abvMax,
          ibu_gt: this.ibuValue.ibuMin,
          ibu_lt: this.ibuValue.ibuMax,
          ebc_gt: this.ebcValue.ebcMin,
          ebc_lt: this.ebcValue.ebcMax,
        },
        isNewReq,
      });
    }, 0),
    // clearFilter() {
    //   console.log("Hello");
    //   this.searchNameValue = "";
    //   this.searchFoodValue = "";
    //   this.abvValue.abvMin = "";
    //   this.abvValue.abvMax = "";
    //   this.ibuValue.ibuMin = "";
    //   this.ibuValue.ibuMax = "";
    //   this.ebcValue.ebcMin = "";
    //   this.ebcValue.ebcMax = "";
    //   this.isInputActive.searchName = false;
    //   this.isInputActive.searchFood = false;
    //   this.isInputActive.abv.min = false;
    //   this.isInputActive.abv.max = false;
    //   this.isInputActive.ibu.min = false;
    //   this.isInputActive.ibu.max = false;
    //   this.isInputActive.ebc.min = false;
    //   this.isInputActive.ebc.max = false;
    // },
  },
  watch: {
    searchNameValue() {
      this.resetPage();
      this.searchBeer(false);
    },
    searchFoodValue() {
      this.resetPage();
      this.searchBeer(false);
    },
    abvValue: {
      handler() {
        this.resetPage();
        this.searchBeer(false);
      },
      deep: true,
    },
    ibuValue: {
      handler() {
        this.resetPage();
        this.searchBeer(false);
      },
      deep: true,
    },
    ebcValue: {
      handler() {
        this.resetPage();
        this.searchBeer(false);
      },
      deep: true,
    },
  },
  mounted() {
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        this.increasePage();
        this.searchBeer();
      }
    };
    this.observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });
    this.observer.observe(document.querySelector("#observer"));
  },
  unmounted() {
    this.observer.disconnect();
  },
};
</script>

<style lang="scss">
.main-filter {
  padding: 25px;
  background-color: $color-white;
  text-align: center;
}

.main-filter__title {
  margin-bottom: 45px;
}

.main-filter__form {
  display: flex;
  flex-direction: column;
}

.main-filter__input {
  height: 32px;
  margin-bottom: 43px;
}
</style>
