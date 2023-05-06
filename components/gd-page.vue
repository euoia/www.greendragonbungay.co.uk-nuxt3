<script setup>
import {
  email,
  phoneNumber,
  addressLines,
  copyrightBusiness,
  createdByLink,
  followUsLinks,
} from "@/assets/content/business.js";
</script>

<template>
  <div class="gd-page">
    <header class="hero-header">
      <div class="hero-image">
        <nuxt-img :src="bannerImage.src" :alt="bannerImage.alt" />
      </div>

      <div ref="parallax" class="text-overlay-box" :style="parallaxStyle">
        <nuxt-img class="logo-image" :src="logoImage.src" :alt="logoImage.alt" />
      </div>
    </header>

    <div class="content">
      <slot />
    </div>
  </div>

  <gd-menu />

  <footer class="footer" id="contact">
    <div class="main-info">
      <div class="main-element">
        <a class="whitespace-nowrap" :href="`tel:${phoneNumber}`">{{
          phoneNumber
        }}</a>
      </div>
      <div class="main-element">
        <a :href="`mailto:${email}`">{{ email }}</a>
      </div>
    </div>

    <div class="other-info">
      <section class="footer-section">
        <div class="title">Address</div>
        <div v-for="addressLine in addressLines" :key="addressLine">
          {{ addressLine }}
        </div>
        <div>
          <a href="https://goo.gl/maps/kXThU75PBHfe7xJJ9" target="_blank">Map
            <Icon name="material-symbols:location-on-outline" />
          </a>
        </div>
      </section>

      <section class="footer-section">
        <div class="title">Also</div>
        <div>
          <gd-newsletter-link />
        </div>
        <div>
          <a href="https://www.gdbeer.co.uk">Order beer online</a>
        </div>
        <div>
          <a href="https://www.gdeat.co.uk">Order food online</a>
        </div>
      </section>

      <section class="footer-section">
        <div class="title">Opening hours</div>
        <div class="opening-hours">
          <div>Mon &horbar; Sat</div>
          <div>12&nbsp;&horbar;&nbsp;12</div>
          <div>Sun</div>
          <div>12&nbsp;&horbar;&nbsp;10</div>
          <div><b>Kitchen</b></div>
          <div></div>
          <div>Thu &horbar; Sat</div>
          <div>12&nbsp;&horbar;&nbsp;8</div>
        </div>
      </section>

      <section class="footer-section">
        <div class="title">Follow us</div>
        <div v-for="followUsLink in followUsLinks" :key="followUsLink">
          <a :href="followUsLink.href">{{ followUsLink.text }}</a>
        </div>
      </section>
    </div>

    <div class="copyright">
      <div>&copy; {{ copyrightBusiness }} {{ new Date().getFullYear() }}</div>
      <div>
        Created by <a :href="createdByLink.href">{{ createdByLink.text }}</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    bannerImage: {
      type: Object,
      required: true,
    },
    logoImage: {
      type: Object,
      required: true,
    },
  },
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
      if (parallax === undefined || parallax === null) {
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
        max-width: 90%;
        object-fit: contain;
      }

      .text-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
  }

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

.footer {
  background: var(--dark-grey);
  color: var(--light-grey);
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  font-size: max(1.5vw, 16px);

  a {
    color: var(--light-grey);
  }

  .main-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 2em;
    grid-gap: 45px;

    .main-element {
      grid-column: span 2;
    }

    a {
      text-decoration: none;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-gap: 20px 0;
    }

    @media (max-width: 500px) {
      font-size: 1.5em;
      grid-gap: 20px 0;
    }
  }

  .other-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 45px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }

    .title {
      font-size: 1.4em;
      margin-bottom: 0.5em;
    }

    .footer-section {
      //flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.25em;
      justify-content: flex-start;
      text-align: left;
    }

    .opening-hours {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5em;
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    margin: auto;
    text-align: center;
    flex-direction: column;
    font-size: 0.8em;
    line-height: 1.5em;
  }
}
</style>
