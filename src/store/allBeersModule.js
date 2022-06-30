import axios from "axios";
import beerParser from "@/parsers/beerParser";
import oneBeerParser from "@/parsers/oneBeerParser";

export default {
  state: () => ({
    allBeers: [],
    oneBeer: {},
  }),
  getters: {},
  mutations: {
    setAllBeers(state, beers) {
      state.allBeers = beers;
    },
    setOneBeer(state, beer) {
      state.oneBeer = beer;
    },
  },
  actions: {
    async getAllBeers({ commit }) {
      const response = await axios.get("https://api.punkapi.com/v2/beers", {
        params: {
          page: 1,
          per_page: 10,
        },
      });
      commit("setAllBeers", beerParser(response.data));
    },
    async getSearchBeer({ commit }, { beerParams }) {
      const customParams = Object.keys(beerParams).reduce((acc, param) => {
        if (beerParams[param]) {
          acc[param] = beerParams[param];
        }
        return acc;
      }, {});
      const response = await axios.get("https://api.punkapi.com/v2/beers", {
        params: customParams,
      });
      commit("setAllBeers", beerParser(response.data));
    },
    async getOneBeer({ commit }, { beerId }) {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers/${beerId}`
      );
      commit("setOneBeer", oneBeerParser(response.data));
    },
  },
  namespaced: true,
};
