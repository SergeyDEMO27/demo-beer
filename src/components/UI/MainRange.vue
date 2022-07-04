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
  text-align: center;
}

.main-range__title {
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
}

.main-range__container {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.main-range__input {
  width: 45%;
}
</style>
