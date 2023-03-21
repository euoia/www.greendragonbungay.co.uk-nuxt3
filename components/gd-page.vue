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
        <div>History</div>
        <div>Food</div>
        <div>Beer</div>
      </div>

      <div ref="menuHeader" class="center menu-section">GREEN DRAGON</div>

      <div class="right menu-section">
        <div>Events</div>
        <div>Gallery</div>
        <div>Contact</div>
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

      // Parallax the header image.
      const parallax = this.$refs.parallax;
      parallax.style.transform = `translateY(${0 - scrollPosition * 0.3}px)`;
      parallax.style.opacity = 1 - scrollPosition * 0.003;

      // Fade in the menu.
      const menu = this.$refs.menu;
      menu.style.height = `${Math.max(80 - scrollPosition * 2.5, 50)}px`;

      menu.style.backgroundColor = `rgba(255, 255, 255, ${Math.min(
        (scrollPosition - 10) * 0.01,
        1
      )})`;

      const color = Math.max(
        255 - Math.min((scrollPosition - 80) * 10.5, 200),
        0
      );
      menu.style.color = `rgba(${color}, ${color}, ${color}, 1)`;

      const menuHeader = this.$refs.menuHeader;
      menuHeader.style.opacity = Math.min(scrollPosition * 0.01, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  height: 80px;
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
  color: black;
  gap: 0.5em;

  .menu-section {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    &.left,
    &.right {
      font-family: var(--body-font);
      font-size: 1em;
      //color: var(--dark-grey);
    }

    &.left,
    &.right,
    &.center {
      flex: 1;
    }

    &.center {
      color: black;
      line-height: 1em;
    }
  }
}

.gd-page {
  display: flex;
  flex-direction: column;

  .content {
    margin: auto;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
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
