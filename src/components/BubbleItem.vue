<template>
  <div
    class="bubble-item"
    :style="[
      `backgroundColor: ${convertRGBtoHex(
        Math.round(Math.random() * (255 - 5) + 5),
        Math.round(Math.random() * (255 - 100) + 100),
        Math.round(Math.random() * (255 - 5) + 5)
      )}`,
      `width: ${size}px`,
      `height: ${size}px`,
    ]"
  ></div>
</template>

<script>
export default {
  name: "BubbleItem",
  components: {},
  data() {
    return {
      size: Math.round(Math.random() * (22 - 10) + 10),
    };
  },
  methods: {
    colorToHex(color) {
      var hexadecimal = color.toString(16);
      return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    },

    convertRGBtoHex(red, green, blue) {
      return (
        "#" +
        this.colorToHex(red) +
        this.colorToHex(green) +
        this.colorToHex(blue)
      );
    },
  },
};
</script>

<style lang="scss">
.bubble-item {
  position: absolute;
  //   height: 20px;
  //   width: 20px;
  animation: animateBubble 15s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  bottom: 0;
  left: 5%;
  transform: scale(0.6);
  border-radius: 50%;
  //   background-color: rgba(
  //     Math.round(Math.random() * (255 - 5) + 5),
  //     random(255),
  //     random(255),
  //     (random(70) + 30) / 100
  //   );
}

@keyframes animateBubble {
  0% {
    transform: translatey(0px);
  }
  100% {
    transform: translatey(-100vh);
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -50px;
  }
}

// .x1 {
//   animation: animateBubble 15s linear infinite,
//     sideWays 2s ease-in-out infinite alternate;
//   bottom: 0;
//   left: 5%;
//   transform: scale(0.6);
// }
</style>
