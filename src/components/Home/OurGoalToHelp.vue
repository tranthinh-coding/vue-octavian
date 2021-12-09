<template>
  <section class="pt-primary">
    <Container>
      <Grid>
        <Row>
          <Col class="lg-6 md-6 sm-12 md:order-2">
            <div class="lg:pl-16 relative z-0 h-full">
              <div class="lg:max-w-lg h-full w-full md:pb-0 xl:pb-28 xl:mr-auto">
                <img
                  class="w-full h-full rounded-lg object-cover"
                  :src="require('@/assets/img/home/p3.jpg')"
                  alt
                />
              </div>
              <div class="absolute z-[-1] xl:mt-16 top-0 right-0 w-80 h-96 hidden xl:block">
                <img
                  class="w-full h-full object-cover rounded-lg"
                  :src="require('@/assets/img/home/p2.jpg')"
                  alt
                />
              </div>
            </div>
          </Col>

          <!-- ==================================== -->
          <Col class="lg-6 md-6 sm-12">
            <div
              class="flex text-center lg:pr-16 md:text-left flex-col mt-7 lg:mt-0 gap-8 lg:gap-14"
            >
              <h1 class="title">Our goal is to help Business</h1>
              <p
                class="text-lg"
              >Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac vicerra ligula, in scelerisque leo.</p>
              <Button
                class="max-w-xs mx-auto md:mx-[unset] w-full text-white bg-blue-600"
                text="Get Started"
              />
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>