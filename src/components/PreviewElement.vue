<template>
  <div
    :id="`animate${pathId}`"
    class="preview-element"
    :style="{
      backgroundImage: `url(${require(`@/assets/images/icons/preview/${pathName}.png`)})`,
    }"
  ></div>
</template>

<script>
export default {
  name: "PreviewElement",
  props: {
    pathName: String,
    pathId: Number,
  },

  mounted() {
    document.querySelector(`#animate${this.pathId}`).animate(
      [
        { transform: "translatey(0px)" },
        {
          transform: `translatey(${Math.round(
            Math.random() * (120 - 40) + 40
          )}px) translatex(5px)`,
        },
        { transform: "translatey(0px)" },
      ],
      {
        duration: Math.random() * (10000 - 4000) + 4000,
        iterations: Infinity,
      }
    );
  },
};
</script>

<style lang="scss">
.preview-element {
  width: 130px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
