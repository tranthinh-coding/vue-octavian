<script setup>
import { listMenuHome } from "@/components/Header/listMenu";
</script>

<template>
  <transition name="fadeUp">
    <div
      @click.stop
      class="p-14 w-full container absolute left-0 right-0 top-full bg-white text-secondary-text rounded-lg shadow-2xl"
    >
      <div class="w-full grid grid-cols-4 gap-8 lg:gap-11 justify-start">
        <div v-for="(item, index) in listMenuHome" :key="index">
          <h3 class="title pb-11">{{ item.title }}</h3>
          <div
            class="hover:bg-gray-50 rounded-lg relative cursor-pointer group"
            v-for="(route, index) in item.routelinks"
            :key="index"
          >
            <NavLink
              class="group-hover:translate-x-3 py-3 transition-transform"
              :text="route.name"
              :to="route.route"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>