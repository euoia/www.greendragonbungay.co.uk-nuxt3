<template>
  <gd-page :banner-image="{
    src: '/images/green-dragon-pump-clips-high-res.jpg',
    alt: 'Green Dragon Bungay - pump clips on the bar - Chaucer, Bridge Street, Gold',
  }" :logo-image="{
  src: '/images/green-dragon-bungay-logo-with-dragon-white.png',
  alt: 'Green Dragon, Bungay, Suffolk, logo',
}">
    <gd-section title="The Green Dragon" :images="[
      {
        src: '/images/front-of-pub.jpg',
        alt: 'Front of the Green Dragon, circa 2023',
      },
      {
        src: '/images/pen-drawing-of-pub.jpg',
        alt: 'A drawing of the front of the Green Dragon',
      },
    ]">
      <gd-p>The Green Dragon was established as a pub and microbrewery in 1991 by
        brothers Robert and William Pickard.</gd-p>
      <gd-p>For several years, Rob had been brewing at his home on Bridge Street
        &horbar; once a pub called the Green Dragon &horbar; when the brothers
        decided to go into business together.</gd-p>
      <gd-p>Our beer is now brewed by our fantastic head brewer, Luke Pawsey,
        using the same recipe Rob devised in the 1980s.</gd-p>
    </gd-section>

    <gd-section title="Our brewery" :images="[
      {
        src: '/images/beer-hops-and-malt.jpg',
        alt: 'A photo of a pint of Chaucer surrounded by Challenger hops and ale malt from Crisp maltings.',
      },
    ]" variant="image-right">
      <gd-p>We brew using whole cone hops and locally sourced malt, milled
        faithfully on site. Every brew, we crop and reuse our yeast for the next
        brew &horbar; we have been doing this for more than 30 years.</gd-p>
      <gd-p>Our brewery produces seven barrels (around 1,150 litres) each brew. We
        typically brew three times each month. The process takes around seven
        days from soaking the grain to putting into cask. Once in cask the beer
        undergoes secondary fermentation for a minimum of seven days, after
        which time it can be prepared for serving.</gd-p>
      <gd-p>If you would like to arrange a brewery tour, please
        <a href="info@greendragonbungay.co.uk">get in touch</a>.</gd-p>
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
  async created() { },
};
</script>

<style lang="scss" scoped></style>
g
