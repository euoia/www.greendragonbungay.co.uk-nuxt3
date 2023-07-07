<script lang="ts" setup>
useSchemaOrg([
  // @todo Select Identity: https://unhead-schema-org.harlanzw.com//guide/guides/identity
  defineWebSite({
    name: "Green Dragon Bungay | Pub & Brewery | Suffolk",
  }),
  defineLocalBusiness({
    name: "Green Dragon Bungay",
    logo: "/green-dragon-bungay-logo-black-on-white.png",
    sameAs: [
      "https://www.twitter.com/brewgreendragon",
      "https://www.facebook.com/greendragonbungay",
      "https://www.instagram.com/greendragon91",
    ],
    address: {
      streetAddress: "29 Broad Street",
      addressLocality: "Bungay",
      addressRegion: "Suffolk",
      postalCode: "NR35 1EF",
      addressCountry: "England",
    },
  }),
  defineWebPage(),
]);
</script>

<!-- TODO: If the user is a new user, consider showing some bollocks about current score on Google or TripAdvisor -->
<template>
  <NuxtPage />
</template>
