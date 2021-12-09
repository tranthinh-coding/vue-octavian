<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
  autoplay: 3000,
  itemsToScroll: 1,
  pauseAutoplayOnHover: true,
  wrapAround: true, // slide vo han
  breakpoints: {
    // 700px and up
    700: {
      itemsToShow: 3,
      snapAlign: "center",
    },
    // 1024 and up
    1280: {
      itemsToShow: 3.95,
      snapAlign: "center",
    },
  },
};

const listCase = [
  {
    title: "Financial Audit",
    image: require("@/assets/img/home/tech1.png"),
  },
  {
    title: "Analytics",
    image: require("@/assets/img/home/tech2.png"),
  },
  {
    title: "Business Support",
    image: require("@/assets/img/home/tech3.png"),
  },
  {
    title: "Financial Audit",
    image: require("@/assets/img/home/tech4.png"),
  },
  {
    title: "Analytics",
    image: require("@/assets/img/home/tech5.png"),
  },
  {
    title: "Business Support",
    image: require("@/assets/img/home/tech6.png"),
  },
];
</script>

<template>
  <section class="py-primary relative">
    <div class="fixed-bg bg-[#222831]"></div>
    <Container class="text-center">
      <h1 class="title">
        <span class="text-white">Technology startup case studies</span>
      </h1>
      <p
        class="mt-6 text-gray-300 max-w-lg mx-auto"
      >Integer eu metus at orci scelerisque rutrum. Vivamus condimentu ipsum vitae iaculis cursus, turpis nisl.</p>

      <!-- ====== Vue3 Carousel =========== -->
      <div class="mt-20">
        <Carousel :settings="settings">
          <Slide
            v-for="(slide, index) in listCase"
            :key="index"
            class="px-4 overflow-hidden rounded-lg"
          >
            <div class="carousel__item flex items-center h-full w-full">
              <div class="relative h-5/6 w-full rounded-xl">
                <img class="w-full rounded-current h-full object-cover" :src="slide.image" alt />
                <div
                  class="absolute cursor-default rounded-current inset-0 bg-gray-700 bg-opacity-75 flex flex-col items-center justify-center"
                >
                  <h3 class="title">
                    <span class="text-white">{{ slide.title }}</span>
                  </h3>
                  <p class="text-gray-100 mt-4">Business</p>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </Container>
  </section>
</template>

<style>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
.carousel__pagination-button {
  width: 8px !important;
  height: 8px !important;
  background: #65696f !important;
  border-radius: 50% !important;
}
button.carousel__pagination-button.carousel__pagination-button--active {
  box-shadow: 0 0 0 4px #65696f !important;
  background-color: #fff !important;
  transition: all 0.4s linear;
}
</style>