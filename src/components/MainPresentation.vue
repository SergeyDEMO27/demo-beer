<template>
  <section class="main-presentation">
    <div class="main-presentation__container">
      <MainFilter />
      <h2 class="main-presentation__title">RECIPES</h2>
      <ul class="main-presentation__list">
        <li
          class="main-presentation__item"
          v-for="item in allBeers"
          :key="item.id"
        >
          <PresentationItem :presentationItem="item" />
        </li>
      </ul>
    </div>
    <div id="observer" ref="observer" class="main-presentation__observer"></div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import MainFilter from "@/components/MainFilter.vue";
import PresentationItem from "@/components/PresentationItem.vue";

export default {
  name: "MainPresentation",
  components: {
    MainFilter,
    PresentationItem,
  },
  computed: {
    ...mapState({
      allBeers: (state) => state.allBeers.allBeers,
    }),
  },
};
</script>

<style lang="scss">
.main-presentation__container {
  @include default-container;
}

.main-presentation__list {
  @include reset-list;
  display: flex;
  flex-wrap: wrap;
}

.main-presentation__item {
  width: 50%;
  min-height: 230px;
}

.main-presentation__observer {
  width: 100%;
  height: 1px;
  background-color: transparent;
}
</style>
