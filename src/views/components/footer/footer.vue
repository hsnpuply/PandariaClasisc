<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import BlizzardLogo from "../../../assets/images/blizzEntertainmentLogo.png";
const state = reactive({
  socialsIcon: [
    "fab fa-facebook-f ",
    "fab fa-x-twitter",
    "fab fa-youtube",
    "fab fa-reddit-alien",
    "fab fa-instagram",
  ],
  links: ["Careers", "About", "Support", "Contact Us", "Press", "API"],
  legalLinks: ["Privacy", "Legal", "Terms", "Cookie Policy", "Cookie Settings"],
  bottomSocialIcons: [
    "fab fa-x-twitter",
    "fab fa-facebook-f",
    "fab fa-reddit-alien",
    "fab fa-instagram",
    "fab fa-youtube",
  ],
  isLanguageMenuOpen: false,
  selectedLanguage: "English (US)",
  languages: [
    "English (US)",
    "Français",
    "Español (Latino)",
    "Italiano",
    "Português (Brasil)",
    "Русский",
    "Deutsch",
    "한국어",
    "English (EU)",
    "繁體中文",
    "Español (EU)",
  ],
});

const languageMenuRef = ref(null);

const toggleLanguageMenu = () => {
  state.isLanguageMenuOpen = !state.isLanguageMenuOpen;
};

const selectLanguage = (language) => {
  state.selectedLanguage = language;
  state.isLanguageMenuOpen = false;
};

const handleOutsideClick = (event) => {
  if (!languageMenuRef.value) return;
  if (!languageMenuRef.value.contains(event.target)) {
    state.isLanguageMenuOpen = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
});
</script>

<template>
  <section id="footerSection" class="footerSection">
    <div class="heading">
      <h1 class="text-[#ebdec2] text-center uppercase">Follow Warcraft</h1>
      <div class="social-row">
        <i
          v-for="(icon, index) in state.socialsIcon"
          :key="index"
          :class="icon"
          class="icons hover:brightness-125 transition duration-300 cursor-pointer text-[40px]"
        ></i>
      </div>
    </div>
    <div class="footer-main">
      <div class="footer-shell">
        <div class="top-section">
          <div class="top-links">
            <a
              v-for="(link, index) in state.links"
              :key="index"
              href="#"
              class="text-[#ebdec2] rounded-[8px] text-lg font-semibold px-3 py-3 text-white/95 text-base hover:bg-[#ffffff0f] transition-colors"
            >
              {{ link }}
            </a>
          </div>
          <div ref="languageMenuRef" class="langauge relative">
            <button
              type="button"
              class="text-[#ebdec2] flex gap-4 items-center cursor-pointer rounded-[8px] text-lg font-semibold px-3 py-3 text-white/95 text-base hover:bg-[#ffffff0f] transition-colors"
              :aria-expanded="state.isLanguageMenuOpen"
              aria-haspopup="true"
              @click.stop="toggleLanguageMenu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
              >
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5013 19.2616 15.9228 15.708 16 12C15.9228 8.29203 14.5013 4.73835 12 2M12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2M2 12C2 6.47715 6.47715 2 12 2"
                  stroke="#808080"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="w-full min-w-[100px]">
                {{ state.selectedLanguage }}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                part="icon"
                aria-hidden="true"
                class="w-6 h-6 transition-transform duration-200"
                :class="{ 'rotate-180': state.isLanguageMenuOpen }"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div
              v-if="state.isLanguageMenuOpen"
              class="language-menu"
            >
              <div class="language-grid">
                <button
                  v-for="language in state.languages"
                  :key="language"
                  type="button"
                  class="language-item cursor-pointer flex items-center gap-3 rounded-[8px] px-2 py-2 text-left text-white hover:bg-[#ffffff10] transition-colors"
                  @click="selectLanguage(language)"
                >
                  <svg
                    v-if="state.selectedLanguage === language"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="w-4 h-4 text-[#b9c4ff]"
                  >
                    <path d="m5 12 4 4L19 6"></path>
                  </svg>
                  <span v-else class="w-4 h-4"></span>
                  <span>{{ language }}</span>
                </button>
              </div>
              <span class="language-menu-arrow"></span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="bottom-section">
        <div class="blizzard">
          <div class="copyRight">
            <img :src="BlizzardLogo" alt="" class="w-[170px] h-full blizzImage" />
            <div class="copyrightDesc ">
              <div class="copyright-text text-[#ffffff80]">
                <span class=""> ©2026 Blizzard Entertainment, Inc. </span><br />
                <span>
                  All
                  <span
                    class="text-[#ffffffa0] hover:text-[#ccc] underline cursor-pointer px-1"
                  >
                    trademarks
                  </span>
                  referenced herein are the properties of their respective
                  owners.
                </span>
              </div>
              <div class="usefulLinks legalLinks">
                <span
                  class="text-sm cursor-pointer text-white hover:bg-[#ffffff08] rounded-[8px] px-3 py-4"
                  v-for="(item,index) in state.legalLinks"
                  :key="index"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
          <div class="socialItems">
            <div class="socialButtons">
              <a
                v-for="(icon, index) in state.bottomSocialIcons"
                :key="index"
                href="#"
                class="w-[50px] h-[50px] rounded-full bg-[#ffffff08] hover:bg-[#ffffff20] flex items-center justify-center hover:brightness-125 transition duration-300"
              >
                <i :class="icon" class="text-[20px] leading-none"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="usk">
          <img src="../../../assets/images/usk12.png" alt="" class="cursor-pointer">
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.footerSection {
  background: url("../../../assets/images/footerBg.avif") no-repeat;
  background-size: cover;
  min-height: 50vh;

  padding: clamp(2.5rem, 5vw, 4rem) clamp(1rem, 5vw, 12rem);
}

