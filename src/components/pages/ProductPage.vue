<template>
  <MainHeader />
  <ProductPreview />
  <MainFooter />
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

<style></style>
