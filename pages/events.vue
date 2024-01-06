<script setup>
import events from "~/assets/content/events.js";

useHead({
  title: "Events | Green Dragon Bungay | Pub & Brewery | Suffolk",
  meta: [
    {
      name: "description",
      content:
        "Events at the Green Dragon, Bungay, Suffolk. Find out about our upcoming events, live music, and more.",
    },
  ],
});
</script>

<template>
  <gd-page
    :banner-image="{
      src: '/images/busy-beer-garden-at-the-green-dragon.jpg',
      alt: 'Green Dragon, Bungay, Suffolk - a busy beer garden listening to the Likes of Us play music',
    }"
    :logo-image="{
      src: '/images/green-dragon-bungay-logo-with-dragon-white.png',
      alt: 'Green Dragon, Bungay, Suffolk, logo',
    }"
  >
    <gd-section title="Upcoming Events" span>
      <ClientOnly>
        <gd-date-events
          v-for="dateEvent in dateEvents"
          v-bind="dateEvent"
          :key="dateEvent.date"
        />
      </ClientOnly>
    </gd-section>

    <gd-section
      title="Live Music"
      :images="[
        {
          src: '/images/jcs-moonshine-band-getting-yo-dancing.jpg',
          alt: 'John Casey and JC\'s Moonshine Band playing at the Green Dragon',
        },
        {
          src: '/images/laurie-east-coast-blues-band-square.jpg',
          alt: 'Laurie from the East Coast Blues Band playing at the Green Dragon',
        },
        {
          src: '/images/andy-barber-and-goz.jpg',
          alt: 'Andy Barber and Mark \'Goz\' Gosling playing at the Green Dragon',
        },
      ]"
      images-orientation="portrait-left"
    >
      <gd-p
        >The Green Dragon loves live music. We host a collection of local bands
        playing blues, rock, pop, folk, and jazz.</gd-p
      >
      <gd-p
        >Some of our regular guests are
        <a href="https://www.facebook.com/jcsmoonshineband/"
          >JC&apos;s Moonshine Band</a
        >,
        <a href="https://www.facebook.com/people/Steve-Greta/100063703860272/"
          >Steve &amp; Greta</a
        >,
        <a href="https://www.facebook.com/murphysloremusic/?locale=en_GB"
          >Murphys Lore</a
        >.</gd-p
      >
      <gd-p
        >To stay up to date
        <gd-newsletter-link>subscribe to our newsletter</gd-newsletter-link> or
        <a href="https://www.facebook.com/greendragonbungay"
          >follow us on Facebook</a
        >.</gd-p
      >
    </gd-section>

    <gd-section
      :images="[
        {
          src: 'images/earsham-street-fish-company-oyster-bar.jpg',
          alt: 'A panorama of the Green Dragon beer garden during their annual oyster bar.',
        },
      ]"
    />

    <gd-section
      title="Other Events"
      variant="image-right"
      :images="[
        {
          src: '/images/burns-night-square.jpg',
          alt: 'Burns Night at the Green Dragon',
        },
        {
          src: '/images/oysters.jpg',
          alt: 'John \'the Boss\' Shannahan serving up fresh osyters as part of the Green Dragon\'s annual August oyster bar.',
        },
        {
          src: '/images/little-beer-festival-square.png',
          alt: 'Casks of beer racked for Green Dragon\'s Little Beer Festival',
        },
        {
          src: '/images/kathy-the-quizmaster.jpg',
          alt: 'Quiz Night with Kathy at the Green Dragon',
        },
      ]"
      images-orientation="portrait-left"
    >
      <gd-p>Other events at the Green Dragon include:</gd-p>
      <gd-p
        >In January, Burns' Night Supper &horbar; a hearty celebration of the
        life and poetry of Robert Burns.</gd-p
      >
      <gd-p
        >In August, our annual oyster and jazz bar, in partnership with Cliffy
        and Lucy's fabulous
        <a href="https://www.facebook.com/EarshamStreetFishCo/"
          >Earsham Street Fish Company</a
        >.</gd-p
      >
      <gd-p
        >Our "Litle Beer Festival" &horbar; sample a selection of our favourite
        real ales on cask.</gd-p
      >
      <gd-p>We occasionally host charity quiz nights.</gd-p>
    </gd-section>
  </gd-page>
</template>

<script>
import lodash from "lodash";
const { chain } = lodash;

export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    computedEvents() {
      return chain(events)
        .map((event) => ({
          ...event,
          date: event.starts_at.split("T")[0],
        }))
        .sortBy("starts_at")
        .filter((event) => new Date(event.starts_at) >= new Date())
        .value();
    },
    dateEvents() {
      return chain(this.computedEvents)
        .groupBy("date")
        .map((events, date) => ({ date, events }))
        .take(5)
        .value();
    },
  },
  watch: {},
  async created() {},
};
</script>

<style lang="scss" scoped></style>
g
