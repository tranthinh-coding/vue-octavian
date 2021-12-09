<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const toBlogDetail = () => {
  router.push({ name: "BlogDetails", params: {} });
};

const blogs = [
  {
    img: require("@/assets/img/blog/bl6.jpg"),
    title: "The best photography tips for instagram",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl10.jpg"),
    title: "The perspective of design from a trip to Asia",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl1.jpg"),
    title: "Designer Larry Doe cos tells about his experience in",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl2.jpg"),
    title: "Organizing my projects by listing first",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl3.jpg"),
    title: "New design book that we recommend reading",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl4.jpg"),
    title: "The simplest way to recruit creative staff",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl5.jpg"),
    title: "Featured product photography from behance",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl7.jpg"),
    title: "The perspective of design from a trip to Asia",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl8.jpg"),
    title: "The coolest story of our founder",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl9.jpg"),
    title: "Designer Larry Doe cos tells about his experience in",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl11.jpg"),
    title: "New ideas to carry out by entrepreneurs",
    date: "29 March, 2020",
  },
  {
    img: require("@/assets/img/blog/bl12.jpg"),
    title: "The coolest story of our founder",
    date: "29 March, 2020",
  },
];
</script>

<template>
  <section class="py-primary">
    <Container>
      <Grid>
        <Row class="-mb-10 -smx:mb-14 -md:mb-24 text-center md:text-left">
          <Col
            v-for="(blog, index) in blogs"
            :key="index"
            class="mb-10 smx:mb-14 md:mb-24 lg-4 md-4 smx-6 sm-12"
          >
            <div class="h-full flex flex-col">
              <div class="rounded-3xl flex-1 group overflow-hidden max-h-72">
                <img
                  class="group-hover:scale-125 duration-700 origin-top-left transition-all h-full w-full object-cover"
                  :src="blog.img"
                  alt
                />
              </div>
              <div class="mt-7">
                <h3
                  class="hover:text-blue-500 transition-all text-secondary-text mb-4 smx:text-xl md:text-2xl font-bold"
                >
                  <a
                    href="javascript:void(0)"
                    class="line-clamp-2"
                    @click="toBlogDetail"
                  >{{ blog.title }}</a>
                </h3>
                <p>{{ blog.date }}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
    <div class="flex px-4 justify-center mt-10">
      <Button class="smx:max-w-[400px] w-full text-white bg-blue-600" text="Load More" />
    </div>
  </section>
</template>