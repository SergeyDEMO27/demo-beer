<template>
  <section class="main-presentation">
    <div class="main-presentation__container">
      <h2 class="main-presentation__title">RECIPES</h2>
      <div class="main-presentation__wrapper">
        <MainFilter class="main-presentation__filter" />
        <ul class="main-presentation__list">
          <li
            class="main-presentation__item"
            :class="{
              'main-presentation__item--even':
                (index - index / 2) % 2 === 0 ||
                (index - 1 - (index - 1) / 2) % 2 === 0,
            }"
            v-for="(item, index) in allBeers"
            :key="item.id"
          >
            <PresentationItem :presentationItem="item" />
          </li>
        </ul>
      </div>
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

.main-presentation__wrapper {
  display: flex;
}

.main-presentation__filter {
  position: sticky;
  top: 0;
  width: 20%;
  max-height: 420px;
}

.main-presentation__list {
  @include reset-list;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
}

.main-presentation__item {
  width: 50%;
  min-height: 230px;

  &--even {
    background-color: $color-light-gray;
  }
}

.main-presentation__observer {
  width: 100%;
  height: 1px;
  background-color: transparent;
}
</style>
