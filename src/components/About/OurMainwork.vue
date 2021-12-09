<template>
  <section class="py-primary">
    <Container class="text-center">
      <h1 class="title">Our main work team</h1>
      <p
        class="text-lg mt-8 max-w-xl mx-auto mb-20"
      >Integer eu metus at orci scelerisque rutrum. Vivamus condimentu ipsum vitae iaculis cursus, turpis nisl.</p>
      <Grid>
        <Row class="gap-y-10">
          <Col class="lg-4 md-6 sm-12">
            <div class="flex flex-col gap-y-7">
              <div class="rounded-lg group overflow-hidden relative h-[430px]">
                <img
                  class="h-full w-full object-cover"
                  :src="require('@/assets/img/about/about_work_team1.png')"
                  alt
                />
                <div
                  class="absolute transition-all opacity-0 group-hover:opacity-100 duration-300 inset-0 bg-blue-600 bg-opacity-60 w-full h-full"
                >
                  <ul
                    class="flex mt-14 group-hover:mt-0 transition-all duration-300 w-full h-full items-center justify-center gap-[30px] text-xl"
                  >
                    <li
                      class="w-10 h-10 rounded-full bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-facebook"></i>
                    </li>
                    <li
                      class="w-10 h-10 rounded-full bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-twitter"></i>
                    </li>
                    <li
                      class="w-10 h-10 rounded-full bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-instagram"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <span>
                <a
                  href="javascript:void(0)"
                  class="text-secondary-text text-2xl font-bold hover:text-blue-600 transition-all"
                >Ivan Slavic</a>
              </span>
              <p class="text-sm">Designer</p>
            </div>
          </Col>
          <Col class="lg-4 md-6 sm-12">
            <div class="flex flex-col gap-y-7">
              <div class="rounded-lg group overflow-hidden relative h-[430px]">
                <img
                  class="h-full w-full object-cover"
                  :src="require('@/assets/img/about/about_work_team2.png')"
                  alt
                />
                <div
                  class="absolute transition-all opacity-0 group-hover:opacity-100 duration-300 inset-0 bg-blue-600 bg-opacity-60 w-full h-full"
                >
                  <ul
                    class="flex mt-14 group-hover:mt-0 transition-all duration-300 w-full h-full items-center justify-center gap-[30px] text-xl"
                  >
                    <li
                      class="w-10 h-10 rounded-full bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-facebook"></i>
                    </li>
                    <li
                      class="w-10 h-10 rounded-full bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-twitter"></i>
                    </li>
                    <li
                      class="w-10 h-10 rounded-full bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-instagram"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <span>
                <a
                  href="javascript:void(0)"
                  class="text-secondary-text text-2xl font-bold hover:text-blue-600 transition-all"
                >Lucy Glovert</a>
              </span>
              <p class="text-sm">Developer</p>
            </div>
          </Col>
          <Col class="lg-4 md-6 md-o-3 lg-o-0 sm-12">
            <div class="flex flex-col gap-y-7">
              <div class="rounded-lg group overflow-hidden relative h-[430px]">
                <img
                  class="h-full w-full object-cover"
                  :src="require('@/assets/img/about/about_work_team3.png')"
                  alt
                />
                <div
                  class="absolute transition-all opacity-0 group-hover:opacity-100 duration-300 inset-0 bg-blue-600 bg-opacity-60 w-full h-full"
                >
                  <ul
                    class="flex mt-14 group-hover:mt-0 transition-all duration-300 w-full h-full items-center justify-center gap-[30px] text-xl"
                  >
                    <li
                      class="w-10 h-10 rounded-full bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-facebook"></i>
                    </li>
                    <li
                      class="w-10 h-10 rounded-full bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-twitter"></i>
                    </li>
                    <li
                      class="w-10 h-10 rounded-full bg-blue-300 text-white hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                    >
                      <i class="bx bxl-instagram"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <span>
                <a
                  href="javascript:void(0)"
                  class="text-secondary-text text-2xl font-bold hover:text-blue-600 transition-all"
                >Lyli Crush</a>
              </span>
              <p class="text-sm">SEO Specialist</p>
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>