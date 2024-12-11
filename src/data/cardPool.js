// Pool of all available graded cards
export const cardsPool = [
  {
    id: 1,
    title:
      "Dark Magician Girl - The Dark Side of Dimensions Movie Pack Gold Edition",
    image:
      "/img/all-slabs/Dark Magician Girl - The Dark Side of Dimensions Movie Pack Gold Edition (MVP1-ENG).jpg",
  },
  {
    id: 2,
    title: "Dark Magician Girl (2020) - The Lost Art Promotion",
    image:
      "/img/all-slabs/Dark Magician Girl (2020) - The Lost Art Promotion (LART).jpg",
  },
  {
    id: 3,
    title:
      "Dark Magician Girl (Ghost Rare) - Ghosts From the Past The 2nd Haunting",
    image:
      "/img/all-slabs/Dark Magician Girl (Ghost Rare) - Ghosts From the Past The 2nd Haunting (GFP2).jpg",
  },
  {
    id: 4,
    title:
      "Dark Magician Girl the Dragon Knight (Alternate Art) (Blue) - Dragons of Legend The Complete Series",
    image:
      "/img/all-slabs/Dark Magician Girl the Dragon Knight (Alternate Art) (Blue) - Dragons of Legend The Complete Series (DLCS).jpg",
  },
  {
    id: 5,
    title:
      "Dark Magician Girl the Dragon Knight (Quarter Century Secret Rare) - Quarter Century Bonanza",
    image:
      "/img/all-slabs/Dark Magician Girl the Dragon Knight (Quarter Century Secret Rare) - Quarter Century Bonanza.jpg",
  },
  {
    id: 6,
    title: "Jeweled Lotus (Extended Art) - Commander Legends",
    image:
      "/img/all-slabs/Jeweled Lotus (Extended Art) - Commander Legends (CMR).jpg",
  },
  {
    id: 7,
    title: "Pikachu ex - 238/191 - SV08 Surging Sparks",
    image:
      "/img/all-slabs/Pikachu ex - 238191 - SV08 Surging Sparks (SV08).jpg",
  },
];

// Function to get a subset of featured cards
export const getFeaturedCards = (count) => {
  // Shuffle and return a subset of cards
  const shuffled = [...cardsPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
