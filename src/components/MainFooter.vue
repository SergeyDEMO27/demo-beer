<template>
  <div class="main-footer">
    <div class="main-footer__container">
      <p class="main-footer__copyright">
        © Made by
        <span class="main-footer__developer">Sergey Lutsenko</span> with
        <a class="main-footer__link" href="https://punkapi.com">punk api</a>
        2022
      </p>
      <MainSocial class="main-footer__social" />
    </div>
  </div>
</template>

<script>
import MainSocial from "@/components/MainSocial.vue";

export default {
  name: "MainFooter",
  components: {
    MainSocial,
  },
};
</script>

<style lang="scss">
.main-footer {
  width: 100%;
  background-color: $color-black;
  border-top: 1px solid $color-orange;
}

.main-footer__container {
  @include default-container;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-footer__copyright {
  @include main-title;
  margin-right: 30px;
  font-size: 18px;
  color: $color-white;
}

.main-footer__developer {
  @include main-title;
  font-size: 18px;
  color: $color-light-blue;
}

.main-footer__link {
  @include main-description;
  @include default-transition;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  color: $color-light-blue;
  text-decoration: none;
  text-transform: uppercase;

  &::after {
    @include default-transition;
    position: absolute;
    bottom: -5px;
    left: 0;
    content: "";
    width: 0;
    height: 2px;
    background-color: $color-light-blue;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
}

.main-footer__social {
  max-width: 90px;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-footer__container {
    flex-direction: column;
  }

  .main-footer__copyright,
  .main-footer__copyright,
  .main-footer__link {
    font-size: 16px;
  }

  .main-footer__copyright {
    margin-right: 0;
    text-align: center;
  }

  .main-footer__social {
    margin-bottom: 5px;
    order: -1;
  }
}
</style>
