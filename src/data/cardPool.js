// Import images from the src/components/img/all-slabs/ folder
import blackLotus from "../components/img/all-slabs/black-lotus.jpg";
import charizard from "../components/img/all-slabs/charizard.jpg";
import blueEyes from "../components/img/all-slabs/blue-eyes.jpg";
import timeWalk from "../components/img/all-slabs/time-walk.jpg";
import pikachuIllustrator from "../components/img/all-slabs/pikachu-illustrator.jpg";
import darkMagician from "../components/img/all-slabs/dark-magician.jpg";
import moxPearl from "../components/img/all-slabs/mox-pearl.jpg";
import blastoise from "../components/img/all-slabs/blastoise.jpg";
import redEyes from "../components/img/all-slabs/Blue-Eyes White Dragon (Quarter Century Secret Rare) - 25th Anniversary Ultimate Kaiba Set (KC01)";

// Pool of all available graded cards
export const cardsPool = [
  {
    id: 1,
    title: "MTG Black Lotus",
    image: blackLotus,
  },
  {
    id: 2,
    title: "Pokemon Charizard",
    image: charizard,
  },
  {
    id: 3,
    title: "Yu-Gi-Oh! Blue Eyes White Dragon",
    image: blueEyes,
  },
  {
    id: 4,
    title: "MTG Time Walk",
    image: timeWalk,
  },
  {
    id: 5,
    title: "Pokemon Pikachu Illustrator",
    image: pikachuIllustrator,
  },
  {
    id: 6,
    title: "Yu-Gi-Oh! Dark Magician",
    image: darkMagician,
  },
  {
    id: 7,
    title: "MTG Mox Pearl",
    image: moxPearl,
  },
  {
    id: 8,
    title: "Pokemon Blastoise",
    image: blastoise,
  },
  {
    id: 9,
    title: "Yu-Gi-Oh! Red-Eyes Black Dragon",
    image: redEyes,
  },
];

// Function to get a subset of featured cards
export const getFeaturedCards = (count) => {
  // Shuffle and return a subset of cards
  const shuffled = [...cardsPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
