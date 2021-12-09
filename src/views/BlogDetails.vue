<script setup>
// import HeaderFullNavbar from "@/layout/HeaderFullNavbar_1.vue";
import MainSlider from "@/components/Main/Slider.vue";
import Content from "@/components/Blog/Details/Content.vue";
import Comment from "@/components/Blog/Details/Comment.vue";
import Social from "@/components/Blog/Details/Social.vue";
import Alsolike from "@/components/Blog/Details/Alsolike.vue";
import Form from "@/components/Blog/Details/Form.vue";
import RecentBlog from "@/components/Blog/Details/RecentBlog.vue";
</script>

<template>
  <!-- <HeaderFullNavbar> -->
  <MainSlider />
  <!-- ===================================== -->
  <section class="mb-9 md:mb-16 my-primary">
    <Container>
      <div class="rounded-lg max-h-[660px] h-full w-full overflow-hidden">
        <img class="w-full h-full" :src="require('@/assets/img/blog-details/bldetails.png')" alt />
      </div>
    </Container>
  </section>
  <!-- ===================================== -->
  <section class="text-center my-primary md:text-left">
    <Container>
      <Grid>
        <Row>
          <Col class="lg-8 sm-12 text-lg">
            <div class="lg:pr-24 pr-0">
              <!-- =================== Content ================= -->
              <Content />
              <!-- ======== Social ====================== -->
              <Social />
              <!-- ================ Also like ============ -->
              <Alsolike />
              <!-- ================== Comment ================== -->
              <Comment />
              <!-- =============== Form ================== -->
              <Form />
            </div>
          </Col>
          <!-- ========= Recent Blog ===================== -->
          <RecentBlog />
        </Row>
      </Grid>
    </Container>
  </section>
  <!-- </HeaderFullNavbar> -->
</template>
