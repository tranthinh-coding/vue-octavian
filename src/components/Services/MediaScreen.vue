<script setup>
import { ref } from "vue";

const loadingx = ref(true);

setTimeout(() => {
  loadingx.value = false;
}, 1500);
</script>

<template>
  <div>
    <div class="overlay z-[-1]"></div>
    <div class="h-full flex items-center justify-center">
      <div
        class="relative p-2 w-11/12 lg:w-10/12 lg:h-[713px] md:h-[520px] smx:h-[450px] sm:h-[350px] h-[280px] bg-white rounded-xl"
      >
        <template v-if="loadingx">
          <div @click.stop class="absolute h-full w-full flex items-center justify-center">
            <div class="load load1"></div>
            <div class="load load2"></div>
            <div class="load load3"></div>
          </div>
        </template>
        <div
          class="flex cursor-pointer items-center justify-center absolute w-10 h-10 bg-white rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2"
        >
          <i class="text-4xl bx bx-x"></i>
        </div>
        <iframe
          class="rounded-xl"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/3B09jd-wMaE?list=RDjj6OS33kPt8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animated-open-media {
  animation: openmedia 0.5s linear 0s forwards;
}

@keyframes openmedia {
  0% {
    width: 100%;
    height: 0;
  }
  100% {
    width: 100%;
  }
}
</style>