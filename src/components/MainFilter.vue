<template>
  <div class="main-filter">
    <label class="main-filter__toggle" for="check">
      <input type="checkbox" id="check" @click="toggleFilter" />
      <span></span>
      <span></span>
      <span></span>
    </label>
    <h2
      class="main-filter__title"
      :class="{ 'main-filter__title--visible': !isFilterVisible }"
    >
      FILTER OPTIONS
    </h2>
    <form
      class="main-filter__form"
      :class="{ 'main-filter__form--visible': !isFilterVisible }"
      action=""
    >
      <div class="main-filter__name-wrapper">
        <MainInput
          class="main-filter__input"
          :title="'name'"
          :inputType="'search'"
          v-model:inputValue="filterValue.searchNameValue"
        />
        <MainInput
          class="main-filter__input"
          :title="'food'"
          :inputType="'search'"
          v-model:inputValue="filterValue.searchFoodValue"
        />
      </div>
      <div class="main-filter__abv-wrapper">
        <MainRange
          class="main-filter__input main-filter__input--range"
          :title="filterValue.abvValue.title"
          :minValue="filterValue.abvValue.abvMin"
          :maxValue="filterValue.abvValue.abvMax"
          @updateMinValue="(value) => (filterValue.abvValue.abvMin = value)"
          @updateMaxValue="(value) => (filterValue.abvValue.abvMax = value)"
        />
        <MainRange
          class="main-filter__input main-filter__input--range"
          :title="filterValue.ibuValue.title"
          :minValue="filterValue.ibuValue.ibuMin"
          :maxValue="filterValue.ibuValue.ibuMax"
          @updateMinValue="(value) => (filterValue.ibuValue.ibuMin = value)"
          @updateMaxValue="(value) => (filterValue.ibuValue.ibuMax = value)"
        />
        <MainRange
          class="main-filter__input main-filter__input--range"
          :title="filterValue.ebcValue.title"
          :minValue="filterValue.ebcValue.ebcMin"
          :maxValue="filterValue.ebcValue.ebcMax"
          @updateMinValue="(value) => (filterValue.ebcValue.ebcMin = value)"
          @updateMaxValue="(value) => (filterValue.ebcValue.ebcMax = value)"
        />
      </div>
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
      isFilterVisible: false,
      filterValue: {
        searchNameValue: "",
        searchFoodValue: "",
        abvValue: { title: "abv", abvMin: "", abvMax: "" },
        ibuValue: { title: "ibu", ibuMin: "", ibuMax: "" },
        ebcValue: { title: "ebc", ebcMin: "", ebcMax: "" },
      },
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
          beer_name: this.filterValue.searchNameValue,
          food: this.filterValue.searchFoodValue,
          abv_gt: this.filterValue.abvValue.abvMin,
          abv_lt: this.filterValue.abvValue.abvMax,
          ibu_gt: this.filterValue.ibuValue.ibuMin,
          ibu_lt: this.filterValue.ibuValue.ibuMax,
          ebc_gt: this.filterValue.ebcValue.ebcMin,
          ebc_lt: this.filterValue.ebcValue.ebcMax,
        },
        isNewReq,
      });
    }, 300),
    toggleFilter() {
      this.isFilterVisible = this.isFilterVisible === true ? false : true;
    },
  },
  watch: {
    filterValue: {
      handler() {
        this.resetPage();
        this.searchBeer(false);
        window.scroll({
          top:
            document.querySelector("#filter").getBoundingClientRect().top +
            window.scrollY,
          behavior: "smooth",
        });
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
  position: relative;
  padding: 25px;
  background-color: $color-white;
  text-align: center;
}

.main-filter__title {
  @include default-transition;
  margin-bottom: 45px;
  font-size: 22px;
  color: $color-black;

  &--visible {
    color: $color-light-blue;
  }
}

.main-filter__form {
  @include default-transition;
  @include visually-hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: 0;

  &::after,
  &::before {
    position: absolute;
    bottom: -32px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background-color: $color-black;
  }

  &::before {
    top: -36px;
    bottom: unset;
  }

  &--visible {
    width: auto;
    height: auto;
    margin: auto;
    clip: auto;
    overflow: visible;
    opacity: 1;
  }
}

.main-filter__input {
  height: 32px;
  margin-bottom: 43px;

  &--range:last-of-type {
    margin-bottom: 0;
  }
}

.main-filter__toggle {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  width: 45px;
  visibility: hidden;
  cursor: pointer;

  span {
    background: $color-light-blue;
    border-radius: 10px;
    height: 4px;
    margin: 2px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(3px, 0px);
    width: 50%;
  }

  span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
    width: 75%;
  }

  span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(10px, -6px) rotatez(45deg);
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    width: 50%;
    transform: rotatez(0) translate(0);
    background: $color-black;
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(2) {
    width: 100%;
    transform: rotatez(0) translate(0);
    background: $color-black;
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    width: 75%;
    transform: rotatez(0) translate(0);
    background: $color-black;
  }
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .main-filter {
    padding: 10px;
    max-height: 460px;
  }

  .main-filter__title {
    font-size: 20px;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-filter {
    padding: 10px;
    border: 2px solid #d9d9db;
    box-shadow: 4px 4px 8px 0px rgb(34 60 80 / 20%);
  }

  .main-filter__title {
    margin-bottom: 0;
    font-size: 22px;
  }

  .main-filter__form {
    margin-top: 5px;

    &::after,
    &::before {
      width: 0;
    }

    &--visible {
      position: static;
      width: auto;
      height: auto;
      margin: auto;
      margin-top: 5px;
      clip: auto;
      overflow: visible;
      visibility: visible;
      opacity: 1;
    }
  }

  .main-filter__name-wrapper,
  .main-filter__abv-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .main-filter__input {
    margin-bottom: 32px;

    &--range {
      width: 32%;
    }
  }

  .main-filter__toggle {
    visibility: visible;
  }
}
</style>
