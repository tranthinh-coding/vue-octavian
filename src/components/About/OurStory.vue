<template>
  <section class="py-primary relative">
    <Container>
      <Grid>
        <Row>
          <Col class="order-1 md:order-none lg-5 md-6 sm-12">
            <div
              class="flex text-center sm:text-left flex-col text-lg leading-9 p-0 sm:px-10 text-blue-gray"
            >
              <h1 class="title">Our story begins in the city of Toronto</h1>
              <p
                class="mt-12"
              >Porttitor nullam integer porta vivamus proin venenatis consectetur, potenti ultrices elementum arcu est fringilla phasellus, placerat auctor.</p>
              <p
                class="mt-16"
              >Litora consectetur praesent netus aptent ut ornare netus dictum vivamus et volutpat, nunc lorem enim urna pellentesque egestas aenean tincidunt, torquent felis orci nibh aliquam.</p>
            </div>
          </Col>
          <Col class="lg-7 md-6 sm-12 mb-15 md:mb-0">
            <div class="h-full lg:pl-24">
              <img
                class="w-full h-full rounded-lg object-cover"
                :src="require('@/assets/img/about/about_1.png')"
                alt
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col class="sm-12">
            <div class="mt-primary">
              <img class="w-full" :src="require('@/assets/img/about/full-image.png')" alt />
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>