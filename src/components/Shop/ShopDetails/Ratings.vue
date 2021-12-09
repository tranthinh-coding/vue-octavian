<script setup>
import ProgressLine from "@/components/Progressbar/ProgressLine.vue";
</script>

<template>
  <div>
    <h1 class="title">Ratings and reviews</h1>
    <div class="pt-[48px] md:pt-[75px]">
      <Grid>
        <Row>
          <Col class="sm-12 md-6 lg-6">
            <div class="md:pr-7">
              <div
                class="flex justify-center items-center gap-12 bg-secondary-text text-white-eee px-7 py-14 rounded-lg"
              >
                <div>
                  <span class="text-5xl md:text-7xl font-light">
                    4.8
                    <span class="text-2xl -ml-4 md:text-3xl">%</span>
                  </span>
                </div>
                <div>
                  <div>33 reviews</div>
                  <div class="text-c-orange">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col class="sm-12 md-6 lg-6">
            <div class="md:px-5">
              <h1
                class="text-xl mt-6 md:mt-0 md:text-2xl font-semibold text-secondary-text"
              >Recommend this product</h1>
              <ProgressLine class="my-6" progress="95" />
              <div class="flex gap-4">
                <p class="md:text-7xl w-36 whitespace-nowrap text-5xl font-light">
                  96
                  <span class="md:text-3xl -ml-2 lg:-ml-4 text-3xl">%</span>
                </p>
                <p class="smx:text-lg md:ml-8">of consumers recommend this product</p>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
</template>