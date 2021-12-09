<script setup>
import { listMenuPages } from "@/components/Header/listMenu";
</script>

<template>
  <div class="ml-6 transition-all duration-150 flex flex-col overflow-hidden">
    <div
      v-for="(item, index) in listMenuPages"
      :key="index"
      class="rounded-lg hover:bg-gray-200 pl-1"
    >
      <NavLink
        class="text-secondary-text text-xl hover:translate-x-3 py-2 transition-all"
        :text="item.name"
        :to="item.route"
      />
    </div>
  </div>
</template>