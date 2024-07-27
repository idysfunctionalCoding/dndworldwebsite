import { LandmarkCardProps } from "../../components/landmarkcards/landmarkCard";
import goddessEaris from "../../assets/culturalcards/earis/goddessoflightstatue.png";
import nightOfIllumination from "../../assets/culturalcards/earis/festivaloflight.png";
import luminousPlains from "../../assets/culturalcards/earis/luminousgrasslands.png";
import artCathedral from "../../assets/culturalcards/earis/extravagentart.png";
import dragonRider from "../../assets/culturalcards/xaendriad/dragonrider.png";
import mercenary from "../../assets/culturalcards/xaendriad/mercenary.png";
import dragonsMaw from "../../assets/culturalcards/xaendriad/dragonsmaw.png";
import trialByCombat from "../../assets/culturalcards/xaendriad/trialbycombat.png";
import diversity from "../../assets/culturalcards/minao/diversity.png";
import festivalOfBlossoms from "../../assets/culturalcards/minao/festivalofblossoms.png";
import musicImportance from "../../assets/culturalcards/minao/music.png";
import spiritualImportance from "../../assets/culturalcards/minao/spirits.png";
import criminalGroups from "../../assets/culturalcards/egitia/criminalgroup.png";
import mysteryRuins from "../../assets/culturalcards/egitia/MysteryRuins.png";
import wailingMarsh from "../../assets/culturalcards/egitia/WailingMarsh.png";

export const earisCulturalSection: LandmarkCardProps[] = [
  {
    heading: "The Goddess Earis",
    text: "A massive status of the goddess Earis standing in the capital of the Holy Empire",
    imageUrl: goddessEaris,
  },
  {
    heading: "Night of Illumination",
    text: "A festival commemorating the longest night of the year when Earis’s light is believed to be at its strongest.",
    imageUrl: nightOfIllumination,
  },
  {
    heading: "The Luminous Plains",
    text: "Blessed by Earis these fields are a major economic boon to the empire with their blessing",
    imageUrl: luminousPlains,
  },
  {
    heading: "Extravagent Art",
    text: "Stunning art is always on display stained glass windows are a prominent feature in homes and cathedrals",
    imageUrl: artCathedral,
  },
];

export const xaendriadCulturalSection: LandmarkCardProps[] = [
  {
    heading: "Dragon Bonds",
    text: "Some people bond with dragons and is the highest honor one can recieve",
    imageUrl: dragonRider,
  },
  {
    heading: "Mercenaries",
    text: "Xaendriad is famed for some of the best mercenary groups in the world",
    imageUrl: mercenary,
  },
  {
    heading: "The Dragon's Maw",
    text: "Surronded by jagged peaks the terrain is difficult to traverse with lots of elevation changes",
    imageUrl: dragonsMaw,
  },
  {
    heading: "Colosseum Combat",
    text: "A dedicated place to either settle disputes, trial by combat, or provide entertainment",
    imageUrl: trialByCombat,
  },
];

export const minaoCulturalSection: LandmarkCardProps[] = [
  {
    heading: "Many Subraces",
    text: "Elves have a lot of subraces and the diversity is shown often in the enclaves",
    imageUrl: diversity,
  },
  {
    heading: "Festival of Blossoms",
    text: "An annual festival at the beginning of Spring to celebrate nature returning",
    imageUrl: festivalOfBlossoms,
  },
  {
    heading: "Music",
    text: "Music is a very important art form to the kingdom and is linked to many traditions",
    imageUrl: musicImportance,
  },
  {
    heading: "Spirits",
    text: "Spirts are worshipped almost at the level of gods",
    imageUrl: spiritualImportance,
  },
];

export const egitiaCulturalSection: LandmarkCardProps[] = [
  {
    heading: "Cursed Lands",
    text: "The lands here are decaying with no life for the most part",
    imageUrl: wailingMarsh,
  },
  {
    heading: "Criminal Groups",
    text: "Criminal groups and warlords run the towns and cities",
    imageUrl: criminalGroups,
  },
  {
    heading: "Historical Mystery",
    text: "Much is not known about the time before the Dominion of Egitia started there are many ruins of unknown origin",
    imageUrl: mysteryRuins,
  },
];
