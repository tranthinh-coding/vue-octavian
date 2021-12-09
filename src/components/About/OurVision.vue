<template>
  <section class="py-primary relative">
    <div class="fixed-bg bg-light"></div>
    <Container class="mb-0 xl:mb-20">
      <Grid>
        <Row>
          <Col class="sm-12 md-6 lg-6">
            <div class="relative">
              <img
                class="absolute bottom-0 left-0 hidden xl:block top-28 z-10 rounded-xl"
                :src="require('@/assets/img/about/about_6.jpg')"
                alt
              />
              <div class="m-auto w-full h-full max-w-[470px]">
                <img
                  class="w-full h-full rounded-xl"
                  :src="require('@/assets/img/about/about_7.jpg')"
                  alt
                />
              </div>
            </div>
          </Col>
          <Col class="sm-12 md-6 lg-6">
            <div
              class="flex text-center md:text-left mt-9 md:mt-0 flex-col h-full justify-center gap-14"
            >
              <div>
                <h1 class="title">Our vision is kind to the Environment</h1>
              </div>
              <div class>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim. Integer tincidunt viverra est, non congue lorem.
                  Get Started
                </p>
              </div>
              <div class="md:max-w-xs">
                <Button text="Get Started" class="w-full bg-blue-600 text-white"></Button>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>