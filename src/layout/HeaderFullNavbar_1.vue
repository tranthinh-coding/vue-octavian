<template>
  <!-- ===================== Header ===================== -->
  <div
    id="header"
    class="fixed select-none duration-200 top-0 left-0 right-0 z-[1000] transition-all"
    :class="{'shadow-smooth animated fadeInDown bg-white': isScroll}"
  >
    <div v-show="!isScroll" class="absolute inset-x-0 h-px bg-gray-300 bg-opacity-25 top-full"></div>
    <Container
      class="transition-all"
      :class="isScroll ? 'h-headerShrink' : 'h-header'"
      :style="{ color }"
    >
      <div class="relative h-full w-full">
        <div
          @click="toRoute"
          class="absolute top-0 bottom-0 left-0 z-30 flex items-center cursor-pointer"
        >
          <img
            :src="isScroll ? require(`@/assets/img/logo/${logo}`) : require(`@/assets/img/logo/${logoScroll}`)"
            @error="require('@/assets/img/logo/LogoDarkBlue.png')"
          />
        </div>
        
        <HeaderNavbar />
        
        <div class="absolute top-0 bottom-0 right-0 z-30 flex items-center justify-end">
          <Menu />
        </div>
      </div>
    </Container>
  </div>

  <slot></slot>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";
import { useRouter } from "vue-router";

import HeaderNavbar from "@/components/Header/MainNav/Navbar.vue";
import Menu from "@/components/Header/MenuRight/Menu.vue";

const router = useRouter();

const toRoute = () => {
  router.push({ name: "Landing", params: {} });
};

defineProps({
  logo: {
    type: String,
    default: "LogoDarkBlue.png",
  },
  logoScroll: {
    type: String,
    default: "LogoLightBlue.png",
  },
});

const isScroll = ref(false);
const color = ref("#f9fafb");

const handleScroll = () => {
  if (window.scrollY > 20) {
    isScroll.value = true;
    color.value = "#6a727f";
  } else {
    isScroll.value = false;
    color.value = "#f9fafb";
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>