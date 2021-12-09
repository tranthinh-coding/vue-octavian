<script setup>
import { ref } from "vue";

import MenuHome from "./MenuHome.vue";
import MenuPages from "./MenuPages.vue";

const currentEl = ref(null);
const isActive = (el) => {
  return currentEl.value == el;
};
const active = (el) => {
  if (currentEl.value == el) currentEl.value = null;
  else currentEl.value = el;
};
</script>

<template>
  <div
    class="h-full w-full overflow-hidden p-6 pt-10 lg:pt-20 text-lg lg:text-2xl flex justify-center flex-col"
  >
    <div
      class="h-[350px] md:h-[420px] overflow-y-scroll transition-all overflow-x-hidden custom-scroll"
    >
      <NavLink
        @click.prevent="active('home')"
        class="title my-1 py-2 hover:bg-gray-200 rounded-lg pl-3"
        text="Home"
        :to="{name: '', params:{}}"
      >
        <i class="bx bx-chevron-right"></i>
      </NavLink>
      <!-- ============= MENU HOME ============== -->
      <MenuHome v-show="isActive('home')" />
      <NavLink
        class="title my-1 py-2 hover:bg-gray-200 rounded-lg pl-3"
        text="About Us"
        :to="{name: 'AboutUs', params:{}}"
      />
      <NavLink
        class="title my-1 py-2 hover:bg-gray-200 rounded-lg pl-3"
        text="Services"
        :to="{name: 'Services', params:{}}"
      />
      <NavLink
        class="title my-1 py-2 hover:bg-gray-200 rounded-lg pl-3"
        text="Blog"
        :to="{name: 'Blog', params:{}}"
      />
      <NavLink
        @click.prevent="active('page')"
        class="title my-1 py-2 hover:bg-gray-200 rounded-lg pl-3"
        text="Pages"
        :to="{name: '', params:{}}"
      >
        <i class="bx bx-chevron-right"></i>
      </NavLink>
      <!-- ========== MENU PAGES ================== -->
      <MenuPages v-show="isActive('page')" />
      <NavLink
        class="title my-1 py-2 hover:bg-gray-200 rounded-lg pl-3"
        text="Contact"
        :to="{name: 'Contact', params:{}}"
      />
    </div>
    <!-- social -->
    <div class="flex mt-4 md:mt-16 justify-start items-center -ml-1">
      <NavLink class="social hover:bg-gray-200 rounded-full title" :to="{ name: '', params: {}}">
        <i class="bx bxl-facebook"></i>
      </NavLink>
      <NavLink class="social hover:bg-gray-200 rounded-full title" :to="{ name: '', params: {}}">
        <i class="bx bxl-twitter"></i>
      </NavLink>
      <NavLink class="social hover:bg-gray-200 rounded-full title" :to="{ name: '', params: {}}">
        <i class="bx bxl-instagram"></i>
      </NavLink>
      <NavLink class="social hover:bg-gray-200 rounded-full title" :to="{ name: '', params: {}}">
        <i class="bx bxl-dribbble"></i>
      </NavLink>
    </div>
    <div class="mt-5 md:mt-16">
      <h3 class="title my-1 py-2 rounded-lg pl-3">
        Copyright © 2021
        <span>OCTAVIAN</span>
      </h3>
    </div>
  </div>
</template>


<style scoped>
.text-26 h1 {
  font-size: 26px;
  font-weight: 600;
}
.custom-scroll::-webkit-scrollbar {
  width: 4px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #f5f5f5;
}
.transition-height,
.menu-item {
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.menu-item ul {
  transition: all 0.65s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 0;
}
.menu-item a {
  font-weight: 600;
}
.menu-item.show ul {
  height: auto;
  transition: all 0.65s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.menu-item.show > h1 > i {
  transform: rotate(90deg);
  transition: transform 0.3s linear;
}
</style>
