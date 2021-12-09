<script setup>
import { defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const goHome = () => {
  router.push({ name: "Landing", params: {} });
};

defineProps({
  bg: {
    default: require("@/assets/img/base/bg_header.jpg"),
  },
});
</script> 

<template>
  <div
    class="w-full relative z-0 py-[220px] bg-no-repeat bg-cover"
    id="slider"
    :style="{backgroundImage: `url(${bg})`}"
  >
    <slot name="content"></slot>
    <div class="absolute z-[-1] inset-0 bg-gray-900 bg-opacity-60"></div>
    <template v-if="route.path != '/'">
      <Container
        class="z-10 flex flex-col justify-center items-center md:items-start absolute inset-0"
      >
        <h1
          class="text-white-eee font-bold text-2xl sm:text-3xl smx:text-4xl md:text-5xl lg:text-6xl"
        >{{ route.meta.name }}</h1>
        <div class="text-blue-gray text-xl mt-5 flex items-center gap-3">
          <span class="cursor-pointer" @click="goHome">Home</span>
          <i class="bx bx-chevrons-right"></i>
          <slot name="nav-slider"></slot>
          <span>{{ route.meta.name }}</span>
        </div>
      </Container>
    </template>
  </div>
</template>
