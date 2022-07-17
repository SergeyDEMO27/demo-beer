<template>
  <MainHeader />
  <MainOffer />
  <!-- <MainPreview /> -->
  <MainPresentation />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
// import MainPreview from "@/components/MainPreview.vue";
import MainOffer from "@/components/MainOffer.vue";
import MainPresentation from "@/components/MainPresentation.vue";

export default {
  name: "MainPage",
  components: {
    MainHeader,
    MainOffer,
    // MainPreview,
    MainPresentation,
  },
};
</script>

<style></style>
