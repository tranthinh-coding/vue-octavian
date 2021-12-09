<script setup>
import { ref, provide, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

// import HeaderFullNavbar from "@/layout/HeaderFullNavbar_1.vue";
import MainSlider from "@/components/Main/Slider.vue";
import ShopSubscribe from "@/components/Shop/Subscribe.vue";
import ProductNotFound from "@/components/Shop/ShopDetails/NotFound.vue";
import ProductDetails from "@/components/Shop/ShopDetails/ProductDetails.vue";

const route = useRoute();
const { getters } = useStore();

let mainRoute = ProductNotFound;

const product = ref(getters["shop/getProductById"](route.query.id));

const thumb = ref(null);
watch(
  () => route.query.id,
  () => {
    product.value = getters["shop/getProductById"](route.query.id);
    thumb.value = product.value.thumb;
  }
);

if (product.value !== -1) {
  mainRoute = ProductDetails;
  thumb.value = product.value.thumb;
  provide("product", product);
  provide("thumb", thumb);
}
</script>

<template>
  <!-- <HeaderFullNavbar> -->
  <MainSlider />
  <keep-alive>
    <component :is="mainRoute"></component>
  </keep-alive>
  <ShopSubscribe />
  <!-- </HeaderFullNavbar> -->
</template>