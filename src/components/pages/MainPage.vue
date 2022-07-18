<template>
  <MainHeader />
  <MainOffer />
  <!-- <MainPresentation /> -->
  <MainFooter />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainOffer from "@/components/MainOffer.vue";
// import MainPresentation from "@/components/MainPresentation.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "MainPage",
  components: {
    MainHeader,
    MainOffer,
    // MainPresentation,
    MainFooter,
  },
};
</script>

<style></style>
