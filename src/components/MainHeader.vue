<template>
  <div class="main-header">
    <div class="main-header__container">
      <div class="main-header__logo">
        <router-link class="main-header__link" to="/">
          <h1 class="main-header__title">D<span>e</span>mo-Beer</h1>
        </router-link>
      </div>
      <MainNavigation :navItems="navItems" />
    </div>
  </div>
</template>

<script>
import MainNavigation from "@/components/MainNavigation.vue";

export default {
  components: {
    MainNavigation,
  },
  data() {
    return {
      navItems: ["Recipes", "About Us", "Contacts"],
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
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin: auto;
  padding: 15px;
}

.main-header__logo {
  @include center-element;

  .main-header__link {
    color: red;
    text-decoration: none;
    text-transform: uppercase;

    .main-header__title {
      @include main-title;
      letter-spacing: 0.12em;

      span {
        @include main-title;
        display: inline-block;
        position: relative;
        top: 30px;
        transition: 0.4s;
        color: red;
        animation: wavy 7s infinite;
      }
    }
  }

  &:hover {
    .main-header__link {
      span {
        top: 0;
      }
    }
  }

  @keyframes wavy {
    0% {
      transform: rotate(0);
    }
    30% {
      transform: rotate(15deg);
    }
    70% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0);
    }
  }
}
</style>
