<script setup>
import { ref } from "vue";

import Pricing from "./Pricing.vue";

const currentTab = ref("Monthly");

const pos = ref({
  top: 0,
  left: 0,
  width: "130px",
  height: "50px",
});

const setActive = (cate, event) => {
  pos.value = {
    top: event.currentTarget.offsetTop + "px",
    left: event.currentTarget.offsetLeft + "px",
    width: event.currentTarget.offsetWidth + "px",
    height: event.currentTarget.offsetHeight + "px",
  };
  currentTab.value = cate;
};

const isActive = (cate) => {
  return currentTab.value === cate;
};

const dataMonth = [
  {
    title: "Plans Startup",
    prices: 29,
    cate: "mo",
    users: 5,
    keywords: 100,
    listas: 10,
    accessToAnalytics: true,
  },
  {
    title: "Plans Startup",
    prices: 49,
    cate: "mo",
    users: 15,
    keywords: 300,
    listas: 25,
    accessToAnalytics: true,
  },
  {
    title: "Plans Startup",
    prices: 79,
    cate: "mo",
    users: 40,
    keywords: 900,
    listas: 50,
    accessToAnalytics: true,
  },
];
const dataYear = [
  {
    title: "Plans Startup",
    cate: "ye",
    prices: 119,
    users: 400,
    keywords: 900,
    listas: 50,
    accessToAnalytics: true,
  },
  {
    title: "Plans Startup",
    cate: "ye",
    prices: 229,
    users: 300,
    keywords: 1199,
    listas: 80,
    accessToAnalytics: true,
  },
  {
    title: "Plans Startup",
    cate: "ye",
    prices: 339,
    users: 500,
    keywords: 3000,
    listas: 100,
    accessToAnalytics: true,
  },
];
</script>


<template>
  <section class="py-primary relative">
    <div class="fixed-bg bg-light"></div>
    <Container class="text-center">
      <h1 class="title max-w-2xl mx-auto">Choose your pricing plans</h1>
      <p
        class="text-lg mt-9 leading-9 max-w-lg mx-auto"
      >Integer eu metus at orci scelerisque rutrum. Vivamus condimentu ipsum vitae iaculis cursus, turpis nisl.</p>
    </Container>

    <Container class="mt-10 md:mt-16">
      <!-- ============================ -->
      <div class="relative w-min mx-auto flex justify-center bg-white rounded-lg z-0">
        <button
          @click="setActive('Monthly', $event)"
          class="w-[130px] h-[50px] rounded-l-current transition-all font-semibold"
          :class="{'text-white': isActive('Monthly')  }"
        >Monthly</button>
        <button
          @click="setActive('Yearly', $event)"
          class="w-[130px] h-[50px] rounded-r-current transition-all font-semibold"
          :class="{'text-white': isActive('Yearly')  }"
        >
          Yearly
          <div
            class="absolute select-none cursor-pointer right-0 -top-1/2 bg-blue-200 text-blue-700 text-sm rounded-xl px-4 py-2 font-semibold"
          >37% OFF</div>
        </button>
        <!-- ============= -->
        <div
          class="absolute rounded-current transition-all z-[-1] duration-200 bg-blue-600"
          :style="pos"
        ></div>
      </div>

      <Pricing v-if="isActive('Monthly')" class="mt-10 md:mt-24" :data="dataMonth"></Pricing>
      <Pricing v-if="isActive('Yearly')" class="mt-10 md:mt-24" :data="dataYear"></Pricing>
    </Container>
  </section>
</template>

<style scoped>
</style>