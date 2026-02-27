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

const hasFeature = (packIndex, featureIndex) => {
  if (packIndex === 0) return featureIndex === 0;
  if (packIndex === 1) return featureIndex < heroicLimit;
  return true;
};
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
            <td
              v-for="pack in packs"
              :key="`${pack.title}-image`"
              class="media-cell"
            >
              <div class="media-card">
                <img :src="pack.image" :alt="pack.imageAlt" class="media-image" />
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
              <span v-if="hasFeature(0, index)" class="checkmark">&#10003;</span>
            </td>
            <td class="check-cell">
              <span v-if="hasFeature(1, index)" class="checkmark">&#10003;</span>
            </td>
            <td class="check-cell">
              <span v-if="hasFeature(2, index)" class="checkmark">&#10003;</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="mobile-bundles">
        <div class="mobile-pack-grid">
          <article
            v-for="pack in packs"
            :key="`${pack.title}-mobile`"
            class="mobile-pack"
          >
            <div class="media-card">
              <img :src="pack.image" :alt="pack.imageAlt" class="mobile-image" />
            </div>
            <h3 class="mobile-pack-title">{{ pack.title }}</h3>
            <p class="mobile-pack-subtitle">{{ pack.subtitle }}</p>
            <button type="button" class="pack-button">
              {{ pack.buttonLabel }}
            </button>
          </article>
        </div>

        <div class="mobile-feature-list">
          <div
            v-for="(feature, index) in featureRows"
            :key="`${feature.label}-mobile`"
            class="mobile-feature-row"
          >
            <p class="mobile-feature-label">
              {{ feature.label
              }}<sup v-if="feature.footnote">{{ feature.footnote }}</sup>
            </p>
            <div class="mobile-checks">
              <span class="mobile-check" :class="{ on: hasFeature(0, index) }"
                >&#10003;</span
              >
              <span class="mobile-check" :class="{ on: hasFeature(1, index) }"
                >&#10003;</span
              >
              <span class="mobile-check" :class="{ on: hasFeature(2, index) }"
                >&#10003;</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="pn">
        <p>
          1 Merriment pet, Sha-Warped Tea Set toy, Sha-Warped Cloud Serpent,
          Sha-Warped Riding Tiger, and Ensemble: Sha-Warped Collection are
          immediately available on modern World of Warcraft realms.
        </p>
        <p>
          2 Joyous pet, Sha-Touched Tea Set toy, Sha-Touched Cloud Serpent,
          Sha-Touched Riding Tiger, and Ensemble: Stormstout's Sha-Touched
          Collection are immediately available on WoW Classic progression
          realms.
        </p>
        <p class="mb-4">
          Level 85 Character Boost only available on WoW Classic progression
          realms. <br />
          Level 85 Character Boost is only usable on the WoW game account for
          which it was purchased or redeemed as a gift.<br />
          The Epic Pack will not re-grant any in-game items previously unlocked
          on your account from the Heroic Pack. <br />
        </p>
        <p>
          Requires Internet connection, Battle.net Account, and Battle.net
          desktop app to play. <br />
          Players under the age of 18 are required to obtain parental/guardian
          consent to purchase game points, products, and/or services.
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

.mobile-bundles {
  display: none;
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
  position: relative;
}

.media-image {
  width: 374px !important;
  height: 210px;
  aspect-ratio: 16 / 8;
  object-fit: cover;
  display: block;
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
  font-weight: 700;
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

  .table-wrap {
    overflow: visible;
  }

  .bundle-table {
    display: none;
  }

  .mobile-bundles {
    display: block;
  }

  .mobile-pack-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .mobile-pack {
    text-align: center;
  }

  .mobile-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
    display: block;
  }

  .mobile-pack-title {
    margin-top: 10px;
    font-size: 1.15rem;
    color: #3c2619;
    line-height: 1.1;
    min-height: 44px;
  }

  .mobile-pack-subtitle {
    font-size: 0.95rem;
    min-height: 40px;
    color: #005e4b;
    font-weight: 700;
    line-height: 1.1;
  }

  .mobile-pack .pack-button {
    min-height: 52px;
    font-size: 1rem;
    margin-top: 10px;
  }

  .mobile-feature-list {
    margin-top: 18px;
    border-top: 1px solid rgba(75, 53, 38, 0.2);
  }

  .mobile-feature-row {
    border-bottom: 1px solid rgba(75, 53, 38, 0.2);
    padding: 12px 0;
  }

  .mobile-feature-label {
    font-size: 0.95rem;
    color: #2a1d15;
    line-height: 1.3;
    margin-bottom: 8px;
  }

  .mobile-checks {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    text-align: center;
  }

  .mobile-check {
    color: transparent;
    font-size: 1.3rem;
    font-weight: 700;
  }

  .mobile-check.on {
    color: #2a1d15;
  }

  .pn {
    font-size: 0.85rem;
    line-height: 1.45;
  }
}

@media (max-width: 640px) {
  .heading-comare {
    font-size: 2.6rem;
  }

  .compare-desc p {
    font-size: 1.05rem;
  }

  .mobile-image {
    height: 98px;
  }

  .mobile-pack-title {
    font-size: 0.9rem;
    min-height: 34px;
  }

  .mobile-pack-subtitle {
    font-size: 0.75rem;
    min-height: 34px;
  }

  .mobile-pack .pack-button {
    min-height: 44px;
    font-size: 0.84rem;
    padding: 0 6px;
  }
}
</style>
