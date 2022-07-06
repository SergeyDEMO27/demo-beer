<template>
  <div
    class="preview-item"
    :style="{
      backgroundImage: `url(${require(`@/assets/images/icons/preview/${pathName}.png`)})`,
    }"
  ></div>
</template>

<script>
export default {
  name: "PreviewItem",
  props: {
    pathName: String,
  },
};
</script>

<style lang="scss">
.preview-item {
  width: 130px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
