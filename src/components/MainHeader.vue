<template>
  <div class="main-header">
    <div class="main-header__container">
      <div class="main-header__logo">
        <router-link class="main-header__link" to="/">
          <h1 class="main-header__title">Demo-Beer</h1>
          <img
            class="main-header__image"
            src="@/assets/images/icons/logo.png"
            alt="Demo-beer logo"
          />
        </router-link>
      </div>
      <MainNavigation class="main-header__navigation" :navItems="navItems" />
      <MainSocial class="main-header__social" />
    </div>
  </div>
</template>

<script>
import MainNavigation from "@/components/MainNavigation.vue";
import MainSocial from "@/components/MainSocial.vue";

export default {
  name: "MainHeader",
  components: {
    MainNavigation,
    MainSocial,
  },
  data() {
    return {
      navItems: [
        { id: "popular", name: "Popular" },
        { id: "filter", name: "Filter" },
      ],
    };
  },
};
</script>

<style lang="scss">
.main-header {
  position: relative;
  width: 100%;
  background-color: $color-black;
  min-height: 50px;
  color: $color-white;
  overflow-y: hidden;
}

.main-header__container {
  @include default-container;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-header__logo {
  order: -2;

  .main-header__link {
    .main-header__title {
      @include visually-hidden;
    }

    .main-header__image {
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
