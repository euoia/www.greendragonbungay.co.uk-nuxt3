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
    <gd-section span>
      <ClientOnly>
        <gd-quote v-bind="randomQuote" />
      </ClientOnly>
    </gd-section>

    <gd-section
      title="About"
      :images="[
        {
          src: '/images/rob-in-brewery-square.jpg',
          alt: 'Rob in the brewery',
        },
        {
          src: '/images/wings-and-beer-square.jpg',
          alt: 'Barbecue chicken wings and a pint of frothy Chaucer Ale',
        },
        {
          src: '/images/stained-glass-lights-square-crop.jpg',
          alt: 'Beautiful Stained glass at the Green Dragon',
        },
        {
          src: '/images/laurie-east-coast-blues-band-square.jpg',
          alt: 'Laurie playing with East Coast Blues Band at the Green Dragon',
        },
      ]"
      variant="image-right"
    >
      <gd-p>
        We have been brewing beer in Bungay from whole hops and locally sourced
        malt since 1991.
      </gd-p>

      <gd-p>
        Exclusively serving five of our own beers, we also stock a varying
        selection of craft beer and cider.
      </gd-p>

      <gd-p>
        We are known locally for our excellent beer, good company and friendly
        atmosphere.
      </gd-p>

      <template #cta>
        <gd-p><a href="/pub">Read more about the pub and brewery</a></gd-p>
      </template>
    </gd-section>

    <gd-section
      title="Food"
      :images="[
        {
          src: '/images/canadian-poutine-dripping-into-a-bowl-of-fries.jpg',
          alt: 'Canadian Poutine dripping into a bowl of fries',
        },
        {
          src: '/images/overhead-shot-of-food-square.jpg',
          alt: 'Overhead shot of food',
        },
        {
          src: '/images/brie-sandwich-oozing-with-cheese-square.jpg',
          alt: 'Artisan Brie Sandwich Oozing with Cheese',
        },
        {
          src: '/images/chaucer-ale-and-fish-finger-sandwich.jpg',
          alt: 'Chaucer Ale and Fish Finger Sandwich',
        },
      ]"
    >
      <gd-p
        ><i
          >Please note our kitchen is closed for January 2024 and will reopen on
          Thursday 1<sup>st</sup> February 2024.</i
        >
      </gd-p>
      <gd-p
        >Chef Ian Cooke developed a diverse menu with unique ingredients such as
        artisan Portugeuse bread and featuring international favourites like
        Canadian Poutine.
      </gd-p>

      <gd-p
        >The kitchen is open Thursday to Saturday, midday to 8&nbsp;PM.
      </gd-p>

      <gd-p
        >You can order food for takeway at
        <a href="https://www.gdeat.co.uk">gdeat.co.uk</a>.
      </gd-p>

      <template #cta>
        <gd-p>
          <NuxtLink href="/food">View our food menu</NuxtLink>
        </gd-p>
      </template>
    </gd-section>

    <gd-section
      title="Live Music"
      :images="[
        {
          src: '/images/andy-barber-and-goz.jpg',
          alt: 'Andy Barber and Goz',
        },
      ]"
      variant="image-right"
    >
      <gd-p
        >Drop in on a Sunday afternoon and you might find yourself listening to
        live music while the afternoon drifts away.
      </gd-p>

      <gd-p
        >Stay up to date with what&apos;s happening by following us on Facebook
        or
        <a href="https://greendragon.eo.page/1x8dp"
          >subscribing to our newsletter</a
        >.</gd-p
      >

      <template #cta>
        <gd-p>
          <NuxtLink href="/events">See our upcoming events</NuxtLink>
        </gd-p>
      </template>
    </gd-section>

    <gd-section
      title="News"
      :images="[{ src: '/images/pump-clips-square.jpg', alt: 'Pump clips' }]"
    >
      <gd-p icon="ri:beer-fill">
        <span class="muted">January 2024</span> We are hiring in our kitchen
        <NuxtLink to="2024-05-01-green-dragon-kitchen-jobs"
          >click to read more</NuxtLink
        >.
      </gd-p>

      <gd-p icon="fa6-solid:trophy">
        We won Town Pub of the Year in CAMRA's North East Suffolk pub awards
        2023!
      </gd-p>

      <gd-p>
        <a
          href="https://www.becclesandbungayjournal.co.uk/news/23390909.north-east-suffolk-branch-camras-real-ale-pub-awards/"
          >Our award was featured in the Beccles and Bungay Journal</a
        >.
      </gd-p>

      <template #cta>
        <gd-p><a href="/news">Read more news</a></gd-p>
      </template>
    </gd-section>

    <!--
    <gd-section
      title="Food Trucks"
      img-src="/images/wood-fired-pizza-truck-square.png"
    >
      <gd-p
        >During the summer, we sometimes invite food trucks to park up outside
                    the pub. Join our mailing list to stay up to date!</gd-p
                  >
                </gd-section>
                -->
  </gd-page>
</template>

<script>
import quotes from "~/assets/content/quotes.js";
import lodash from "lodash";
const { sample } = lodash;

export default {
  props: {},
  data() {
    return {
      randomQuote: null,
    };
  },
  computed: {},
  watch: {},
  async created() {
    this.randomQuote = sample(quotes);
  },
};
</script>

<style lang="scss" scoped></style>
