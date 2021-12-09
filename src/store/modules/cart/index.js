import { cartLocal } from "@/constant/base";

const $setCartLocal = (_cart) => {
  localStorage.setItem(cartLocal, JSON.stringify(_cart));
};

const state = {
  cart: [],
};

const mutations = {
  appendCart: (state, _products) => {
    const isExist = state.cart.findIndex((prod) => prod.id === _products.id && prod.color == _products.color);
    if (isExist !== -1) {
      state.cart[isExist].quantity += _products.quantity;
    } else {
      state.cart.push(_products);
    }
    $setCartLocal(state.cart);
  },
  removeProduct: (state, _index) => {
    state.cart.splice(_index, 1);
    $setCartLocal(state.cart);
  },
};

const actions = {
  loadCartFromLocalStorage: ({ commit }) => {
    const products = JSON.parse(localStorage.getItem(cartLocal));
    if (products)
      products.forEach((el) => {
        commit("appendCart", el);
      });
  },
  addProduct: ({ commit }, _product) => {
    commit("appendCart", _product);
  },
  removeProduct: ({ commit, state }, _id) => {
    const index = state.cart.findIndex((product) => product.id == _id);
    commit("removeProduct", index);
  },
};

const getters = {
  getCart: (state) => state.cart,
  getQuantity: (state) => state.cart.length,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
