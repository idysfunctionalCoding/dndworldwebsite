import { LandmarkCardProps } from "../../components/landmarkcards/landmarkCard";
import {
  earisCulturalSection,
  xaendriadCulturalSection,
} from "./culturalCardConfig";
import earisBackground from "../../assets/backgrounds/earisbackground.png";
import xaendraidBackground from "../../assets/backgrounds/xaendriadbackground.png";
import {
  earisPeople,
  NationsPeople,
  xaendriadPeople,
} from "../peopleInfoConfig";

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
  sectionText?: {
    overview?: {
      governmentType: string;
      geography: string;
      climate: string;
      population: number;
      majorGods: string[];
      paragraph: string;
    };
    history?: {
      paragraph: string;
      majorEvents: {
        name: string;
        text: string;
      }[];
    };
    culture?: {
      paragraph: string;
    };
    geography?: {
      paragraph: string;
    };
    political?: {
      paragraph: string;
    };
  };
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
  sectionText: {
    overview: {
      governmentType: "Theocratic Monarchy",
      geography: "Varied",
      climate: "Varied",
      population: 28300000,
      majorGods: ["Earis"],
      paragraph:
        "The Holy Earis Empire is a vast and influential nation dedicated to the worship of Earis, the goddess of light. It spans a considerable section of the north eastern part of world maps. Because of the vast size of the land its territories are characterized by diverse landscapes, climates and thriving cities. The Earis Empire is known for its fervent devotion to Earis. The Earis is known to try and spread the worship and ideals of Earis throughout the world as part of its foreign policy often resulting in military force to claim new territory which it sees as spreading its influence and by direct extension Earis’ influence in the world.",
    },
    history: {
      paragraph:
        "The Holy Earis Empire was founded by Saint Alaric, a devout follower of Earis, who received a divine vision to establish a realm dedicated to the goddess of light. His divine vision was said to be rallied to the surrounding separated small towns around him and eventually under his leadership, a small theocratic state was formed. The small state quickly grew in power due to its theological appeal to several areas around the initial territory and eventually began to expand due to its fervent missionary work.\n\nThroughout the centuries, the Holy Earis Empire expanded through both peaceful means through alliances and treaties, but also military conquests, absorbing neighboring territories and converting their populations to the worship of Earis",
      majorEvents: [
        {
          name: "The Unification Wars",
          text: "A series of conflicts near the beginning of the Holy Earis Empire consolidated smaller kingdoms and duchies, unifying them under the banner of Earis and converting them to the religion which has stood to this day.",
        },
        {
          name: "The Darkness Upheaval",
          text: "A massive uprising planned by unhappy citizens within the empire. Especially those recently conquered. A rebellion that fought for many years to try and claim independence eventually being brutally suppressed by the temple and saint at the time.",
        },
        {
          name: "The Enlightenment Era",
          text: "A period of cultural and scientific advancement, spurred by the Empire’s emphasis on knowledge and light. Many universities and libraries were established during this time.",
        },
        {
          name: "The Crusades of Light",
          text: "Military campaigns aimed at rapidly spreading the worship of Earis beyond the Empire’s borders by getting rid of the so-called heretics of nearby nations. Four smaller territories were assaulted and claimed during this time period. These crusades were both celebrated for their successes and criticized for their brutality.",
        },
      ],
    },
    culture: {
      paragraph:
        "The culture of the Holy Earis Empire is of course also deeply intertwined with its religion and the goddess Earis. Light itself is deeply rooted within the daily life of the citizens of the empire as well. This can be seen in their art depicting multiple images of previous saints and the goddess Earis. Stained glass is an especially popular art medium and can be seen throughout both giant cathedrals and normal homes as well.\n\nThe empire is also very rooted in research and education overall. It places great importance on intelligence and the church assists on teaching anyone interested. It also has some of the best universities in the world with foreign scholars coming from all over to learn from each other and the scholars at the universities.\n\nGrand architecture is another hallmark of the Holy Earis Empire. With some of the grandest buildings in both size and design. The architects from this empire are renowned for their skill in crafting detailed and beautiful buildings worthy of their goddess.\n\nEconomically the empire is quite restrictive towards its exports. Much of its exports are manufactured goods not raw materials. This allows the empire to always have enough food to keep its citizens fed even during the cold northern months. Many new technologies come out of this nation which it exports to other nations for major profit to keeps its economy thriving.",
    },
    geography: {
      paragraph:
        "The Holy Earis Empire spans a diverse range of climates and environments, from the frigid northern regions to the warmer areas near the equator. The empire's geography is marked by a variety of natural features, including vast plains, imposing mountain ranges, dense forests, and bustling coastal areas.\n\nIn the north, there are intense tundras and more hilly mountainous regions that encompass the area. This is also where the empire was founded and has spread from over its course. This area has certain features that the rest of the Holy Earis Empire lacks. These include vast stretches of icy plains and frozen lakes and cold sparsely populated areas that serve mostly as mining towns to supply the ever growing empire with supplies and minerals from the ground.\n\nThe central regions include several different kinds of climates from the very center of the empire having the Shimmering Mountains but also having lots of grasslands such as the Luminous Plains and even several desert regions. As such the climate and environments vastly change depending on which part of the empire you are in when traveling southward but generally things become more tropical the further south you go.\n\nFinally, the southern regions are a more tropical area. Coastal areas are the most densely populated areas leaving the areas around them more sparsely populated and left with untamed tropical jungles. The most recognizable area of the southern region is the Radiant Coast which is known for its coastal areas with sandy beaches, rocky cliffs, bustling port cities, and a coastline dotted with vineyards and olive groves.",
    },
    political: {
      paragraph:
        "The Holy Earis Empire is governed by a theocratic monarchy, where religious and political authority are deeply intertwined. The Emperor/Empress, also known as the Saint/Saintess, serves as both the secular ruler and the high priest/priestess of the Church of Earis. This dual role positions her as the ultimate authority in both spiritual and temporal matters. The political system is designed to maintain religious unity and ensure that the teachings of Earis guide every aspect of governance. Currently, the empire is ruled by Empress Seraphina Aurelia.\n\nThe Empress holds supreme authority over the Empire, combining the roles of monarch and religious leader. She is believed to be divinely chosen by Earis and her words are believed to be divine proclamations. Her duties include issuing decrees, overseeing the administration of the Empire, leading major religious ceremonies, and acting as the commander and chief of the military. The Empress's word is considered law, and her decisions are final.\n\nThe Empress cannot govern the empire alone however and has a trusted set of advisors known as The Radiant Council to help advise on decisions relevant to their area of expertise. The Empress’ word is final though regardless of the advice offered.",
    },
  },
};

