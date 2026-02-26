<script setup lang="ts">
import { ref } from "vue";
import pandariaLogo from "../../../assets/images/pandaria-logo.avif";
import mopLaunchImage from "../../../assets/images/WoW_Classic_MoP_Launch_.avif";

const heroVideo = ref<HTMLVideoElement | null>(null);
const isPaused = ref(false);

const trailerEmbedUrl = "https://www.youtube.com/embed/wvYXoyxLv64?autoplay=1";
const isTrailerOpen = ref(false);

const toggleVideoState = () => {
  if (!heroVideo.value) return;

  if (heroVideo.value.paused) {
    void heroVideo.value.play();
    isPaused.value = false;
    return;
  }

  heroVideo.value.pause();
  isPaused.value = true;
};

const handleVideoPlay = () => {
  isPaused.value = false;
};

const handleVideoPause = () => {
  isPaused.value = true;
};

const openTrailer = () => {
  isTrailerOpen.value = true;
};
</script>
<template>
  <section class="hero-wrap">
    <video
      ref="heroVideo"
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="../../../assets/images/background-wow.avif"
      @play="handleVideoPlay"
      @pause="handleVideoPause"
    >
      <source
        src="../../../assets/video/MoPLaunch_Masthead_loop.mp4"
        type="video/mp4"
      />
    </video>

    <!-- <div class="hero-overlay"></div> -->
    <div class="flex items-center justify-end container mx-auto">
      <div class="hero-content">
        <img
          :src="pandariaLogo"
          alt="Mists of Pandaria Classic"
          class="hero-logo"
        />

        <h1 class="hero-title text-[48px] w-full">Rediscover Pure Adventure</h1>

        <p class="hero-description">
          Mists of Pandaria Classic™ is now available and is included with an
          active WoW Subscription or game time!
        </p>

        <div class="hero-actions">
          <button type="button" class="shop-btn">SHOP UPGRADES</button>
          <button type="button" class="subscribe-btn">SUBSCRIBE</button>
        </div>

        <div class="availability">
          <p class="availability-text">Available on Windows/Mac</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            aria-labelledby="blz-icon-title-battlenet-logo"
            viewBox="0 0 196 32"
            part="icon"
            class="bnet-logo"
          >
            <title id="blz-icon-title-battlenet-logo">Battle.net</title>
            <path
              stroke="none"
              d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196m54.318 4.729L68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.61-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
            ></path>
            <path
              stroke="none"
              d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
            ></path>
          </svg>
        </div>
      </div>
      <div class=""></div>
    </div>

    <button type="button" class="video-control" @click="toggleVideoState">
      <svg
        v-if="isPaused"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="video-control-icon"
      >
        <path d="M8 5v14l11-7z"></path>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="video-control-icon"
      >
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      </svg>
    </button>

    <div class="callToArm container mx-auto">
      <div class="desc flex items-start gap-1 flex-col">
        <h4 class="text-left text-[#FFF2D9] text-xl font-[500]">
          Pandaria Awaits
        </h4>
        <h1 class="heading1 text-left">
          Your Classic <br />
          Journey Continues
        </h1>
        <p class="text-left descirption">
          You've ended Deathwing's destructive rampage, now you must unlock the
          mysteries of a lost continent and discover the dark secrets of
          Pandaria's past. Explore ancient kingdoms hidden since before the
          Sundering, plunder vast treasures from the depths of the forgotten
          vaults, and rise to defend Pandaria from the shadow of a long buried
          evil—before it is too late. Play: Video
        </p>
      </div>
      <div class="announceVideo">
        <div class="media-shell">
          <Transition name="trailer-fade" mode="out-in">
            <button
              v-if="!isTrailerOpen"
              key="poster"
              class="poster"
              type="button"
              @click="openTrailer"
              aria-label="Play Pandaria trailer"
            >
              <img
                :src="mopLaunchImage"
                alt="Pandaria trailer thumbnail"
                loading="lazy"
                class="poster-image"
              />
              <span class="poster-play">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="poster-play-icon"
                >
                  <path
                    stroke="none"
                    d="M6 5.573c0-1.267 1.604-2.012 2.777-1.291l10.46 6.427c1.017.624 1.017 1.958 0 2.582l-10.46 6.427C7.604 20.439 6 19.694 6 18.427z"
                  ></path>
                </svg>
              </span>
            </button>

            <iframe
              v-else
              src="https://www.aparat.com/video/video/embed/videohash/v83o4wp/vt/frame"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              class="trailer-frame"
            ></iframe>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero-wrap {
  max-width: 100%;
  min-height: 100vh;
  border-radius: 10px;
  overflow: hidden;
  background: #0b2219;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 95vh;
  object-fit: cover;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 75%,
    transparent 100%
  );
  mask-image: linear-gradient(to bottom, black 0%, black 75%, transparent 100%);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  /* background:
    radial-gradient(
      circle at 20% 98%,
      rgba(164, 18, 52, 0),
      transparent 42%
    ),
    linear-gradient(
      90deg,
      rgba(9, 15, 12, 0.2) 26%,
      rgba(3, 11, 8, 0.82) 62%,
      rgba(3, 11, 8, 0.96) 100%
    ),
    linear-gradient(180deg, rgba(3, 11, 8, 0.8) 0%, rgba(3, 11, 8, 0.6) 100%); */
}

