<template>
  <gd-page
    :banner-image="{
      src: '/images/overhead-shot-of-food-square.jpg',
      alt: 'Overhead shot of food',
    }"
    :logo-image="{
      src: '/images/deep-fried-brie-funny-dragon-logo.png',
      alt: 'Deep Fried Brie, Bungay, Suffolk, logo',
    }"
  >
    <gd-section title="Food tells a story" cta-position="top">
      <gd-p>
        Our menu combines comforting favourites with unique elements that each
        mean something to us. Chef&nbsp;Ian&nbsp;Cooke carefully selects
        ingredients to create dishes that are distinctive and full of flavour.
      </gd-p>

      <gd-p>
        <i>One example is Poutine</i> &horbar; a Canadian classic that holds a
        special place in owner James Pickard's belly from his years working as a
        programmer in Montreal. This amazing dish is made from fries, cheese
        curds, and gravy and is simple yet satisfying food.
      </gd-p>

      <gd-p>
        Owner Rob has spent years perfecting his technique of smoking cheddar
        cheese. Now, we proudly feature our own smoked ham and cheese on the
        menu in a variety of ways.
      </gd-p>

      <gd-p
        >Our love of chillies led us to ferment Habanero peppers, which we use
        to make our seriously spicy <i>Fire Dragon</i> sauce. It's a personal
        favorite of ours and we hope it can become one of yours too.
      </gd-p>

      <gd-p>
        To make our food easily accessible, we offer an online takeout service
        at <a href="https://www.gdeat.co.uk">gdeat.co.uk</a>. Come check out our
        current menu and indulge in our culinary story.
      </gd-p>

      <template #cta>
        <gd-p>
          <a href="/images/2023-09-28-green-dragon-autumn-food-menu.jpg"
            >View our current menu</a
          >
        </gd-p>
        <gd-p>
          <a href="https://www.gdeat.co.uk">Order online</a>
        </gd-p>
      </template>
    </gd-section>

    <gd-section
      :images="[
        {
          src: 'images/fish-finger-sandwich-crop.jpg',
          alt: 'A delicious fish finger sandwich',
        },
      ]"
    />

    <gd-section
      :images="[
        {
          src: 'images/ploughmans-scotch-egg.jpg',
          alt: 'A delicious fish finger sandwich',
        },
      ]"
    />

    <gd-section
      :images="[
        {
          src: 'images/crispy-chilli-beer-and-hammerton-tuned-pale-ale.jpg',
          alt: 'Crispy chilli beef, made with fillet steak, served with a can of Hammerton Tuned Pale Ale',
        },
      ]"
    />
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
