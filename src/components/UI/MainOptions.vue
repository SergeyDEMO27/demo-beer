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
  padding: 5px;
  font-size: 24px;
  background-color: $color-light-gray;
  border: 1px solid $color-black;
  text-transform: uppercase;
  cursor: pointer;

  &--active {
    background-color: $color-light-blue;
  }
}

.main-options__item:not(:last-child) {
  margin-right: 20px;
}
</style>
