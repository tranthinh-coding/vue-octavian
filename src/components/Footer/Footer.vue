<template>
  <div id="footer" class="relative z-50 w-full">
    <FooterTop />
    <FooterBot />
  </div>
</template>

<script>
import FooterTop from "@/components/Footer/FooterTop.vue";
import FooterBot from "@/components/Footer/FooterBot.vue";
export default {
  name: "TheFooter",
  components: {
    FooterTop,
    FooterBot,
  },
};
</script>

<style scoped></style>
