<template>
  <input
    type="search"
    :value="search"
    @input="(event) => $emit('update:search', event.target.value)"
  />
</template>

<script>
export default {
  name: "MainInput",
  props: {
    search: [String, Number],
  },
};
</script>

<style></style>
