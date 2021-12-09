<template>
  <section class="py-primary relative">
    <Container>
      <Grid>
        <Row>
          <Col class="lg-6 md-6 sm-12">
            <div class="relative h-full">
              <div class="lg:max-w-lg h-full w-full pb-12 md:pb-0 xl:pb-28 xl:ml-auto">
                <img
                  class="w-full h-full rounded-lg"
                  :src="require('@/assets/img/services/bgthree.png')"
                  alt
                />
              </div>
              <div class="absolute xl:mt-28 top-0 left-0 w-80 h-96 hidden xl:block">
                <img
                  class="w-full h-full object-cover rounded-lg"
                  :src="require('@/assets/img/services/three.png')"
                  alt
                />
              </div>
            </div>
          </Col>

          <!-- ==================================== -->
          <Col class="lg-6 md-6 sm-12">
            <div class="flex text-center md:text-left flex-col gap-14 lg:pl-28 lg:pr-20">
              <h1 class="title">You still have some doubts about it</h1>

              <p
                class="text-lg"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim. Integer tincidunt viverra est, non congue lorem.</p>

              <Button class="w-full max-w-sm bg-blue-600 text-white font-bold" text="Ask us"></Button>
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>