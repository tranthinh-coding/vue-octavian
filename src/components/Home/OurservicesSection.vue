<template>
  <section class="mt-primary">
    <Container>
      <Grid>
        <Row>
          <Col class="lg-6 md-6 sm-12 mb-12 order-1 md:order-none">
            <div class="h-full flex flex-col justify-center">
              <h1 class="title">Our services</h1>
              <ul class="mt-9 flex flex-col gap-10 justify-start">
                <li>
                  <label class="flex items-start gap-6" for="ser-r1">
                    <input
                      class="absolute opacity-0 peer"
                      type="radio"
                      name="ser-radio"
                      id="ser-r1"
                      checked
                    />
                    <div
                      class="peer-checked:bg-gradient-to-r from-[#5376e7] to-[#7d4ae4] peer-checked:text-white text-3xl bg-gray-200 rounded-full"
                    >
                      <i
                        class="flex items-center justify-center w-[50px] h-[50px] bx bx-chevron-right"
                      ></i>
                    </div>
                    <div
                      class="h-[50px] transition-all peer-checked:h-40 overflow-hidden duration-500"
                    >
                      <div class="h-[50px] flex items-center">
                        <h3 class="title">What we do</h3>
                      </div>
                      <div class="mt-5">
                        <p
                          class="text-lg pr-9"
                        >Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac viverra ligula, in scelerisque leo.</p>
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <label class="flex items-start gap-6" for="ser-r2">
                    <input
                      class="absolute opacity-0 peer"
                      type="radio"
                      name="ser-radio"
                      id="ser-r2"
                    />
                    <div
                      class="peer-checked:bg-gradient-to-r from-[#5376e7] to-[#7d4ae4] peer-checked:text-white text-3xl bg-gray-200 rounded-full"
                    >
                      <i
                        class="flex items-center justify-center w-[50px] h-[50px] bx bx-chevron-right"
                      ></i>
                    </div>
                    <div
                      class="h-[50px] transition-all peer-checked:h-40 overflow-hidden duration-500"
                    >
                      <div class="h-[50px] flex items-center">
                        <h3 class="title">Who we are</h3>
                      </div>
                      <div class="mt-5">
                        <p
                          class="text-lg pr-9"
                        >Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac viverra ligula, in scelerisque leo.</p>
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <label class="flex items-start gap-6" for="ser-r3">
                    <input
                      class="absolute opacity-0 peer"
                      type="radio"
                      name="ser-radio"
                      id="ser-r3"
                    />
                    <div
                      class="peer-checked:bg-gradient-to-r from-[#5376e7] to-[#7d4ae4] peer-checked:text-white text-3xl bg-gray-200 rounded-full"
                    >
                      <i
                        class="flex items-center justify-center w-[50px] h-[50px] bx bx-chevron-right"
                      ></i>
                    </div>
                    <div
                      class="h-[50px] transition-all peer-checked:h-40 overflow-hidden duration-500"
                    >
                      <div class="h-[50px] flex items-center">
                        <h3 class="title">How it work</h3>
                      </div>
                      <div class="mt-5">
                        <p
                          class="text-lg pr-9"
                        >Phasellus pulvinar iaculis nunc at placerat. Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac viverra ligula, in scelerisque leo.</p>
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </Col>
          <Col class="lg-6 sm-0">
            <img class="rounded-lg ml-0 lg:ml-6" :src="require('@/assets/img/home/pman.png')" alt />
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>