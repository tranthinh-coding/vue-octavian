<script setup>
import { onMounted } from "vue";

import { Validator } from "@/ulti/formvalidated";

const formSubmit = (data) => {
  console.log({ data });
};

onMounted(() => {
  new Validator({
    form: "#form-contact",
    rules: [
      Validator.isRequired("#contact-name"),
      Validator.isRequired("#contact-content"),
      Validator.isEmail("#contact-email"),
    ],
    formGroupSelector: ".form-group",
    errorSelector: ".form-danger",
    classDanger: "form-error", // classDanger for form group
    onSubmit: formSubmit,
  });
});
</script>

<template>
  <section class="py-primary">
    <Container>
      <Grid>
        <Row>
          <Col class="sm-12 lg-5">
            <div class="text-center smx:text-left">
              <h1 class="title">Leave us a message</h1>
            </div>
            <div class="mt-16">
              <form id="form-contact" @submit.prevent>
                <div class="form-group">
                  <label for="contact-name">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      id="contact-name"
                      placeholder="Antho_"
                    />
                    <span class="form-danger"></span>
                  </label>
                </div>
                <div class="form-group">
                  <label for="contact-email">
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      id="contact-email"
                      placeholder="E.g., a.octavian@gmail.com"
                    />
                    <span class="form-danger"></span>
                  </label>
                </div>
                <div class="form-group">
                  <label for="contact-content">
                    <textarea
                      class="form-control"
                      type="text"
                      name="content"
                      id="contact-content"
                      cols="30"
                      rows="8"
                      style="resize: none;"
                      placeholder="Write us your message"
                    />
                    <span class="form-danger"></span>
                  </label>
                </div>
                <div class="w-full mt-10 smx:w-72">
                  <Button class="w-full bg-blue-600 text-white" text="Submit" />
                </div>
              </form>
            </div>
          </Col>
          <Col class="sm-0 lg-7">
            <img :src="require('@/assets/img/contact/object.png')" alt />
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>