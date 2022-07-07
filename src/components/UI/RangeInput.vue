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
      bottom: 35px;
    }
  }
}

.range-input__label {
  @include default-transition;
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  text-transform: uppercase;
}

.range-input__input-field {
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 9px;
  font-size: 22px;
  /* border: none; */
  /* border-bottom: 2px solid #000000; */
  border: 3px solid $color-black;
  background-color: $color-white;

  border-radius: 8px;

  &:focus {
    outline: none;
  }
}
</style>
