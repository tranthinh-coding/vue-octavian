"use strict";

const randomArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms),
  );
};

const cartLocal = "cart_local";

const VUE_API_SHOP_PROD = "https://raw.githubusercontent.com/tranthinh-coding/jsonserverForOctatian/main/db.json";

export { randomArray, sleep, VUE_API_SHOP_PROD, cartLocal };
