<template>
  <nav class="main-navigation">
    <ul class="main-navigation__list">
      <li
        class="main-navigation__item"
        v-for="item in navItems"
        :key="item.name"
      >
        <a class="main-navigation__link" :href="`#${item.id}`">
          {{ item.name }}
        </a>
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
  @include reset-list;
  display: flex;
}

.main-navigation__link {
  @include main-title;
  @include default-transition;
  position: relative;
  margin-right: 15px;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: $color-light-blue;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
  }

  &:hover {
    color: $color-light-blue;

    &::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
}

@media (min-width: 401px) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-navigation__link {
    font-size: 16px;
  }
}

@media (min-width: $viewport--sm) and (max-width: 400px) {
  .main-navigation__list {
    flex-direction: column;
  }

  .main-navigation__link {
    margin-right: 0;
    font-size: 16px;

    &:hover {
      &::before {
        transform: scaleX(0);
      }
    }
  }
}
</style>
