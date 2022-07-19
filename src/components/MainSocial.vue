<template>
  <div class="main-social">
    <ul
      class="main-social__list"
      :class="{ 'main-social__list--top': isTopHeader }"
    >
      <li class="main-social__item">
        <a
          class="main-social__link"
          aria-label="telegram"
          href="https://t.me/barialibasov"
        >
          <svg
            class="main-social__icon"
            width="22"
            height="24"
            viewBox="0 0 22 24"
          >
            <use :href="`${sprite}#icon-telegram`"></use>
          </svg>
          <span>telegram</span></a
        >
      </li>
      <li class="main-social__item">
        <a
          class="main-social__link"
          aria-label="github"
          href="https://github.com/edji777"
        >
          <svg
            class="main-social__icon"
            width="25"
            height="25"
            viewBox="0 0 20 20"
          >
            <use :href="`${sprite}#icon-github`"></use>
          </svg>
          <span>github</span></a
        >
      </li>
      <li class="main-social__item">
        <a
          class="main-social__link"
          aria-label="email"
          href="mailto: demo27@vk.com"
        >
          <svg
            class="main-social__icon"
            width="24"
            height="25"
            viewBox="0 0 474 474"
          >
            <use :href="`${sprite}#icon-mail`"></use>
          </svg>
          <span>email</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import sprite from "@/assets/images/sprite/sprite.svg";

export default {
  name: "MainSocial",
  props: {
    isTopHeader: Boolean,
  },
  setup() {
    return {
      sprite,
    };
  },
};
</script>

<style lang="scss">
.main-social {
  width: 100%;
}

.main-social__list {
  @include reset-list;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--top {
    .main-social__item {
      .main-social__link {
        svg {
          fill: $color-black;
        }
      }
    }
  }
}

.main-social__item {
  svg {
    @include default-transition;
    fill: $color-white;
  }

  span {
    @include visually-hidden;
  }

  &:hover {
    svg {
      fill: $color-light-blue;
    }
  }
}
</style>
