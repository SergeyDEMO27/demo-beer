<template>
  <div class="product-page">
    <MainHeader />
    <div class="product-page__main">
      <ProductPreview />
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import ProductPreview from "@/components/ProductPreview.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "ProductPage",
  components: {
    MainHeader,
    ProductPreview,
    MainFooter,
  },
};
</script>

<style lang="scss">
.product-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &__main {
    flex: 1 1 auto;
  }
}
</style>
