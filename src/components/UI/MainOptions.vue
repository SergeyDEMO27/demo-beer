<template>
  <ul class="main-options">
    <li
      class="main-options__item"
      :class="{ 'main-options__item--active': option === activeOption }"
      v-for="option in options"
      :key="option"
      @click="changeOption(option)"
    >
      {{ option }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "MainOptions",
  props: {
    options: Array,
    activeOption: String,
  },
  methods: {
    changeOption(option) {
      this.$emit("changeOption", option);
    },
  },
};
</script>

<style lang="scss">
.main-options {
  @include reset-list;
  display: flex;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
}

.main-options__item {
  @include default-transition;
  padding: 5px;
  font-size: 24px;
  border: 2px solid #d9d9db;
  background-color: $color-light-gray;
  box-shadow: 4px 4px 8px 0px rgb(34 60 80 / 20%);
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &--active {
    color: $color-light-blue;
    cursor: default;

    &:hover {
      transform: scale(1);
    }
  }
}

.main-options__item:not(:last-child) {
  margin-right: 20px;
}
</style>
