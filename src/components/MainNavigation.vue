<template>
  <nav class="main-navigation">
    <ul class="main-navigation__list">
      <li class="main-navigation__item" v-for="item in navItems" :key="item">
        <router-link class="main-navigation__link" to="/">
          {{ item }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNavigation",
  props: {
    navItems: Array,
  },
};
</script>

<style lang="scss">
.main-navigation__list {
  display: flex;
}

.main-navigation__list {
  @include reset-list;
}

.main-navigation__link {
  @include main-description;
  @include default-transition;
  position: relative;
  padding: 0 15px;
  text-decoration: none;
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 10%;
    width: 80%;
    height: 2px;
    border-radius: 4px;
    background-color: $color-white;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
  }

  &:hover {
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 70%);

    &::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
}
</style>
