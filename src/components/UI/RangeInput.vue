<template>
  <label :for="title">{{ title }}</label>
  <input
    :id="title"
    :type="inputType"
    :value="inputValue"
    @input="(event) => this.$emit('updateValue', event.target.value)"
  />
</template>

<script>
export default {
  name: "MainInput",
  emits: ["updateValue"],
  props: {
    title: String,
    inputType: String,
    inputValue: [String, Number],
  },
};
</script>

<style></style>
