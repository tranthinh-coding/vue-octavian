<script setup>
import { ref } from "vue";
import MainSlider from "@/components/Main/Slider.vue";

const currentMaso = ref("all");

const isMasonary = (categ) => {
  return categ.includes(currentMaso.value);
};

const setMasonary = (categ) => {
  currentMaso.value = categ;
};
</script>

<template>
  <MainSlider />
  <section class="py-primary">
    <Container>
      <div class="flex items-center justify-center">
        <ul class="flex items-center justify-center -my-10 flex-wrap max-w-5xl">
          <li class="px-4 my-4 md:px-10">
            <a
              @click="setMasonary('all')"
              :class="{'actived': isMasonary(['all'])}"
              class="text-2xl md:text-4xl transition-all duration-300 border-b-2 border-transparent font-extrabold cursor-pointer select-none"
            >All</a>
          </li>
          <li class="px-4 my-4 md:px-10">
            <a
              @click="setMasonary('design')"
              :class="{'actived': isMasonary(['design'])}"
              class="text-2xl md:text-4xl transition-all duration-300 border-b-2 border-transparent font-extrabold cursor-pointer select-none"
            >Design</a>
          </li>
          <li class="px-4 my-4 md:px-10">
            <a
              @click="setMasonary('brand')"
              :class="{'actived': isMasonary(['brand'])}"
              class="text-2xl md:text-4xl transition-all duration-300 border-b-2 border-transparent font-extrabold cursor-pointer select-none"
            >Brand</a>
          </li>
          <li class="px-4 my-4 md:px-10">
            <a
              @click="setMasonary('photography')"
              :class="{'actived': isMasonary(['photography'])}"
              class="text-2xl md:text-4xl transition-all duration-300 border-b-2 border-transparent font-extrabold cursor-pointer select-none"
            >Photography</a>
          </li>
          <li class="px-4 my-4 md:px-10">
            <a
              @click="setMasonary('ui/ux')"
              :class="{'actived': isMasonary(['ui/ux'])}"
              class="text-2xl md:text-4xl transition-all duration-300 border-b-2 border-transparent font-extrabold cursor-pointer select-none"
            >UI/UX</a>
          </li>
          <li class="px-4 my-4 md:px-10">
            <a
              @click="setMasonary('illustrator')"
              :class="{'actived': isMasonary(['illustrator'])}"
              class="text-2xl md:text-4xl transition-all duration-300 border-b-2 border-transparent font-extrabold cursor-pointer select-none"
            >Illustrator</a>
          </li>
        </ul>
      </div>
      <Grid class="mt-20">
        <Row class="gap-y-8">
          <Col
            class="sm-12 smx-6 md-4 lg-4"
            :class="{'maso-actived': isMasonary(['all', 'design'])}"
          >
            <div class="w-full h-full overflow-hidden rounded-lg relative group max-h-[490px]">
              <img
                class="w-full h-full object-cover"
                :src="require('@/assets/img/portfolio/por1.jpg')"
                alt
              />
              <div
                class="absolute flex items-center transition-all duration-300 justify-center scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 inset-0 bg-blue-600 bg-opacity-75"
              >
                <router-link
                  :to="{name: 'PortfolioDetails', params:{}}"
                  class="text-white cursor-pointer text-2xl md:text-3xl font-bold"
                >Explore</router-link>
              </div>
            </div>
          </Col>
          <Col
            :class="{'maso-actived': isMasonary(['all', 'illustrator', 'brand'])}"
            class="sm-12 smx-6 md-4 lg-3"
          >
            <div class="w-full h-full overflow-hidden rounded-lg relative group max-h-[490px]">
              <img
                class="w-full h-full object-cover"
                :src="require('@/assets/img/portfolio/por2.jpg')"
                alt
              />
              <div
                class="absolute flex items-center transition-all duration-300 justify-center scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 inset-0 bg-blue-600 bg-opacity-75"
              >
                <router-link
                  :to="{name: 'PortfolioDetails', params:{}}"
                  class="text-white cursor-pointer text-2xl md:text-3xl font-bold"
                >Explore</router-link>
              </div>
            </div>
          </Col>
          <Col
            :class="{'maso-actived': isMasonary(['all', 'brand', 'photography'])}"
            class="sm-12 smx-6 md-4 lg-5"
          >
            <div class="w-full h-full overflow-hidden rounded-lg relative group max-h-[490px]">
              <img
                class="w-full h-full object-cover"
                :src="require('@/assets/img/portfolio/por3.jpg')"
                alt
              />
              <div
                class="absolute flex items-center transition-all duration-300 justify-center scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 inset-0 bg-blue-600 bg-opacity-75"
              >
                <router-link
                  :to="{name: 'PortfolioDetails', params:{}}"
                  class="text-white cursor-pointer text-2xl md:text-3xl font-bold"
                >Explore</router-link>
              </div>
            </div>
          </Col>
          <Col
            :class="{'maso-actived': isMasonary(['all', 'design', 'ui/ux'])}"
            class="sm-12 smx-6 md-4 lg-5"
          >
            <div class="w-full h-full overflow-hidden rounded-lg relative group max-h-[490px]">
              <img
                class="w-full h-full object-cover"
                :src="require('@/assets/img/portfolio/por4.jpg')"
                alt
              />
              <div
                class="absolute flex items-center transition-all duration-300 justify-center scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 inset-0 bg-blue-600 bg-opacity-75"
              >
                <router-link
                  :to="{name: 'PortfolioDetails', params:{}}"
                  class="text-white cursor-pointer text-2xl md:text-3xl font-bold"
                >Explore</router-link>
              </div>
            </div>
          </Col>
          <Col
            :class="{'maso-actived': isMasonary(['all', 'photography', 'illustrator'])}"
            class="sm-12 smx-6 md-4 lg-7"
          >
            <div class="w-full h-full overflow-hidden rounded-lg relative group max-h-[490px]">
              <img
                class="w-full h-full object-cover"
                :src="require('@/assets/img/portfolio/por5.jpg')"
                alt
              />
              <div
                class="absolute flex items-center transition-all duration-300 justify-center scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 inset-0 bg-blue-600 bg-opacity-75"
              >
                <router-link
                  :to="{name: 'PortfolioDetails', params:{}}"
                  class="text-white cursor-pointer text-2xl md:text-3xl font-bold"
                >Explore</router-link>
              </div>
            </div>
          </Col>
          <Col
            :class="{'maso-actived': isMasonary(['all', 'design', 'ui/ux'])}"
            class="sm-12 smx-6 md-4 lg-5"
          >
            <div class="w-full h-full overflow-hidden rounded-lg relative group max-h-[490px]">
              <img
                class="w-full h-full object-cover"
                :src="require('@/assets/img/portfolio/por6.jpg')"
                alt
              />
              <div
                class="absolute flex items-center transition-all duration-300 justify-center scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 inset-0 bg-blue-600 bg-opacity-75"
              >
                <router-link
                  :to="{name: 'PortfolioDetails', params:{}}"
                  class="text-white cursor-pointer text-2xl md:text-3xl font-bold"
                >Explore</router-link>
              </div>
            </div>
          </Col>
          <Col
            :class="{'maso-actived': isMasonary(['all', 'design'])}"
            class="sm-12 smx-6 md-4 lg-3"
          >
            <div class="w-full h-full overflow-hidden rounded-lg relative group max-h-[490px]">
              <img
                class="w-full h-full object-cover"
                :src="require('@/assets/img/portfolio/por7.jpg')"
                alt
              />
              <div
                class="absolute flex items-center transition-all duration-300 justify-center scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 inset-0 bg-blue-600 bg-opacity-75"
              >
                <router-link
                  :to="{name: 'PortfolioDetails', params:{}}"
                  class="text-white cursor-pointer text-2xl md:text-3xl font-bold"
                >Explore</router-link>
              </div>
            </div>
          </Col>
          <Col
            :class="{'maso-actived': isMasonary(['all', 'design', 'photography'])}"
            class="sm-12 smx-6 md-4 lg-4"
          >
            <div class="w-full h-full overflow-hidden rounded-lg relative group max-h-[490px]">
              <img
                class="w-full h-full object-cover"
                :src="require('@/assets/img/portfolio/por8.jpg')"
                alt
              />
              <div
                class="absolute flex items-center transition-all duration-300 justify-center scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 inset-0 bg-blue-600 bg-opacity-75"
              >
                <router-link
                  :to="{name: 'PortfolioDetails', params:{}}"
                  class="text-white cursor-pointer text-2xl md:text-3xl font-bold"
                >Explore</router-link>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>

      <div class="mt-20">
        <Button class="mx-auto py-1 text-xl text-white w-full max-w-md bg-blue-600" text="See al" />
      </div>
    </Container>
  </section>
</template>

<style scoped>
.actived {
  color: rgba(29, 78, 216, 1);
  border-bottom: 2px solid rgba(29, 78, 216, 1);
}
.col {
  opacity: 0;
  transform: scale(0.7);
  display: none;
  visibility: hidden;
  transition: all 0.5s linear;
}
.col.maso-actived {
  transform: scale(1);
  opacity: 1;
  display: block;
  transition: all 0.5s linear;
  visibility: visible;
}
</style>