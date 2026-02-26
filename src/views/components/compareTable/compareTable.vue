<script setup>
import WowToken from "../../../assets/images/wow-token.avif";
import HeroicPack from "../../../assets/images/heroic-pack.jpg";
import GoldenPack from "../../../assets/images/golden-pack.avif";

const packs = [
  {
    title: "Subscription",
    subtitle: "All You Need to Play",
    buttonLabel: "Subscribe Now",
    image: WowToken,
    imageAlt: "Subscription bundle",
  },
  {
    title: "Sha-Infused Heroic Pack",
    subtitle: "Requires Subscription",
    buttonLabel: "Buy Now",
    image: HeroicPack,
    imageAlt: "Sha-Infused Heroic Pack bundle",
  },
  {
    title: "Sha-Infused Epic Pack",
    subtitle: "Best Value",
    buttonLabel: "Upgrade Now",
    image: GoldenPack,
    imageAlt: "Sha-Infused Epic Pack bundle",
  },
];

const featureRows = [
  { label: "Expansion Access", footnote: "" },
  {
    label: "Sha-Warped Cloud Serpent Skyriding Mount (Modern)",
    footnote: "1",
  },
  {
    label: "Sha-Touched Cloud Serpent Flying Mount (Classic)",
    footnote: "2",
  },
  {
    label: "Sha-Warped Riding Tiger Ground Mount (Modern)",
    footnote: "1",
  },
  {
    label: "Sha-Touched Riding Tiger Ground Mount (Classic)",
    footnote: "2",
  },
  { label: "Merriment Pet (Modern)", footnote: "1" },
  { label: "Joyous Pet (Classic)", footnote: "2" },
  { label: "Sha-Warped Tea Set Toy (Modern)", footnote: "1" },
  { label: "Sha-Touched Tea Set Toy (Classic)", footnote: "2" },
  {
    label: "Ensemble: Stormstout's Sha-Warped Collection (Modern)",
    footnote: "1",
  },
  {
    label: "Ensemble: Stormstout's Sha-Touched Collection (Classic)",
    footnote: "2",
  },
  { label: "Level 85 Character Boost", footnote: "" },
  { label: "30 Days of Game Time", footnote: "" },
];

const heroicLimit = Math.ceil(featureRows.length / 2);
</script>

<template>
  <section id="compareTable" class="compareTable">
    <div class="compare-desc">
      <h5 class="compare-eyebrow">Heighten Your Experience</h5>
      <h1 class="heading-comare">Game Bundles</h1>
      <p>
        Mists of Pandaria Classic requires only a WoW subscription or game time
        to play. Optional Sha-Infused packs include extra cosmetics and boosts.
      </p>
    </div>

    <div class="table-wrap ">
      <table class="bundle-table">
        <tbody class="bundle-media">
          <tr>
            <td class="feature-spacer"></td>
            <td
              v-for="pack in packs"
              :key="`${pack.title}-image`"
              class="media-cell"
            >
              <div class="media-card">
                <img
                  :src="pack.image"
                  :alt="pack.imageAlt"
                  class="media-image"
                />
              </div>
            </td>
          </tr>
        </tbody>

        <tbody class="bundle-headings">
          <tr>
            <td class="feature-spacer"></td>
            <td
              v-for="pack in packs"
              :key="`${pack.title}-meta`"
              class="pack-cell"
            >
              <div class="pack-meta flex flex-col gap-2">
                <h3 class="pack-title">{{ pack.title }}</h3>
                <p class="pack-subtitle">{{ pack.subtitle }}</p>
                <span class="pack-divider">-</span>
                <button type="button" class="pack-button">
                  {{ pack.buttonLabel }}
                </button>
              </div>
            </td>
          </tr>
        </tbody>

        <tbody class="bundle-features">
          <tr
            v-for="(feature, index) in featureRows"
            :key="feature.label"
            class="feature-row"
          >
            <td class="feature-label">
              {{ feature.label
              }}<sup v-if="feature.footnote">{{ feature.footnote }}</sup>
            </td>
            <td class="check-cell">
              <span v-if="index === 0" class="checkmark">&#10003;</span>
            </td>
            <td class="check-cell">
              <span v-if="index < heroicLimit" class="checkmark">&#10003;</span>
            </td>
            <td class="check-cell">
              <span class="checkmark">&#10003;</span>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- comment -->
       <div class="pn">
        <p> 
          ¹ Merriment pet, Sha-Warped Tea Set toy, Sha-Warped Cloud Serpent, Sha-Warped Riding Tiger, and Ensemble: Sha-Warped Collection are immediately available on modern World of Warcraft® realms.
        </p>
        <p>
          ² Joyous pet, Sha-Touched Tea Set toy, Sha-Touched Cloud Serpent, Sha-Touched Riding Tiger, and Ensemble: Stormstout’s Sha-Touched Collection are immediately available on WoW® Classic progression realms.
        </p>
        <p class="mb-4">
          Level 85 Character Boost only available on WoW Classic progression realms. <br/>
          Level 85 Character Boost is only usable on the WoW game account for which it was purchased or redeemed as a gift.<br/>
          The Epic Pack will not re-grant any in-game items previously unlocked on your account from the Heroic Pack. <br/>
        </p>
        <p>
          Requires Internet connection, Battle.net® Account, and Battle.net® desktop app to play. <br/>
          Players under the age of 18 are required to obtain parental/guardian consent to purchase game points, products, and/or services.
        </p>
       </div>

    </div>
  </section>
