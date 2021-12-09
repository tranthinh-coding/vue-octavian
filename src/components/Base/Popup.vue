<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="fixed z-[999999] text-center inset-0 min-h-screen bg-gray-800 bg-opacity-50 flex items-center justify-center"
  >
    <transition name="popup" appear>
      <div
        class="bg-gray-900 text-white relative min-w-[300px] max-w-[580px] rounded-xl pt-16 pb-10 px-6 md:px-12"
      >
        <slot></slot>
        <div
          @click="emit('close')"
          class="absolute rounded-lg cursor-pointer transition-all hover:bg-gray-600 flex items-center justify-center w-10 h-10 right-2 top-2"
        >
          <i class="bx bx-x text-3xl text-white"></i>
        </div>
      </div>
    </transition>
  </div>
</template>