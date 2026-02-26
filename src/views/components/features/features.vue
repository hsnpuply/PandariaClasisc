<script setup>
import { reactive } from "vue";
import pandaraia from "../../../assets/images/feature-icons/pandaren_icon.avif";
import challenge from "../../../assets/images/feature-icons/challenge.avif";
import lvlCap from "../../../assets/images/feature-icons/lvlCap.avif";
import monk from "../../../assets/images/feature-icons/monk.webp";
import newDngn from "../../../assets/images/feature-icons/newDngn.webp";
import pet from "../../../assets/images/feature-icons/pet.avif";
import scenario from "../../../assets/images/feature-icons/Scenario.avif";
import newLands from "../../../assets/images/feature-icons/newLands.avif";

const allFaqItems = [
  {
    title: "Expanded Pre-Patch Content",
    body: "Create and level Pandaren and Monk characters up to 85, get a head start on powering up your Pet Battles roster, and experience the Theramore’s Fall scenario.",
  },
  {
    title: "Alt-Friendly Improvements",
    body: "New to Mists of Pandaria Classic, additional characters can reap more benefits from your achievements. Use the Tome of Four Winds Flight to quickly unlock the skies of Pandaria, acquire Grand Commendations with the factions of Pandaria to speed up rewards across your account, and start engaging with the faction you want to faster with the removal of The Golden Lotus reputation requirements for Shado-Pan and The August Celestials.",
  },
  {
    title: "Celestial Dungeon Difficulty",
    body: "Complex and challenging opportunities to earn powerful rewards can be experienced in a new Dungeon difficulty system that will be available after launch, similar to Cataclysm’s Elemental Rune dungeons.",
  },
];

const state = reactive({
  AllFaqItems: allFaqItems,
  openFaqItems: allFaqItems.map((_, index) => index === 0),
  featuresItem: [
    {
      title: "Pandaren",
      description:
        "Set out as a member of the enigmatic Pandaren and join the ranks of either the Horde or Alliance as you enter the conflict brewing on Pandaria's shores.",
      image: pandaraia,
    },
    {
      title: "Monk Class",
      description:
        "Learn the mystic powers of the Monk. Destroy foes with the Windwalker's devastating attacks, replenish allies with the Mistweaver's spiritual energies, and shrug off enormous damage with the Brewmaster's unyielding strength.",
      image: monk,
    },
    {
      title: "New Dungeons, Raids, and Scenarios",
      description:
        "Brave defenders of Azeroth can battle their way through six new dungeons in Pandaria, four revamped Heroic dungeons, three raids, and seven scenarios.",
      image: newDngn,
    },
    {
      title: "New Level Cap",
      description:
        "Ascend to new heights of power as you defend Azeroth, earning new talents every step of the journey to level 90 with extensively reworked talent trees.",
      image: lvlCap,
    },
    {
      title: "Scenarios",
      description:
        "Join up with some friends to achieve a common goal, such as mounting a defense against invading monsters, in a flexible new type of PvE challenge.",
      image: scenario,
    },
    {
      title: "Challenge Mode Dungeons",
      description:
        "Master the ultimate 5-player time trial and earn prestige rewards in a new dungeon mode that will put your resolve and coordination to the test.",
      image: challenge,
    },
    {
      title: "Pet Battles",
      description:
        "Challenge other players' companion pets with your own collection in a new tactical mini-game. Level up your companions and discover pets in the wild to round out your roster.",
      image: pet,
    },
    {
      title: "Lush New Lands",
      description:
        "Explore seven new zones in Pandaria and a new starting area for Pandaren, Wandering Isles. Discover ancient kingdoms and mount your defense against a newly awakened evil stirring in the continent's dark corners.",
      image: newLands,
    },
  ],
});