</template>

<style scoped>
.compareTable {
  background-image: url(../../../assets/images/2600_ComparisonTable.avif);
  background-size: cover;
  background-position: center;
  padding: clamp(2rem, 4vw, 2.5rem) clamp(1rem, 5vw, 9.5rem);
}

.compare-desc {
  margin: 64px auto 96px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
}

.compare-eyebrow {
  font-weight: 700;
  color: #fff2d9;
}

.heading-comare {
  font-size: clamp(2rem, 4vw, 3.6rem);
  font-weight: 700;
  color: #34231a;
}

.compare-desc p {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.5;
  color: #000;
}

.pn {
  max-width: 1400px;
  margin: 5rem auto 0;
  color: #000000a6;
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  line-height: 1.6;
}

.table-wrap {
  max-width: 1600px;
  margin: 0 auto;
  overflow-x: auto;
}

.bundle-table {
  width: 100%;
  min-width: 1160px;
  border-collapse: collapse;
}

.feature-spacer,
.feature-label {
  /* width: 32%; */
}

.media-cell,
.pack-cell,
.check-cell {
  text-align: center;
}

.bundle-media td {
  padding: 0 12px;
}

.media-card {
  border: 2px solid #f5ba2b;
  border-radius: 2px;
  overflow: hidden;
}

.media-image {
  width: 374px !important;
  height: 210px;
  aspect-ratio: 16 / 8;
  object-fit: cover;
  display: block;
}
.media-card {
  position: relative;
}
.media-card::before {
  content: "";
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/images/silverBorder.avif");
  background-size: cover;
  background-position: center left;
  position: absolute;
  top: 0;
  left: -3px;
  z-index: 1;
  pointer-events: none;
}
/* .media-image::after {
  content: "";
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 5px solid transparent;
  -webkit-border-image: url("../../../assets/images/silverBorder.avif");
  border-image: url("../../../assets/images/silverBorder.avif");
  /* border-image-slice: 22 22 fill; */
/* pointer-events: none;
  z-index: 122;
} */

.bundle-headings td {
  padding: 14px 12px 18px;
}

.pack-meta {
  width: min(100%, 374px);
  margin: 0 auto;
  align-items: center;
  text-align: center;
}

.pack-title {
  background:
    linear-gradient(0deg, rgba(30, 11, 0, 0.4), rgba(94, 36, 0, 0.4)),
    rgb(53, 39, 39);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2px;
  padding-bottom: 2px;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0.4px;
  width: 100%;
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.pack-subtitle {
  font-size: clamp(1rem, 1.2vw, 17px);
  color: #005e4b;
  font-weight: 700;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.pack-divider {
  color: #523f34;
  line-height: 1;
  width: 100%;
  text-align: center;
}

.pack-button {
  margin-top: 8px;
  text-transform: uppercase;
  width: 100%;
  border: 2px solid #f4b400;
  background: #e8870a;
  color: #121212;
  min-height: 56px;
  border-radius: 8px;
  font-size: clamp(0.875rem, 1.1vw, 1.1rem);
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.pack-button:hover {
  background: #f7a31b;
}

.feature-row td {
  border-top: 1px solid rgba(75, 53, 38, 0.12);
  padding: 16px 12px;
  vertical-align: middle;
}

.feature-label {
  text-align: left;
  color: #2a1d15;
  font-size: clamp(1rem, 1vw, 1.25rem);
  font-weight: 500;
}

.feature-label sup {
  font-size: 0.72em;
}

.check-cell {
  font-size: 1.8rem;
  color: #2a1d15;
}

.checkmark {
  font-weight: 700;
}

@media (max-width: 900px) {
  .pn {
    margin-top: 2.2rem;
  }

  .compareTable {
    padding: 56px 14px 80px;
  }

  .compare-desc {
    margin: 24px auto 56px;
  }
}
</style>
