<template>
  <section class="py-primary relative">
    <div class="fixed-bg bg-light"></div>
    <Container class="text-center md:text-left">
      <Grid>
        <Row>
          <Col class="lg-5 sm-0">
            <div class="flex items-center">
              <img
                class="mr-auto h-full drop-shadow-2xl"
                :src="require('@/assets/img/home/testimonial.png')"
                alt
              />
            </div>
          </Col>
          <Col class="lg-7 sm-12">
            <div class="h-full w-full flex flex-col lg:flex-row items-center justify-center">
              <img
                class="drop-shadow-2xl mb-8 lg:mb-0"
                :src="require('@/assets/img/home/testimonial1.png')"
                alt
              />
              <div class="rounded-xl">
                <div class="relative my-9 mx-6 md:my-12 md:mx-12">
                  <div class="absolute hidden sm:block left-0 bottom-full -translate-y-1/2">
                    <img :src="require('@/assets/img/services/quotes.png')" alt />
                  </div>
                  <p
                    class="text-xl smx:text-2xl md:text-3xl text-secondary-text leading-relaxed mb-7 smx:mb-12"
                  >
                    Rump spare ribs tail
                    <strong>pastrami ham hock turducken</strong> fatback salami. Ham hock pork belly, corned swine salami.
                  </p>
                  <h3 class="font-bold text-lg">Rufo Montes</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>