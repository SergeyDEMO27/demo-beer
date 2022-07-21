import { createStore } from "vuex";
import allBeersModule from "@/store/allBeersModule";
import headerModule from "@/store/headerModule";

export default createStore({
  modules: {
    allBeers: allBeersModule,
    headerModule: headerModule,
  },
});
