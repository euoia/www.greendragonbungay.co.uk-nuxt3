<template>
  <gd-page>
    <gd-section
      title="About"
      :images="[
        {
          src: '/images/laurie-east-coast-blues-band-square.jpg',
          alt: 'Laurie playing with East Coast Blues Band at the Green Dragon',
        },
        {
          src: '/images/wings-and-beer-square.jpg',
          alt: 'Barbecue chicken wings and a pint of frothy Chaucer Ale',
        },
        {
          src: '/images/rob-in-brewery-square.jpg',
          alt: 'Rob in the brewery',
        },
        {
          src: '/images/stained-glass-lights-square-crop.jpg',
          alt: 'Beautiful Stained glass at the Green Dragon',
        },
      ]"
    >
      <gd-p>
        We have been brewing beer in Bungay from whole hops and locally sourced
        malt since 1991.
      </gd-p>

      <gd-p>
        We have five of our own beers on tap, and a rotating selection of craft
        beer.
      </gd-p>

      <gd-p>
        We serve amazing hot food Thursday to Saturday,
        midday&nbsp;&horbar;&nbsp;8&nbsp;PM.
      </gd-p>

      <template #cta>
        <a href="/history">Read more about the pub</a>
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
          >This award was featured in the Beccles and Bungay Journal</a
        >.
      </gd-p>

      <template #cta>
        <a href="/news">Read more news</a>
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
        >Chef Ian Cook has worked hard to create an eclectic pub menu using
        excellent ingredients including artisan Portugeuse bread, and featuring
        international classics such as Canadian Poutine.
      </gd-p>

      <gd-p
        >Our kitchen is open Thursday to Saturday, midday &horbar; 8&nbsp;PM.
      </gd-p>

      <gd-p
        >You can order for takeway online at
        <a href="https://www.gdeat.co.uk">gdeat.co.uk</a>.
      </gd-p>

      <template #cta>
        <div><a href="https://www.gdeat.co.uk">View our food menu</a></div>
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
        >On Sunday afternoons throughout the year live bands play at the Green
        Dragon. When the weather's good, the band will play outside under.</gd-p
      >

      <gd-p
        >If you want to stay up to date with our events, follow us on Facebook
        or join our mailing list.</gd-p
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
