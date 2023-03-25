<template>
  <section class="gd-section" :class="variant">
    <div v-if="images !== null" class="half">
      <gd-images :images="images" />
    </div>

    <div
      class="content"
      :class="{ half: images !== null, full: images === null }"
    >
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
        <div class="cta"><slot name="cta" /></div>
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
    images: {
      type: Array,
      required: false,
      default: null,
    },
    variant: {
      type: String,
      required: false,
      default: null,
      validator: (value) => {
        return ["image-right"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  async created() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.gd-section {
  position: relative;
  display: flex;
  gap: 6em;

  &.image-right {
    flex-direction: row-reverse;

    @media (max-width: $one-col-breakpoint) {
      // When on one column, we always want the text first.
      flex-direction: column-reverse;
    }
  }

  @media (max-width: $one-col-breakpoint) {
    // When on one column, we always want the text first.
    flex-direction: column-reverse;
  }

  margin: 1em 0;

  max-width: var(--max-page-width);

  @media (max-width: $one-col-breakpoint) {
    flex-wrap: wrap;
    padding: 0;
  }

  .half {
    margin: 0 auto;
    flex: 1;

    @media (max-width: $one-col-breakpoint) {
      width: 100%;
      min-width: auto;
      flex: auto;
    }
  }

  .full {
    max-width: 700px;
  }

  .content {
    gap: 2em;
    display: flex;
    flex-direction: column;
    padding-top: 2em;
    padding-bottom: 2em;

    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 2em;

    //.content-title,
    //.content-footer {
    //  flex: 0;
    //}

    .content-title {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      gap: 2em;
    }

    .content-body {
      //flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2em;
      padding-left: 1em;
      padding-right: 1em;
    }
  }

  .cta {
    :deep(a) {
      color: var(--green-dragon-green);
      font-family: var(--header-font);
      text-decoration: none;
      transition: color 0.25s ease-out;

      &:hover {
        color: var(--green-dragon-dark-green);
      }

      // Animate an underline on hover.
      position: relative;
      font-variant: small-caps;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: black;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
}

.separator {
  width: 40px;
  height: 40px;
  color: var(--mid-grey);
}
</style>
