<script setup>
import { inject, defineEmits } from "vue";
import List from "@/components/Shop/Cart/List.vue";

const emit = defineEmits(["close"]);

const products = inject(["products"]);
</script>

<template>
  <div class="h-full flex flex-col overscroll-y-auto overflow-y-scroll custom-scroll">
    <h3 class="title mt-28 px-3">Cart</h3>
    <div class="mt-5 space-y-4 px-3 max-h-[600px]">
      <template v-if="!products.length">
        <h3 class="title">
          <p class="text-xl">Giỏ hàng chưa có gì. Đi mua sắm nào.</p>
          <NavLink
            @click="emit('close')"
            text="Tới shop."
            :to="{name: 'Shop', params: {}}"
            class="text-blue-600 mt-10 underline"
          />
        </h3>
      </template>

      <template v-else>
        <List :products="products" />
      </template>
    </div>
  </div>
</template>

