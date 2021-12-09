<template>
  <Grid>
    <Row>
      <Col v-for="(product, index) in products" class="sm-12 smx-6 md-4 lg-3" :key="index">
        <Product :product="product" class="show-on-scroll to-top !mb-[40px] w-full" />
      </Col>
    </Row>
  </Grid>
</template>

<script setup>
import { defineProps } from "vue";
import Product from "@/components/Shop/Product.vue";

defineProps(["products"]);
</script>


