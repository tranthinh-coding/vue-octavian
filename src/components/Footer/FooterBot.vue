<template>
  <div class="py-16 relative bg-[#252b36]">
    <div class="absolute w-full h-0 top-0 left-0">
      <Container class="h-0 w-full">
        <div class="relative">
          <div
            class="absolute cursor-pointer right-0 top-0 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-md"
            :style="{
              background: bgColor,
              color: color,
              fontSize: size,
            }"
            @click="toTop"
          >
            <i class="bx bxs-rocket"></i>
          </div>
        </div>
      </Container>
    </div>
    <Container class="relative">
      <span>
        Copyright © 2020 Octavian, Designed by
        <a
          href="javascript:void(0)"
          class="text-white"
        >TexTheme</a> All Rights
        Reserved.
      </span>
    </Container>
  </div>
</template>

<script>
export default {
  name: "TheFooterBot",
  props: {
    bgColor: {
      type: String,
      default: "#4a44f2",
    },
    color: {
      type: String,
      default: "#ffffff",
    },
    size: {
      type: String,
      default: "28px",
    },
  },
  setup() {
    const toTop = () => {
      window.scrollTo(0, 0);
    };
    return { toTop };
  },
};
</script>

<style scoped></style>
