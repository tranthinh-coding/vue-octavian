<script setup>
// import HeaderFullNavbar from "@/layout/HeaderFullNavbar_1.vue";
import MainSlider from "@/components/Main/Slider.vue";
</script>


<template>
  <!-- <HeaderFullNavbar> -->
  <MainSlider />
  <!-- ======================================== -->
  <section class="py-primary">
    <Container>
      <div>
        <img
          class="w-full"
          :src="require('@/assets/img/portfolio-details/portfolio-large.jpg')"
          alt
        />
      </div>
      <!-- ======================================== -->

      <Grid class="mt-15 text-center md:text-left">
        <!-- ======================================== -->
        <Row>
          <Col class="lg-7 md-6 sm-12">
            <h1 class="title">Project description</h1>
            <p
              class="mt-10 text-lg leading-8"
            >Porttitor nullam integer porta vivamus proin venenatis consectetur, potenti ultrices elementum arcu est fringilla phasellus, placerat auctor litora consectetur.</p>
            <p
              class="mt-10 text-lg leading-8"
            >praesent netus aptent ut ornare netus dictum vivamus et volutpat, nunc lorem enim urna pellentesque egestas aenean tincidunt, torquent felis orci nibh aliquam.</p>
            <!-- ======== Socical ====================== -->
            <div class="mt-16 lg:mt-24 flex-col md:flex-row items-center flex gap-8">
              <div>
                <h3 class="title">Shared:</h3>
              </div>
              <ul class="flex gap-5 items-center">
                <li>
                  <a
                    class="hover:text-white hover:bg-blue-600 transition-all p-2 text-blue-600 text-xl rounded-full bg-white border border-gray-200 flex items-center justify-center"
                    href="javascript:void(0)"
                  >
                    <i class="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-white hover:bg-blue-600 transition-all p-2 text-blue-600 text-xl rounded-full bg-white border border-gray-200 flex items-center justify-center"
                    href="javascript:void(0)"
                  >
                    <i class="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-white hover:bg-blue-600 transition-all p-2 text-blue-600 text-xl rounded-full bg-white border border-gray-200 flex items-center justify-center"
                    href="javascript:void(0)"
                  >
                    <i class="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-white hover:bg-blue-600 transition-all p-2 text-blue-600 text-xl rounded-full bg-white border border-gray-200 flex items-center justify-center"
                    href="javascript:void(0)"
                  >
                    <i class="bx bxl-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col class="lg-5 md-6 sm-12">
            <div class="mt-6 md:mt-0">
              <h3 class="!font-extrabold title">Created</h3>
              <span class="text-lg">March 19th, 2020</span>
            </div>
            <div class="mt-6 md:mt-10">
              <h3 class="!font-extrabold title">Client:</h3>
              <span class="text-lg">Envato Marketplace</span>
            </div>
            <div class="mt-6 md:mt-10">
              <h3 class="!font-extrabold title">Category:</h3>
              <span class="text-lg">Photography, Brand, Design</span>
            </div>
            <div class="mt-6 md:mt-10">
              <h3 class="!font-extrabold title">Dimensions:</h3>
              <span class="text-lg">6000x2844 px</span>
            </div>
          </Col>
        </Row>
      </Grid>

      <div class="mt-24">
        <h1 class="title">You may also like</h1>
        <div class="mt-6 md:mt-10">
          <Grid>
            <Row class="gap-y-8">
              <Col class="sm-12 md-6 lg-4">
                <div class="rounded-lg overflow-hidden max-h-[491px] h-full">
                  <img
                    class="w-full h-full object-cover"
                    :src="require('@/assets/img/portfolio-details/11.png')"
                    alt
                  />
                </div>
              </Col>
              <Col class="sm-12 md-6 lg-4">
                <div class="rounded-lg overflow-hidden max-h-[491px] h-full">
                  <img
                    class="w-full h-full object-cover"
                    :src="require('@/assets/img/portfolio-details/12.png')"
                    alt
                  />
                </div>
              </Col>
              <Col class="sm-12 md-6 md-o-3 lg-o-0 lg-4">
                <div class="rounded-lg overflow-hidden max-h-[491px] h-full">
                  <img
                    class="w-full h-full object-cover"
                    :src="require('@/assets/img/portfolio-details/13.png')"
                    alt
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </Container>
  </section>
  <!-- </HeaderFullNavbar> -->
</template>