<script setup>
import { computed } from "vue";
import { useAppController } from "@/controllers/ui/useAppController";
import Header from "../components/common/header.vue";
import HeroSection from "../components/home/HeroSection.vue";
import Features from "../components/features/features.vue";
import CompareTable from "../components/compareTable/compareTable.vue"
import Faq from "../components/faq/faq.vue";
import Other from "../components/other-interests/other.vue";
import Footer from "../components/footer/footer.vue"
const { state } = useAppController();
const title = computed(() => state.title);
</script>
<template>
  <section class="hero_section">
    <Header />  
    <HeroSection />
    <div class="divider w-full" ></div>
    <Features />
    <div class="divider w-full" ></div>
    <CompareTable />
    <Faq/>
    <Other/>
    <div class="divider w-full" ></div>
    <Footer/>
  </section>
  <!-- <section class="home-page"></section> -->
</template>

<style scoped>
.home-page {
  padding: 2rem;
  color: #f6f4ee;
  /* background: radial-gradient(circle at top, #3e2b23, #121212 60%); */
  min-height: 100dvh;
}

h1 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin: 0 0 1rem;
}
.hero_section {
  min-height: 100vh;
  background: linear-gradient(180deg, #08271d 0%, #03170f 40%, #020d08 100%);
}
.divider{
  background-image: url(../../assets/images/dividers_3.webp);
  background-repeat: repeat-x;
  height: 26px;
}
</style>
