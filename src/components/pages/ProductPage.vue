<template>
  <MainHeader />
  <ProductPreview />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import ProductPreview from "@/components/ProductPreview.vue";

export default {
  name: "ProductPage",
  components: {
    MainHeader,
    ProductPreview,
  },
};
</script>

<style></style>
