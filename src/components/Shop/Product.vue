<template>
  <div>
    <div
      class="flex items-center h-[313px] w-full justify-center shadow-sm bg-product max-h-80 rounded-lg overflow-hidden relative group"
    >
      <img
        class="object-cover absolute inset-0 group-hover:w-0 group-hover:h-0 m-auto w-full h-full duration-300 transition-all"
        :src="product.thumb"
        alt
      />
      <img
        class="object-cover absolute inset-0 group-hover:w-full group-hover:h-full m-auto w-0 h-0 duration-300 transition-all"
        :src="product.colors[Object.keys(product.colors)[0]]"
        alt
      />
      <!-- sale -->
      <div
        v-if="product.sale"
        class="absolute top-7 left-7 fadeInLeft animated flex items-center justify-center rounded-lg w-20 h-10 text-white bg-deepPink"
      >&hyphen;{{ product.sale }}&percnt;</div>
      <!-- button: like  -->
      <div
        class="group-hover:flex absolute hidden gap-x-[30px] mx-auto justify-center fadeInUp animated left-0 right-0 bottom-[30px] text-[#6a727f] text-2xl"
      >
        <div
          class="h-[60px] rounded-lg flex items-center justify-center cursor-pointer bg-white w-[60px] shadow-icon-prod"
        >
          <div class="twitter-heart -ml-5" @click="activeTwitterHeart($event)"></div>
        </div>
        <div
          @click="toProductDetails(product.id)"
          class="h-[60px] rounded-lg flex items-center justify-center cursor-pointer bg-white w-[60px] px-5 py-[22px] shadow-icon-prod"
        >
          <i class="bx bx-shuffle"></i>
        </div>
      </div>
    </div>
    <div class="text-center md:text-left">
      <h1
        @click="toProductDetails(product.id)"
        class="text-base hover:text-secondary-text cursor-pointer transition-all font-bold mt-6"
      >{{ product.title }}</h1>
      <div class="mt-1">
        <span class="text-dark-gray-light line-through" v-if="product.sale">
          ${{ numberWithComas(product.price) }}
          <span class="px-2">-</span>
        </span>
        <span>
          ${{
          numberWithComas(product.price - (product.price * product.sale) / 100)
          }}
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";

import { loop } from "@/ulti/showElOnScroll";

export default {
  props: {
    product: {
      type: Object,
      require: true,
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const toProductDetails = (id) => {
      if (id !== route.query.id)
        router.push({ name: "ShopDetails", query: { id }, params: {} });
    };

    const numberWithComas = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const activeTwitterHeart = (event) => {
      event.target.classList.toggle("is-active");
    };

    onMounted(() => {
      loop();
    });
    return { numberWithComas, activeTwitterHeart, toProductDetails };
  },
};
</script>

<style scoped>
.shadow-icon-prod {
  box-shadow: 0 30px 70px 0 rgb(192, 209, 211, 0.5);
}
</style>