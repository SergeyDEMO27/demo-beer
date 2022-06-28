import { createStore } from "vuex";
import allBeersModule from "@/store/allBeersModule";

export default createStore({
  modules: {
    allBeers: allBeersModule,
  },
});
