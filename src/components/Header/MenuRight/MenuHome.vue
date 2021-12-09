<script setup>
import { listMenuHome } from "@/components/Header/listMenu";
</script>

<template>
  <div class="ml-6 transition-all duration-150 flex flex-col overflow-hidden">
    <div v-for="(item, index) in listMenuHome" :key="index">
      <div
        v-for="(route, index) in item.routelinks"
        :key="index"
        class="rounded-lg hover:bg-gray-200 pl-1"
      >
        <NavLink
          class="text-secondary-text text-xl hover:translate-x-3 py-2 transition-all"
          :text="route.name"
          :to="route.route"
        />
      </div>
    </div>
  </div>
</template>