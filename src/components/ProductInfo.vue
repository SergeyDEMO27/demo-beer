<template>
  <div>
    <h3>{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  props: {
    title: String,
  },
};
</script>

<style></style>
