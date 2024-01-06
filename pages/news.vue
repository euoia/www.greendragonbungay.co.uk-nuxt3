<script setup>
import newsItems from "~/assets/content/news-items.js";

useHead({
  title: "News | Green Dragon Bungay | Pub & Brewery | Suffolk",
  meta: [
    {
      name: "description",
      content:
        "News from the Green Dragon, Bungay, Suffolk. Find out about our upcoming events, awards, and more.",
    },
  ],
});
</script>

<template>
  <gd-page
    :banner-image="{
      src: '/images/green-dragon-pump-clips-high-res.jpg',
      alt: 'Green Dragon Bungay - pump clips on the bar - Chaucer, Bridge Street, Gold',
    }"
    :logo-image="{
      src: '/images/green-dragon-bungay-logo-with-dragon-white.png',
      alt: 'Green Dragon, Bungay, Suffolk, logo',
    }"
  >
    <gd-section title="News">
      <gd-news-item
        v-for="newsItem in newsItems"
        v-bind="newsItem"
        :key="newsItem.title"
      />
    </gd-section>
  </gd-page>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  async created() {},
};
</script>

<style lang="scss" scoped></style>
g
