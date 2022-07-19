<template>
  <div class="main-page">
    <MainHeader />
    <div class="main-page__main">
      <MainOffer />
      <MainPresentation />
    </div>
    <MainFooter />
    <!-- <MainModal> </MainModal> -->
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainOffer from "@/components/MainOffer.vue";
import MainPresentation from "@/components/MainPresentation.vue";
// import MainModal from "@/components/UI/MainModal.vue";

export default {
  name: "MainPage",
  components: {
    MainHeader,
    MainFooter,
    MainOffer,
    MainPresentation,
    // MainModal,
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
