<template>
  <div class="main-modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainModal",
};
</script>

<style lang="scss">
.main-modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1000;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: $color-black;
    opacity: 70%;
  }
}
</style>
