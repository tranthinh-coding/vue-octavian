"use strict";
// import { findIndex } from "lodash";

// import { randomArray } from "./base.js";

const thumb0 = require(`@/assets/img/shop/thumb_1.jpg`);
const thumb1 = require(`@/assets/img/shop/thumb_2.jpg`);
const thumb2 = require(`@/assets/img/shop/thumb_3.jpg`);
const thumb3 = require(`@/assets/img/shop/thumb_4.jpg`);
const thumb4 = require(`@/assets/img/shop/thumb_5.jpg`);
const thumb5 = require(`@/assets/img/shop/thumb_6.jpg`);
const thumb6 = require(`@/assets/img/shop/thumb_7.jpg`);
const thumb7 = require(`@/assets/img/shop/thumb_8.jpg`);
const thumb8 = require(`@/assets/img/shop/thumb_9.jpg`);
const thumb9 = require(`@/assets/img/shop/thumb_10.jpg`);
const thumb10 = require(`@/assets/img/shop/thumb_11.jpg`);
const thumb11 = require(`@/assets/img/shop/thumb_12.jpg`);
const thumb12 = require(`@/assets/img/shop/thumb_13.jpg`);
const thumb13 = require(`@/assets/img/shop/thumb_14.jpg`);
const thumb14 = require(`@/assets/img/shop/thumb_15.jpg`);
const thumb15 = require(`@/assets/img/shop/thumb_16.jpg`);

