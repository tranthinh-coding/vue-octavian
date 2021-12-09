
<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  progress: {
    type: [Number, String],
    default: 0,
    require: true,
  },
  color1: {
    type: String,
    default: "#7d4ae4",
  },
  color2: {
    type: String,
    default: "#5376e7",
  },
});
const progressbar = computed(() => {
  return {
    background: `linear-gradient(to right, ${props.color1}, ${props.color2})`,
    width: `${props.progress}%`,
  };
});
</script>

<template>
  <div class="progress w-full h-[10px] overflow-hidden rounded-2xl bg-gray-300">
    <div class="progress-bar relative h-full transition-all" :style="progressbar"></div>
  </div>
</template>

<style scoped>
.progress-bar {
  animation: progress 1s linear 0s forwards;
}
@keyframes progress {
  0% {
    width: 0;
  }
}
</style>