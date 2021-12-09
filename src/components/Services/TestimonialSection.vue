<template>
  <section class="pb-primary pt-28 lg:pb-0 relative">
    <div class="fixed-bg bg-light"></div>
    <Container class="text-center">
      <Grid>
        <Row class="items-center">
          <Col class="sm-0 lg-4">
            <div>
              <img :src="require('@/assets/img/services/four.png')" alt />
            </div>
          </Col>
          <Col class="sm-12 lg-8">
            <div class="relative drop-shadow-2xl">
              <div class="bg-white rounded-xl">
                <div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <img :src="require('@/assets/img/services/quotes.png')" alt />
                </div>
                <div class="py-12 px-6 md:py-15 md:px-12">
                  <p
                    class="text-xl smx:text-2xl md:text-3xl text-secondary-text leading-relaxed mb-7 smx:mb-12"
                  >
                    Rump spare ribs tail
                    <strong>pastrami ham hock turducken</strong> fatback salami. Ham hock pork belly, corned swine salami.
                  </p>
                  <h3 class="font-bold text-lg">Avy Deluxer</h3>
                </div>
              </div>
              <!--testi-comment end-->
              <div
                class="absolute top-full -translate-y-1/2 md:top-0 right-0 z-[-1] md:translate-x-1/2 md:translate-y-1/2"
              >
                <img :src="require('@/assets/img/services/shape1.png')" alt />
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>