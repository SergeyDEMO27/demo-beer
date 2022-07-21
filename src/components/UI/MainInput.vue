<template>
  <div class="main-input" :class="{ 'main-input--active': inputValue }">
    <label class="main-input__label" :for="title">{{ title }}</label>
    <input
      class="main-input__input-field"
      :id="title"
      :type="inputType"
      :value="inputValue"
      @input="(event) => $emit('update:inputValue', event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "MainInput",
  props: {
    title: String,
    inputType: String,
    inputValue: [String, Number],
  },
};
</script>

<style lang="scss">
.main-input {
  position: relative;
  width: 100%;

  &--active {
    .main-input__label {
      bottom: 35px;
      color: $color-light-blue;
    }
  }
}

.main-input__label {
  @include default-transition;
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
}

.main-input__input-field {
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 9px;
  font-size: 22px;
  border: 2px solid #d9d9db;
  box-shadow: 4px 4px 8px 0px rgb(34 60 80 / 20%);
  background-color: $color-white;
  border-radius: 8px;
  z-index: 2;

  &:focus {
    outline: none;
  }
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .main-input__label {
    font-size: 19px;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-input {
    width: 45%;
  }

  .main-input__label {
    font-size: 18px;
  }
}
</style>
