<script setup>
import { computed, provide, ref } from "vue";
import { useStore } from "vuex";

import NavRight from "@/components/Header/MenuRight/NavRight.vue";
import HeaderMenuMobile from "@/components/Header/MenuRight/MenuMobile.vue";
import HeaderSearchModal from "@/components/Header/MenuRight/Search.vue";
import CartShopping from "@/components/Shop/Cart/CartShopping.vue";

/**
 *
 */
const currentNavShow = ref(null);

const isShow = (cate) => currentNavShow.value === cate;
const show = (cate) => (currentNavShow.value = cate);
const closeNavRight = () => (currentNavShow.value = null);

/**
 *
 */
const { dispatch, getters } = useStore();
dispatch("cart/loadCartFromLocalStorage");

const products = computed(() => getters["cart/getCart"]);

provide("products", products);
</script>

<template>
  <!-- =============== Menu responsive ================ -->
  <div
    class="flex z-[50] text-2xl relative gap-8 items-center justify-between"
    v-click-outside="closeNavRight"
  >
    <!-- ============================== Cart ============================= -->
    <div
      class="p-2 items-center justify-center rounded-md transition-all relative cursor-pointer overflow-hidden flex"
      @click="show('cart')"
    >
      <span class="absolute w-full h-full top-0 left-0 bg-current opacity-0 hover:opacity-20"></span>
      <i class="bx bx-cart-alt text-current cursor-pointer"></i>
      <span
        class="absolute text-sm top-0 right-0 text-white px-[4px] rounded-full bg-red-400"
      >{{ products.length }}</span>
    </div>
    <!-- =============================== search, show: smx media screen ======================= -->
    <div
      class="hidden smx:flex p-2 items-center justify-center rounded-md transition-all relative overflow-hidden"
      @click="show('search')"
    >
      <span
        class="absolute cursor-pointer w-full h-full top-0 left-0 bg-current opacity-0 hover:opacity-20"
      ></span>
      <i class="bx bx-search text-current cursor-pointer"></i>
    </div>

    <!-- =============== menu  ================== -->
    <div
      class="p-1 overflow-hidden flex items-center justify-center border-opacity-50 border-2 border-current rounded-md transition-all relative cursor-pointer"
      @click="show('menu')"
    >
      <span class="absolute w-full h-full top-0 left-0 bg-current opacity-0 hover:opacity-30"></span>
      <i class="bx bx-menu text-current"></i>
    </div>
    <transition name="fadeLeftMbMenu">
      <NavRight v-show="currentNavShow" @close="closeNavRight">
        <HeaderSearchModal v-if="isShow('search')"></HeaderSearchModal>
        <CartShopping v-else-if="isShow('cart')"></CartShopping>
        <HeaderMenuMobile v-else-if="isShow('menu')"></HeaderMenuMobile>
      </NavRight>
    </transition>
  </div>
</template>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  width: 4px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #f5f5f5;
}
</style>
