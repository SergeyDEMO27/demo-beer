<template>
  <div class="main-range">
    <p class="main-range__title">{{ title }}</p>
    <div class="main-range__container">
      <RangeInput
        class="main-range__input"
        :title="'from'"
        :inputType="'number'"
        :inputValue="minValue"
        @updateValue="updateMinVal"
        :isInputActive="isInputActive.min"
        @inputActive="$emit('minInputActive')"
        @inputNotActive="$emit('minInputNotActive')"
      />
      <RangeInput
        class="main-range__input"
        :title="'to'"
        :inputType="'number'"
        :inputValue="maxValue"
        @updateValue="updateMaxVal"
        :isInputActive="isInputActive.max"
        @inputActive="$emit('maxInputActive')"
        @inputNotActive="$emit('maxInputNotActive')"
      />
    </div>
  </div>
</template>

<script>
import RangeInput from "@/components/UI/RangeInput.vue";

export default {
  name: "MainRange",
  components: {
    RangeInput,
  },
  props: {
    title: String,
    minValue: String,
    maxValue: String,
    isInputActive: Object,
  },
  methods: {
    updateMinVal(value) {
      this.$emit("updateMinValue", value);
    },
    updateMaxVal(value) {
      this.$emit("updateMaxValue", value);
    },
  },
};
</script>

<style lang="scss">
.main-range {
  position: relative;
  text-align: center;
}

.main-range__title {
  @include center-element;
  position: absolute;
  top: -16px;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
}

.main-range__container {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;

  &::after {
    @include center-element;
    content: "";
    width: 7px;
    height: 2px;
    background-color: $color-black;
  }
}

.main-range__input {
  width: 45%;
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .main-range__title {
    font-size: 19px;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-range__container {
    flex-direction: column;
    align-items: center;
    width: 100%;

    &::after {
      width: 0;
      height: 0;
    }
  }

  .main-range__title {
    font-size: 20px;
  }

  .main-range__input {
    width: 100%;
  }

  .main-range__input:not(:last-child) {
    margin-bottom: 5px;
  }
}
</style>
