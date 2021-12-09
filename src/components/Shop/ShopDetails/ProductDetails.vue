<script setup>
import { ref, provide, inject, watch } from "vue";
import { useRoute } from "vue-router";

import ProductDetailsImage from "@/components/Shop/ShopDetails/ProductDetailsImage.vue";
import ProductDetailsInfo from "@/components/Shop/ShopDetails/ProductDetailsInfo.vue";
import MoreProducts from "@/components/Shop/ShopDetails/MoreProducts.vue";
import ProductStar from "@/components/Shop/ShopDetails/ProductStar.vue";

const route = useRoute();
const selectOption = ref({
  id: null,
  size: null,
  quantity: 1,
  color: null,
});

watch(
  () => route.query.id,
  () => {
    selectOption.value = {
      id: null,
      size: null,
      quantity: 1,
      color: null,
    };
  }
);

const product = inject("product");

provide("selectOption", selectOption);
</script>

<template>
  <div class="text-center md:text-left">
    <Container class="py-primary w-full">
      <Grid>
        <Row>
          <!-- =================== Image ========================= -->
          <Col class="sm-12 md-6 lg-5">
            <ProductDetailsImage />
          </Col>
          <Col class="sm-12 md-6 lg-5 lg-o-2">
            <!-- =================== Info ========================== -->
            <ProductDetailsInfo />
          </Col>
        </Row>
      </Grid>
      <!-- =================== Description =================== -->
      <div class="pt-primary">
        <ul
          class="flex justify-center items-center md:items-start md:justify-start flex-wrap gap-12 font-semibold"
        >
          <li>Description</li>
          <li>Specifications</li>
          <li>Suggestions</li>
          <li>Ratings</li>
        </ul>
      </div>

      <div class="pt-primary">
        <Grid>
          <Row>
            <Col class="sm-12 md-6 lg-6">
              <div class="max-w-lg h-full w-full flex flex-col justify-center">
                <h1 class="title">Description</h1>
                <p
                  class="mt-10"
                >Porttitor nullam integer porta vivamus proin venenatis consectetur, potenti ultrices elementum arcu est fringilla phasellus, placerat auctor litora consectetur.</p>
                <p
                  class="mt-10"
                >praesent netus aptent ut ornare netus dictum vivamus et volutpat, nunc lorem enim urna pellentesque egestas aenean tincidunt, torquent felis orci nibh aliquam.</p>
              </div>
            </Col>
            <Col class="sm-12 md-6 lg-6 mt-10 md:mt-0">
              <div class="max-h-[500px] h-full overflow-hidden">
                <img
                  class="object-cover w-full h-full rounded-md"
                  :src="product.colors[Object.keys(product.colors)[0]]"
                  alt
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>

      <!-- ======================================== -->
      <div class="pt-primary">
        <div class="c-grid">
          <div class="row">
            <div class="col sm-12 md-6">
              <div class="max-w-lg flex flex-col h-full justify-center">
                <h1 class="title">Specifications</h1>
                <p
                  class="mt-10"
                >Porttitor nullam integer porta vivamus proin venenatis consectetur, potenti.</p>
                <p
                  class="mt-10"
                >praesent netus aptent ut ornare netus dictum vivamus et volutpat, nunc lorem enim urna pellentesque egestas aenean tincidunt.</p>
              </div>
            </div>
            <div class="col sm-12 md-6 mt-10 md:mt-0">
              <ul class="border border-gray-200 rounded-md">
                <li class="flex justify-between py-4 border-b border-gray-200 px-4">
                  <span>Brand:</span>
                  <span>Octavian</span>
                </li>
                <li class="flex justify-between py-4 border-b border-gray-200 px-4">
                  <span>Material:</span>
                  <span>Mahogany</span>
                </li>
                <li class="flex justify-between py-4 border-b border-gray-200 px-4">
                  <span>Dimensions:</span>
                  <span>15”W * 24”D * 17”H</span>
                </li>
                <li class="flex justify-between py-4 border-b border-gray-200 px-4">
                  <span>Weight:</span>
                  <span>3300g</span>
                </li>
                <li class="flex justify-between py-4 border-b border-gray-200 px-4">
                  <span>Model Number:</span>
                  <span>000C33814Q</span>
                </li>
                <li class="flex justify-between py-4 px-4">
                  <span>Model Number:</span>
                  <span>California</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- ================== More Product ================== -->

      <div class="pt-primary">
        <MoreProducts />
      </div>
    </Container>
    <ProductStar />
  </div>
</template>


