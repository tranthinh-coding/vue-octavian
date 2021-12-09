<script setup>
import { inject } from "vue";

const thumb = inject("thumb");
const product = inject("product");
const selectOption = inject("selectOption");

const updateThumb = (src) => {
  thumb.value = src;
  selectOption.value.color = src;
};
</script>
<template>
  <div class="md:pr-9 !mb-20 md:!mb-0">
    <div class="flex flex-wrap gap-[30px]">
      <!-- ============================= -->
      <div class="w-full h-[450px] sm:h-[550px] rounded-lg overflow-hidden">
        <img class="object-cover object-center h-full w-full" :src="thumb" alt />
      </div>
      <div class="flex justify-center gap-3 items-center w-full">
        <div
          class="w-16 h-16 overflow-hidden rounded-lg bg-gray-100"
          v-for="(src, key) in product.colors"
          :key="key"
        >
          <!-- =============== ============ -->
          <div class="w-full h-full p-1 cursor-pointer" @click="updateThumb(src)">
            <img class="w-full h-full object-center object-cover" :src="src" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

