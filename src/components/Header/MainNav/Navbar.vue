<script setup>
import { ref } from "vue";

import MenuHome from "@/components/Header/MainNav/MenuHome.vue";
import MenuPages from "@/components/Header/MainNav/MenuPages.vue";

const currentShow = ref(null);
const isActive = (_cate) => {
  return currentShow.value == _cate;
};
const activeShow = (_cate) => {
  if (currentShow.value === _cate) unactiveShow();
  else currentShow.value = _cate;
};
const unactiveShow = () => {
  currentShow.value = null;
};
</script>

<template>
  <div
    class="absolute hidden lg:flex inset-0 z-20 gap-x-10 h-full capitalize items-center justify-center"
    v-click-outside="unactiveShow"
    @click.self="unactiveShow"
  >
    <NavLink @click.prevent="activeShow('home')" text="Home" :to="{ name: '', params: {} }">
      <i class="bx bx-chevron-down text-2xl text-current"></i>
    </NavLink>
    <!-- ==================== Menu Homepages=================== -->
    <MenuHome v-show="isActive('home')" />

    <NavLink text="About Us" :to="{ name: 'AboutUs', params: {} }" />
    <NavLink text="Services" :to="{ name: 'Services', params: {} }" />
    <NavLink text="Blog" :to="{ name: 'Blog', params: {} }" />

    <div @click.self="unactiveShow" class="relative h-full flex items-center justify-center">
      <NavLink @click.prevent="activeShow('pages')" text="Pages" :to="{path: '', params: {}}">
        <i class="bx bx-chevron-down text-2xl text-current"></i>
      </NavLink>
      <MenuPages @click="unactiveShow" v-show="isActive('pages')" />
    </div>
    <NavLink text="Contact" :to="{ name: 'Contact', params: {} }" />
  </div>
</template>

