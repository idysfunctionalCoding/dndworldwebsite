import { LandmarkCardProps } from "../../components/landmarkcards/landmarkCard";
import {
  earisCulturalSection,
  egitiaCulturalSection,
  minaoCulturalSection,
  xaendriadCulturalSection,
} from "./culturalCardConfig";
import earisBackground from "../../assets/backgrounds/earisbackground.png";
import xaendraidBackground from "../../assets/backgrounds/xaendriadbackground.png";
import minaoBackground from "../../assets/backgrounds/minaobackground.png";
import egitiaBackground from "../../assets/backgrounds/egitiabackground.png";
import {
  earisPeople,
  egitiaPeople,
  minaoPeople,
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

const kingdomOfMinao: NationPageConfig = {
  name: "Kingdom of Minao",
  backgroundImage: minaoBackground,
  heroText: "The Spirits Will Guide Us In The Cycle Of Life",
  color: "rgb(205, 257, 246)",
  backgroundColorStatic: "rgb(120, 97, 85)",
  highlightColor: "rgb(22, 38, 46)",
  textColor: "black",
  landmarks: minaoCulturalSection,
  people: minaoPeople,
  sectionText: {
    overview: {
      governmentType: "Seperate Enclaves",
      geography: "Heavily Forested",
      climate: "Varied",
      population: 15400000,
      majorGods: ["Liora", "Minao"],
      paragraph:
        "Often known to the outside world as The Kingdom of the Elves. The Kingdom of Minao is a land of ancient beauty, and harmonious living with nature in different forms. Its diverse elven population adds complexity and richness to the culture, with each sub-race contributing its unique strengths and traditions. The kingdom's governance by a council ensures balanced representation and unity among the different elven races. It has strong ties to spirits within its borders and treats them as equals to gods, but primarily worships Liora, the goddess of nature, healing, and renewal as well as Minao the king of spirits.",
    },
    history: {
      paragraph:
        "The enclave of elves started with the period known as the great migration. This is when the elves as a race congregated to the area that is the modern kingdom together as there was rumor of a place that the separation between the material world and the feywild was thin. This rumor ended up being true and attracted many elves from across the world to gather in this spot that came to be known as the Emerald Grove. Together they lived in this area freely feeling a connection to both the vast forests with many spirits in them and the close connection to the fey it provided. This was a short-lived time of unity of the elvish subraces that were establishing themselves in the world after gathering in the place they had all heard about.\n\nEventually the different elven races each with their own ideas and philosophies split into enclaves mostly dominated by their own race. As each subrace of elf worships spirits in a different way their cultures while mixed were better suited to this separation from each other to enjoy their lives peacefully.\n\nThe actual name, kingdom of Minao, was established thousands of years ago by other nations as a name to call the collective group of enclaves that the elves had in the region. The elves themselves have stayed in this region for the entire time and have remained as a mostly isolationist society that prefers to stick to its own lands and ideals but is hostile to outsiders. The kingdom has remained neutral to interaction with most of the world.",
      majorEvents: [
        {
          name: "The Draconic Rivalry",
          text: "The Avariel Elves, a subrace of winged elves, has always had a rivalry with dragons as both fly. This has bubbled into full scale-war between the two and was eventually ended by a treaty banishing dragons away from the territory but not allowing the Avariel elves to hunt them anymore.",
        },
        {
          name: "The Blood Moon Rise",
          text: "A night of gruesome assassination attempts by an extremist group of blood elves that was looking to take power over more than one enclave. This uprising did little to affect the state of power as they hoped and the rebellion was stomped out by all the subraces including their own kind.",
        },
        {
          name: "The Grove Poisoning",
          text: "A human had snuck their way into the sacred Emerald grove in the territory and poisoned much of the wildlife. This caused a lot of damage and the elves have been distrustful of humans ever since.",
        },
      ],
    },
    culture: {
      paragraph:
        "The Kingdom of Minao is almost entirely composed of elves with a few other humanoids who have done the not easy feat of earning the elves trust enough to stay and live in their borders. The society itself varies depending on which enclave you are in but mainly age dictates position and is seen as a hallmark of being wise within the nation itself. Each enclave itself is governed by a group of elders which while not always composed of the oldest elves it is more common to have the older elves on it. It should also be no surprise that the primary language of the region is Elvish and common while spoken is not the first choice of the inhabitants. \n\nThe enclaves heavily focus on nature and the spirits within it, seeing it as their job to protect and preserve those who live within their borders and not harm them. This includes giving offerings to the spirits and helping to repair nature if it is destroyed to continue allowing them to survive. This is not to say nature isn’t allowed to have a cycle; the elves respect the cycle of life and let the nature surrounding them live its natural course before beginning the cycle anew when it dies. This idea comes from their primary religion which is the worship of Liora and Minao the Goddess of Nature and the King of Spirits who both maintain the cycle of life should be maintained even for spirits and nature under their followers' watch.\n\nWhile each enclave has varying ways of life, traditions, food, ideas, and festivals that are too numerous to list out as part of an overview of the kingdom’s culture. Music is a very big part of the culture of the enclaves and is used to show their artistic talents and is often played at festivals where the selection process is as fierce as it gets. Even with the many different cultures there are some common festivals and traditions that are a part of all enclaves.",
    },
    geography: {
      paragraph:
        "The Kingdom of Minao is a land of stunning natural beauty, characterized by diverse and enchanting terrains. The heart of the kingdom is the Emerald Grove, an ancient forest with towering trees that form a lush, green canopy over the forest floor. To the north, the Silver Falls cascade down a series of rocky cliffs into crystal-clear pools, creating a serene and sacred site revered by all elves. The Whispering Glade, a mystical forest with trees that seem to murmur secrets, lies to the west, while the Bloodwood Grove in the south boasts trees with deep red leaves and a dense, almost otherworldly atmosphere. Each enclave of elves has made a home of their own though through the use of their magic and continued habitation of the land. Form the the shimmering lakes of the Glimmering Glade of the high elves, the dense thickets of the Sylvan Thicket of the wood elves, the silver-lit Lunar Meadows of the moon elves, to the dark, bioluminescent flora of the Shadow Veil where the night elves reside.\n\nThe climate of the Kingdom of Minao is as varied as its terrain, fostering a rich tapestry of ecosystems. The central and northern regions experience a temperate climate with mild, wet winters and warm, humid summers. These areas are lush and verdant year-round, thanks to frequent rainfall and the nurturing touch of elven magic. The Bloodwood Grove in the south has a slightly warmer climate, with hotter summers and a more Mediterranean feel, allowing for the growth of its unique crimson-leaved trees. The eastern Whispering Glade maintains a mystical, mist-laden atmosphere throughout the year, with cool, damp conditions that enhance its ethereal quality.",
    },
    political: {
      paragraph:
        "Each enclave is governed by a council of elders. These councils have five members on them each with one member being elected the leader of the council which doesn’t grant any special authority in the enclave but makes them the national representative of the enclave.\n\nThe leaders from each enclave grouped together make the group known as The Council of Minao. This higher level council is in charge of any Kingdom wide events that would require the cooperation of multiple enclaves to potentially address. It is also the group in charge of interactions with the outside world. As an isolationist nation these talks happen very infrequently and usually are on a schedule of meetings that take place every few months. Though the kingdom maintains a distance from other nations it does trade with its direct neighbors with some of its rich natural resources that are exported in exchange for goods that other nations require. Their trade is mostly limited to their direct neighbors though as many of the elves don’t want to explore the world and prefer their home.",
    },
  },
};

const dominionOfEgitia: NationPageConfig = {
  name: "The Dominion of Egitia",
  backgroundImage: egitiaBackground,
  heroText: "This Cursed Land Is Only For The Truly Desperate Or Criminal",
  color: "rgb(205, 257, 246)",
  backgroundColorStatic: "rgb(120, 97, 85)",
  highlightColor: "rgb(22, 38, 46)",
  textColor: "white",
  landmarks: egitiaCulturalSection,
  people: egitiaPeople,
  sectionText: {
    overview: {
      governmentType: "Anarchy",
      geography: "Flat Plains",
      climate: "Harsh Changes",
      population: 2400000,
      majorGods: ["None"],
      paragraph:
        "The Dominion of Egitia sitting on the western side of the continent is often called “the cursed land” where only the desperate that can’t escape, those who want to hide, or criminals. The land itself was cursed by the goddess of death herself so long ago that even she is no longer present in this world.  Its cursed history and anarchic society create a harsh and unforgiving environment, where crime and violence reign supreme. Despite its grim nature, Egitia is a land rich with the knowledge of things forbidden in other lands such as dark magic, curses, demons attracting those who want power at any cost. As time has gone on this land has become much the topic of interest as the activities within it and the true history remain a mystery to the present day world.",
    },
    history: {
      paragraph:
        "The true history of Xaendriad is often shrouded in myth and legend. It was told mostly through word of mouth for many years by storytellers before being recorded by historians later on in history. The legend is that a human man by the name of Vaelor forged an alliance with a dragon named Xaendriad. This pact established Vaelor as the leader of the territory and became the first Drakar which is ancient draconic for Champion of the Dragons though some historians say it actually means Emissary of the Dragons.\n\nRegardless of the meaning of the title, this pact forged a magic into Vaelor and his people, blessing them with dragon’s blood and changing their appearance into a more dragon-like one. It was called the dragon’s blessing and runs in all of the descendents of Vaelor and his people. The blessing takes shape differently in everyone. Some remain human-like except for small changes such as eyes being dragon eyes or parts of their skin having scales. Other people though are changed into a much more dragon-like appearance. This blessing gave birth to a new and unique race called the dragonborn.\n\nIn the early stages of the dominion Vaelor and many Drakar who followed expanded the domain’s territory to the area that it now inhabits. Many storytellers say that this was a promise that Vaelor made to Xaendriad as part of the pact to make a true domain for dragons to inhabit and be protected and that it would stretch to the jagged mountains surrounding them",
      majorEvents: [
        {
          name: "The Curse's Dawn",
          text: "The moment when Ereshkigal's curse was cast, turning the land into a desolate and haunted place.",
        },
        {
          name: "The Fall of Kings",
          text: "After the curse was cast the kingdom tried to maintain itself and successfully did so for several years. Finally though the pressure of the curse led to those unhappy and finally the overthrow of Egitia's last true king, leading to the rise of anarchy and the rule of crime lords and warlords.",
        },
      ],
    },
    culture: {
      paragraph:
        "The true population mix is often a mystery with no real majority. You’ll often run into humans, half-elfs, tieflings, and any outcasts from other races. This land is home to anyone who doesn’t want to be found and as such a wide array of colorful figures end up in the cities and shanty towns that have been built within the borders. Many are criminals, refugees, or those with nowhere else to go. As such the population keeps to itself and isn’t the most social with many traditions or cultural aspects to speak of.\n\nThe society itself is anarchic and fractured, with power held by various criminal gangs, warlords, and dark cults. Law and order are virtually non-existent, and survival often depends on one's strength and cunning. Some towns are better than others such as the so-called capital Handicrilu which has some semblance of order within the towns walls but still laws vary by town and enforcement of them is virtually nonexistent unless you offend the ruling party of the area.\n\nReligion is also very disorganized and scattered. With many different cultures mixing together will see a scattering of nearly every religion from other nations and also the ones that are not allowed in other nations as well. There is no central being of the people in Egitia worship. Though the largest is the dark cult of who worships the dead goddess Ereshkigal who cursed the lands. This cult is hidden away and keeps away from the cities for the most part but wanderers between them can sometimes go missing to be used in their rituals.\n\nThe economy is driven by crime, extortion, and the black market. Illicit goods, forbidden knowledge, and necromantic artifacts are the primary trade commodities. As such not a lot of foreign policy is shown to the world as other nations have no interest in the illegal goods on the surface. Under the surface though a thriving industry selling these items keeps the nation alive.\n\nDespite the harsh conditions the people of this land have a strong urge to protect this land. Especially those who have lived there for many years or generations. Seeing it as their way of life and wanting to protect that way of life. Many think that enduring these harsh conditions will allow their lives to get better in the long-run and don’t want outside help from the world.",
    },
    geography: {
      paragraph:
        "The Dominion of Egitia is located in the southwestern part of the continent, with most of its terrain being gray dirt with little to no wildlife in the area. The cursed land is characterized by barren plains, decaying forests, and corrupted rivers. Even the ocean itself is gray and murky where only dangers lurk as the only wildlife that can survive the cursed waters are more than strong enough to pose a threat to boats. The terrain itself is also not varied for most of the territory; it is flat plains with occasional rolling hills. The two exceptions to this monotonous terrain is the swamp land near the ocean in the northeastern part of the land, and the bleakwood in the southern part of the lands.\n\nEven the climate of this land is cursed. Perpetual dark gray clouds hang over most of the land with barely any breaks in them. Occasional heavy murky rain falls on the land causing mudslides and floods on the flat plains. The temperature of this region is another oddity compared to the surrounding areas. Situated in a normally temperate region the dominion instead has much colder weather. Winters are harsh and unforgiving often dropping below 0 degrees with heavier rain and snowfall with summers being the milder of the seasons usually only reaching a high of 75 degrees most years but usually yields little to no rain.",
    },
    political: {
      paragraph:
        "As mentioned before the society itself is anarchic. The Dominion of Egitia lacks a centralized government. The land is ruled by a loose coalition of crime lords, warlords, and dark cult leaders who vie for control and influence. All maintaining their iron grip of the regions that they control and fighting to keep that control from rivals.\n\nAs there is not a central government there is also no formal military for this land. There has never needed to be one as most nations would rather not invade this land that is seen as lost. Instead there are bands of militias , mercenary groups, and criminal gangs to defend the people if the need ever arises. These groups are also the ones who fight for control of the region if a crime lord wants to expand his domain to new towns.\n\nWith the stark contrast to the rest of the world there is also limited foreign policy taking place in general. The Dominion of Egitia is neutral with most other nations as they do not interact with them. The only nation they are not neutral as far as foreign policy is concerned is with the Holy Earis Empire. They see the dominion as a blight on the land and want to spread their goddess’ faith to that land and cleanse it of its curse. The dominion has been less than eager to allow a strongly law abiding nation to enter into their territory.",
    },
  },
};

interface nationConfig {
  holyearisampire: NationPageConfig;
  dominionofxaendriad: NationPageConfig;
  dominionofegitia: NationPageConfig;
  kingdomofminao: NationPageConfig;
  [key: string]: any;
}

export const individualNationConfigs: nationConfig = {
  holyearisampire: earisEmpirePageCofig,
  dominionofxaendriad: dominionOfXaendriadPageCofig,
  dominionofegitia: dominionOfEgitia,
  kingdomofminao: kingdomOfMinao,
};
