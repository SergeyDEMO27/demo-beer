<template>
  <div
    class="main-header"
    :class="{
      'main-header--hidden': !isShowHeader,
    }"
    @mouseover="showHeader"
    @mouseout="hideHeader"
  >
    <div class="main-header__container">
      <div class="main-header__logo">
        <router-link class="main-header__link" to="/" v-if="!isMain">
          <h1 class="main-header__title">Demo-Beer</h1>
          <img
            class="main-header__image"
            src="@/assets/images/icons/logo.png"
            alt="Demo-beer logo"
          />
        </router-link>
        <div class="main-header__link" v-else>
          <h1 class="main-header__title">Demo-Beer</h1>
          <img
            class="main-header__image"
            src="@/assets/images/icons/logo.png"
            alt="Demo-beer logo"
          />
        </div>
      </div>
      <MainNavigation
        class="main-header__navigation"
        :navItems="navItems"
        :isTopHeader="isTopHeader"
        v-if="isMain"
      />
      <MainSocial class="main-header__social" :isTopHeader="isTopHeader" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import MainNavigation from "@/components/MainNavigation.vue";
import MainSocial from "@/components/MainSocial.vue";

export default {
  name: "MainHeader",
  props: {
    isMain: Boolean,
  },
  components: {
    MainNavigation,
    MainSocial,
  },
  data() {
    return {
      isShowHeader: true,
      isTopHeader: true,
      navItems: [
        { id: "popular", name: "Popular" },
        { id: "filter", name: "Filter" },
      ],
    };
  },
  methods: {
    ...mapMutations({
      setHeaderState: "headerModule/setHeaderState",
    }),
    showHeader() {
      this.isShowHeader = true;
    },
    hideHeader() {
      if (window.scrollY > 40) {
        this.isShowHeader = false;
      }
    },
    onScroll() {
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      this.isShowHeader = currentScrollPosition <= 40;
    },
  },
  watch: {
    isShowHeader() {
      this.setHeaderState(this.isShowHeader);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
.main-header {
  @include default-transition;
  position: fixed;
  width: 100%;
  background-color: $color-black;
  min-height: 50px;
  color: $color-white;
  border-bottom: 1px solid $color-orange;
  overflow-y: hidden;
  z-index: 100;

  &--hidden {
    transform: translate3d(0, -92%, 0);
  }
}

.main-header__container {
  @include default-container;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-header__logo {
  @include center-element;
  order: -2;

  .main-header__link {
    &:hover {
      .main-header__image {
        transform: scale(1.05);
      }
    }

    .main-header__title {
      @include visually-hidden;
    }

    .main-header__image {
      @include default-transition;
      width: 80px;
      height: 53px;
    }
  }
}

.main-header__navigation {
  order: -3;
}

.main-header__social {
  max-width: 100px;
  margin-left: auto;
  order: -1;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-header__logo {
    .main-header__link {
      .main-header__image {
        width: 70px;
        height: 47px;
      }
    }
  }

  .main-header__social {
    max-width: 80px;
  }
}
</style>
