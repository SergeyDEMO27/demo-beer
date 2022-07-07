<template>
  <div class="secondary-bubbles">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
    <div class="bubble x11"></div>
    <div class="bubble x12"></div>
    <div class="bubble x13"></div>
    <div class="bubble x14"></div>
    <div class="bubble x15"></div>
    <div class="bubble x16"></div>
    <div class="bubble x17"></div>
    <div class="bubble x18"></div>
    <div class="bubble x19"></div>
    <div class="bubble x20"></div>
  </div>
</template>

<script>
export default {
  name: "SecondaryBubbles",
};
</script>

<style lang="scss">
@keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

/* ANIMATIONS */

.x1 {
  -webkit-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 0;
  top: 5%;
  transform: scale(0.6);
  background-color: lightblue;
}

.x2 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 5%;
  top: 80%;
  transform: scale(0.4);
  background-color: lightcoral;
}

.x3 {
  -webkit-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 10%;
  top: 40%;
  transform: scale(0.7);

  background-color: lightcyan;
}

.x4 {
  -webkit-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 20%;
  top: 0;

  transform: scale(0.3);
  background-color: violet;
  opacity: 80%;
}

.x5 {
  -webkit-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 30%;
  top: 50%;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
  background-color: green;
  opacity: 80%;
}

.x6 {
  -webkit-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 50%;
  top: 0;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  background-color: red;
  opacity: 80%;
}

.x7 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 65%;
  top: 70%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
  background-color: yellow;
  opacity: 80%;
}

.x8 {
  -webkit-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 80%;
  top: 10%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
  background-color: pink;
  opacity: 80%;
}

.x9 {
  -webkit-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 90%;
  top: 50%;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);

  background-color: lightsalmon;
}

.x10 {
  -webkit-animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 80%;
  top: 80%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);

  background-color: red;
  opacity: 60%;
}

.x11 {
  animation: animateBubble 24s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation-delay: 7s;

  left: 3%;
  transform: scale(0.6);
  background-color: white;
  opacity: 50%;
}

.x11 {
  animation: animateBubble 27s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation-delay: 5s;

  left: 7%;
  transform: scale(0.8);
  background-color: red;
  opacity: 60%;
}

.x12 {
  animation: animateBubble 24s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation-delay: 9s;

  left: 97%;
  transform: scale(0.8);
  background-color: red;
  opacity: 60%;
}

.x13 {
  animation: animateBubble 25s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation-delay: 3s;

  left: 92%;
  transform: scale(0.5);
  background-color: greenyellow;
  opacity: 70%;
}

.x14 {
  animation: animateBubble 22s linear infinite,
    sideWays 6s ease-in-out infinite alternate;
  animation-delay: 6s;

  left: 87%;
  transform: scale(0.4);
  background-color: lightskyblue;
}

.x15 {
  animation: animateBubble 25s linear infinite,
    sideWays 7s ease-in-out infinite alternate;
  animation-delay: 12s;

  left: 82%;
  transform: scale(0.7);
  background-color: lightgoldenrodyellow;
}

.x16 {
  animation: animateBubble 26s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation-delay: 13s;

  left: 77%;
  transform: scale(0.3);
  background-color: lightcoral;
}

.x17 {
  animation: animateBubble 23s linear infinite,
    sideWays 5s ease-in-out infinite alternate;
  animation-delay: 14s;

  left: 72%;
  transform: scale(0.8);
  background-color: lightseagreen;
}

.x18 {
  animation: animateBubble 24s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation-delay: 14s;

  left: 67%;
  transform: scale(0.5);
  background-color: pink;
}

.x19 {
  animation: animateBubble 29s linear infinite,
    sideWays 7s ease-in-out infinite alternate;
  animation-delay: 18s;

  left: 67%;
  transform: scale(0.6);
  background-color: yellow;
}

.x20 {
  animation: animateBubble 32s linear infinite,
    sideWays 8s ease-in-out infinite alternate;
  animation-delay: 18s;

  left: 62%;
  transform: scale(0.8);
  background-color: blue;
  opacity: 65%;
}

/* OBJECTS */

.bubble {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
</style>
