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
import { mapActions } from "vuex";
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
      page: 1,
      perPage: 10,
    };
  },
  methods: {
    ...mapActions({
      getSearchBeer: "allBeers/getSearchBeer",
    }),
    searchBeer: _.debounce(function () {
      this.getSearchBeer({
        beerParams: {
          beer_name: this.searchNameValue,
          food: this.searchFoodValue,
          page: this.page,
          per_page: this.perPage,
          abv_gt: this.abvValue.abvMin,
          abv_lt: this.abvValue.abvMax,
          ibu_gt: this.ibuValue.ibuMin,
          ibu_lt: this.ibuValue.ibuMax,
          ebc_gt: this.ebcValue.ebcMin,
          ebc_lt: this.ebcValue.ebcMax,
        },
      });
    }, 1000),
  },
  watch: {
    searchNameValue() {
      this.searchBeer();
    },
    searchFoodValue() {
      this.searchBeer();
    },
    abvValue: {
      handler() {
        this.searchBeer();
      },
      deep: true,
    },
    ibuValue: {
      handler() {
        this.searchBeer();
      },
      deep: true,
    },
    ebcValue: {
      handler() {
        this.searchBeer();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss"></style>
