<script setup>
import { reactive } from "vue";

const state = reactive({
  activeFaqIndex: 0,
  faqs: [
    {
      question:
        "Do I need to purchase a Sha-Infused Heroic Pack or Sha-Infused Epic Pack to play Mists of Pandaria Classic?",
      answer:
        "No. Access to Mists of Pandaria Classic is included with an active World of Warcraft subscription, and no additional purchase is required.",
    },
    {
      question:
        "Will there be a Character Boost for Mists of Pandaria Classic?",
      answer:
        "Yes. A Character Boost is available through select bundles and can be used according to Blizzard's current eligibility rules.",
    },
    {
      question:
        "Will Mists of Pandaria Classic support value-added services like Character Transfers?",
      answer:
        "Yes. Value-added services such as Character Transfers are planned to be available, following the same service restrictions that apply to Classic realms.",
    },
  ],
});

const toggleFaq = (index) => {
  state.activeFaqIndex = state.activeFaqIndex === index ? -1 : index;
};
</script>

<template>
  <section id="faq" class="faq !pt-[6rem] !px-[12rem]">
    <div class="faq-layout flex items-end justify-end flex-1">
      <div class=" max-w-[700px]">
        <div class="heading">
          <h1>Frequently Asked Questions</h1>
        </div>

        <div class="faq-list self-end">
          <article
            v-for="(faq, index) in state.faqs"
            :key="faq.question"
            class="faq-item"
            :class="{ 'is-open': state.activeFaqIndex === index }"
          >
            <button
              type="button"
              class="faq-question flex items-center justify-between"
              :aria-expanded="state.activeFaqIndex === index"
              :aria-controls="`faq-answer-${index}`"
              @click="toggleFaq(index)"
            >
              <span class="text-2xl">{{ faq.question }}</span>
              <svg
                class="faq-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              v-show="state.activeFaqIndex === index"
              :id="`faq-answer-${index}`"
              class="faq-answer"
            >
              <p class="!text-lg">{{ faq.answer }}</p>
            </div>
          </article>
        </div>
      </div>
      <div class=""></div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  min-height: 70vh;
  padding: clamp(2rem, 4vw, 5rem);
  background: url("../../../assets/images/bg-faq.jpg") no-repeat 50% 60%;
  background-size: cover;
}

.heading h1 {
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
  font-size: 55px;
  filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));
  text-align: right;
}

.faq-list {
  margin-top: 2.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(2px);
  padding: 5px 20px;
}

.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.faq-question {
  width: 100%;
  border: 0;
  background: transparent;
  color: #eac9a8;
  font-size: clamp(1.2rem, 2.2vw, 2.2rem);
  font-weight: 600;
  line-height: 1.1;
  text-align: left;
  padding: clamp(1.1rem, 2vw, 2rem) 0.5rem;
  gap: 1.5rem;
  cursor: pointer;
}

.faq-icon {
  width: 1.45rem;
  height: 1.45rem;
  color: rgba(255, 255, 255, 0.75);
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.faq-item.is-open .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 0.5rem 1.8rem;
}

.faq-answer p {
  color: #f2f2f2;
  font-size: clamp(1rem, 1.35vw, 2rem);
  line-height: 1.45;
  max-width: 960px;
}

@media (max-width: 768px) {
  .heading h1 {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
    text-align: left;
  }

  .faq-question {
    padding: 1rem 0.25rem;
  }

  .faq-answer {
    padding: 0 0.25rem 1.2rem;
  }
}
</style>
