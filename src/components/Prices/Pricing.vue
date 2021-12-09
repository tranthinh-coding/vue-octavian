<script setup>
import { defineProps } from "vue";

defineProps({
  data: {
    type: Object,
    require: true,
  },
});
</script>

<template>
  <Grid>
    <Row class="-mt-8">
      <Col v-for="(item, index) in data" :key="index" class="pt-8 sm-12 md-6 lg-4">
        <div class="rounded-lg py-20 text-center shadow-lg bg-white">
          <h3 class="title">{{ item.title }}</h3>
          <div class="mt-6 flex items-end justify-center">
            <div class="flex items-start">
              <span class="text-blue-700 text-2xl md:text-4xl">$</span>
              <span class="text-blue-700 text-3xl md:text-7xl">{{ item.prices }}</span>
            </div>
            <span class="font-bold">/{{ item.cate }}</span>
          </div>
          <div class="mt-12">
            <div class="text-xl mt-5">
              <strong class="mr-1">{{ item.users }}</strong>Users
            </div>
            <div class="text-xl mt-5">
              <strong class="mr-1">{{ item.keywords }}</strong>Keywords
            </div>
            <div class="text-xl mt-5">
              <strong class="mr-1">{{ item.listas }}</strong>campañas listas
            </div>
            <div class="text-xl mt-5">
              <span v-if="item.accessToAnalytics">Access to analytics</span>
              <span v-else>No access to analytics</span>
            </div>
          </div>
          <Button
            text="Choose Plan"
            class="mt-14 px-5 py-1 mx-auto bg-gray-200 hover:bg-gradient-to-r from-c-orange to-c-red transition-all hover:text-white"
          />
        </div>
      </Col>
    </Row>
  </Grid>
</template>