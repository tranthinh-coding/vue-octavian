import { findIndex } from "lodash";

import { products } from "@/constant/shop";
import { randomArray } from "@/constant/base";

const state = () => ({
  products,
});

const mutations = {
  loadMoreProducts: (state, products) => {
    state.products = [...state.products, ...products];
  },
};

const actions = {
  loadMoreProducts: ({ commit, getters }, count) => {
    const loadProducts = getters.getRandomProducts(count);
    commit("loadMoreProducts", loadProducts);
  },
};

const getters = {
  getAllProducts: (state) => state.products,
  getProductById: (state) => (id) => {
    const index = findIndex(state.products, (product) => {
      return parseInt(product.id) === parseInt(id);
    });
    return state.products[index] || -1;
  },
  getProductsByConditions:
    (state) =>
    (callback, count = 4) => {
      const result = state.products.filter((product) => {
        return callback(product);
      });
      count = result.length > count ? count : result.length;
      randomArray(result);
      return result.slice(0, count);
    },
  getProducts: (state) => (count) => {
    const max = count > state.products.length ? state.products.length : state.products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return state.products.slice(start, start + count);
  },
  getRandomProducts: (_, getters) => (count) => {
    const newPro = getters.getProducts(count);
    randomArray(randomArray(randomArray(randomArray(newPro))));
    return newPro;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
