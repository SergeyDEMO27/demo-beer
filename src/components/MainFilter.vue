<template>
  <div class="main-filter">
    <h2>FILTER OPTIONS</h2>
    <form action="">
      <MainInput v-model:search="searchNameValue" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";
import MainInput from "@/components/UI/MainInput.vue";

export default {
  name: "MainFilter",
  components: {
    MainInput,
  },
  data() {
    return {
      searchNameValue: "",
    };
  },
  methods: {
    ...mapActions({
      getSearchBeer: "allBeers/getSearchBeer",
    }),
    searchBeer: _.debounce(function () {
      this.getSearchBeer({ beerName: this.searchNameValue });
    }, 1000),
  },
  watch: {
    searchNameValue() {
      this.searchBeer();
    },
  },
};
</script>

<style lang="scss"></style>