.social-row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  gap: clamp(0.8rem, 2vw, 2rem);
  color: #facc15;
}

.footer-main {
  padding: clamp(2rem, 6vw, 7rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-shell {
  width: 100%;
}

.top-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.top-links {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.bottom-section {
  gap: 1rem;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
}

.blizzard {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.copyRight {
  display: flex;
  gap: 1.5rem;
}

.usefulLinks {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.5rem;
}

.socialItems {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  color: #fff;
}

.socialButtons {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.usk {
  align-self: flex-start;
}

.blizzImage {
  filter: drop-shadow(4px 2px 4px rgba(46, 46, 46, 0.4));
}
h1 {
  filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));
  font-size: 2rem;
}
.icons {
  filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));
}
hr {
  width: 100%;
  height: 2px;
  background: #ffffff44;
  margin-top: 32px;
}

.language-item {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.3;
}

.language-menu {
  position: absolute;
  left: 50%;
  top: calc(100% + 10px);
  transform: translateX(-50%);
  width: min(520px, 92vw);
  max-height: min(62vh, 560px);
  overflow-y: auto;
  border-radius: 12px;
  border: 1px solid #ffffff14;
  background: #10172b;
  padding: 1rem;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  z-index: 40;
}

.language-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 1.2rem;
}

.language-menu-arrow {
  position: absolute;
  left: 50%;
  top: -9px;
  margin-left: -10px;
  width: 20px;
  height: 20px;
  background: #10172b;
  border-left: 1px solid #ffffff14;
  border-top: 1px solid #ffffff14;
  border-right: 1px solid #ffffff14;
  border-bottom: 1px solid #ffffff14;
  transform: rotate(45deg) skew(0deg, 0deg);
}


@media (max-width: 1100px) {
  .top-section {
    flex-direction: column;
    align-items: center;
  }

  .top-links {
    justify-content: center;
  }

  .langauge {
    width: auto;
    order: -1;
  }

  .language-menu {
    width: min(520px, 92vw);
  }

  .blizzard {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .copyRight {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .socialItems {
    justify-content: center;
    width: 100%;
  }

  .usefulLinks {
    justify-content: center;
  }

  .usk {
    align-self: center;
  }
}

@media (max-width: 768px) {
  .footerSection {
    padding: 2.5rem 0.75rem 2rem;
  }

  .footer-main {
    padding: 2rem 1rem 1.25rem;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  .social-row {
    margin-top: 1rem;
    gap: 1.1rem;
  }

  .icons {
    font-size: 2.1rem !important;
  }

  .top-section {
    gap: 0.8rem;
  }

  .top-links {
    gap: 0.2rem 0.5rem;
    max-width: 500px;
  }

  .top-links a {
    font-size: 0.95rem !important;
    font-weight: 700;
    padding: 0.35rem 0.5rem !important;
  }

  .langauge > button {
    gap: 0.4rem !important;
    font-size: 1.05rem !important;
    padding: 0.35rem 0.55rem !important;
  }

  .langauge > button svg.w-10 {
    width: 1.2rem !important;
    height: 1.2rem !important;
  }

  .langauge > button svg.w-6 {
    width: 1rem !important;
    height: 1rem !important;
  }

  hr {
    margin-top: 20px;
    opacity: 0.35;
  }

  .bottom-section {
    margin-top: 1.4rem;
  }

  .blizzImage {
    width: 185px !important;
  }

  .socialButtons a {
    width: 38px !important;
    height: 38px !important;
  }

  .socialButtons i {
    font-size: 0.98rem !important;
  }

  .copyright-text {
    font-size: 0.92rem;
    line-height: 1.35;
  }

  .usefulLinks {
    margin-top: 0.6rem;
    gap: 0.1rem 0.35rem;
  }

  .usefulLinks span {
    font-size: 0.95rem !important;
    padding: 0.28rem 0.48rem !important;
  }

  .usk img {
    width: 62px;
    height: auto;
  }

  .language-menu {
    width: min(420px, 92vw);
  }

  .language-grid {
    gap: 0.5rem 0.8rem;
  }
}

@media (max-width: 420px) {
  h1 {
    font-size: 2.2rem;
  }

  .top-links {
    max-width: 350px;
    gap: 0.1rem 0.35rem;
  }

  .top-links a {
    font-size: 0.85rem !important;
  }

  .copyright-text {
    font-size: 0.82rem;
  }

  .usefulLinks span {
    font-size: 0.84rem !important;
  }

  .language-grid {
    grid-template-columns: 1fr;
  }
}

</style>
