<template>
  <section class="py-primary relative">
    <div class="fixed-bg bg-light"></div>
    <Container class="text-primary-text">
      <Grid>
        <Row class="gap-y-5">
          <Col class="lg-4 smx-6 sm-12">
            <div
              class="rounded-lg shadow-sm overflow-hidden bg-white flex flex-col gap-8 items-center justify-center w-full px-6 py-16 md:py-24"
            >
              <div class="w-[100px] h-[100px] flex items-center justify-center">
                <img :src="require('@/assets/img/contact/mailbox.png')" alt />
              </div>
              <h3 class="title">Our Address</h3>
              <p
                class="max-w-[250px] text-center"
              >Envato Pty Ltd 13/2 Elizabeth St melbourne VLC 3000 Australia.</p>
            </div>
          </Col>
          <!--serivce_col end-->
          <Col class="lg-4 smx-6 sm-12">
            <div
              class="rounded-lg shadow-sm overflow-hidden bg-white flex flex-col gap-8 items-center justify-center w-full px-6 py-16 md:py-24"
            >
              <div class="w-[100px] h-[100px] flex items-center justify-center">
                <img :src="require('@/assets/img/contact/phone.png')" alt />
              </div>
              <h3 class="title">High Creative Minds</h3>
              <p class="max-w-[250px] text-center">
                Office: 1-800-763-5400
                1-800-763-5400
              </p>
            </div>
            <!--serivce_col end-->
          </Col>
          <Col class="lg-4 lg-o-0 smx-6 smx-o-3 sm-12">
            <div
              class="rounded-lg shadow-sm overflow-hidden bg-white flex flex-col gap-8 items-center justify-center w-full px-6 py-16 md:py-24"
            >
              <div class="w-[100px] h-[100px] flex items-center justify-center">
                <img :src="require('@/assets/img/contact/navigation.png')" alt />
              </div>
              <h3 class="title">Multiple Rewards</h3>
              <p class="max-w-[250px] text-center">
                Info@octavian.io
                support@octavian.io
              </p>
            </div>
            <!--serivce_col end-->
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>