<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  featuresItem: [
    {
      title: "Pandaren",
      description:
        "Set out as a member of the enigmatic Pandaren and join the ranks of either the Horde or Alliance as you enter the conflict brewing on Pandaria's shores.",
    },
    {
      title: "Monk Class",
      description:
        "Learn the mystic powers of the Monk. Destroy foes with the Windwalker's devastating attacks, replenish allies with the Mistweaver's spiritual energies, and shrug off enormous damage with the Brewmaster's unyielding strength.",
    },
    {
      title: "New Dungeons, Raids, and Scenarios",
      description:
        "Brave defenders of Azeroth can battle their way through six new dungeons in Pandaria, four revamped Heroic dungeons, three raids, and seven scenarios.",
    },
    {
      title: "New Level Cap",
      description:
        "Ascend to new heights of power as you defend Azeroth, earning new talents every step of the journey to level 90 with extensively reworked talent trees.",
    },
    {
      title: "Scenarios",
      description:
        "Join up with some friends to achieve a common goal, such as mounting a defense against invading monsters, in a flexible new type of PvE challenge.",
    },
    {
      title: "Challenge Mode Dungeons",
      description:
        "Master the ultimate 5-player time trial and earn prestige rewards in a new dungeon mode that will put your resolve and coordination to the test.",
    },
    {
      title: "Pet Battles",
      description:
        "Challenge other players' companion pets with your own collection in a new tactical mini-game. Level up your companions and discover pets in the wild to round out your roster.",
    },
    {
      title: "Lush New Lands",
      description:
        "Explore seven new zones in Pandaria and a new starting area for Pandaren, Wandering Isles. Discover ancient kingdoms and mount your defense against a newly awakened evil stirring in the continent's dark corners.",
    },
  ],
});
</script>

<template>
  <section id="features" class="features flex items-center justify-center">
    <div class="heading flex flex-col gap-2 max-w-[1100px] items-center">
      <h1 class="feat-heading text-[42px] md:text-[60px]">Notable Features</h1>
      <p class="text-center feat-desc max-w-[760px] text-[18px] md:text-[22px]">
        Return to the mystic lands of Pandaria, a world shrouded in fog and
        mystery. <br />
        This ancient realm, untouched by time and war, returns with a renewed
        sense of wonder and adventure, inviting you to once again lose yourself
        in its lush forests, cloud-ringed mountains, and timeless secrets.
      </p>

      <!-- features in Expansion -->
      <div class="new-features mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="item in state.featuresItem"
          :key="item.title"
          class="feature-item p-4 md:p-5 rounded-[10px] flex items-start gap-3 md:gap-4"
        >
          <span class="feature-icon mt-1" aria-hidden="true"></span>
          <div class="flex-1">
            <h3 class="feature-title text-[30px] leading-tight">{{ item.title }}</h3>
            <p class="feature-text text-[18px] leading-[1.4] mt-1.5">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  background-image: url(../../../assets/images/features.jfif);
  background-position: center;
  background-size: cover;
  padding: 80px 24px;
}

.feat-heading {
  background:
    linear-gradient(180deg, #b89687, #f5c69c, #f7e6b8, #fff7e0),
    rgba(255, 255, 255, 0.5);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2px;
  padding-bottom: 2px;
  font-family: Quadrat Serial;
  font-weight: 400;
  font-style: normal;
}

.feat-desc {
  color: #ffffffe6;
  filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));
}

.feature-item {
  background: linear-gradient(180deg, rgba(76, 6, 6, 0.78), rgba(48, 3, 3, 0.78));
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.feature-icon {
  width: 34px;
  height: 34px;
  border-radius: 9999px;
  border: 2px solid #e5b74f;
  background: radial-gradient(circle at center, #6ad28f 0%, #2f9658 65%, #1f5f38 100%);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.35);
  flex-shrink: 0;
}

.feature-title {
  font-family: Quadrat Serial;
  color: #f7e3bc;
}

.feature-text {
  color: #f4f4f4;
}
</style>
