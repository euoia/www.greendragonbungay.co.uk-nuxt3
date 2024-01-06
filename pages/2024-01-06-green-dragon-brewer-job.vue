<script setup>
useHead({
  title: "Brewer job | Green Dragon Bungay | Pub & Brewery | Suffolk",
  meta: [
    {
      name: "description",
      content:
        "The Green Dragon in Bungay is hiring a brewer to produce its award winning ales.",
    },
  ],
});
</script>

<template>
  <gd-page
    :banner-image="{
      src: '/images/dragon-mirror.jpg',
      alt: 'Green Dragon Bungay - Dragon Mirror',
    }"
    :logo-image="{
      src: '/images/green-dragon-bungay-logo-with-dragon-white.png',
      alt: 'Green Dragon, Bungay, Suffolk, logo',
    }"
  >
    <gd-section title="We are hiring" cta-position="top" left>
      <gd-p>
        The Green Dragon in Bungay is hiring a brewer to produce its award
        winning ales.
      </gd-p>
      <gd-p>
        This is a fantastic opportunity to work in a family-run pub and brewery
        in a picturesque town in the heart of the Waveney Valley.
      </gd-p>
      <gd-p>
        Key responsibilities include:

        <ul>
          <li>Brewing weekly to produce our core product lines.</li>
          <li>
            End-to-end responsibility for production, cleaning and cask filling.
          </li>
          <li>
            Sanitation, stock control, ordering for ingredients and supplies.
          </li>
          <li>Reporting directly to the business owner.</li>
          <li>Maintenance of HACCP records and other record keeping.</li>
        </ul>
      </gd-p>
      <gd-p
        >You will report directly to the business owner and be supported by our
        small and friendly team.</gd-p
      >
      <gd-p
        >The ideal candidate will have:
        <ul>
          <li>Excellent reliability.</li>
          <li>Great communication skills.</li>
          <li>A pragmatic mindset.</li>
          <li>Technical, mechanical and chemical competence.</li>
          <li>
            Experience in brewing or a field relating to food production or
            chemistry.
          </li>
        </ul>
      </gd-p>
      <gd-p
        >We will consider candidates without brewing experience that have the
        right attitude and are willing to learn.</gd-p
      >

      <gd-p
        >You will be rewarded with:
        <ul>
          <li>A starting salary of circa £25,000 per annum.</li>
          <li>£500 per year training allowance.</li>
          <li>Being part of a creative, fun, friendly and diverse team.</li>
          <li>
            An opportunity to develop recipes and explore new product lines.
          </li>
          <li>
            Career development involving expansion of the pub and brewery
            business including distribution and automation.
          </li>
        </ul>
      </gd-p>
      <gd-p
        >To apply, please send your CV and a cover letter to
        <a href="mailto:james@greendragonbungay.co.uk"
          >james@greendragonbungay.co.uk</a
        >.
      </gd-p>
      <gd-p
        >The Green Dragon was established as a pub and brewery in 1991 by
        brothers Rob and William Pickard and is considered a local institution
        with a dedicated following. It has won numerous accolades over the years
        and continues to be a successful and thriving business.</gd-p
      >
    </gd-section>

    <gd-section
      images-caption="Photo by Robin Harries"
      :images="[
        {
          src: 'images/2023-09-29-luke-pawsey-in-the-brewery-by-robin-harries.jpg',
          alt: 'A photo of Luke Pawsey, brewer extraordinaire, at the Green Dragon Brewery in Bungay',
        },
      ]"
    />
  </gd-page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
