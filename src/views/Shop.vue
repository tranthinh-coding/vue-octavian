<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import { sleep } from "@/constant/base";

// import HeaderFullNavbar from "@/layout/HeaderFullNavbar_1.vue";
import MainSlider from "@/components/Main/Slider.vue";
import ShopProducts from "@/components/Shop/Products.vue";
import ShopSubscribe from "@/components/Shop/Subscribe.vue";

const { getters, dispatch } = useStore();

const products = computed(() => getters["shop/getAllProducts"]);

const isPendding = ref(false);

const loadMoreProducts = async () => {
  isPendding.value = true;
  await sleep(300);
  await dispatch("shop/loadMoreProducts", 8);
  isPendding.value = false;
};
</script>

<template>
  <!-- <HeaderFullNavbar> -->
  <MainSlider />

  <section class="py-primary">
    <Container>
      <h1 class="title mb-10 md:mb-24">Shop</h1>
      <ShopProducts :products="products" />
    </Container>
    <Container class="flex justify-center">
      <div class="w-full mt-[100px] font-semibold smx:w-80 flex justify-center">
        <Button
          @click="loadMoreProducts"
          class="bg-blue-600 py-2 text-white w-full"
          :disabled="isPendding"
          text="Load More"
        ></Button>
      </div>
    </Container>
  </section>
  <ShopSubscribe />
  <!-- </HeaderFullNavbar> -->
</template>

