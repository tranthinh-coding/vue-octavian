<template>
  <div>
    <h1 class="title">You may also like</h1>
    <div class="mt-20"></div>
  </div>
  <Products :products="products" />
</template>

<script setup>
import { ref, watch, inject } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import Products from "@/components/Shop/Products.vue";

const route = useRoute();
const { getters } = useStore();

const product = inject("product");
const products = ref(
  getters["shop/getProductsByConditions"]((prod) => {
    return (
      prod.categorySlug === product.value.categorySlug &&
      prod.id !== product.value.id
    );
  })
);

watch(
  () => route.query.id,
  () => {
    products.value = getters["shop/getProductsByConditions"]((prod) => {
      return (
        prod.categorySlug === product.value.categorySlug &&
        prod.id !== product.value.id
      );
    });
  }
);
</script>
