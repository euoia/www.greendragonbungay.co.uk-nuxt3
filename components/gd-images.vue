<!-- TODO: Support 3-image layouts. -->
<template>
  <div class="images">
    <!-- When using 1 image, it should be square. -->
    <!-- When using 2 images, they should be portrait or landscape and there should be an attribute to specify which. -->
    <!-- When using 4 images, they should square. -->
    <div v-if="images.length === 1" class="images-container">
      <img class="image" :src="images[0].src" :alt="images[0].alt" />
    </div>

    <div v-if="images.length === 2 && orientation === 'landscape'" class="images-container">
      <img class="image" :src="images[0].src" :alt="images[0].alt" />
      <img class="image" :src="images[1].src" :alt="images[1].alt" />
    </div>

    <div v-if="images.length === 2 && orientation === 'portrait'" class="images-container">
      <img class="image" :src="images[0].src" :alt="images[0].alt" />
      <img class="image" :src="images[1].src" :alt="images[1].alt" />
    </div>

  <!-- TODO: There are potentially 4 variants of 3 images:
    1. Top image is landscape, bottom images both square.
    2. Top images are square, bottom image is landscape.
    3. Left image is portrait, right images are square.
    4. Left images are square, right image is portrait.
                        -->
    <div v-if="images.length === 3 && orientation === 'portrait-left'" class="images-container three-portrait-left">
      <img class="image" :src="images[0].src" :alt="images[0].alt" />
      <img class="image" :src="images[1].src" :alt="images[1].alt" />
      <img class="image" :src="images[2].src" :alt="images[2].alt" />
    </div>

    <div v-if="images.length === 4" class="images-container four-images">
      <img class="image" :src="images[0].src" :alt="images[0].alt" />
      <img class="image" :src="images[1].src" :alt="images[1].alt" />
      <img class="image" :src="images[2].src" :alt="images[2].alt" />
      <img class="image" :src="images[3].src" :alt="images[3].alt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: false,
      default: null,
    },
    orientation: {
      ype: String,
      required: false,
      default: "portrait",
      validator: (value) => {
        return ["landscape", "portrait"].includes(value);
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  async created() { },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.images {
  --gap: 1em;

  min-height: 400px;
  display: flex;

  @media (max-width: $one-col-breakpoint) {
    width: 100%;
    min-width: auto;
    flex: auto;
    min-height: 400px;
  }

  .images-container {
    flex: 1;

    .image {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }

    &.three-portrait-left {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: var(--gap);

      .image {
        &:nth-child(1) {
          grid-column: 1 / 2;
          grid-row: 1 / 3;

          object-fit: cover;
          height: 100%;
        }
      }
    }

    &.four-images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: var(--gap);
    }
  }
}
</style>
