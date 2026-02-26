<script setup>
import { reactive } from "vue";
import Card from "./components/card.vue";
import Anniversary from "../../../assets/images/cards/20thanniversary.avif";
import Sod from "../../../assets/images/cards/sod.avif";
import WarcraftRumble from "../../../assets/images/cards/WarcraftRumble.avif";
import WarWithin from "../../../assets/images/cards/warWithin.avif";

const state=reactive({
  cardItems:[
    {
      img: WarWithin,
      alt: "Image 1",
      headerTitle: "World of Warcraft:",
      headerSubtitle: "The War Within",
      description: "Descend into the depths of Azeroth as the must-play gaming event, The Worldsoul Saga, begins!",
    },
    {
      img: Anniversary,
      alt: "Image 2",
      headerTitle: "World of Warcraft Classic:",
      headerSubtitle: "20th Anniversary Edition",
      description:"Experience the game that sparked it all and embark on a completely fresh journey today!"
    },
    {
      img: Sod,
      alt: "Image 3",
      headerTitle: "World of Warcraft Classic:",
      headerSubtitle: "Season of Discovery",
      description:"A fresh way to experience Classic content that challenges your curiosity with new reasons to explore Azeroth."
    },
    {
      img:WarcraftRumble,
      alt: "Image 3",
      headerTitle: "Warcraft Rumble",
      headerSubtitle: "",
      description:"Unleash joyful chaos and take Warcraft with you wherever you go in a dazzling new mobile sensation!"
    },
  ]
})
</script>

<template>
  <section id="youMightLike" class="youMightLike  !pt-[6rem] !px-[12rem]">
    <h1 class="text-[60px] text-center !mb-[3rem]">You Might Also Like</h1>
    <div class="card-wrapper flex items-strech justify-center gap-8" >
      <Card
        :img="item.img"
        :alt="item.alt"
        :headerTitle="item.headerTitle"
        :headerSubtitle="item.headerSubtitle"
        :description="item.description"
        v-for="(item,index) in state.cardItems" :key="index"
      />
    </div>
  </section>
</template>

<style scoped>
.youMightLike {
  min-height: 70vh;
  padding: clamp(2rem, 4vw, 5rem);
  background: url("../../../assets/images/otherBg.avif") no-repeat;
  background-size: cover;
}
h1 {
  background:
    linear-gradient(0deg, rgba(30, 11, 0, 0.4), rgba(94, 36, 0, 0.4)),
    rgb(53, 39, 39);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2px;
  padding-bottom: 2px;
  filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));
  font-weight: bold;
}
</style>
