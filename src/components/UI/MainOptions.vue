<template>
  <ul class="main-options">
    <li
      class="main-options__item"
      :class="{ 'main-options__item--active': option === activeOption }"
      v-for="option in options"
      :key="option"
      @click="changeOption(option)"
    >
      <MainButton
        class="main-options__button"
        :class="{ 'main-options__button--active': option === activeOption }"
        >{{ option }}</MainButton
      >
    </li>
  </ul>
</template>

<script>
import MainButton from "@/components/UI/MainButton.vue";

export default {
  name: "MainOptions",
  props: {
    options: Array,
    activeOption: String,
  },
  components: {
    MainButton,
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

.main-options__button {
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

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-options {
    max-width: 350px;
    width: 100%;
    justify-content: space-between;
  }

  .main-options__item:not(:last-child) {
    margin-right: 0;
  }
}
</style>
