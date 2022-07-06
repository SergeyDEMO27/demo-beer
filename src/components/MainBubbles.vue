<template>
  <div class="main-bubbles">
    <BubbleItem
      class="main-bubbles__item"
      :class="`main-bubbles__item--${n}`"
      v-for="n in 30"
      :key="n"
    />
  </div>
</template>

<script>
import BubbleItem from "@/components/BubbleItem.vue";

export default {
  name: "MainBubbles",
  components: {
    BubbleItem,
  },
};
</script>

<style lang="scss">
.main-bubbles__item {
  left: 0;
  bottom: 0;

  &--1 {
    left: 3vw;
  }

  &--2 {
    left: 6vw;
  }

  &--3 {
    left: 9vw;
  }

  &--4 {
    left: 12vw;
  }

  &--5 {
    left: 15vw;
  }

  &--6 {
    left: 18vw;
  }

  &--9 {
    left: 21vw;
  }

  &--10 {
    left: 24vw;
  }

  &--11 {
    left: 27vw;
  }

  &--12 {
    left: 30vw;
  }

  &--12 {
    left: 33vw;
  }

  &--13 {
    left: 36vw;
  }

  &--14 {
    left: 39vw;
  }
}
</style>
