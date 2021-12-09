<script setup>
import { onMounted } from "vue";

import { Validator } from "@/ulti/formvalidated";

const formSubmit = (data) => {
  console.log({ data });
};

onMounted(() => {
  new Validator({
    form: "#form-team",
    rules: [
      Validator.isRequired("#team-name"),
      Validator.isRequired("#team-content"),
      Validator.isEmail("#team-email"),
    ],
    formGroupSelector: ".form-group",
    errorSelector: ".form-danger",
    classDanger: "form-error", // classDanger for form group
    onSubmit: formSubmit,
  });
});
</script>

<template>
  <section class="py-primary relative">
    <Container class="text-center smx:text-left">
      <Grid>
        <Row>
          <Col class="sm-12 lg-5">
            <h1 class="title">Leave us a message</h1>
            <div class="mt-16">
              <form id="form-team" @submit.prevent>
                <div class="flex space-x-0 flex-col lg:flex-row lg:space-x-8">
                  <div class="form-group">
                    <label for="team-name">
                      <input
                        class="form-control"
                        type="text"
                        name="name"
                        id="team-name"
                        placeholder="Antho_"
                      />
                      <span class="form-danger"></span>
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="team-email">
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        id="team-email"
                        placeholder="E.g., a.octavian@gmail.com"
                      />
                      <span class="form-danger"></span>
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <label for="team-content">
                    <textarea
                      class="form-control"
                      type="text"
                      name="content"
                      id="team-content"
                      cols="30"
                      rows="8"
                      style="resize: none;"
                      placeholder="Write us your message"
                    />
                    <span class="form-danger"></span>
                  </label>
                </div>
                <Button
                  class="bg-blue-600 mt-10 w-full max-w-sm mx-auto lg:mx-[unset] text-white"
                  text="Submit"
                />
              </form>
            </div>
          </Col>
          <Col class="sm-0 lg-7 -mb-primary">
            <div class="flex items-end h-full">
              <img :src="require('@/assets/img/team-details/obj.png')" alt />
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>