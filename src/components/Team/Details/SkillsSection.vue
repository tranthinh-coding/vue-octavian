<script setup>
import ProgressLine from "@/components/Progressbar/ProgressLine.vue";
</script>

<template>
  <section class="py-primary relative">
    <div class="fixed-bg bg-light"></div>
    <Container class="text-center md:text-left">
      <h1 class="title">Job Julios Skills</h1>
      <Grid>
        <Row>
          <Col class="sm-12 lg-6">
            <div class="mt-16">
              <h3 class="title">Photoshop</h3>
              <ProgressLine class="my-6" progress="97" />
              <div class="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
                <p class="md:text-7xl w-36 whitespace-nowrap text-5xl font-light">
                  97
                  <span class="md:text-3xl -ml-2 lg:-ml-4 text-3xl">%</span>
                </p>
                <p class="smx:text-lg md:ml-8">I have the highest level of Adobe Photoshop expert</p>
              </div>
            </div>
          </Col>
          <Col class="sm-12 lg-6">
            <div class="mt-16">
              <h3 class="title">Wordpress</h3>
              <ProgressLine class="my-6" progress="95" />
              <div class="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
                <p class="md:text-7xl w-36 whitespace-nowrap text-5xl font-light">
                  95
                  <span class="md:text-3xl -ml-2 lg:-ml-4 text-3xl">%</span>
                </p>
                <p class="smx:text-lg md:ml-8">I am passionate about WordPress and all its features</p>
              </div>
            </div>
          </Col>
          <Col class="sm-12 lg-6">
            <div class="mt-16">
              <h3 class="title">illustrator</h3>
              <ProgressLine class="my-6" progress="97" />
              <div class="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
                <p class="md:text-7xl w-36 whitespace-nowrap text-5xl font-light">
                  97
                  <span class="md:text-3xl -ml-2 lg:-ml-4 text-3xl">%</span>
                </p>
                <p class="smx:text-lg md:ml-8">An experience using this tool for 2 years</p>
              </div>
            </div>
          </Col>
          <Col class="sm-12 lg-6">
            <div class="mt-16">
              <h3 class="title">HTML Y CSS</h3>
              <ProgressLine class="my-6" progress="36" />
              <div class="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
                <p class="md:text-7xl w-36 whitespace-nowrap text-5xl font-light">
                  36
                  <span class="md:text-3xl -ml-2 lg:-ml-4 text-3xl">%</span>
                </p>
                <p class="smx:text-lg md:ml-8">I have the highest level of Adobe Photoshop expert</p>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>