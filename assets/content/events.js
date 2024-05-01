// Note that times are UTC, so please accommodate BST.
// 14:30 BST is 13:30 UTC.
//
// BST comes into effect on the last Sunday in March and ends on the last
// Sunday in October.
// TODO: Would be easier if times are Europe/London.
//
// Order is not important, grouped on front end.
const events = [
  //  9 June 2024.
  {
    starts_at: "2024-06-09T20:00:00Z",
    text: "High Points!",
    href: "https://www.highpointsband.com/",
  },
  // 2 June 2024.
  {
    starts_at: "2024-06-02T14:30:00Z",
    text: "The Cruisers",
    href: "https://www.facebook.com/thecruisersrock",
  },
  // 26 May 2024.
  {
    starts_at: "2024-05-26T11:00:00Z",
    text: "Portuguese charcoal pig roast by Tuga Flavours",
    href: "https://www.facebook.com/profile.php?id=61551940102575",
  },
  {
    starts_at: "2024-05-26T13:30:00Z",
    text: "The Snords",
  },
  {
    starts_at: "2024-05-26T15:30:00Z",
    text: "Lizzie & The List Band",
    href: "https://www.facebook.com/LizzieAndTheListBand/",
  },

  // 19 May 2024.
  {
    starts_at: "2024-05-19T13:30:00Z",
    text: "Blue Plate Specials",
    href: "https://www.facebook.com/people/The-Blue-Plate-Specials/100063836958831/",
  },
  // 12 May 2024.
  {
    starts_at: "2024-05-12T13:30:00Z",
    text: "Murphy's Lore",
    href: "https://www.murphyslore.co.uk/",
  },
  // 5 May 2024.
  {
    starts_at: "2024-05-05T13:30:00Z",
    text: "Underdogs",
  },
  // 21 April 2024.
  {
    starts_at: "2024-04-21T13:30:00Z",
    text: "The Likes of Us",
    href: "https://www.facebook.com/profile.php?id=100039241282655",
  },
  // 14 April 2024.
  {
    starts_at: "2024-04-14T13:30:00Z",
    text: "Generation Gap",
  },
  // 7 April 2024.
  {
    starts_at: "2024-04-07T13:30:00Z",
    text: "High Symes & Miss Demeanor",
    href: "https://www.youtube.com/watch?v=zm0yNIf_k5k",
  },
  // British Summer Time starts.
  // 31 March 2024
  {
    starts_at: "2024-03-31T13:30:00Z",
    text: "Blue Plate Specials",
    href: "https://www.facebook.com/people/The-Blue-Plate-Specials/100063836958831/",
  },
  // 24 March 2024
  {
    starts_at: "2024-03-24T14:30:00Z",
    text: "Treacle Miners",
  },
  // 17 March 2024
  {
    starts_at: "2024-03-17T15:00:00Z",
    text: "JC's Moonshine Band",
    href: "https://www.facebook.com/jcsmoonshineband",
  },
  // 09 March 2024.
  {
    starts_at: "2024-03-09T20:00:00Z",
    text: "80s Party Night with DJ Martin Tee",
    href: "https://www.facebook.com/events/893200992203157",
  },

  // 03 March 2024.
  {
    starts_at: "2024-03-03T14:30:00Z",
    text: "Flánn",
    href: "https://www.flann.org/",
  },

  {
    starts_at: "2024-03-03T13:00:00Z",
    text: "Beezys Catering Kitchen",
    href: "https://www.facebook.com/beezyscateringkitchen",
  },

  // 28 February 2024.
  // TODO: Event URL.
  {
    starts_at: "2024-02-28T19:00:00Z",
    text: "Wok Truck Presents: Sushi Night",
  },
  // 18 February 2024.
  {
    starts_at: "2024-02-18T15:00:00Z",
    text: "Murphy's Lore",
    href: "https://www.murphyslore.co.uk/",
  },
  // 4 February 2024.
  {
    starts_at: "2024-02-04T15:00:00Z",
    text: "Steve & Greta",
    href: "https://www.youtube.com/watch?v=vpJMR6hanh4",
  },
  // 25 January 2024.
  {
    starts_at: "2024-01-25T19:00:00Z",
    text: "Burns Night Supper - Booking Essential",
    href: "https://www.facebook.com/events/1754886874956008",
  },
  // 21 January 2024.
  {
    starts_at: "2024-01-21T15:00:00Z",
    text: "Hot Stove 3",
    href: "https://www.hotstove3.com/",
  },
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
  {
    starts_at: "2023-12-03T12:30:00Z",
    text: "Portuguese Barbecue, Pig spit roast with Tuga Flavours",
    href: "https://www.facebook.com/profile.php?id=61551940102575",
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
