<template>
  <gd-page
    :banner-image="{
      src: '/images/front-of-green-dragon-pub-bungay-banner.jpg',
      alt: 'Green Dragon Bungay - Outside the pub',
    }"
    :logo-image="{
      src: '/images/green-dragon-bungay-logo-with-dragon-white.png',
      alt: 'Green Dragon, Bungay, Suffolk, logo',
    }"
  >
    <gd-section title="Our Beer">
      <gd-p
        ><b>Chaucer Ale 3.7% <small>vol</small> &horbar; Challenger hops</b
        ><br />
        A cask-conditioned full-flavoured hoppy session bitter. The local's
        favourite.</gd-p
      >

      <gd-p
        ><b
          >Bridge Street Bitter 4.5% <small>vol</small> &horbar; Challenger
          hops</b
        ><br />
        A cask-conditioned strong hoppy bitter with good malt character and
        slightly spicy notes.</gd-p
      >

      <gd-p
        ><b>Dragon Gold 4.4% <small>vol</small> &horbar; Bobek hops</b><br />
        A cask-conditioned light golden ale with lemon and pine notes.</gd-p
      >

      <gd-p
        ><b>Strong Mild 5.5% <small>vol</small> &horbar; Bobek hops</b><br />
        A cask-conditioned mild with rich flavours &horbar; stronger than your
        usual mild!</gd-p
      >

      <gd-p
        ><b>SIPA 4.5% <small>vol</small> &horbar; Cascade hops</b><br />
        A cask-conditioned session IPA &horbar; bitter and aromatic with a
        lasting finish.</gd-p
      >
    </gd-section>

    <gd-section
      title="Our Pub"
      images-orientation="landscape"
      :images="[
        {
          src: '/images/pen-drawing-of-green-dragon-pub-bungay-suffolk.jpg',
          alt: 'A drawing of the front of the Green Dragon',
        },
      ]"
    >
      <gd-p
        >The Green Dragon was established as a pub and microbrewery in 1991 by
        brothers Robert and William Pickard.</gd-p
      >
      <gd-p
        >For several years, Rob had been brewing at his home on Bridge Street
        &horbar; once a pub called the Green Dragon &horbar; when the brothers
        decided to go into business together.</gd-p
      >
      <gd-p
        >Our beer is now brewed by our fantastic head brewer, Luke Pawsey, using
        the same recipe Rob devised in the 1980s.</gd-p
      >
    </gd-section>

    <gd-section
      title="Our Brewery"
      :images="[
        {
          src: '/images/beer-hops-and-malt.jpg',
          alt: 'A photo of a pint of Chaucer surrounded by Challenger hops and ale malt from Crisp maltings.',
        },
      ]"
      variant="image-right"
    >
      <gd-p
        >We brew using whole cone hops and locally sourced malt, milled
        faithfully on site. Every brew, we crop and reuse our yeast for the next
        brew &horbar; we have been doing this for more than 30 years.</gd-p
      >
      <gd-p
        >Our brewery produces seven barrels (around 1,150 litres) each brew. We
        typically brew three times each month. The process takes around seven
        days from soaking the grain to putting into cask. Once in cask the beer
        undergoes secondary fermentation for a minimum of seven days, after
        which time it can be prepared for serving.</gd-p
      >
      <gd-p
        >If you would like to arrange a brewery tour, please
        <a href="mailto:info@greendragonbungay.co.uk">get in touch</a>.</gd-p
      >
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
