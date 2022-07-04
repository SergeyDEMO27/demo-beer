<template>
  <div
    class="main-input"
    :class="{ 'main-input--active': inputValue || isInputActive }"
  >
    <label class="main-input__label" :for="title">{{ title }}</label>
    <input
      class="main-input__input-field"
      :id="title"
      :type="inputType"
      :value="inputValue"
      @input="(event) => $emit('update:inputValue', event.target.value)"
      @focus="$emit('inputActive')"
      @blur="$emit('inputNotActive')"
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
    isInputActive: Boolean,
  },
};
</script>

<style lang="scss">
.main-input {
  position: relative;
  width: 100%;

  &--active {
    .main-input__label {
      bottom: 30px;
    }
  }
}

.main-input__label {
  @include default-transition;
  position: absolute;
  bottom: 0;
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
  font-size: 22px;
  border: none;
  border-bottom: 2px solid $color-black;
  background-color: transparent;
  z-index: 2;

  &:focus {
    outline: none;
  }
}
</style>
