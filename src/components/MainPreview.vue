<template>
  <div class="main-preview">
    <div class="main-preview__container">
      <PreviewElement
        class="main-preview__item"
        :class="`main-preview__item--${n}`"
        :pathName="`beer${n}`"
        :pathId="n"
        v-for="n in 19"
        :key="n"
      />
      <!-- <div id="animate0" class="main-preview__item main-preview__item--0"></div> -->
      <!-- <div class="main-preview__item main-preview__item--1"></div>
      <div class="main-preview__item main-preview__item--2"></div>
      <div class="main-preview__item main-preview__item--3"></div>
      <div class="main-preview__item main-preview__item--4"></div> -->
    </div>
    <!-- <PreviewItem
      id="animateFish1"
      :pathName="'fish1'"
      class="main-preview__fish"
    />
    <PreviewItem
      id="animateFish2"
      :pathName="'fish2'"
      class="main-preview__fish main-preview__fish--2"
    /> -->
    <!-- <div class="bubble x1"></div> -->
    <!-- <MainBubbles /> -->
    <SecondaryBubbles />
  </div>
</template>

<script>
// import PreviewItem from "@/components/PreviewItem.vue";
import PreviewElement from "@/components/PreviewElement.vue";
// import MainBubbles from "@/components/MainBubbles.vue";
import SecondaryBubbles from "@/components/SecondaryBubbles.vue";

export default {
  name: "MainPreview",
  components: {
    // PreviewItem,
    PreviewElement,
    // MainBubbles,
    SecondaryBubbles,
  },
  mounted() {
    document.querySelector("#animateFish1").animate(
      [
        // keyframes
        { transform: "translatey(0px)" },
        {
          transform: "translatey(40px) translatex(120vw)",
        },
      ],
      {
        // timing options
        duration: 40000,
        iterations: Infinity,
      }
    );

    document.querySelector("#animateFish2").animate(
      [
        // keyframes
        { transform: "translatey(0px)" },
        {
          transform: "translatey(-40px) translatex(-120vw)",
        },
      ],
      {
        // timing options
        duration: 30000,
        iterations: Infinity,
      }
    );
  },
};
</script>

<style lang="scss">
.main-preview {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(270deg, #4cdfe1, #f9dd40);
  background-size: 400% 400%;
  animation: backGradient 19s ease infinite;
  overflow: hidden;
}

.main-preview__fish {
  position: absolute;
  top: 10vh;
  left: -20vw;
  transform: scalex(-1);

  &--2 {
    top: unset;
    right: -20vw;
    bottom: 10vh;
    left: unset;
  }
}

.main-preview__container {
  @include default-container;
  position: relative;
  height: 100vh;
}

.main-preview__item {
  position: absolute;
  top: 10vh;
  left: 0;
  // animation: float0 random(6) + 6 + s infinite;

  &--1 {
    display: none;
    top: 20vh;
    left: unset;
    right: 5vw;
  }

  &--2 {
    top: 69vh;
    left: unset;
    right: -6vw;
    width: 70px;
    height: 125px;
  }

  &--3 {
    top: 10vh;
    left: -8vw;
    width: 85px;
    height: 175px;
  }

  &--4 {
    top: 75vh;
    left: -4vw;

    width: 67px;
    height: 160px;
  }

  &--5 {
    top: 38vh;
    left: 2vw;
    width: 70px;
    height: 125px;
  }

  &--6 {
    display: none;
    top: 72vh;
    left: 0;
  }

  &--7 {
    display: none;
    top: 0;
    left: 17vw;
    width: 55px;
  }

  &--8 {
    display: none;
    top: 85vh;
    left: 26vw;
  }

  &--9 {
    top: 5vh;
    left: unset;
    right: 0;
    width: 65px;
    height: 145px;
  }

  &--10 {
    display: none;
    top: 50vh;
    left: 60vw;
    width: 80px;
  }

  &--11 {
    display: none;
    top: 15vh;
    left: 0vw;
    width: 70px;
  }

  &--12 {
    display: none;
    top: 10vh;
    left: 42vw;
    width: 80px;
  }

  &--13 {
    top: 50vh;
    left: unset;
    right: 5vw;
    width: 65px;
    height: 145px;
  }

  &--14 {
    top: 65vh;
    left: unset;
    right: 18vw;
    width: 85px;
    height: 65px;
  }

  &--15 {
    top: 80vh;
    left: unset;
    right: 30vw;
    width: 52px;
    height: 80px;
  }

  &--16 {
    top: 3vh;
    left: unset;
    right: 32vw;
    width: 60px;
    height: 100px;
  }

  &--17 {
    top: 9vh;
    left: unset;
    right: 14vw;
    width: 90px;
    height: 47px;
  }

  &--18 {
    top: 9vh;
    left: 10vw;
    width: 90px;
    height: 85px;
  }

  &--19 {
    top: 75vh;
    left: 15vw;
    width: 52px;
    height: 35px;
  }
}

// @keyframes animateBubble {
//   0% {
//     transform: translatey(0px);
//   }
//   100% {
//     transform: translatey(-100vh);
//   }
// }

// @keyframes sideWays {
//   0% {
//     margin-left: 0px;
//   }
//   100% {
//     margin-left: -50px;
//   }
// }

// .x1 {
//   animation: animateBubble 15s linear infinite,
//     sideWays 2s ease-in-out infinite alternate;
//   bottom: 0;
//   left: 5%;
//   transform: scale(0.6);
// }

// .bubble {
//   position: absolute;
//   height: 20px;
//   width: 20px;
//   border-radius: 50%;
//   background-color: rgba(
//     random(255),
//     random(255),
//     random(255),
//     (random(70) + 30) / 100
//   );
// }

@keyframes backGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
