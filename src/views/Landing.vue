<script setup>
import MainSlider from "@/components/Main/Slider.vue";
import BannerContent from "@/components/Home/BannerContent.vue";
import OurGoalToHelp from "@/components/Home/OurGoalToHelp.vue";
import WeWorkWithSmall from "@/components/Home/WeWorkWithSmall.vue";
import OurservicesSection from "@/components/Home/OurservicesSection.vue";
import CaseStdies from "@/components/Home/CaseStdies.vue";
import Testimonial from "@/components/Home/Testimonial.vue";
import Team from "@/components/Home/Team.vue";
import ContactForm from "@/components/Home/ContactForm.vue";
</script>

<template>
  <!-- ================================ -->
  <MainSlider :bg="require('@/assets/img/home/01-13_Homepage_BG.jpg')">
    <template v-slot:content>
      <BannerContent />
    </template>
  </MainSlider>
  <!-- ================================ -->
  <OurGoalToHelp />
  <!-- ================================ -->
  <WeWorkWithSmall />
  <!-- ================================ -->
  <OurservicesSection />
  <!-- ================================ -->
  <CaseStdies />
  <!-- ================================ -->
  <Testimonial />
  <!-- ================================ -->
  <Team />
  <!-- ================================ -->
  <ContactForm />
  <!-- ================================ -->
</template>
