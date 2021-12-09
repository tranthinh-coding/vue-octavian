<script setup>
import { ref } from "vue";
import MediaScreen from "./MediaScreen.vue";

const isOpen = ref(false);

const openMedia = () => {
  isOpen.value = true;
};

const closeMedia = () => {
  isOpen.value = false;
};
</script>

<template>
  <section class="py-primary relative">
    <div class="fixed-bg bg-light"></div>
    <Container>
      <Grid>
        <Row>
          <Col class="sm-12">
            <div class="rounded-xl overflow-hidden relative w-full">
              <div class="overlay"></div>
              <img class="w-full" :src="require('@/assets/img/services/msc-img.jpg')" alt />
              <div
                class="absolute inset-0 h-full w-full flex flex-col items-center justify-center gap-7"
              >
                <Button @click="openMedia" class="bg-transparent">
                  <Playmedia
                    x="0px"
                    y="0px"
                    class="text-white fill-current"
                    width="80"
                    height="80"
                    stroke="#fff"
                    stroke-width="2"
                  />
                </Button>
                <div class="hidden pointer-events-none lg:block">
                  <h2 class="lg:text-4xl font-extrabold text-white-eee">How we work</h2>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
    <MediaScreen @click="closeMedia" class="fixed inset-0 z-[9999]" v-if="isOpen"></MediaScreen>
  </section>
</template>