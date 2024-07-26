import { LandmarkCardProps } from "../../components/landmarkcards/landmarkCard";
import goddessEaris from "../../assets/culturalcards/earis/goddessoflightstatue.png";
import nightOfIllumination from "../../assets/culturalcards/earis/festivaloflight.png";
import luminousPlains from "../../assets/culturalcards/earis/luminousgrasslands.png";
import artCathedral from "../../assets/culturalcards/earis/extravagentart.png";
import dragonRider from "../../assets/culturalcards/xaendriad/dragonrider.png";
import mercenary from "../../assets/culturalcards/xaendriad/mercenary.png";
import dragonsMaw from "../../assets/culturalcards/xaendriad/dragonsmaw.png";
import trialByCombat from "../../assets/culturalcards/xaendriad/trialbycombat.png";

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
