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

    <header ref="menu" class="menu">
      <div class="left menu-section">
        <div><a>Pub</a></div>
        <div><a>Food</a></div>
        <div><a>Brewery</a></div>
      </div>

      <div ref="menuHeader" class="center menu-section">GREEN DRAGON</div>

      <div class="right menu-section">
        <div><a>Events</a></div>
        <div><a>Gallery</a></div>
        <div><a>Contact</a></div>
      </div>
    </header>
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
      return {
        transform: `translateY(${window.scrollY * 0.5}px)`,
      };
    },
  },
  watch: {},
  mounted() {
    console.log(`Before mounted`);

    window.addEventListener("scroll", this.parallaxCallback);
    this.parallaxCallback();
  },
  methods: {
    parallaxCallback() {
      const scrollPosition = window.pageYOffset;

      // Parallax and fade the header image.
      const parallax = this.$refs.parallax;
      if (parallax) {
        parallax.style.transform = `translateY(${0 - scrollPosition * 0.3}px)`;
        parallax.style.opacity = Math.max(1 - scrollPosition * 0.005, 0);
      }

      // Fade in the menu.
      const menu = this.$refs.menu;

      const animationStart = 40;
      const animationEnd = 100;

      const animationPct = Math.min(
        Math.max(
          (scrollPosition - animationStart) / (animationEnd - animationStart),
          0
        ),
        1
      );

      const getAnimatedValue = (start, end) => {
        return start + (end - start) * animationPct;
      };

      const menuStartHeight = 100;
      const menuEndHeight = 50;
      const menuHeight = getAnimatedValue(menuStartHeight, menuEndHeight);
      menu.style.height = `${menuHeight}px`;

      const menuBackgroundColorOpacityStart = 0;
      const menuBackgroundColorOpacityEnd = 1;
      const menuBackgroundColorOpacity = getAnimatedValue(
        menuBackgroundColorOpacityStart,
        menuBackgroundColorOpacityEnd
      );

      menu.style.backgroundColor = `rgba(255, 255, 255, ${menuBackgroundColorOpacity})`;

      const menuColorStart = 255;
      const menuColorEnd = 0;
      const color = getAnimatedValue(menuColorStart, menuColorEnd);

      menu.style.color = `rgba(${color}, ${color}, ${color}, 1)`;

      // TODO: The link color should really be Green Dragon Green.

      const menuHeader = this.$refs.menuHeader;
      menuHeader.style.opacity = Math.min(scrollPosition * 0.01, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5em;
  font-family: var(--header-font);
  gap: 0.5em;

  .menu-section {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    a {
      font-variant: small-caps;
      font-size: 0.8em;
      color: inherit;
    }

    &.left,
    &.right {
      font-size: 1em;
    }

    &.left,
    &.right,
    &.center {
      flex: 1;
    }

    &.center {
      line-height: 1em;
    }
  }
}

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
