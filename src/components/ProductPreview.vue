<template>
  <section class="product-preview">
    <div class="product-preview__container">
      <h1 class="product-preview__title">
        <div>
          <span class="product-preview__title-number">#{{ oneBeer.id }}</span>
          {{ oneBeer.name }}
        </div>
        <span class="product-preview__title-date">{{
          oneBeer.first_brewed
        }}</span>
      </h1>
      <div class="product-preview__tagcontainer">
        <p class="product-preview__tag" v-if="oneBeer.tagline">
          {{ oneBeer.tagline }}
        </p>
        <ul class="product-preview__abv">
          <li v-if="oneBeer.abv">
            <span>abv</span>
            <span>{{ oneBeer.abv }}%</span>
          </li>
          <li v-if="oneBeer.ibu">
            <span>ibu</span>
            <span>{{ oneBeer.ibu }}</span>
          </li>
          <li v-if="oneBeer.target_og">
            <span>og</span>
            <span>{{ oneBeer.target_og }}</span>
          </li>
        </ul>
      </div>
      <div class="product-preview__wrapper">
        <div class="product-preview__infocontainer">
          <div class="product-preview__info" v-if="oneBeer.description">
            <h3 class="product-preview__info-title">The beer is</h3>
            <div class="product-preview__description">
              <p class="product-preview__description-beer">
                {{ oneBeer.description }}
              </p>
            </div>
          </div>
          <div class="product-preview__info">
            <h3 class="product-preview__info-title">Basics</h3>
            <div class="product-preview__description">
              <ul class="product-preview__base">
                <li v-if="oneBeer.volumeValue">
                  <span class="product-preview__base-title">Volume</span>
                  <span>{{ oneBeer.volumeValue }}L</span>
                </li>
                <li v-if="oneBeer.boilValue">
                  <span class="product-preview__base-title">Boil volume</span>
                  <span>{{ oneBeer.boilValue }}L</span>
                </li>
                <li v-if="oneBeer.abv">
                  <span class="product-preview__base-title">Abv</span>
                  <span>{{ oneBeer.abv }}%</span>
                </li>
                <li v-if="oneBeer.targetFg">
                  <span class="product-preview__base-title">Target fg</span>
                  <span>{{ oneBeer.targetFg }}</span>
                </li>
                <li v-if="oneBeer.targetOg">
                  <span class="product-preview__base-title">Target og</span>
                  <span>{{ oneBeer.targetOg }}</span>
                </li>
                <li v-if="oneBeer.ebc">
                  <span class="product-preview__base-title">Ebc</span>
                  <span>{{ oneBeer.ebc }}</span>
                </li>
                <li v-if="oneBeer.srm">
                  <span class="product-preview__base-title">Srm</span>
                  <span>{{ oneBeer.srm }}</span>
                </li>
                <li v-if="oneBeer.ph">
                  <span class="product-preview__base-title">Ph</span>
                  <span>{{ oneBeer.ph }}</span>
                </li>
                <li v-if="oneBeer.attenuationLevel">
                  <span class="product-preview__base-title"
                    >Attenuation level</span
                  >
                  <span>{{ oneBeer.attenuationLevel }}%</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="product-preview__info">
              <h3 class="product-preview__info-title">Method/Timings</h3>
              <div class="product-preview__description">
                <ul class="product-preview__base">
                  <li
                    class="product-preview__item--mash product-preview__item--padding"
                  >
                    <h3
                      class="product-preview__category product-preview__category--icon product-preview__category--mash"
                    >
                      Mash temp
                    </h3>
                    <p>
                      <span>{{ oneBeer.mashTempF }}℉</span>
                      <span>{{ oneBeer.mashTemp }}℃</span>
                      <span>{{ oneBeer.mashDur }}min</span>
                    </p>
                  </li>
                  <li
                    class="product-preview__item--fer product-preview__item--padding"
                  >
                    <h3
                      class="product-preview__category product-preview__category--icon product-preview__category--ferm"
                    >
                      Fermentation
                    </h3>
                    <p>
                      <span>{{ oneBeer.fermentValueF }}℉</span>
                      <span>{{ oneBeer.fermentValue }}℃</span>
                      <span></span>
                    </p>
                  </li>
                  <li
                    class="product-preview__item--twist product-preview__item--padding"
                    v-if="oneBeer.twist"
                  >
                    <h3
                      class="product-preview__category product-preview__category--icon product-preview__category--twist"
                    >
                      Twist
                    </h3>

                    <span>{{ oneBeer.twist }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="product-preview__infocontainer">
          <div class="product-preview__info">
            <h3 class="product-preview__info-title">INGREDIENTS</h3>
            <div class="product-preview__description">
              <h3
                class="product-preview__category product-preview__category--icon product-preview__category--malt"
                v-if="oneBeer.malt"
              >
                Malt
              </h3>
              <ul class="product-preview__base" v-if="oneBeer.malt">
                <li
                  class="product-preview__item-ing"
                  v-for="item in oneBeer.malt"
                  :key="item"
                >
                  <span class="product-preview__base-title">{{
                    item.name
                  }}</span>
                  <span>{{ item.amount.value }} kg</span>
                </li>
              </ul>
              <h3
                class="product-preview__category product-preview__category--icon product-preview__category--hops"
                v-if="oneBeer.hops"
              >
                Hops
              </h3>
              <ul class="product-preview__base" v-if="oneBeer.hops">
                <li
                  class="product-preview__item-ing"
                  v-for="item in oneBeer.hops"
                  :key="item"
                >
                  <span class="product-preview__base-title">{{
                    item.name
                  }}</span>
                  <span>{{ item.amount.value }} G</span>
                  <span>{{ item.add }}</span>
                  <span>{{ item.attribute }}</span>
                </li>
              </ul>
              <h3
                class="product-preview__category product-preview__category--icon product-preview__category--yeast"
                v-if="oneBeer.yeast"
              >
                Yeast
              </h3>
              <p class="product-preview__yeast" v-if="oneBeer.yeast">
                {{ oneBeer.yeast }}
              </p>
            </div>
          </div>
          <div class="product-preview__info" v-if="oneBeer.foodPairing">
            <h3 class="product-preview__info-title">Food</h3>
            <div class="product-preview__description">
              <ul class="product-preview__base product-preview__base--food">
                <li v-for="food in oneBeer.foodPairing" :key="food">
                  {{ food }}
                </li>
              </ul>
            </div>
          </div>
          <div class="product-preview__info" v-if="oneBeer.brewersTips">
            <h3 class="product-preview__info-title">BREWER'S TIP</h3>
            <div class="product-preview__description">
              <p class="product-preview__base--tip">
                {{ oneBeer.brewersTips }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="product-preview__infocontainer product-preview__infocontainer--picture"
        >
          <div class="product-preview__info" v-if="oneBeer.brewersTips">
            <h3 class="product-preview__info-title">Buy BEER MAKING KIT</h3>
            <div
              class="product-preview__description product-preview__description--link"
            >
              <a
                class="product-preview__link"
                href="https://brooklynbrewshop.com/collections/beer-making-kits"
              >
                <img src="@/assets/images/icons/bbs-logo.png" alt="bbs" />
              </a>
            </div>
          </div>
          <div class="product-preview__info">
            <h3 class="product-preview__info-title">PACKAGING</h3>
            <div
              class="product-preview__description product-preview__description--image"
            >
              <div class="product-preview__picture">
                <img
                  :src="oneBeer.image_url"
                  :alt="oneBeer.name"
                  v-if="oneBeer.image_url"
                />
                <img
                  :src="
                    require(`@/assets/images/content/${'default-item'}.png`)
                  "
                  :alt="oneBeer.name"
                  v-else
                />
              </div>
            </div>
          </div>
          <div class="product-preview__info" v-if="oneBeer.contributedBy">
            <h3 class="product-preview__info-title">Contributed by</h3>
            <div
              class="product-preview__description product-preview__description-contr"
            >
              <p>{{ oneBeer.contributedBy }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import ProductInfo from "@/components/ProductInfo";

export default {
  name: "ProductPreview",
  components: {},
  methods: {
    ...mapActions({
      getOneBeer: "allBeers/getOneBeer",
    }),
  },
  computed: {
    ...mapState({
      oneBeer: (state) => state.allBeers.oneBeer,
    }),
  },
  mounted() {
    this.getOneBeer({ beerId: this.$route.params.id });
  },
};
</script>

<style lang="scss">
.product-preview {
  width: 100%;
  background-image: url("@/assets/images/bg/bg-brick-gray.jpg");
}

.product-preview__container {
  @include default-container;
  padding-top: 120px;
}

.product-preview__title {
  @include main-description;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 54px;
  color: $color-black;
  text-align: center;

  &-number {
    font-weight: normal;
    font-size: 54px;
    color: $color-light-blue;
  }

  &-date {
    margin-left: 20px;
    font-weight: normal;
    font-size: 48px;
    color: $color-gray;
  }
}

.product-preview__tagcontainer {
  position: relative;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  margin-bottom: 30px;

  &::before,
  &::after {
    position: absolute;
    top: -15px;
    left: 0;
    content: "";
    width: 100%;
    height: 10px;
    background-color: $color-black;
  }

  &::after {
    top: unset;
    bottom: -15px;
  }
}

.product-preview__tag {
  @include main-description;
  font-size: 34px;
  color: $color-black;
}

.product-preview__abv {
  @include reset-list;
  @include main-description;
  display: flex;
  color: $color-black;
  font-size: 20px;
  text-transform: uppercase;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    span:first-child {
      font-weight: bold;
    }

    &::before {
      position: absolute;
      top: 0;
      left: -4px;
      content: "";
      width: 4px;
      height: 47px;
      background-color: $color-black;
    }
  }
}

.product-preview__wrapper {
  display: flex;
  justify-content: space-between;
}

.product-preview__infocontainer {
  width: 30%;
}

.product-preview__info {
  margin-bottom: 20px;
}

.product-preview__info-title {
  margin-bottom: 10px;
  text-transform: uppercase;
}

.product-preview__description {
  padding: 15px 20px;
  font-size: 18px;
  color: $color-dark-gray;
  background-color: $color-light-gray;
  border-top: 4px solid $color-black;
  box-shadow: 4px 4px 8px 0px rgb(34 60 80 / 20%);
  text-transform: uppercase;
  text-align: left;

  &-beer,
  &-contr {
    text-align: center;
  }

  &--image {
    padding: 0;
  }

  &--link {
    width: 100%;
    min-height: 81px;
    padding: 0;
  }
}

.product-preview__link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 81px;
  padding: 15px 20px;

  img {
    @include default-transition;
    width: 88px;
    height: 29px;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
}

.product-preview__base {
  @include reset-list;

  .product-preview__item--padding {
    display: block;

    p {
      display: flex;
      justify-content: space-between;

      span {
        width: 33%;

        &:nth-child(2) {
          text-align: center;
        }

        &:last-child {
          text-align: right;
        }
      }
    }
  }

  .product-preview__item-ing {
    span {
      width: 20%;

      &:first-child {
        text-align: left;
      }

      &:last-child {
        text-align: right;
      }
    }
  }

  li {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;

    .product-preview__base-title {
      width: 40%;
      color: $color-black;
      font-weight: bold;
      text-align: left;
    }

    &::after {
      position: absolute;
      left: 0;
      bottom: -10px;
      content: "";
      width: 100%;
      height: 1px;
      background-color: $color-black;
    }
  }

  &--food,
  &--tip {
    position: relative;
    padding-top: 50px;

    li {
      color: $color-black;
    }

    &::after {
      position: absolute;
      top: -5px;
      left: 0;
      content: "";
      width: 45px;
      height: 45px;
      background-image: url("@/assets/images/icons/icon-food-pairing.png");
      background-size: cover;
    }
  }

  &--tip {
    text-align: center;

    &::after {
      background-image: url("@/assets/images/icons/icon-tip.png");
    }
  }
}

.product-preview__item {
  position: relative;

  &--twist {
    text-align: center;
  }
}

.product-preview__category {
  font-size: 20px;
  color: $color-black;
  margin-bottom: 20px;
  margin-left: 55px;

  &--icon {
    position: relative;
    padding-top: 10px;

    &::before {
      position: absolute;
      top: -1px;
      left: -55px;
      content: "";
      width: 45px;
      height: 45px;
      background-size: cover;
    }
  }

  &--mash {
    margin-bottom: 20px;

    &::before {
      background-image: url("@/assets/images/icons/icon-mash.png");
    }
  }

  &--ferm {
    margin-bottom: 20px;

    &::before {
      background-image: url("@/assets/images/icons/icon-fermetation.png");
    }
  }

  &--twist {
    margin-bottom: 20px;
    text-align: left;

    &::before {
      background-image: url("@/assets/images/icons/icon-twist.png");
    }
  }

  &--malt {
    &::before {
      background-image: url("@/assets/images/icons/icon-malt.png");
    }
  }

  &--hops {
    &::before {
      background-image: url("@/assets/images/icons/icon-hops.png");
    }
  }

  &--yeast {
    &::before {
      background-image: url("@/assets/images/icons/icon-yeast.png");
    }
  }
}

.product-preview__yeast {
  position: relative;
  margin-bottom: 20px;
  color: $color-black;
  text-align: center;

  &::after {
    position: absolute;
    left: 0;
    bottom: -10px;
    content: "";
    width: 100%;
    height: 1px;
    background-color: $color-black;
  }
}

.product-preview__base--food {
  li {
    text-align: left;
  }
}

.product-preview__picture {
  width: 100%;
  max-height: 800px;
  padding: 20px;
  background-image: url("@/assets/images/bg/bg-brick-white.jpg");
  background-size: cover;
  text-align: center;

  img {
    width: 55%;
    max-height: 800px;
  }
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .product-preview__description {
    font-size: 16px;
  }

  .product-preview__base {
    .product-preview__item-ing {
      span {
        width: 23%;
      }

      .product-preview__base-title {
        width: 43%;
      }
    }
  }

  .product-preview__category {
    font-size: 19px;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .product-preview__title {
    flex-direction: column;
    font-size: 50px;

    &-number {
      font-size: 46px;
    }

    &-date {
      font-size: 36px;
    }
  }

  .product-preview__tagcontainer {
    flex-direction: column;
    align-items: center;
    text-align: center;

    .product-preview__tag {
      margin-bottom: 5px;
      font-size: 32px;
    }
  }

  .product-preview__wrapper {
    flex-direction: column;
    align-items: center;
  }

  .product-preview__infocontainer {
    max-width: 400px;
    width: 100%;
  }

  .product-preview__base {
    .product-preview__item-ing {
      span {
        width: 23%;
      }

      .product-preview__base-title {
        width: 43%;
      }
    }
  }

  .product-preview__category {
    font-size: 19px;
  }

  .product-preview__infocontainer {
    &--picture {
      order: -3;
    }
  }
}
</style>
