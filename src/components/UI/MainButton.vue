<template>
  <button class="main-button" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MainButton",
};
</script>

<style lang="scss">
.main-button {
  @include default-transition;
  // @include main-title;
  padding: 5px;
  font-size: 24px;
  color: $color-black;
  border: 2px solid #d9d9db;
  background-color: $color-light-gray;
  box-shadow: 4px 4px 8px 0px rgb(34 60 80 / 20%);
  text-transform: uppercase;
  cursor: pointer;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-button {
    padding: 3px;
    font-size: 18px;
  }
}
</style>
