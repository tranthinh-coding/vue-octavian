<script setup>
import { listMenuPages } from "@/components/Header/listMenu";
</script>

<template>
  <transition name="fadeUp">
    <div class="absolute left-0 top-full">
      <!-- ============= Menu pages ===================== -->
      <div class="w-64 bg-white text-secondary-text overflow-hidden rounded-lg shadow-2xl">
        <div
          v-for="(page, index) in listMenuPages"
          :key="index"
          class="hover:bg-gray-50 rounded-lg relative cursor-pointer pl-4 group"
        >
          <NavLink
            class="group-hover:translate-x-3 duration-200 py-3 transition-transform"
            :text="page.name"
            :to="page.route"
          />
        </div>
      </div>
    </div>
  </transition>
</template>