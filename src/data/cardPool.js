export const cardsPool = [
  {
    id: 1,
    title: "MTG Black Lotus",
    image: "/img/cards/black-lotus.jpg",
  },
  {
    id: 2,
    title: "Pokemon Charizard",
    image: "/img/cards/charizard.jpg",
  },
  {
    id: 3,
    title: "Yu-Gi-Oh! Blue Eyes White Dragon",
    image: "/img/cards/blue-eyes.jpg",
  },
  {
    id: 4,
    title: "MTG Time Walk",
    image: "/img/cards/time-walk.jpg",
  },
  {
    id: 5,
    title: "Pokemon Pikachu Illustrator",
    image: "/img/cards/pikachu-illustrator.jpg",
  },
  {
    id: 6,
    title: "Yu-Gi-Oh! Dark Magician",
    image: "/img/cards/dark-magician.jpg",
  },
  // Add more cards as needed
];

export const getFeaturedCards = (count) => {
  // Shuffle and return a subset of cards
  const shuffled = [...cardsPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