.hero-content {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 116px);
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.5) 0%,
    transparent 70%,
    transparent 100%
  );
  width: min(760px, 100%);
  padding: clamp(2rem, 5vw, 4.5rem) clamp(1.25rem, 4vw, 4.75rem)
    clamp(2.2rem, 4vw, 3.2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
}

.hero-logo {
  width: min(500px, 80vw);
  object-fit: contain;
}

.hero-title {
  margin-top: clamp(1rem, 2vw, 1.8rem);
  color: #f6dfc0;
  background:
    linear-gradient(180deg, #b89687, #f5c69c, #f7e6b8, #fff7e0),
    rgba(255, 255, 255, 0.5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  margin-top: 1rem;
  max-width: 620px;
  font-size: clamp(20px, 1.4vw, 1.5rem);
  line-height: 1.5;
  background: linear-gradient(180deg, #ffffffe6 0%, #ffffffa8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-actions {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.shop-btn,
.subscribe-btn {
  min-height: 62px;
  min-width: 240px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition: background-color 0.2s ease;
  cursor: pointer;
}

.shop-btn {
  border: 2px solid #f8b700;
  background: #eb9110;
  color: #080808;
}

.shop-btn:hover {
  background: #f7b90a;
}

.subscribe-btn {
  background: #21ae7a;
  color: #05160f;
}

.subscribe-btn:hover {
  background: #2cd196;
}

.availability {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.availability-text {
  font-size: 1rem;
  color: #ffffff80;
}

.bnet-logo {
  width: min(196px, 58vw);
  color: #ffffffcc;
}

.video-control {
  position: absolute;
  left: 40px;
  bottom: 96px;
  z-index: 2;
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  border: 2px solid #eb9110;
  background: rgba(6, 18, 13, 0.7);
  color: #eb9110;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease;
  cursor: pointer;
}

.video-control:hover {
  border-color: #f7b90a;
  color: #f7b90a;
  background: rgba(9, 26, 18, 0.86);
}

.video-control-icon {
  width: 22px;
  height: 22px;
}

.announceVideo {
  width: min(920px, 100%);
}

.callToArm {
  max-width: min(1400px, 92vw);
  margin-top: 1.75rem;
  padding: 0 1rem 2rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  align-items: center;
  gap: clamp(1rem, 3vw, 2rem);
}

.descirption {
  color: #ffffffe6;
  filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.4));
  margin-top: 16px;
  max-width: 720px;
  font-size: clamp(1rem, 1.7vw, 1.25rem);
  line-height: 1.5;
}

.media-shell {
  width: 100%;
  aspect-ratio: 919 / 517;
  border: 2px solid #f8b700;
  border-radius: 10px;
  overflow: hidden;
  background: #0f1f16;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.poster {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  cursor: pointer;
  display: block;
  background: transparent;
}

.poster-image {
  width: 916px;
  height: 516px;
  object-fit: cover;
  filter: brightness(0.8);
  transition:
    filter 0.35s ease,
    transform 0.35s ease;
}

.poster:hover .poster-image {
  filter: brightness(1.05);
}

.poster-play {
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  color: #fff;
  opacity: 0.85;
  transition: opacity 0.25s ease;
}

.poster:hover .poster-play {
  opacity: 1;
}

.poster-play-icon {
  width: clamp(54px, 5vw, 84px);
  height: clamp(54px, 5vw, 84px);
}

.trailer-frame {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.trailer-fade-enter-active,
.trailer-fade-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.trailer-fade-enter-from,
.trailer-fade-leave-to {
  opacity: 0;
  transform: scale(0.985);
}

@media (max-width: 1024px) {
  .hero-wrap,
  .hero-content {
    min-height: calc(100vh - 96px);
  }

  .shop-btn,
  .subscribe-btn {
    min-width: 190px;
    min-height: 54px;
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .hero-content {
    justify-content: flex-end;
    width: 100%;
    padding-bottom: 6.5rem;
  }

  .hero-title {
    font-size: clamp(1.7rem, 9vw, 2.4rem);
  }

  .hero-description {
    font-size: clamp(0.95rem, 4.2vw, 1.15rem);
  }

  .hero-actions {
    width: 100%;
  }

  .shop-btn,
  .subscribe-btn {
    width: 100%;
  }

  .availability {
    margin-top: 2.2rem;
  }

  .availability-text {
    font-size: 1.1rem;
  }

  .video-control {
    width: 48px;
    height: 48px;
    left: 14px;
    bottom: 14px;
  }
}
.heading1 {
  background:
    linear-gradient(180deg, #b89687, #f5c69c, #f7e6b8, #fff7e0),
    rgba(255, 255, 255, 0.5);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2px;
  padding-bottom: 2px;
  font-style: normal;
  font-size: clamp(2.1rem, 5vw, 3.7rem);
  line-height: 1.05;
}

@media (max-width: 1100px) {
  .callToArm {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .desc {
    align-items: center;
    text-align: center;
  }

  .desc h4,
  .desc h1,
  .desc p {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-wrap {
    min-height: auto;
  }

  .hero-video {
    height: 80vh;
  }

  .callToArm {
    max-width: 100%;
    padding: 0 0.75rem 1rem;
  }
}
</style>
