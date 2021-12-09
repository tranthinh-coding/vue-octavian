
<script setup>
import { onMounted } from "vue";

import { Validator } from "@/ulti/formvalidated";

const formSubmit = (data) => {
  console.log({ data });
};

onMounted(() => {
  new Validator({
    form: "#form-main",
    rules: [
      Validator.isRequired("#main-name"),
      Validator.isRequired("#main-content"),
      Validator.isEmail("#main-email"),
    ],
    formGroupSelector: ".form-group ",
    errorSelector: ".form-danger",
    classDanger: "form-error", // classDanger for form group
    onSubmit: formSubmit,
  });
});
</script>

<template>
  <section class="py-primary relative z-0">
    <div
      class="fixed-bg before:absolute before:inset-0 before:bg-gray-900 before:opacity-75"
      :style="{backgroundImage: `url(${require('@/assets/img/home/bgcontact.png')}`}"
    ></div>
    <Container class="text-center">
      <div>
        <h2 class="title">
          <span class="pr-3 text-white font-semibold">Contact us to</span>
          <span class="text-white">Grow your Business</span>
        </h2>
        <p
          class="text-white max-w-lg mt-7 leading-8 mx-auto"
        >Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum vitae iaculis cursus, turpis nisl ultricies massa.</p>

        <!-- ========================= -->
        <div class="max-w-lg mx-auto mt-16">
          <form id="form-main" @submit.prevent>
            <div class="form-group">
              <label for="main-name">
                <input
                  class="form-control"
                  type="text"
                  name="name"
                  id="main-name"
                  placeholder="Antho_"
                />
                <span class="form-danger"></span>
              </label>
            </div>
            <div class="form-group">
              <label for="main-email">
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  id="main-email"
                  placeholder="E.g., a.octavian@gmail.com"
                />
                <span class="form-danger"></span>
              </label>
            </div>
            <div class="form-group">
              <label for="main-content">
                <textarea
                  class="form-control"
                  type="text"
                  name="content"
                  id="main-content"
                  cols="30"
                  rows="4"
                  style="resize: none;"
                  placeholder="Write us your message"
                />
                <span class="form-danger"></span>
              </label>
            </div>
            <div class="w-full mx-auto mt-8">
              <Button class="w-full text-white bg-blue-700" text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.form-group {
  margin-bottom: 15px;
}
</style>