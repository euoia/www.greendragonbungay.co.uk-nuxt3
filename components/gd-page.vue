<template>
  <div class="gd-page">
    <header class="hero-header">
      <div class="hero-image">
        <img
          src="~/assets/images/banner.jpg"
          alt="Green Dragon Bungay - pump clips on the bar - Chaucer, Bridge Street, Gold"
        />
      </div>

      <div ref="parallax" class="text-overlay-box" :style="parallaxStyle">
        <img
          class="logo-image"
          src="/images/green-dragon-bungay-logo-with-dragon-white.png"
          alt="Green Dragon, Bungay, Suffolk, logo"
        />
      </div>
    </header>

    <div class="content">
      <slot />
    </div>
  </div>

  <gd-menu />

  <footer class="footer">
    <div class="main-info">
      <div class="main-element">01986&nbsp;892681</div>
      <div class="main-element">
        <a href="mailto:james@greendragonbungay.co.uk"
          >info@greendragonbungay.co.uk</a
        >
      </div>
    </div>

    <div class="other-info">
      <section class="footer-section">
        <div class="title">Address</div>
        <div class="row">29 Broad Street</div>
        <div class="row">Bungay</div>
        <div class="row">Suffolk</div>
        <div class="row">NR35 1EF</div>
      </section>

      <section class="footer-section">
        <div class="title">Also</div>
        <div class="row">
          <a href="https://greendragon.eo.page/1x8dp"
            >Subscribe to our newsletter</a
          >
        </div>
        <div class="row">
          <a href="https://www.gdbeer.co.uk">Order beer online</a>
        </div>
        <div class="row">
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
        </div>
      </section>

      <section class="footer-section">
        <div class="title">Follow us</div>
        <div class="row">
          <a href="https://www.facebook.com/greendragonbungay/">Facebook</a>
        </div>
        <div class="row">
          <a href="https://www.instagram.com/greendragonbungay/">Instagram</a>
        </div>
        <div class="row">
          <a href="https://twitter.com/greendragonbung">Twitter</a>
        </div>
      </section>
    </div>

    <div class="copyright">
      <div>&copy; Green Dragon Bungay 2023</div>
      <div>Created by <a href="https://www.cloudship.co.uk">Cloudship</a></div>
    </div>
  </footer>
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
    grid-gap: 60px;

    .main-element {
      grid-column: span 2;
    }

    a {
      text-decoration: none;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }

  .other-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 60px;

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
