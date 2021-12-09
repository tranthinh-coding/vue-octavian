<template>
  <section class="py-primary">
    <Container class="text-center md:text-left">
      <Grid>
        <Row>
          <!-- ============================================== -->
          <Col class="lg-6 md-6 sm-12">
            <div>
              <img
                class="rounded-lg w-full object-cover"
                :src="require('@/assets/img/team-details/team-details.jpg')"
                alt
              />
            </div>
          </Col>
          <!-- ================================================= -->
          <Col class="lg-6 md-6 sm-12">
            <div class="flex pl-0 md:pl-15 flex-col gap-12">
              <p class="mt-10 md:mt-0">Web Designer</p>
              <h2 class="title">Job Julios</h2>
              <p>Porttitor nullam integer porta vivamus proin venenatis consectetur, potenti ultrices elementum.</p>
              <p>praesent netus aptent ut ornare netus dictum vivamus et volutpat, nunc lorem enim urna pellentesque egestas aenean tincidunt, torquent felis orci nibh aliquam.</p>
              <router-link
                class="font-bold text-secondary-text"
                :to="{name: `Landing`, params: {}}"
              >https://octavian.io</router-link>
              <Button
                class="xl bg-blue-600 text-white max-w-xs mx-auto md:mx-[unset]"
                text="Message"
              />
            </div>
            <!-- ================= Socical =================== -->
            <div class="pl-0 md:pl-15 mt-16">
              <ul class="flex gap-5 items-center justify-center md:justify-start">
                <li>
                  <a
                    class="hover:text-white hover:bg-blue-600 transition-all p-2 text-blue-600 text-xl rounded-full bg-white border border-gray-200 flex items-center justify-center"
                    href="javascript:void(0)"
                  >
                    <i class="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-white hover:bg-blue-600 transition-all p-2 text-blue-600 text-xl rounded-full bg-white border border-gray-200 flex items-center justify-center"
                    href="javascript:void(0)"
                  >
                    <i class="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-white hover:bg-blue-600 transition-all p-2 text-blue-600 text-xl rounded-full bg-white border border-gray-200 flex items-center justify-center"
                    href="javascript:void(0)"
                  >
                    <i class="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="hover:text-white hover:bg-blue-600 transition-all p-2 text-blue-600 text-xl rounded-full bg-white border border-gray-200 flex items-center justify-center"
                    href="javascript:void(0)"
                  >
                    <i class="bx bxl-dribbble"></i>
                  </a>
                </li>
              </ul>
              <div class="mt-15">
                <h4 class="title mb-3">
                  <span class="font-extrabold">Skype ID:</span>
                </h4>
                <span class="font-bold">Job.octavian</span>
              </div>
              <div class="mt-15">
                <h4 class="title mb-3">
                  <span class="font-extrabold">Skills:</span>
                </h4>
                <span class="font-bold">photoshop, html, css, wordpress, illustrator</span>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>