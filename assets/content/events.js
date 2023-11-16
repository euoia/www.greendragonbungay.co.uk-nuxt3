// Note that times are UTC, so please accommodate BST.
// TODO: Would be easier if times are Europe/London.
//
// Order is not important, grouped on front end.
const events = [
  // 28 December 2023.
  {
    starts_at: "2023-12-28T15:00:00Z",
    text: "JC's Moonshine Band",
    href: "https://www.facebook.com/jcsmoonshineband",
  },
  // 17 December 2023.
  {
    starts_at: "2023-12-17T15:00:00Z",
    text: "The Cruisers",
    href: "https://www.facebook.com/thecruisersrock",
  },
  // 11 December 2023.
  {
    starts_at: "2023-11-11T17:00:00Z",
    text: "Monthly European Folk Tune Session",
    href: "https://www.facebook.com/groups/587092358119118/permalink/2461765810651754/",
  },
  // 9 December 2023.
  {
    starts_at: "2023-12-09T19:00:00Z",
    text: "Christmas Disco with DJ Martin Tee",
  },
  // 3 December 2023.
  {
    starts_at: "2023-12-03T14:30:00Z",
    text: "Snords",
  },
  // 26 November 2023.
  {
    starts_at: "2023-11-26T14:30:00Z",
    text: "Hot Stove 3",
    href: "https://www.hotstove3.com/",
  },
  // 19 November 2023.
  {
    starts_at: "2023-11-19T14:30:00Z",
    text: "Steve & Greta",
    href: "https://www.youtube.com/watch?v=vpJMR6hanh4",
  },
  // 13 November 2023.
  {
    starts_at: "2023-11-13T17:00:00Z",
    text: "Monthly European Folk Tune Session",
    href: "https://www.facebook.com/groups/587092358119118/permalink/2461765810651754/",
  },
  // 12 November 2023.
  {
    starts_at: "2023-11-12T14:30:00Z",
    text: "Murphy's Lore",
    href: "https://www.murphyslore.co.uk/",
  },
  // 5 November 2023.
  {
    starts_at: "2023-11-05T14:30:00Z",
    text: "Blue Plate Specials",
    href: "https://www.facebook.com/people/The-Blue-Plate-Specials/100063836958831/",
  },
  // 29 October 2023.
  {
    starts_at: "2023-10-29T14:30:00Z",
    text: "The Likes of Us",
    href: "https://www.facebook.com/profile.php?id=100039241282655",
  },
  // 22 October 2023.
  {
    starts_at: "2023-10-22T13:30:00Z",
    text: "High Symes & Miss Demeanor",
    href: "https://www.youtube.com/watch?v=zm0yNIf_k5k",
  },
  // 15 October 2023.
  {
    starts_at: "2023-10-15T13:30:00Z",
    text: "The Cruisers",
    href: "https://www.facebook.com/thecruisersrock",
  },
  {
    starts_at: "2023-10-15T11:00:00Z",
    text: "Little Beer Festival",
    href: "https://www.facebook.com/greendragonbungay",
  },
  {
    starts_at: "2023-10-14T11:00:00Z",
    text: "Little Beer Festival",
    href: "https://www.facebook.com/greendragonbungay",
  },
  {
    starts_at: "2023-10-13T11:00:00Z",
    text: "Little Beer Festival",
    href: "https://www.facebook.com/greendragonbungay",
  },
  // 8 October 2023.
  {
    starts_at: "2023-10-08T13:30:00Z",
    text: "JC's Moonshine Band",
    href: "https://www.facebook.com/jcsmoonshineband",
  },
  // 1 October 2023.
  {
    starts_at: "2023-10-01T13:30:00Z",
    text: "Treacle Miners",
  },
  // 24 September 2023.
  {
    starts_at: "2023-09-24T13:30:00Z",
    text: "Blue Plate Specials",
    href: "https://www.facebook.com/people/The-Blue-Plate-Specials/100063836958831/",
  },
  // 17 September 2023.
  // Probably last Sunday Wok Truck this year.
  {
    starts_at: "2023-09-17T13:30:00Z",
    text: "Murphy's Lore",
    href: "https://www.murphyslore.co.uk/",
  },
  {
    starts_at: "2023-09-17T11:00:00Z",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 11 September 2023.
  {
    starts_at: "2023-09-11T17:00:00Z",
    text: "Monthly European Folk Tune Session",
    href: "https://www.facebook.com/groups/587092358119118/permalink/2461765810651754/",
  },

  // 3 September 2023.
  {
    starts_at: "2023-09-03T13:30:00Z",
    text: "Dragon Dubs Party",
  },
  {
    starts_at: "2023-09-03T11:00:00Z",
    text: "Caribbean Street Food",
  },

  // 27 August 2023.
  {
    starts_at: "2023-08-27T13:30:00Z",
    text: "GB Unchained",
  },
  {
    starts_at: "2023-08-27T11:00:00Z",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 20 August 2023 - nothing yet.
  {
    starts_at: "2023-08-20T13:30:00Z",
    text: "The High Points",
    href: "https://www.highpointsband.com/about",
  },
  {
    starts_at: "2023-08-20T11:00:00Z",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 13 August 2023.
  {
    starts_at: "2023-08-13T13:00:00Z",
    text: "Oyster Bar by Earsham Street Fish Co.",
    href: "https://www.facebook.com/EarshamStreetFishCo",
  },
  {
    starts_at: "2023-08-13T14:00:00Z",
    text: "Blue Sky Music",
    href: "https://blueskymusic.co.uk/",
  },

  // 6 August 2023.
  {
    starts_at: "2023-08-06T13:30:00Z",
    text: "Steve & Greta",
    href: "https://www.youtube.com/watch?v=vpJMR6hanh4",
  },
  {
    starts_at: "2023-08-06T11:00:00Z",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 23 July 2023.
  {
    starts_at: "2023-07-23T13:30:00Z",
    text: "Andy & Friends",
  },
  {
    starts_at: "2023-07-23T11:00:00Z",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 16 July 2023.
  {
    starts_at: "2023-07-16T15:00:00Z",
    text: "Hot Stove 3",
    href: "https://www.hotstove3.com/",
  },
  {
    starts_at: "2023-07-16T11:00:00Z",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 9 July 2023.
  {
    starts_at: "2023-07-09T13:30:00",
    text: "Generation Gap",
  },
  {
    starts_at: "2023-07-09T11:00:00",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 2 July 2023.
  {
    starts_at: "2023-07-02T13:30:00",
    text: "The Likes of Us",
    href: "https://www.facebook.com/profile.php?id=100039241282655",
  },
  {
    starts_at: "2023-07-02T11:00:00",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 25 June 2023.
  {
    starts_at: "2023-06-25T13:30:00",
    text: "Murphy's Lore",
    href: "https://www.murphyslore.co.uk/",
  },
  {
    starts_at: "2023-06-25T11:00:00",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 18 June 2023.
  {
    starts_at: "2023-06-18T15:00:00",
    text: "Blue Plate Specials",
    href: "https://www.facebook.com/people/The-Blue-Plate-Specials/100063836958831/",
  },
  {
    starts_at: "2023-06-18T11:00:00",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 4 June 2023.
  {
    starts_at: "2023-06-04T13:30:00",
    text: "The Cruisers",
  },
  {
    starts_at: "2023-06-04T11:00:00",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 14 May 2023.
  {
    starts_at: "2023-05-14T13:30:00",
    text: "High Symes & Miss Demeanor",
    href: "https://www.youtube.com/watch?v=zm0yNIf_k5k",
  },
  {
    starts_at: "2023-05-14T13:00:00",
    text: "Woktruck &horbar; Asian Street Food",
    href: "https://www.facebook.com/profile.php?id=100089983001484",
  },

  // 29 April 2023.
  {
    starts_at: "2023-04-29T13:30:00",
    text: "T'wyx",
  },

  // 16 April 2023.
  {
    starts_at: "2023-04-16T13:30:00Z",
    text: "Murphy's Lore",
    href: "https://www.murphyslore.co.uk/",
  },

  // 30 April 2023.
  {
    starts_at: "2023-04-30T13:30:00Z",
    text: "The Likes of Us",
  },
];

export default events;
