<script setup>
import Form from "@/components/Shop/ShopDetails/Form.vue";
import Comment from "@/components/Shop/ShopDetails/Comment.vue";
import Ratings from "@/components/Shop/ShopDetails/Ratings.vue";
</script>

<template>
  <section class="py-primary bg-c-gray">
    <Container>
      <!-- ======== ============================== -->
      <Ratings />
      <!-- =============== comment =================== -->
      <Comment />
      <!-- =============== form ================== -->
      <Form />
    </Container>
  </section>
</template>
