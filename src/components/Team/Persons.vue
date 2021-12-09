<script setup>
import { defineProps } from "vue";
import Person from "@/components/Team/Person.vue";

defineProps(["list", "title", "description"]);
</script>

<template>
  <section class="my-primary text-center md:text-left">
    <Container>
      <h1 class="title">{{ title }}</h1>
      <p v-if="description" class="mt-7">{{ description }}</p>
      <Grid class="mt-10">
        <Row class="text-center">
          <Col class="lg-4 smx-6 sm-12" v-for="(item, index) in list" :key="index">
            <Person :image="item.image" :name="item.name" :position="item.position" />
          </Col>
        </Row>
      </Grid>
    </Container>
  </section>
</template>