function toggle(i) {
  state.openFaqItems[i] = !state.openFaqItems[i];
}
</script>
<template>
  <section id="features" class="features flex items-center justify-center">
    <div class="heading flex flex-col gap-2 max-w-[1100px] items-center">
      <h1 class="feat-heading text-[40px] md:text-[60px]">Notable Features</h1>
      <p class="text-center feat-desc max-w-[760px] text-[18px] md:text-[22px]">
        Return to the mystic lands of Pandaria, a world shrouded in fog and
        mystery. <br />
        This ancient realm, untouched by time and war, returns with a renewed
        sense of wonder and adventure, inviting you to once again lose yourself
        in its lush forests, cloud-ringed mountains, and timeless secrets.
      </p>
      <!-- features in Expansion -->
      <div class="md:min-w-[1450px] new-features flex flex-col justify-center items-center mt-10 w-full gap-5">
        <article class="max-w-[1000px] py-[40px]  grid grid-cols-2 items-strech justify-items-center gap-4">
          <div
            class="card max-w-[700px] feature-item flex-1 flex gap-4 p-4 rounded-[10px] shadow-xs shadow-black border-2 border-[#ffffff1a]"
            v-for="item in state.featuresItem"
            :key="item.title"
          >
            <img class="feature-icon w-8 h-8 mt-1" :src="item.image" alt="" />
            <div class="feature-content">
              <h3 class="feature-title text-[30px] leading-tight">
                {{ item.title }}
              </h3>
              <p class="feature-text text-[18px] leading-[1.4] mt-1.5">
                {{ item.description }}
              </p>
            </div>
            <!-- <span class="feature-icon mt-1" aria-hidden="true"></span> -->
          </div>
        </article>

        <div
          class="hype flex flex-col gap-2 items-center justify-center text-center px-[80px] py-[40px]"
        >
          <div
            class="hype-desc flex-1 flex items-center flex-col justify-center text-center"
          >
            <h5 class="text-2xl heading-juorny text-[#FFF2D9]">
              Find Your Center. Strike with Power.
            </h5>
            <h2 class="feat-heading text-[60px]">
              Enhancements & Improvements
            </h2>
            <p class="feat-desc text-[20px] max-w-[712px]">
              Enjoy new alt-friendly improvements for unlocking reputations and
              flying, streamlined class talents, a new difficulty level added to
              the Dungeon Group Finder, and more quality-of-life improvements
              available in Mists of Pandaria Classic!
            </p>
          </div>
          <div class="hype-mdedia flex items-start gap-10 mt-16">
            <div class="media-pic border-2 border-[#eb9110] min-w-[816px]">
              <img src="../../../assets/images/prePatch.avif" class="" />
            </div>
            <div class="faqs self-center">
              <article
                v-for="(item, i) in state.AllFaqItems"
                :key="i"
                class="overflow-hidden"
              >
                <!-- Header -->
                <button
                  type="button"
                  class="w-full cursor-pointer text-left flex items-center justify-between px-5 text-left"
                  :aria-expanded="state.openFaqItems[i]"
                  @click="toggle(i)"
                >
                  <h3 class="text-lg font-semibold faqButtonTitle">
                    {{ item.title }}
                  </h3>
                </button>
                <!-- Content -->
                <div
                  class="faq-panel"
                  :class="{ 'faq-panel-open': state.openFaqItems[i] }"
                >
                  <div
                    class="faq-panel-inner text-[#ffffffe6] text-[20px] text-left px-5 pb-5 text-sm leading-7 text-white/80"
                  >
                    {{ item.body }}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.features {
  background-image: url(../../../assets/images/featureSection.avif);
  background-size: cover;
  padding: 80px 40px;
  min-height: 140vh;
}
.feat-heading {
  color: white;
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
  background: linear-gradient(
    180deg,
    rgba(76, 6, 6, 0.78),
    rgba(48, 3, 3, 0.78)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.feature-item {
  position: relative;
  overflow: hidden;
}

.feature-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: skewX(-25deg);
}

/* hover روی خود آیتم */
.feature-item:hover::before {
  animation: shine 1s 0.5s forwards;
}

@keyframes shine {
  from {
    left: -75%;
  }
  to {
    left: 125%;
  }
}
.feature-icon {
  width: 34px;
  height: 34px;
  border-radius: 9999px;
  border: 2px solid #e5b74f;
  background: radial-gradient(
    circle at center,
    #6ad28f 0%,
    #2f9658 65%,
    #1f5f38 100%
  );
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

.faq-panel {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
}

.faq-panel-open {
  grid-template-rows: 1fr;
  opacity: 1;
}

.faq-panel-inner {
  overflow: hidden;
}
.media-pic {
  box-shadow:
    0px 0px 2px 3px rgba(0, 0, 0, 0.15) inset,
    0px 0px 31px 5px rgba(18, 1, 1, 0.4);
  position: relative;
}
.media-pic::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: 5px solid;
  border-image: url("../../../assets/images/oranteborder.avif");
  border-image-slice: 22 22 fill;
  pointer-events: none;
  z-index: 1;
}
.faqButtonTitle {
  background:
    linear-gradient(180deg, #b89687, #f5c69c, #f7e6b8, #fff7e0),
    rgba(255, 255, 255, 0.5);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2px;
  padding-bottom: 2px;
  font-size: 24px;
}
.heading-juorny {
  filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));
}
</style>
