<script setup>
import HeaderFullNavbar from "@/layout/HeaderFullNavbar_1.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<template>
  <HeaderFullNavbar>
    <router-view />
  </HeaderFullNavbar>

  <template v-if="!$route.meta.NotFound">
    <!-- ===================== Footer =========================== -->
    <Footer></Footer>
  </template>
</template>

