<!-- TODO: If the user is a new user, consider showing some bollocks about current score on Google or TripAdvisor -->

<template>
  <gd-page>
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
        Exclusively dispensing five of our own beers, we stock a varying
        selection of craft beer.
      </gd-p>

      <gd-p>
        Serving exceptional food Thursday to Saturday, from opening till
        8&nbsp;<span class="ampm">pm</span>.
      </gd-p>

      <template #cta>
        <a href="/history">Read more about the pub</a>
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
        >Chef Ian Cooke created an eclectic pub menu using exclusive elements
        such as artisan Portugeuse bifana bread and featuring international
        favourites such as Canadian Poutine.
      </gd-p>

      <gd-p
        >The kitchen is open Thursday to Saturday, midday to 8&nbsp;PM.
      </gd-p>

      <gd-p
        >You can order for takeway at
        <a href="https://www.gdeat.co.uk">gdeat.co.uk</a>.
      </gd-p>

      <template #cta>
        <div><a href="https://www.gdeat.co.uk">View our food menu</a></div>
      </template>
    </gd-section>

    <gd-section
      title="News"
      :images="[{ src: '/images/pump-clips-square.jpg', alt: 'Pump clips' }]"
      variant="image-right"
    >
      <gd-p :icon="['fa', 'trophy']">
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
        <a href="/news">Read more news</a>
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
        live music while the afternoon melts away.
      </gd-p>

      <gd-p
        >Stay up to date with what&apos;s happening by following us on Facebook
        or
        <a href="https://greendragon.eo.page/1x8dp"
          >subscribing to our newsletter</a
        >.</gd-p
      >

      <template #cta>
        <a href="/upcoming-events">See our upcoming events</a>
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
