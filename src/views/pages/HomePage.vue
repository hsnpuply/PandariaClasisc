<template>
  <section class="home-page">
    <h1>{{ title }}</h1>
    <p>ساختار پروژه Vue با معماری MVC آماده شد.</p>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useAppController } from '@/controllers/ui/useAppController';

const { state } = useAppController();
const title = computed(() => state.title);
</script>

<style scoped>
.home-page {
  padding: 2rem;
  color: #f6f4ee;
  background: radial-gradient(circle at top, #3e2b23, #121212 60%);
  min-height: 100dvh;
}

h1 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin: 0 0 1rem;
}
</style>
