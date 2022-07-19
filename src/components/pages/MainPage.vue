<template>
  <div class="main-page">
    <MainHeader />
    <div class="main-page__main">
      <MainOffer />
      <MainPresentation />
    </div>
    <MainFooter />
    <MainModal @click="resetError" v-if="allBeerError">
      <MainError>Something went wrong. Try to reload page</MainError>
    </MainModal>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
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
    ...mapMutations({
      resetError: "allBeers/resetError",
    }),
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
</style>
