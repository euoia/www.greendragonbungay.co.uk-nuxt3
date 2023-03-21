<template>
  <section class="gd-section">
    <div class="image-container" :style="style">
      <!--<img v-if="imgSrc" :src="imgSrc" />-->
    </div>

    <div class="content">
      <div class="content-title">
        <h1>{{ title }}</h1>
        <img
          class="separator"
          src="/images/hops-separator.png"
          alt="Text separator"
        />
      </div>

      <div class="content-body">
        <slot />
      </div>

      <div class="content-footer">
        <div class="cta"><a href="/learn-more">Learn more</a></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    style() {
      return {
        backgroundImage: `url(${this.imgSrc})`,
      };
    },
  },
  watch: {},
  async created() {},
};
</script>

<style lang="scss" scoped>
.gd-section {
  position: relative;
  display: flex;
  gap: 1em;

  border-radius: 28px;
  // Add a 3D shadow.
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.3);

  background-color: rgba(255, 255, 255, 0.9);
  margin: 1em 0;

  padding-right: 1em;

  width: 900px;

  @media (max-width: 900px) {
    border-radius: 0px;
    flex-wrap: wrap;
    padding: 0;
  }

  .image-container {
    border-radius: 28px 0 0 28px;

    min-height: 400px;
    min-width: 50%;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 900px) {
      border-radius: 0px;
      width: 100%;
      min-width: auto;
    }
  }

  .content {
    padding: 3em 1em;
    gap: 1em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    line-height: 1.6em;

    .content-title,
    .content-footer {
      flex: 0;
    }

    .content-title {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      gap: 1em;
    }

    .content-body {
      flex: 1;
    }
  }
}

.separator {
  width: 40px;
  height: 40px;
  color: var(--mid-grey);
}
</style>
