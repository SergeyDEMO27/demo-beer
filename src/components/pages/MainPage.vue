<template>
  <div class="main-page">
    <MainHeader />
    <div class="main-page__main">
      <MainOffer />
      <MainPresentation />
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainOffer from "@/components/MainOffer.vue";
import MainPresentation from "@/components/MainPresentation.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "MainPage",
  components: {
    MainHeader,
    MainOffer,
    MainPresentation,
    MainFooter,
  },
};
</script>

<style lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &__main {
    flex: 1 1 auto;
  }
}
</style>
