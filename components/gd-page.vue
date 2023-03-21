<template>
  <div>
    <div class="gd-page">
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
        <div class="text-overlay-box">
          <img
            class="logo-image"
            src="~/assets/images/green-dragon-bungay-logo.png"
            alt="Green Dragon Inn"
          />
        </div>
      </header>

      <div class="content">
        <slot />
      </div>
    </div>

    <header class="menu">
      <div>About</div>
      <div>Menu</div>
      <div>Gallery</div>
      <div>Events</div>
      <div>Contact</div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5em;
  font-family: var(--header-font);
  color: white;
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
