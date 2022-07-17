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
      <MainNavigation :navItems="navItems" />
    </div>
  </div>
</template>

<script>
import MainNavigation from "@/components/MainNavigation.vue";

export default {
  name: "MainHeader",
  components: {
    MainNavigation,
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
  align-items: center;
}

.main-header__logo {
  @include center-element;

  .main-header__link {
    color: red;
    text-decoration: none;
    text-transform: uppercase;

    .main-header__title {
      @include visually-hidden;
    }

    .main-header__image {
      width: 80px;
      height: 53px;
    }
  }
}
</style>
