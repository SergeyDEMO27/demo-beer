<template>
  <section class="product-preview">
    <div class="product-preview__container">
      <p>#{{ oneBeer.id }} {{ oneBeer.first_brewed }}</p>
      <h1>{{ oneBeer.name }}</h1>
      <p>
        {{ oneBeer.tagline }} abv{{ oneBeer.abv }} ibu{{ oneBeer.ibu }} og{{
          oneBeer.target_og
        }}
      </p>
      <div>
        <ProductInfo :title="'The beer is'">
          {{ oneBeer.description }}
        </ProductInfo>
        <div>
          <h3>Basics</h3>
          <ul>
            <!-- <li>Volume {{ oneBeer.volume.value }}L</li> -->
            <!-- <li>Boil volume {{ oneBeer.boil_volume.value }}L</li> -->
            <li>Abv {{ oneBeer.abv }}%</li>
            <li>Target fg {{ oneBeer.target_fg }}</li>
            <li>Target og {{ oneBeer.target_og }}</li>
            <li>Ebc {{ oneBeer.ebc }}</li>
            <li>Srm {{ oneBeer.srm }}</li>
            <li>Ph {{ oneBeer.ph }}</li>
            <li>Attenuation level {{ oneBeer.attenuation_level }}</li>
          </ul>
        </div>
        <div>
          <div>
            <h3>METHOD/TIMINGS</h3>
            <ul>
              <li>
                MASH TEMP
                <!-- {{ oneBeer.method.mash_temp.temp.value }} -->
                <!-- {{ oneBeer.method.mash_temp.temp.unit }}
              {{ oneBeer.method.mash_temp.duration }} -->
              </li>
            </ul>
          </div>
          <div>
            <h3>FERMENTATION</h3>
            <ul>
              <li>
                FER
                <!-- {{ oneBeer.method.fermentation.temp.value }}
                {{ oneBeer.method.fermentation.temp.unit }} -->
              </li>
            </ul>
          </div>
          <div>
            <h3>TWIST</h3>
            <ul>
              <li>
                TW
                <!-- {{ oneBeer.method.twist }} -->
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>INGREDIENTS</h3>
          <h3>Malt</h3>
          <ul>
            <li>
              <!-- {{ oneBeer.ingredients.malt.name }}
              {{ oneBeer.ingredients.malt.amount.value }} -->
            </li>
          </ul>
          <h3>Hops</h3>
          <ul>
            <li>
              <!-- {{ oneBeer.ingredients.malt.name }}
              {{ oneBeer.ingredients.malt.amount.value }} -->
            </li>
          </ul>
        </div>
        <div>
          <h3>Food</h3>
          <ul>
            <li v-for="food in oneBeer.food_pairing" :key="food">{{ food }}</li>
          </ul>
        </div>
        <div>
          <h3>BREWER'S TIP</h3>
          <p>{{ oneBeer.brewers_tips }}</p>
        </div>
        <div>
          <h3>Contributed by</h3>
          <p>{{ oneBeer.contributed_by }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductInfo from "@/components/ProductInfo";

export default {
  name: "ProductPreview",
  components: {
    ProductInfo,
  },
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
.product-preview__container {
  @include default-container;
}
</style>
