<script setup>
import { defineEmits } from "vue";

defineEmits(["close"]);
</script>

<template>
  <div
    @click.stop.prevent
    class="fixed inset-0 ml-auto cursor-default h-screen z-[999] max-w-lg transition-all bg-gray-50 rounded-l-xl shadow-2xl duration-300"
  >
    <div class="h-full ml-auto w-full overflow-hidden relative">
      <div
        @click="$emit('close')"
        class="absolute top-5 right-5 text-gray-800 text-5xl flex items-center overflow-hidden rounded-lg text-center cursor-pointer"
      >
        <i class="bx bx-x"></i>
        <span class="absolute bg-current opacity-0 transition-all inset-0 hover:opacity-25"></span>
      </div>
      <!--  -->
      <slot></slot>
    </div>
  </div>
</template>