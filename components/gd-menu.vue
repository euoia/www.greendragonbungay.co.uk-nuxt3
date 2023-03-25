<template>
  <header ref="menuDesktop" class="menu menu-desktop">
    <div class="left menu-section">
      <div v-for="link in menuContent.leftLinks" :key="link.text">
        <NuxtLink :to="link.href">{{ link.text }}</NuxtLink>
      </div>
    </div>

    <div ref="menuHeader" class="center menu-section">
      <NuxtLink href="/">{{ menuContent.title }}</NuxtLink>
    </div>

    <div class="right menu-section">
      <div v-for="link in menuContent.rightLinks" :key="link.text">
        <a :href="link.href">{{ link.text }}</a>
      </div>
    </div>
  </header>

  <header ref="menuMobile" class="menu menu-mobile">
    <div class="full-screen-menu" :class="{ showing: showingMenu }">
      <div class="menu-section">
        <div v-for="link in menuContent.leftLinks" :key="link.text">
          <a :href="link.href">{{ link.text }}</a>
        </div>
        <div v-for="link in menuContent.rightLinks" :key="link.text">
          <a :href="link.href">{{ link.text }}</a>
        </div>
      </div>
    </div>

    <div ref="menuHeader">
      {{ menuContent.title }}
    </div>

    <div class="hamburger-container">
      <button @click="toggleMenu">
        <Icon name="fa6-solid:bars" size="36px" />
      </button>
    </div>
  </header>
</template>

<script>
import menuContent from "@/assets/content/menu.js";

export default {
  props: {},
  data() {
    return {
      showingMenu: false,
    };
  },
  computed: {
    menuContent() {
      return menuContent;
    },
  },
  watch: {},
  async created() {},
  mounted() {
    if (process.client === false) {
      // Only do this client-side.
      return;
    }

    window.addEventListener("scroll", this.parallaxCallback);
    this.parallaxCallback();
  },
  methods: {
    toggleMenu() {
      this.showingMenu = !this.showingMenu;
    },
    parallaxMenu(menu) {
      if (menu === undefined || menu === null) {
        return;
      }

      const scrollPosition = window.pageYOffset;

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

      menu.style.setProperty(
        "--background-color-opacity",
        menuBackgroundColorOpacity
      );

      const menuColorStart = 255;
      const menuColorEnd = 0;
      const color = getAnimatedValue(menuColorStart, menuColorEnd);

      menu.style.setProperty(
        "--color",
        `rgba(${color}, ${color}, ${color}, 1)`
      );

      // TODO: The link color should really be Green Dragon Green.

      const menuHeader = this.$refs.menuHeader;
      menuHeader.style.opacity = Math.min(scrollPosition * 0.01, 1);
    },
    parallaxCallback() {
      this.parallaxMenu(this.$refs.menuDesktop);
      this.parallaxMenu(this.$refs.menuMobile);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.menu {
  --background-color-opacity: 0;
  --color: rgba(255, 255, 255, 1);

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

  background-color: rgba(255, 255, 255, var(--background-color-opacity));
  color: var(--color);

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
      text-decoration: none;
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

  &.menu-desktop {
    @media (max-width: $menu-mobile-breakpoint) {
      display: none;
    }
  }

  &.menu-mobile {
    @media (min-width: $menu-mobile-breakpoint) {
      display: none;
    }

    .hamburger-container {
      position: absolute;
      right: 10px;

      button {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: var(--green-dragon-green);
        }
      }
    }

    .full-screen-menu {
      color: black;
      width: 0;
      height: 100%;
      position: fixed;
      top: 0;
      right: 0;
      background-color: rgba(255, 255, 255, 0.9);
      transition: width 0.5s;

      &.showing {
        width: 100%;

        .menu-section {
          opacity: 1;
        }
      }

      .menu-section {
        transition: width 0.5s, opacity 0.5s;
        position: absolute;
        opacity: 0;
        width: 100%;
        text-align: center;
        top: 80px;
        line-height: 1.5em;
        flex-direction: column;
        font-size: 1.4em;
      }
    }
  }
}
</style>
