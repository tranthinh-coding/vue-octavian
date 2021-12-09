<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isScroll = ref(false);

const handleScroll = () => {
  const header = document.getElementById("header");
  if (window.scrollY > header.clientHeight / 5) {
    isScroll.value = true;
    header.classList.add("shrink");
  }
  if (window.scrollY <= header.clientHeight / 5) {
    if (isScroll.value) {
      isScroll.value = false;
      header.classList.remove("shrink");
    }
  }
};

const goHome = () => {
  router.push({ name: "Landing", params: {} });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="fixed inset-0 z-[99999]">
    <div class="fixed top-0 left-0 right-0">
      <div id="header" class="h-header">
        <Container class="h-full">
          <div class="h-full flex items-center">
            <img :src="require('@/assets/img/logo/LogoDarkBlue.png')" alt />
          </div>
        </Container>
      </div>
    </div>
    <div class="error-page h-full">
      <Container class="h-full">
        <div class="flex h-full items-center justify-center">
          <Grid>
            <Row>
              <Col class="sm-12 lg-5 order-2 lg:order-first">
                <div
                  class="flex flex-col h-full justify-center items-center lg:items-start space-y-10"
                >
                  <h1 class="title mt-6 lg:mt-0">Oops!</h1>
                  <p
                    class="text-base lg:text-xl"
                  >A cable is broken, please try again later or go to the home pag</p>

                  <Button @click="goHome" size="lg">
                    <h4 class="text-xl font-semibold text-white">Go back to Home</h4>
                  </Button>
                </div>
              </Col>
              <Col class="sm-12 lg-7">
                <div>
                  <img :src="require('@/assets/img/error/error.png')" alt />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Container>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  background-image: url("../assets/img/error/error-bg.jpg");
  background-repeat: no-repeat;
  background-position: right;
  height: 100vh;
}
@media (max-width: 991px) {
  .error-page {
    height: auto;
    text-align: center;
  }
}
</style>