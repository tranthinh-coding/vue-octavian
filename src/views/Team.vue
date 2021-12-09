<script setup>
// import HeaderFullNavbar from "@/layout/HeaderFullNavbar_1.vue";
import MainSlider from "@/components/Main/Slider.vue";
import Persons from "@/components/Team/Persons.vue";
const founders = [
  {
    image: require("@/assets/img/team/founder1.jpg"),
    name: "Suny Lab",
    position: "Co-Founder",
  },
  {
    image: require("@/assets/img/team/founder2.jpg"),
    name: "J. Jackson Villa",
    position: "Co-Founder",
  },
  {
    image: require("@/assets/img/team/founder3.jpg"),
    name: "MIly Crush",
    position: "CEO",
  },
];
const designers = [
  {
    image: require("@/assets/img/team/designer1.jpg"),
    name: "Billy Clakson",
    position: "designer",
  },
  {
    image: require("@/assets/img/team/designer2.jpg"),
    name: "Djon Tiktop",
    position: "designer",
  },
  {
    image: require("@/assets/img/team/designer3.jpg"),
    name: "Sindy Moon",
    position: "designer",
  },
  {
    image: require("@/assets/img/team/designer4.jpg"),
    name: "Job Julios",
    position: "designer",
  },
  {
    image: require("@/assets/img/team/designer5.jpg"),
    name: "Nelly Blume",
    position: "designer",
  },
  {
    image: require("@/assets/img/team/designer6.jpg"),
    name: "Taylor Morrisom",
    position: "designer",
  },
  {
    image: require("@/assets/img/team/designer7.jpg"),
    name: "Rycki Phoenix",
    position: "designer",
  },
];
const developers = [
  {
    image: require("@/assets/img/team/dev1.jpg"),
    name: "Januman Josic",
    position: "Front End",
  },
  {
    image: require("@/assets/img/team/dev2.jpg"),
    name: "Mari Comun",
    position: "Back End",
  },
  {
    image: require("@/assets/img/team/dev3.jpg"),
    name: "Nuno Lopez",
    position: "Back End",
  },
  {
    image: require("@/assets/img/team/dev4.jpg"),
    name: "Jadia Linght",
    position: "Front End",
  },
  {
    image: require("@/assets/img/team/dev5.jpg"),
    name: "Julia Boom",
    position: "Back End",
  },
  {
    image: require("@/assets/img/team/dev6.jpg"),
    name: "Chip Carter",
    position: "Back End",
  },
  {
    image: require("@/assets/img/team/dev7.jpg"),
    name: "Mina Laurens",
    position: "Front End",
  },
];
</script>
<template>
  <!-- <HeaderFullNavbar> -->
  <MainSlider />
  <Persons
    :list="founders"
    title="Our Founder"
    description="Integer eu metus at orci scelerisque rutrum. Vivamus condimentu ipsum vitae iaculis cursus, turpis nisl."
  />
  <Persons :list="designers" title="Designer Team" description />
  <Persons :list="developers" title="Developer Team" description />

  <Container class="mb-primary -mt-28">
    <Button class="mx-auto bg-blue-600 text-white w-full smx:w-auto">
      <div class="px-24 py-4">Load More</div>
    </Button>
  </Container>
  <!-- </HeaderFullNavbar> -->
</template>
