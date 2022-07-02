<template>
  <div class="main-filter">
    <h2>FILTER OPTIONS</h2>
    <form action="">
      <MainInput
        :title="'beer'"
        :inputType="'search'"
        v-model:inputValue="searchNameValue"
      />
      <MainInput
        :title="'food'"
        :inputType="'search'"
        v-model:inputValue="searchFoodValue"
      />
      <MainRange
        :title="abvValue.title"
        :minValue="abvValue.abvMin"
        :maxValue="abvValue.abvMax"
        @updateMinValue="(value) => (abvValue.abvMin = value)"
        @updateMaxValue="(value) => (abvValue.abvMax = value)"
      />
      <MainRange
        :title="ibuValue.title"
        :minValue="ibuValue.ibuMin"
        :maxValue="ibuValue.ibuMax"
        @updateMinValue="(value) => (ibuValue.ibuMin = value)"
        @updateMaxValue="(value) => (ibuValue.ibuMax = value)"
      />
      <MainRange
        :title="ebcValue.title"
        :minValue="ebcValue.ebcMin"
        :maxValue="ebcValue.ebcMax"
        @updateMinValue="(value) => (ebcValue.ebcMin = value)"
        @updateMaxValue="(value) => (ebcValue.ebcMax = value)"
      />
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

<style lang="scss"></style>
