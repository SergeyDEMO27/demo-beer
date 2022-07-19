<template>
  <div class="product-page">
    <MainHeader />
    <div class="product-page__main">
      <ProductPreview />
    </div>
    <MainFooter />
    <MainModal v-if="isLoading">
      <MainLoader />
    </MainModal>
    <MainModal @click="resetError" v-if="oneBeerError">
      <MainError>Something went wrong. Try again later</MainError>
    </MainModal>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import ProductPreview from "@/components/ProductPreview.vue";
import MainModal from "@/components/UI/MainModal.vue";
import MainLoader from "@/components/UI/MainLoader.vue";
import MainError from "@/components/UI/MainError.vue";

export default {
  name: "ProductPage",
  components: {
    MainHeader,
    MainFooter,
    ProductPreview,
    MainModal,
    MainLoader,
    MainError,
  },
  methods: {
    ...mapMutations({
      resetError: "allBeers/resetError",
    }),
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.allBeers.isLoading,
      oneBeerError: (state) => state.allBeers.oneBeerError,
    }),
  },

  watch: {
    oneBeerError() {
      if (this.oneBeerError === true) {
        setTimeout(() => {
          this.resetError();
          this.$router.push({ name: "main" });
        }, 4000);
      }
    },
  },
};
</script>

<style lang="scss">
.product-page {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &__main {
    flex: 1 1 auto;
  }
}
</style>
