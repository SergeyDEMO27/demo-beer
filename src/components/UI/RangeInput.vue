<template>
  <div
    class="range-input"
    :class="{ 'range-input--active': inputValue || isInputActive }"
  >
    <label class="range-input__label" :for="title">{{ title }}</label>
    <input
      class="range-input__input-field"
      :id="title"
      :type="inputType"
      :value="inputValue"
      @input="(event) => this.$emit('updateValue', event.target.value)"
      @focus="$emit('inputActive')"
      @blur="$emit('inputNotActive')"
    />
  </div>
</template>

<script>
export default {
  name: "MainInput",
  emits: ["updateValue", "inputActive", "inputNotActive"],
  props: {
    title: String,
    inputType: String,
    inputValue: [String, Number],
    isInputActive: Boolean,
  },
};
</script>

<style lang="scss">
.range-input {
  position: relative;

  &--active {
    .range-input__label {
      bottom: 30px;
    }
  }
}

.range-input__label {
  @include default-transition;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  text-transform: uppercase;
}

.range-input__input-field {
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
