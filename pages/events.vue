<template>
  <gd-page :banner-image="{
    src: '/images/green-dragon-pump-clips-high-res.jpg',
    alt: 'Green Dragon Bungay - pump clips on the bar - Chaucer, Bridge Street, Gold',
  }" :logo-image="{
  src: '/images/green-dragon-bungay-logo-with-dragon-white.png',
  alt: 'Green Dragon, Bungay, Suffolk, logo',
}">
    <gd-section title="Upcoming Events" span>
      <gd-p>
        <div><b>Sunday 16<sup>th</sup> April</b></div>
        <div><a href="https://www.murphyslore.co.uk/">Murphy's Lore</a></div>
      </gd-p>
    </gd-section>

    <gd-section title="Live Music"
      :images="[
      { src: '/images/jcs-moonshine-band-getting-yo-dancing.jpg', alt: 'John Casey and JC\'s Moonshine Band playing at the Green Dragon' },
      { src: '/images/laurie-east-coast-blues-band-square.jpg', alt: 'Laurie from the East Coast Blues Band playing at the Green Dragon' },
      { src: '/images/andy-barber-and-goz.jpg', alt: 'Andy Barber and Mark \'Goz\' Gosling playing at the Green Dragon' },
      ]"
      images-orientation="portrait-left"
    >
      <gd-p>The Green Dragon is well known for its live music. We play host to a mixture of local blues, rock, pop, folk, and jazz bands.</gd-p>
      <gd-p>When the weather is good enough, the band plays outside and gets the whole garden moving.</gd-p>
      <gd-p>Some of our favourite acts are <a href="https://www.facebook.com/jcsmoonshineband/">JC&apos;s Moonshine Band</a>, <a href="https://www.facebook.com/people/Steve-Greta/100063703860272/">Steve &amp; Greta</a>, <a href="https://www.facebook.com/murphysloremusic/?locale=en_GB">Murphys Lore</a>.</gd-p>
      <gd-p>To stay up to date <gd-newsletter-link>subscribe to our newseletter</gd-newsletter-link> or <a href="https://www.facebook.com/greendragonbungay">follow us on Facebook</a>.</gd-p>
    </gd-section>

    <gd-section :images="[{src: 'images/earsham-street-fish-company-oyster-bar.jpg', alt: 'A panorama of the Green Dragon beer garden during their annual oyster bar.'}]" />

    <gd-section title="Other Events"
      variant="image-right"
      :images="[
      { src: '/images/burns-night-square.jpg', alt: 'Burns Night at the Green Dragon' },
      { src: '/images/oysters.jpg', alt: 'John \'the Boss\' Shannahan serving up fresh osyters as part of the Green Dragon\'s annual August oyster bar.' },
      { src: '/images/little-beer-festival-square.png', alt: 'Casks of beer racked for Green Dragon\'s Little Beer Festival' },
      { src: '/images/kathy-the-quizmaster.jpg', alt: 'Quiz Night with Kathy at the Green Dragon' },
      ]"
      images-orientation="portrait-left"
    >
      <gd-p>Other one-off events at the Green Dragon include:</gd-p>
      <gd-p>In January, Burns' Night Supper &horbar; a hearty celebration of the life and poetry of Robert Burns.</gd-p>
      <gd-p>In August, Our annual oyster and jazz bar, in partnership with Cliffy and Lucy's fabulous <a href="https://www.facebook.com/EarshamStreetFishCo/">Earsham Street Fish Company</a>.</gd-p>
      <gd-p>Our "Litle Beer Festival" &horbar; sample a selection of our favourite real ales on cask.</gd-p>
      <gd-p>Charity quiz nights.</gd-p>
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

<style lang="scss" scoped></style>g
