<template>
  <gd-page :banner-image="{
    src: '/images/overhead-shot-of-food-square.jpg',
    alt: 'Overhead shot of food',
  }" :logo-image="{
  src: '/images/deep-fried-brie-funny-dragon-logo.png',
  alt: 'Deep Fried Brie, Bungay, Suffolk, logo',
}">
    <gd-section title="Food tells a story">
      <gd-p>
        Our menu combines comforting favourites with unique elements that each
        mean something to us. Chef&nbsp;Ian&nbsp;Cooke carefully selects
        ingredients to create dishes that are distinctive and full of flavour.
      </gd-p>

      <gd-p>
        <i>One example is Poutine</i> &horbar; a Canadian classic that holds a
        special place in owner James's heart from his time spent in the country.
        This amazing dish is made from fries, cheese curds, and gravy and is a
        simple yet incredibly satisfying comfort food.
      </gd-p>

      <gd-p>
        Owner Rob has spent years perfecting his technique of smoking cheddar
        cheese. Now, we proudly feature our very own smoked ham and cheese on
        the menu in a variety of ways.
      </gd-p>

      <gd-p>Our love of chillies led us to ferment Habanero peppers, which we use to
        make our fiery <i>Fire Dragon</i> sauce. It's a personal favorite of
        ours and we hope it will become one of yours too.
      </gd-p>

      <gd-p>
        To make our food easily accessible, we offer an online takeout service
        at <a href="https://www.gdeat.co.uk">gdeat.co.uk</a>. Come check out our
        current menu and indulge in our culinary story.
      </gd-p>

      <template #cta>
        <gd-p>
          <a href="/images/current-food-menu.jpg">View our current menu</a>
        </gd-p>
        <gd-p>
          <a href="https://www.gdeat.co.uk">Order online</a>
        </gd-p>
      </template>
    </gd-section>

    <gd-section :images="[
      {
        src: 'images/fish-finger-sandwich-crop.jpg',
        alt: 'A delicious fish finger sandwich',
      },
    ]" />

    <gd-section :images="[
      {
        src: 'images/ploughmans-scotch-egg.jpg',
        alt: 'A delicious fish finger sandwich',
      },
    ]" />
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
