<script setup>
import { defineProps } from "vue";

defineProps(["image", "name", "position"]);
</script>


<template>
  <div class="flex flex-col gap-y-3">
    <div class="rounded-lg group overflow-hidden relative h-[430px]">
      <img class="h-full w-full object-cover" :src="image" alt />
      <div
        class="absolute opacity-0 group-hover:opacity-100 duration-300 inset-0 bg-blue-600 bg-opacity-60 w-full h-full"
      >
        <ul
          class="flex text-white w-full mt-14 group-hover:mt-0 transition-all duration-300 h-full items-center justify-center gap-[30px] text-xl"
        >
          <li
            class="w-10 h-10 rounded-full bg-blue-300 hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
          >
            <i class="bx bxl-facebook"></i>
          </li>
          <li
            class="w-10 h-10 rounded-full bg-blue-300 hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
          >
            <i class="bx bxl-twitter"></i>
          </li>
          <li
            class="w-10 h-10 rounded-full bg-blue-300 hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
          >
            <i class="bx bxl-instagram"></i>
          </li>
        </ul>
      </div>
    </div>
    <NavLink
      :to="{ name: 'TeamDetails', params: {} }"
      :text="name"
      class="hover:text-blue-600 justify-center title transition-all"
    />
    <p class="text-sm mb-10">{{ position }}</p>
  </div>
</template>