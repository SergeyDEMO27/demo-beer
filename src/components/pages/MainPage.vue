<template>
  <div class="main-page">
    <MainHeader :isMain="true" />
    <div class="main-page__main">
      <MainOffer />
      <MainPresentation />
    </div>
    <MainFooter />
    <Transition name="main-page__modal">
      <MainModal @click="resetError" v-if="allBeerError">
        <MainError>Something went wrong. Try to reload page</MainError>
      </MainModal>
    </Transition>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import _ from "lodash";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainOffer from "@/components/MainOffer.vue";
import MainPresentation from "@/components/MainPresentation.vue";
import MainModal from "@/components/UI/MainModal.vue";
import MainError from "@/components/UI/MainError.vue";

export default {
  name: "MainPage",
  components: {
    MainHeader,
    MainFooter,
    MainOffer,
    MainPresentation,
    MainModal,
    MainError,
  },
  methods: {
    ...mapActions({
      getSearchBeer: "allBeers/getSearchBeer",
    }),
    ...mapMutations({
      resetError: "allBeers/resetError",
    }),
    searchBeer: _.debounce(function (isNewReq = true) {
      this.getSearchBeer({
        beerParams: {
          beer_name: "",
          food: "",
          abv_gt: "",
          abv_lt: "",
          ibu_gt: "",
          ibu_lt: "",
          ebc_gt: "",
          ebc_lt: "",
        },
        isNewReq,
      });
    }, 100),
  },
  computed: {
    ...mapState({
      allBeerError: (state) => state.allBeers.allBeerError,
    }),
  },
  watch: {
    allBeerError() {
      if (this.allBeerError === true) {
        setTimeout(() => {
          this.resetError();
        }, 4000);
      }
    },
  },
  mounted() {
    this.searchBeer();
  },
};
</script>

<style lang="scss">
.main-page {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &__main {
    flex: 1 1 auto;
  }
}

.main-page__modal-enter-active,
.main-page__modal-leave-active {
  transition: opacity 0.5s ease;
}

.main-page__modal-enter-from,
.main-page__modal-leave-to {
  opacity: 0;
}
</style>
