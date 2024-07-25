import { LandmarkCardProps } from "../../components/landmarkcards/landmarkCard";
import { earisCulturalSection } from "./culturalCardConfig";
import earisBackground from "../../assets/backgrounds/earisbackground.png";
import xaendraidBackground from "../../assets/backgrounds/xaendriadbackground.png";
import { earisPeople, NationsPeople } from "../peopleInfoConfig";

export interface NationPageConfig {
  name: string;
  backgroundImage: string;
  heroText: string;
  color: string;
  backgroundColorStatic: string;
  highlightColor: string;
  textColor: string;
  landmarks: LandmarkCardProps[];
  people: NationsPeople;
}

const earisEmpirePageCofig: NationPageConfig = {
  name: "Holy Earis Empire",
  backgroundImage: earisBackground,
  heroText: "The Goddess' Light Will Protect Us On Our Holy Conquest",
  color: "rgb(205, 257, 246)",
  backgroundColorStatic: "rgb(120, 97, 85)",
  highlightColor: "rgb(22, 38, 46)",
  textColor: "black",
  landmarks: earisCulturalSection,
  people: earisPeople,
};

const dominionOfXaendriadPageCofig: NationPageConfig = {
  name: "Dominion of Xaendriad",
  backgroundImage: xaendraidBackground,
  heroText: "The Dragon's Way Is The Strong Will Thrive The Weak Will Die",
  color: "rgb(205, 257, 246)",
  backgroundColorStatic: "rgb(120, 97, 85)",
  highlightColor: "rgb(22, 38, 46)",
  textColor: "white",
  landmarks: earisCulturalSection,
  people: earisPeople,
};

interface nationConfig {
  holyearisampire: NationPageConfig;
  dominionofxaendriad: NationPageConfig;
  [key: string]: any;
}

export const individualNationConfigs: nationConfig = {
  holyearisampire: earisEmpirePageCofig,
  dominionofxaendriad: dominionOfXaendriadPageCofig,
};
