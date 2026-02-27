<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  headerTitle: {
    type: String,
    required: true,
  },
  headerSubtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="card max-w-[322px] h-full group hover:brightness-125 transition !duration-[1000ms] ease-in-out"
  >
    <div
      class="image-box overflow-hidden border-b-2 border-[#f5ba2b] !h-[181px] bg-red-400"
    >
      <img
        :src="props.img"
        :alt="props.alt"
        class="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-[1.1] h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
    </div>
    <div
      class="card-desc min-h-[174px] flex flex-col items-center gap-4 justify-center"
    >
      <div class="header-card text-center">
        <h1>{{ props.headerTitle }}</h1>
        <h2 v-if="props.headerSubtitle !== ''">{{ props.headerSubtitle }}</h2>
      </div>
      <div class="card-desc-text text-center">
        <p>{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  border: 2px solid #f5ba2b;
  border-radius: 2px;
}
.card-desc {
  background: url("../../../../assets/images/cardBg.webp") no-repeat center;
  background-size: cover;
  padding: .5rem 1rem 1.3rem .5rem;
  color: #fff;
  height: 210px;
}
h1 {
  background:
    linear-gradient(180deg, #b89687, #f5c69c, #f7e6b8, #fff7e0),
    rgba(255, 255, 255, 0.5);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2px;
  padding-bottom: 2px;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));
}
h2 {
  filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));
  background:
    linear-gradient(180deg, #b89687, #f5c69c, #f7e6b8, #fff7e0),
    rgba(255, 255, 255, 0.5);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2px;
  padding-bottom: 2px;
  font-weight: 400;
  font-style: normal;
}
p{
  color:#ffffffe6;
  filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));

}
</style>
