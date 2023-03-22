<template>
  <div>
    <div ref="pageArea" class="gd-page">
      <header class="hero-header">
        <div class="hero-image">
          <img
            src="~/assets/images/banner.jpg"
            alt="Green Dragon Bungay - pump clips on the bar - Chaucer, Bridge Street, Gold"
          />
        </div>
        <!--
        <div class="text-overlay-box">
          <div class="text-overlay">
            <div>Green Dragon</div>
            <div>Free House &amp;</div>
            <div>Brewery</div>
          </div>
        </div>
        -->
        <div ref="parallax" class="text-overlay-box" :style="parallaxStyle">
          <img
            class="logo-image"
            src="~/assets/images/green-dragon-bungay-logo.png"
            alt="Green Dragon, Bungay, Suffolk, logo"
          />
        </div>
      </header>

      <div class="content">
        <slot />
      </div>
    </div>

    <gd-menu />
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      parallaxObserver: null,
    };
  },
  computed: {
    parallaxStyle() {
      if (process.client === false) {
        return {};
      }

      return {
        transform: `translateY(${window.scrollY * 0.5}px)`,
      };
    },
  },
  watch: {},
  mounted() {
    if (process.client === false) {
      // Only do this client-side.
      return;
    }

    window.addEventListener("scroll", this.parallaxCallback);
    this.parallaxCallback();
  },
  methods: {
    parallaxCallback() {
      // Parallax and fade the header image.
      const parallax = this.$refs.parallax;
      if (parallax === undefined) {
        return;
      }

      const scrollPosition = window.pageYOffset;

      parallax.style.transform = `translateY(${0 - scrollPosition * 0.3}px)`;
      parallax.style.opacity = Math.max(1 - scrollPosition * 0.005, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.gd-page {
  display: flex;
  flex-direction: column;
  gap: 2em;

  .content {
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
}

.hero-header {
  position: relative;

  .hero-image {
    img {
      // Full width banner image
      width: 100vw;
      height: 800px;
      object-fit: cover;

      // Make it darker.
      filter: brightness(0.4);
    }
  }

  .text-overlay-box {
    font-family: var(--header-font);
    color: white;
    position: absolute;
    font-size: 4em;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo-image {
      height: 80%;
    }

    .text-overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
}
</style>
