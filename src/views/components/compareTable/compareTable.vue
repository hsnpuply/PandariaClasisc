<script setup>
import subscriptionImage from "../../../assets/images/WoW_Classic_MoP_Launch_.avif";
import heroicPackImage from "../../../assets/images/featureSection.avif";
import epicPackImage from "../../../assets/images/prePatch.avif";

const packs = [
  {
    title: "Subscription",
    subtitle: "All You Need to Play",
    buttonLabel: "SUB NOW",
    image: subscriptionImage,
    imageAlt: "Subscription bundle",
  },
  {
    title: "Sha-Infused Heroic Pack",
    subtitle: "Requires Subscription",
    buttonLabel: "SUB NOW",
    image: heroicPackImage,
    imageAlt: "Sha-Infused Heroic Pack bundle",
  },
  {
    title: "Sha-Infused Epic Pack",
    subtitle: "Best Value",
    buttonLabel: "SUB NOW",
    image: epicPackImage,
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

    <div class="table-wrap">
      <table class="bundle-table">
        <tbody class="bundle-media">
          <tr>
            <td class="feature-spacer"></td>
            <td v-for="pack in packs" :key="`${pack.title}-image`" class="media-cell">
              <div class="media-card">
                <img :src="pack.image" :alt="pack.imageAlt" class="media-image" />
              </div>
            </td>
          </tr>
        </tbody>

        <tbody class="bundle-headings">
          <tr>
            <td class="feature-spacer"></td>
            <td v-for="pack in packs" :key="`${pack.title}-meta`" class="pack-cell">
              <div class="pack-meta flex flex-col gap-2">
                <h3 class="pack-title">{{ pack.title }}</h3>
                <p class="pack-subtitle">{{ pack.subtitle }}</p>
                <span class="pack-divider">-</span>
                <button type="button" class="pack-button">{{ pack.buttonLabel }}</button>
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
              {{ feature.label }}<sup v-if="feature.footnote">{{ feature.footnote }}</sup>
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
    </div>
  </section>
</template>

<style scoped>
.compareTable {
  background-image: url(../../../assets/images/2600_ComparisonTable.avif);
  background-size: cover;
  background-position: center;
  padding: 80px 24px 120px;
}

.compare-desc {
  margin: 0 auto 38px;
  max-width: 860px;
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
  color: #4c3528;
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
  width: 32%;
}

.media-cell,
.pack-cell,
.check-cell {
  width: 22.66%;
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
  width: 100%;
  aspect-ratio: 16 / 8;
  object-fit: cover;
  display: block;
}

.bundle-headings td {
  padding: 14px 12px 18px;
}

.pack-meta {
  align-items: center;
}

.pack-title {
  font-size: clamp(1.3rem, 2vw, 2rem);
  color: #38251a;
  line-height: 1.15;
}

.pack-subtitle {
  font-size: clamp(1rem, 1.2vw, 1.45rem);
  color: #005e4b;
  font-weight: 700;
}

.pack-divider {
  color: #523f34;
  line-height: 1;
}

.pack-button {
  margin-top: 8px;
  width: 100%;
  border: 2px solid #f4b400;
  background: #e8870a;
  color: #121212;
  min-height: 56px;
  border-radius: 8px;
  font-size: clamp(1rem, 1.1vw, 1.3rem);
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
  .compareTable {
    padding: 56px 14px 80px;
  }
}
</style>
