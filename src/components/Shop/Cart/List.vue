<script setup>
import { inject } from "vue";
import Item from "@/components/Shop/Cart/Item.vue";

const products = inject(["products"]);
</script>

<template>
  <template v-if="!products.length">
    <h3 class="title">
      <span class="text-xl">Giỏ hàng chưa có gì.</span>
    </h3>
  </template>
  <template v-else>
    <div
      class="text-primary-text flex relative items-center rounded-lg border border-solid border-gray-300 max-w-md"
      v-for="(product, index) in products"
      :key="index"
    >
      <Item :product="product" />
    </div>
  </template>
</template>