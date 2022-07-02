import axios from "axios";
import beerParser from "@/parsers/beerParser";
import oneBeerParser from "@/parsers/oneBeerParser";

export default {
  state: () => ({
    allBeers: [],
    oneBeer: {},
    page: 0,
    perPage: 10,
  }),

  getters: {},

  mutations: {
    setAllBeers(state, { beers, isNewReq }) {
      state.allBeers = !isNewReq ? beers : [...state.allBeers, ...beers];
    },

    setOneBeer(state, beer) {
      state.oneBeer = beer;
    },

    increasePage(state) {
      state.page = state.page + 1;
    },

    resetPage(state) {
      state.page = 1;
    },
  },

  actions: {
    async getSearchBeer({ commit, state }, { beerParams, isNewReq }) {
      const customParams = Object.keys(beerParams).reduce((acc, param) => {
        if (beerParams[param]) {
          acc[param] = beerParams[param];
        }
        return acc;
      }, {});

      const response = await axios.get("https://api.punkapi.com/v2/beers", {
        params: {
          ...customParams,
          ...{ page: state.page, per_page: state.perPage },
        },
      });

      commit("setAllBeers", { beers: beerParser(response.data), isNewReq });
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
