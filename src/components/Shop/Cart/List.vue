<script setup>
import { defineProps } from "vue";
import Item from "@/components/Shop/Cart/Item.vue";

defineProps(["products"]);
</script>

<template>
  <div
    class="text-primary-text flex relative items-center rounded-lg border border-solid border-gray-300 max-w-md"
    v-for="(product, index) in products"
    :key="index"
  >
    <Item :product="product" />
  </div>
</template>