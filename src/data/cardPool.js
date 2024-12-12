import blackLotus from "../img/all-slabs/Black_Lotus_Scrye_Magazine_Oversize_Cards_OVER.jpg";
import blackerLotus from "../img/all-slabs/Blacker_Lotus_Unglued_UGL.jpg";
import blastoise from "../img/all-slabs/Blastoise_Base_Set_Shadowless_BSS.jpg";
import blueEyes from "../img/all-slabs/Blue-Eyes_White_Dragon_Dark_Duel_Stories_YuGiOh_Video_Game_Promotional_Cards_VDP.jpg";
import blueEyesSecret from "../img/all-slabs/Blue-Eyes_White_Dragon_Quarter_Century_Secret_Rare_25th_Anniversary_Ultimate_Kaiba_Set_KC01.jpg";
import blueEyesPharaoh from "../img/all-slabs/Blue-Eyes_White_Dragon_Secret_Pharaohs_Rare_Magnificent_Mavens_MAMA.jpg";
import darkMagicianGirlMVP from "../img/all-slabs/Dark_Magician_Girl_The_Dark_Side_of_Dimensions_Movie_Pack_Gold_Edition_MVP1-ENG.jpg";
import darkMagicianGirlLART from "../img/all-slabs/Dark_Magician_Girl_2020_The_Lost_Art_Promotion_LART.jpg";
import darkMagicianGirlGhost from "../img/all-slabs/Dark_Magician_Girl_Ghost_Rare_Ghosts_From_the_Past_The_2nd_Haunting_GFP2.jpg";
import darkMagicianGirlDragonAlt from "../img/all-slabs/Dark_Magician_Girl_the_Dragon_Knight_Alternate_Art_Blue_Dragons_of_Legend_The_Complete_Series_DLCS.jpg";
import darkMagicianGirlDragonSecret from "../img/all-slabs/Dark_Magician_Girl_the_Dragon_Knight_Quarter_Century_Secret_Rare_Quarter_Century_Bonanza.jpg";
import jeweledLotus from "../img/all-slabs/Jeweled_Lotus_Extended_Art_Commander_Legends_CMR.jpg";
import pikachuEX from "../img/all-slabs/Pikachu_ex_238191_S";
import shiningCharizard from "../img/all-slabs/Shining_Charizard_Neo_Destiny_N4.jpg";

export const cardsPool = [
  { id: 1, title: "Black Lotus (Scrye Magazine)", image: blackLotus },
  { id: 2, title: "Blacker Lotus", image: blackerLotus },
  { id: 3, title: "Blastoise - Base Set (Shadowless)", image: blastoise },
  {
    id: 4,
    title: "Blue-Eyes White Dragon (Dark Duel Stories)",
    image: blueEyes,
  },
  {
    id: 5,
    title: "Blue-Eyes White Dragon (Quarter Century Secret Rare)",
    image: blueEyesSecret,
  },
  {
    id: 6,
    title: "Blue-Eyes White Dragon (Secret Pharaoh's Rare)",
    image: blueEyesPharaoh,
  },
  {
    id: 7,
    title: "Dark Magician Girl - The Dark Side of Dimensions",
    image: darkMagicianGirlMVP,
  },
  {
    id: 8,
    title: "Dark Magician Girl (2020) - The Lost Art Promotion",
    image: darkMagicianGirlLART,
  },
  {
    id: 9,
    title: "Dark Magician Girl (Ghost Rare)",
    image: darkMagicianGirlGhost,
  },
  {
    id: 10,
    title: "Dark Magician Girl the Dragon Knight (Alternate Art)",
    image: darkMagicianGirlDragonAlt,
  },
  {
    id: 11,
    title: "Dark Magician Girl the Dragon Knight (Quarter Century Secret Rare)",
    image: darkMagicianGirlDragonSecret,
  },
  { id: 12, title: "Jeweled Lotus (Extended Art)", image: jeweledLotus },
  { id: 13, title: "Pikachu ex - Surging Sparks", image: pikachuEX },
  { id: 14, title: "Shining Charizard - Neo Destiny", image: shiningCharizard },
];

export const getFeaturedCards = (count) => {
  const shuffled = [...cardsPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
