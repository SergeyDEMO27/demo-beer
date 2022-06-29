<template>
  <div class="main-range">
    <p>{{ title }}</p>
    <RangeInput
      :title="'from'"
      :inputType="'number'"
      :inputValue="minValue"
      @updateValue="updateMinVal"
    />
    <RangeInput
      :title="'to'"
      :inputType="'number'"
      :inputValue="maxValue"
      @updateValue="updateMaxVal"
    />
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

<style lang="scss"></style>
