<script setup>
const teams = [
  {
    name: "Lucas Simas",
    position: "Co Founder",
    image: require("@/assets/img/home/team1.jpg"),
  },
  {
    name: "Josefin Lauren",
    position: "Co Founder",
    image: require("@/assets/img/home/team2.jpg"),
  },
  {
    name: "Lucas Simas",
    position: "Co Founder",
    image: require("@/assets/img/home/team3.jpg"),
  },
];
</script>

<template>
  <section class="py-primary">
    <Container class="text-center">
      <h1 class="title">The team of specialists</h1>
      <p
        class="mt-10 max-w-md mx-auto"
      >Integer eu metus at orci scelerisque rutrum. Vivamus condimentu ipsum vitae iaculis cursus, turpis nisl.</p>

      <Grid class="mt-15 md:mt-24">
        <Row class="gap-y-8">
          <Col v-for="(member, index) in teams" :key="index" class="lg-4 md-6 sm-12">
            <div class="flex flex-col gap-y-5">
              <div class="rounded-lg group overflow-hidden relative h-[430px]">
                <img class="h-full w-full object-cover" lazyload :src="member.image" alt />
                <div
                  class="absolute flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 duration-300 inset-0 bg-gray-800 bg-opacity-60 w-full h-full"
                >
                  <a href="javascript:void(0)" class="hover:text-blue-600 transition-all">
                    <h3 class="title">
                      <span class="text-white">{{ member.name }}</span>
                    </h3>
                  </a>
                  <p class="text-sm text-gray-50">{{ member.position }}</p>
                  <ul
                    class="flex w-full mt-14 group-hover:mt-10 transition-all duration-300 items-center justify-center gap-[30px] text-xl"
                  >
                    <li
                      class="w-10 h-10 rounded-full cursor-pointer bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-facebook"></i>
                    </li>
                    <li
                      class="w-10 h-10 rounded-full cursor-pointer bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-twitter"></i>
                    </li>
                    <li
                      class="w-10 h-10 rounded-full cursor-pointer bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-instagram"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>