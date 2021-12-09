"use strict";
import { createStore } from "vuex";

import shop from "@/store/modules/shop";
import cart from "@/store/modules/cart";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    shop,
    cart,
  },
});
