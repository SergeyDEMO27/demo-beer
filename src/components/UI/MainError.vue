<template>
  <div class="main-error">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "main-error",
};
</script>

<style lang="scss">
.main-error {
  @include main-description;
  font-size: 54px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: linear-gradient(to right, #cf0606 0%, #8f0e0c 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  cursor: default;
  z-index: 1010;
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .main-error {
    font-size: 48px;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-error {
    font-size: 26px;
  }
}
</style>