const dominionOfXaendriadPageCofig: NationPageConfig = {
  name: "Dominion of Xaendriad",
  backgroundImage: xaendraidBackground,
  heroText: "The Dragon's Way Is The Strong Will Thrive",
  color: "rgb(205, 257, 246)",
  backgroundColorStatic: "rgb(120, 97, 85)",
  highlightColor: "rgb(22, 38, 46)",
  textColor: "white",
  landmarks: xaendriadCulturalSection,
  people: xaendriadPeople,
  sectionText: {
    overview: {
      governmentType: "Khanate",
      geography: "Hilly and Mountainous",
      climate: "Moderate Temperate",
      population: 4300000,
      majorGods: ["None"],
      paragraph:
        "The dominion of Xaendriad is known for two things primarily, the first is its deep rooted connections to dragons as the birthplace to dragonborns, and the second being its pride towards strength, valor, and indomitable fighting spirit. It is situated slightly south of the equator with mountain terrain throughout its landscape. Many of its citizens have some form of dragon blood flowing through their veins. Xaendriad has cultivated a culture that venerates combat prowess with the idea that the strong will thrive and produces some of the most sought-after mercenary groups and solo fighters in the world.",
    },
    history: {
      paragraph:
        "The true history of Xaendriad is often shrouded in myth and legend. It was told mostly through word of mouth for many years by storytellers before being recorded by historians later on in history. The legend is that a human man by the name of Vaelor forged an alliance with a dragon named Xaendriad. This pact established Vaelor as the leader of the territory and became the first Drakar which is ancient draconic for Champion of the Dragons though some historians say it actually means Emissary of the Dragons.\n\nRegardless of the meaning of the title, this pact forged a magic into Vaelor and his people, blessing them with dragon’s blood and changing their appearance into a more dragon-like one. It was called the dragon’s blessing and runs in all of the descendents of Vaelor and his people. The blessing takes shape differently in everyone. Some remain human-like except for small changes such as eyes being dragon eyes or parts of their skin having scales. Other people though are changed into a much more dragon-like appearance. This blessing gave birth to a new and unique race called the dragonborn.\n\nIn the early stages of the dominion Vaelor and many Drakar who followed expanded the domain’s territory to the area that it now inhabits. Many storytellers say that this was a promise that Vaelor made to Xaendriad as part of the pact to make a true domain for dragons to inhabit and be protected and that it would stretch to the jagged mountains surrounding them",
      majorEvents: [
        {
          name: "The Dragon Poacher Wars",
          text: "A series of conflicts where Xaendriad fought off dragon hunters looking to make names for themselves by killing dragons. Xaendriad earned a brutal reputation for itself for the retaliations it used as punishment for killing its sacred animals, often killing whole villages.",
        },
        {
          name: "The Passing of Xaendriad",
          text: " Even dragons cannot live forever. A powerful ancient dragon like Xaendriad is not an exception. This is still a day of mourning till modern times.",
        },
        {
          name: "The Mercenary Wars",
          text: "As a nation that prides itself on combat strength. Mercenary groups want to show their strength and superiority to each other. This all came to a head when groups of mercenaries launched an all out war that lasted for nearly a year and led to sweeping changes in structures to these groups.",
        },
      ],
    },
    culture: {
      paragraph:
        "The culture of the Dominion of Xaendriad has lots of elements of dragons and training for combat in daily life. Their strong connections to dragons from the early days as a nation rising to power shows through in their architecture which resembles dragon skin and has lots of horns that resembles those of dragons.\n\nBeyond just their connection Dragons are a sacred animal to those who are native to Xaendriad. Some inhabitants even form bonds with dragons that they encounter out in the territory and become partners throughout their lives. A bond with a dragon is considered the highest honor one can achieve. This deep rooted connection is in fact one of the reasons that the most unique military unit in the world exists. That unit is Xaendriad’s famous dragon rider units or the Elder Wyrms. This connection also shows in their arts, music, and dances depicting the dragons and celebrating them.\n\nAnother major component to the Dominion of Xaendriad is the combat prowess mentioned. Young children who are trained from a young age to see if they have any talent for wielding a weapon. Those that don’t usually find themselves looking at other career paths that are not considered as glorious but recognized as important. The most respected of these are the master artisans, especially blacksmiths who create very reliable weapons for the ever demanding mercenary groups that inhabit these lands. While not considered the best artisans in the world these crafters show true dedication to their work.\n\nAs part of the idea of mercenary groups communal living is often seen in the dominion as well. Mercenary groups often live together except for the members who have families who usually live by themselves. This also results in a heavy drinking and feasting atmosphere as heart meals are very popular for everyone as well as they help maintain the strength of warriors and are often described as fiery hot spice levels.",
    },
    geography: {
      paragraph:
        "The Dominion of Xaendriad has a very mountainous terrain structure to it. The mountains surrounding the nation known as The Dragon’s Maw present a unique challenge to even entering the nation which is limited to three main entrances that are easier to traverse. Though the entire nation is very hilly and exhausting to traverse. There is the bay on the eastern border which is the most popular way to enter the country. Also towards the eastern side of the country is some vast forests which are still hilly though less than the western side of the nation.\n\nThe climate of the area is very temperate year round. There is not a real winter season in this area though the mountains surrounding this nation make it a natural valley and therefore more likely to rain all of a sudden. It also makes it more on the colder side of temperate often times temperatures stay in the high 50s to mid 60s (Fahrenheit) year around. Though it can become much colder if sudden bad weather happens.",
    },
    political: {
      paragraph:
        "The political structure of the Dominion of Xaendriad is often viewed as crude by the outside world. The Drakar is the leader of the nation and makes the major decisions for it alongside his advisors known as The Draconic Circle. This short group is relatively uninvolved with each other though preferring to let each city in the dominion run itself while following the nation's laws. The governors of these cities are called Dragonlords and are given lots of freedom to run the cities how they want as long as they don’t violate any laws set by the Drakar.\n\nThe set of laws that everyone in the dominion must follow is known as the Codex of Scales and is a founding document of the dominion. It outlines the rights and the responsibilities of the citizens living in the dominion.\n\nBecause of the combat strength nature of the nation. Military members and military strategists are often the ones who attend to government affairs with their aides. The political outlook of these affairs is usually viewed in a militaristic way of ruthless efficiency and brute forcing domestic and foreign policies rather than trying to find compromise. Scholars while rare are not unfound in these discussions but are usually drowned out in the yelling matches that happen in the meetings. As such this political system which is very loose by other nations’ standards and therefore is usually written off as crude and ineffective.",
    },
  },
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
