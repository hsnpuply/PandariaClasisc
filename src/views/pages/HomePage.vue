<script setup>
import { computed } from "vue";
import { useAppController } from "@/controllers/ui/useAppController";
import Header from "../components/common/header.vue";

const { state } = useAppController();
const title = computed(() => state.title);
</script>
<template>
  <Header />
  <!-- <section class="home-page"></section> -->
  <p class="text-4xl">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus odio tenetur voluptas ab, quae iure a totam officiis tempore repudiandae asperiores minima at quod numquam accusantium perferendis, voluptatibus earum, dolorum labore. Facere ea vel voluptatibus. Ex porro, voluptate ipsa nemo voluptates quia eaque facilis illo aperiam nostrum repellendus corporis sequi sit dolorum quae vel! Tempora nisi quis optio incidunt doloribus repellendus laborum unde praesentium eum numquam facere assumenda error architecto itaque cumque enim, accusamus quam modi? Amet, facilis nisi. Temporibus rem architecto dolor nostrum iusto dignissimos, libero error esse.
</p>
  <p class="text-4xl">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus odio tenetur voluptas ab, quae iure a totam officiis tempore repudiandae asperiores minima at quod numquam accusantium perferendis, voluptatibus earum, dolorum labore. Facere ea vel voluptatibus. Ex porro, voluptate ipsa nemo voluptates quia eaque facilis illo aperiam nostrum repellendus corporis sequi sit dolorum quae vel! Tempora nisi quis optio incidunt doloribus repellendus laborum unde praesentium eum numquam facere assumenda error architecto itaque cumque enim, accusamus quam modi? Amet, facilis nisi. Temporibus rem architecto dolor nostrum iusto dignissimos, libero error esse.
</p>
  <p class="text-4xl">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus odio tenetur voluptas ab, quae iure a totam officiis tempore repudiandae asperiores minima at quod numquam accusantium perferendis, voluptatibus earum, dolorum labore. Facere ea vel voluptatibus. Ex porro, voluptate ipsa nemo voluptates quia eaque facilis illo aperiam nostrum repellendus corporis sequi sit dolorum quae vel! Tempora nisi quis optio incidunt doloribus repellendus laborum unde praesentium eum numquam facere assumenda error architecto itaque cumque enim, accusamus quam modi? Amet, facilis nisi. Temporibus rem architecto dolor nostrum iusto dignissimos, libero error esse.
</p>
  <p class="text-4xl">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus odio tenetur voluptas ab, quae iure a totam officiis tempore repudiandae asperiores minima at quod numquam accusantium perferendis, voluptatibus earum, dolorum labore. Facere ea vel voluptatibus. Ex porro, voluptate ipsa nemo voluptates quia eaque facilis illo aperiam nostrum repellendus corporis sequi sit dolorum quae vel! Tempora nisi quis optio incidunt doloribus repellendus laborum unde praesentium eum numquam facere assumenda error architecto itaque cumque enim, accusamus quam modi? Amet, facilis nisi. Temporibus rem architecto dolor nostrum iusto dignissimos, libero error esse.
</p>
  <p class="text-4xl">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus odio tenetur voluptas ab, quae iure a totam officiis tempore repudiandae asperiores minima at quod numquam accusantium perferendis, voluptatibus earum, dolorum labore. Facere ea vel voluptatibus. Ex porro, voluptate ipsa nemo voluptates quia eaque facilis illo aperiam nostrum repellendus corporis sequi sit dolorum quae vel! Tempora nisi quis optio incidunt doloribus repellendus laborum unde praesentium eum numquam facere assumenda error architecto itaque cumque enim, accusamus quam modi? Amet, facilis nisi. Temporibus rem architecto dolor nostrum iusto dignissimos, libero error esse.
</p>
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
</style>