const products = [
  {
    id: 0,
    title: "Áo thun Pluto",
    price: "189000",
    thumb: thumb0,
    sold: 232312,
    count: 9886,
    sale: 0,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/1_1.jpg`),
      2: require(`@/assets/img/shop/1_2.jpg`),
      3: require(`@/assets/img/shop/1_3.jpg`),
      4: require(`@/assets/img/shop/1_4.jpg`),
    },
    slug: "ao-thun-pluto",
    sizes: ["s", "m", "l", "xl", "xxl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 1,
    title: "Áo thun Amon",
    price: "159000",
    thumb: thumb1,
    sold: 3123,
    count: 56,
    sale: 43,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/2_1.jpg`),
      2: require(`@/assets/img/shop/2_2.jpg`),
      3: require(`@/assets/img/shop/2_3.jpg`),
      4: require(`@/assets/img/shop/2_4.jpg`),
    },
    slug: "ao-thun-amon",
    sizes: ["s", "m"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 2,
    title: "Áo thun Cool Summer",
    price: "190000",
    thumb: thumb2,
    sold: 423,
    count: 809,
    sale: 0,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/3_1.jpg`),
      2: require(`@/assets/img/shop/3_2.jpg`),
      3: require(`@/assets/img/shop/3_3.jpg`),
      4: require(`@/assets/img/shop/3_4.jpg`),
    },
    slug: "ao-thun-cool-summer",
    sizes: ["m"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 3,
    title: "Áo thun Dinosaur",
    price: "194000",
    thumb: thumb3,
    sold: 645,
    count: 132,
    sale: 0,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/4_1.jpg`),
      2: require(`@/assets/img/shop/4_2.jpg`),
      3: require(`@/assets/img/shop/4_3.jpg`),
      4: require(`@/assets/img/shop/4_4.jpg`),
    },
    slug: "ao-thun-dinosaur",
    sizes: ["xl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 4,
    title: "Áo thun Summer WVNA",
    price: "194000",
    thumb: thumb4,
    sold: 756,
    count: 3232,
    sale: 5,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/5_1.jpg`),
      2: require(`@/assets/img/shop/5_2.jpg`),
      3: require(`@/assets/img/shop/5_3.jpg`),
      4: require(`@/assets/img/shop/5_4.jpg`),
    },
    slug: "ao-thun-summer-wvna",
    sizes: ["xxl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 5,
    title: "Áo thun Hell Weekend",
    price: "194000",
    thumb: thumb5,
    sold: 724,
    count: 1211,
    sale: 0,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/6_1.jpg`),
      2: require(`@/assets/img/shop/6_2.jpg`),
      3: require(`@/assets/img/shop/6_3.jpg`),
      4: require(`@/assets/img/shop/6_4.jpg`),
    },
    slug: "ao-thun-weekend",
    sizes: ["s", "m", "xl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 6,
    title: "Áo thun Dinosaur love",
    price: "194000",
    thumb: thumb6,
    sold: 690,
    count: 54,
    sale: 17,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/7_1.jpg`),
      2: require(`@/assets/img/shop/7_2.jpg`),
      3: require(`@/assets/img/shop/7_3.jpg`),
      4: require(`@/assets/img/shop/7_4.jpg`),
    },
    slug: "ao-somi-dinosaur-love",
    sizes: ["l", "xl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 7,
    title: "Áo thun spelling game",
    price: "194000",
    thumb: thumb7,
    sold: 236,
    count: 89,
    sale: 0,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/8_1.jpg`),
      2: require(`@/assets/img/shop/8_2.jpg`),
      3: require(`@/assets/img/shop/8_3.jpg`),
      4: require(`@/assets/img/shop/8_4.jpg`),
    },
    slug: "ao-thun-spelling-game",
    sizes: ["s", "m", "xl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 8,
    title: "Áo thun Best",
    price: "194000",
    thumb: thumb8,
    sold: 723,
    count: 46,
    sale: 0,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/9_1.jpg`),
      2: require(`@/assets/img/shop/9_2.jpg`),
      3: require(`@/assets/img/shop/9_3.jpg`),
      4: require(`@/assets/img/shop/9_4.jpg`),
    },
    slug: "ao-thun-best",
    sizes: ["m"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 9,
    title: "Áo thun YourStyle",
    price: "194000",
    thumb: thumb9,
    sold: 561,
    count: 234,
    sale: 40,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/10_1.jpg`),
      2: require(`@/assets/img/shop/10_2.jpg`),
      3: require(`@/assets/img/shop/10_3.jpg`),
      4: require(`@/assets/img/shop/10_4.jpg`),
    },
    slug: "ao-thun-yourstyle",
    sizes: ["l"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 10,
    title: "Áo somi Kent",
    price: "194000",
    thumb: thumb10,
    sold: 9879,
    count: 23,
    sale: 0,
    categorySlug: "ao-somi",
    colors: {
      1: require(`@/assets/img/shop/11_1.jpg`),
      2: require(`@/assets/img/shop/11_2.jpg`),
      3: require(`@/assets/img/shop/11_3.jpg`),
      4: require(`@/assets/img/shop/11_4.jpg`),
    },
    slug: "ao-somi-kent",
    sizes: ["s", "m", "xl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 11,
    title: "Áo thun CoCo",
    price: "194000",
    thumb: thumb11,
    sold: 45,
    count: 809,
    sale: 0,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/12_1.jpg`),
      2: require(`@/assets/img/shop/12_2.jpg`),
      3: require(`@/assets/img/shop/12_3.jpg`),
      4: require(`@/assets/img/shop/12_4.jpg`),
    },
    slug: "ao-thun-coco",
    sizes: ["s", "m", "xl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 12,
    title: "Áo khoac SRUS",
    price: "189000",
    thumb: thumb12,
    sold: 165,
    count: 67,
    sale: 0,
    categorySlug: "ao-khoac",
    colors: {
      1: require(`@/assets/img/shop/13_1.jpg`),
      2: require(`@/assets/img/shop/13_2.jpg`),
      3: require(`@/assets/img/shop/13_3.jpg`),
      4: require(`@/assets/img/shop/13_4.jpg`),
    },
    slug: "ao-khoac-srus",
    sizes: ["s", "m", "xl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 13,
    title: "Hoodie nam",
    price: "159000",
    thumb: thumb13,
    sold: 987,
    count: 3711,
    sale: 0,
    categorySlug: "hoodie",
    colors: {
      1: require(`@/assets/img/shop/14_1.jpg`),
      2: require(`@/assets/img/shop/14_2.jpg`),
      3: require(`@/assets/img/shop/14_3.jpg`),
      4: require(`@/assets/img/shop/14_4.jpg`),
    },
    slug: "hoodie-nam",
    sizes: ["s", "m"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 14,
    title: "Áo khoác CERLD",
    price: "190000",
    thumb: thumb14,
    sold: 45,
    count: 64,
    sale: 0,
    categorySlug: "ao-khoac",
    colors: {
      1: require(`@/assets/img/shop/15_1.jpg`),
      2: require(`@/assets/img/shop/15_2.jpg`),
      3: require(`@/assets/img/shop/15_3.jpg`),
      4: require(`@/assets/img/shop/15_4.jpg`),
    },
    slug: "ao-khoac-cerld",
    sizes: ["xl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
  {
    id: 15,
    title: "Áo thun EASYX",
    price: "194000",
    thumb: thumb15,
    sold: 52,
    count: 34,
    sale: 22,
    categorySlug: "ao-thun",
    colors: {
      1: require(`@/assets/img/shop/16_1.jpg`),
      2: require(`@/assets/img/shop/16_2.jpg`),
      3: require(`@/assets/img/shop/16_3.jpg`),
      4: require(`@/assets/img/shop/16_4.jpg`),
    },
    slug: "ao-thun-easyx",
    sizes: ["m", "xl"],
    rates: {
      count: 120,
      one: 0,
      two: 0,
      three: 4,
      four: 10,
      five: 106,
    },
  },
];

// const getAllProducts = () => products;

// const getProductById = (id) => {
//   const index = findIndex(products, (product) => {
//     return parseInt(product.id) === parseInt(id);
//   });
//   return products[index] || -1;
// };

// const getProductsByConditions = (callback) => {
//   return products.filter((product) => {
//     return callback(product);
//   });
// };

// const getProducts = (count) => {
//   const max = count > products.length ? products.length : products.length - count;
//   const min = 0;
//   const start = Math.floor(Math.random() * (max - min) + min);
//   return products.slice(start, start + count);
// };

// const getRandomProducts = (count) => {
//   const newPro = getProducts(count);
//   randomArray(randomArray(randomArray(randomArray(newPro))));

//   return newPro;
// };

export { products /* getRandomProducts, getAllProducts, getProducts, getProductById, getProductsByConditions */ };
