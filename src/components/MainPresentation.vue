<template>
  <section class="main-presentation" id="filter">
    <div class="main-presentation__container">
      <h2 class="main-presentation__title">Find your ideal beer</h2>
      <div class="main-presentation__wrapper" ref="presentation" id="present">
        <MainFilter class="main-presentation__filter" />
        <TransitionGroup
          name="main-presentation__list"
          tag="ul"
          class="main-presentation__list"
        >
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
        </TransitionGroup>
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
.main-presentation {
  position: relative;
  width: 100%;
  background-image: url("@/assets/images/bg/bg-brick-gray.jpg");
}

.main-presentation__container {
  @include default-container;
}

.main-presentation__title {
  @include main-title;
  position: relative;
  margin-bottom: 25px;
  font-size: 40px;
  color: $color-light-blue;
  text-transform: capitalize;
  text-align: center;
}

.main-presentation__wrapper {
  display: flex;
}

.main-presentation__filter {
  position: sticky;
  top: 10px;
  width: 20%;
  max-height: 490px;
  height: 490px;
  background-color: #f1f1f2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.main-presentation__list {
  @include reset-list;
  display: flex;
  flex-wrap: wrap;
  width: 80%;

  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}

.main-presentation__item {
  @include default-transition;
  width: 50%;
  min-height: 230px;

  &--even {
    background-color: rgb(255, 255, 255, 50%);
  }

  &:hover {
    background-color: $color-plum;
  }
}

.main-presentation__observer {
  width: 100%;
  height: 1px;
  background-color: transparent;
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .main-presentation__filter {
    max-height: 479px;
    height: auto;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-presentation__wrapper {
    flex-direction: column;
    align-items: center;
  }

  .main-presentation__filter {
    max-width: 500px;
    width: 100%;
    height: auto;
    border-radius: 8px;
    z-index: 10;
  }

  .main-presentation__list {
    max-width: 400px;
    width: 100%;
    margin-top: 10px;
  }

  .main-presentation__item {
    width: 100%;
    border-bottom: 2px solid $color-black;

    &--even {
      background-color: transparent;
    }
  }
}
</style>
