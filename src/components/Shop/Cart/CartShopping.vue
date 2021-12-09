<script setup>
import List from "@/components/Shop/Cart/List.vue";
</script>

<template>
  <div class="h-full flex flex-col overscroll-y-auto overflow-y-scroll custom-scroll">
    <h3 class="title mt-28 px-3">Cart</h3>
    <div class="mt-5 space-y-4 px-3 max-h-[600px]">
      <List />
    </div>
  </div>
</template>

