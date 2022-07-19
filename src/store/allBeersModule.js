import axios from "axios";
import beerParser from "@/parsers/beerParser";
import oneBeerParser from "@/parsers/oneBeerParser";

export default {
  state: () => ({
    allBeers: [],
    namedBeer: [],
    foodBeers: [],
    randomBeer: {},
    oneBeer: {},
    isLoading: false,
    oneBeerError: false,
    page: 0,
    perPage: 10,
  }),

  getters: {},

  mutations: {
    setAllBeers(state, { beers, isNewReq }) {
      state.allBeers = !isNewReq ? beers : [...state.allBeers, ...beers];
    },

    setNamedBeer(state, { beer }) {
      state.namedBeer = [...beer];
    },

    setFoodsBeers(state, { beer }) {
      state.foodBeers = [...beer];
    },

    setRandomBeer(state, beer) {
      state.randomBeer = beer;
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

    resetError(state) {
      state.oneBeerError = false;
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

    async getNamedBeer({ commit }, { beerParams }) {
      const response = await axios.get("https://api.punkapi.com/v2/beers", {
        params: {
          ...beerParams,
        },
      });

      commit("setNamedBeer", { beer: beerParser(response.data) });
    },

    async getFoodsBeers({ commit }, { beerParams }) {
      const response = await axios.get("https://api.punkapi.com/v2/beers", {
        params: {
          ...beerParams,
        },
      });

      commit("setFoodsBeers", { beer: beerParser(response.data) });
    },

    async getRandomBeer({ commit }) {
      const response = await axios.get(
        "https://api.punkapi.com/v2/beers/random"
      );

      commit("setRandomBeer", oneBeerParser(response.data));
    },

    async getOneBeer({ commit, state }, { beerId }) {
      state.isLoading = true;
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers/${beerId}`
        );

        commit("setOneBeer", oneBeerParser(response.data));
      } catch (error) {
        state.oneBeerError = true;
      }
      state.isLoading = false;
    },
  },

  namespaced: true,
};
