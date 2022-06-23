
<template>
  <div
    @click.stop.prevent
    class="fixed invisible inset-0 cursor-default h-screen z-[999] transition-all"
  >
    <div
      class="max-w-lg visible h-full ml-auto overflow-hidden relative bg-gray-50 rounded-l-xl shadow-2xl"
    >
      <div
        @click="$emit('close')"
        class="absolute z-20 top-5 right-5 text-gray-800 text-5xl flex items-center overflow-hidden rounded-lg text-center cursor-pointer"
      >
        <i class="bx bx-x"></i>
        <span class="absolute bg-current opacity-0 transition-all inset-0 hover:opacity-25"></span>
      </div>

      <slot></slot>
    </div>
  </div>
</template>