import empressSeraphinaAurelia from "../assets/people/earis/empressseraphinaaurelia.png";
import generalCassianValtor from "../assets/people/earis/generalcassianvaltor.png";
import diplomatElaraFenwick from "../assets/people/earis/elarafenwick.png";
import sisterMarielleThorne from "../assets/people/earis/sistermariellethorne.png";
import grandInquisitorTheobaldMarcellus from "../assets/people/earis/theobaldmarcellus.png";
import highScholarLuciusVeridian from "../assets/people/earis/luciusveridian.png";
import IsraFlameheart from "../assets/people/xaendriad/israflameheart.png";
import LyraStarSeer from "../assets/people/xaendriad/lyrastarseer.png";
import TharokIronclaw from "../assets/people/xaendriad/tharokironclaw.png";
import ThalorinFiretongue from "../assets/people/xaendriad/thalorinfiretongue.png";
import VaelinTheStormborn from "../assets/people/xaendriad/vaelinthestormborn.png";

export interface PeopleInfo {
  imageOfPerson: string;
  nameOfPerson: string;
  descriptionOfPerson: string;
}

export interface NationsPeople {
  political?: PeopleInfo[];
  historical?: PeopleInfo[];
  overview?: PeopleInfo[];
  cultural?: PeopleInfo[];
}

// Earis People

const seraphinaAurelia = {
  imageOfPerson: empressSeraphinaAurelia,
  nameOfPerson: "Empress Seraphina Aurelia",
  descriptionOfPerson:
    "Empress Aurelia ascended to the throne at a young age following the unexpected death of her father. Known for her wisdom, charisma, and devout faith, she is both the spiritual and political leader of the Empire. Her reign has been marked by efforts to strengthen the Empire’s religious unity and expand its influence through both diplomatic and military means. Seraphina is often seen as the living embodiment of Earis, and her decisions are believed to be divinely inspired.",
};

const cassianValtor = {
  imageOfPerson: generalCassianValtor,
  nameOfPerson: "General Cassian Valtor",
  descriptionOfPerson:
    "A seasoned warrior and tactician, renowned for his strategic brilliance and unwavering loyalty to the Empress. He has led numerous successful campaigns throughout his time. Cassian is dedicated to the expansion of the Empire and the spread of Earis’s teachings through military might. Off the battlefield, he is a mentor to young officers and a proponent of integrating new military technologies.",
};

const elaraFenwick = {
  imageOfPerson: diplomatElaraFenwick,
  nameOfPerson: "Lady Elara Fenwick",
  descriptionOfPerson:
    "Lady Elara is the Empire’s chief diplomat, responsible for maintaining relations with foreign nations and negotiating treaties. Her charm, intelligence, and linguistic skills make her an effective envoy. Elara has brokered several key alliances and trade agreements, enhancing the Empire’s influence and economic power.",
};

const marielleThorne = {
  imageOfPerson: sisterMarielleThorne,
  nameOfPerson: "Sister Marielle Thorne",
  descriptionOfPerson:
    "Sister Marielle is known for her compassionate work among the Empire’s poor and disadvantaged. As the head of the Voice of the Commons, she oversees various initiatives aimed at providing food, shelter, and medical care to those in need.",
};

const theobaldMarcellus = {
  imageOfPerson: grandInquisitorTheobaldMarcellus,
  nameOfPerson: "Grand Inquisitor Theobald Marcellus",
  descriptionOfPerson:
    "He has served the Inquisition for over three decades, ruthlessly rooting out heresy and dissent. His methods are controversial, but his effectiveness is undisputed. Theobald is a staunch supporter of the Empress and believes in maintaining the purity of the faith at all costs",
};

const luciusVeridian = {
  imageOfPerson: highScholarLuciusVeridian,
  nameOfPerson: "High Scholar Lucius Veridian",
  descriptionOfPerson:
    "High Scholar Lucius is a leading figure in the Empire’s academic and religious communities. As the head of the prestigious Luminary University, he oversees both religious and secular education. Lucius is a prolific writer and scholar, having authored numerous texts on theology, history, and magic. He advocates for the dissemination of knowledge and the illumination of minds, embodying the Enlightenment ideals of the Empire.",
};

// xaendriad people
const vaelinthestormborn = {
  imageOfPerson: VaelinTheStormborn,
  nameOfPerson: "Drakar Vaelin the Stormborn",
  descriptionOfPerson:
    "A dragonborn of few words he rose to the spot of Drakar when Isra stepped down willingly, he is considered one of the strongest warriors in the world combinded with his bonded blue dragon Stormwing they are a terrifying duo",
};

const israflameheart = {
  imageOfPerson: IsraFlameheart,
  nameOfPerson: "Isra Flameheart",
  descriptionOfPerson:
    "After stepping down from the position of Drakar several years ago. Isra became the leader of the Elder Wyrms and is a key military advisor and general consultant in The Draconic Circle",
};

const thalorinfiretongue = {
  imageOfPerson: ThalorinFiretongue,
  nameOfPerson: "Thalorin Firetongue",
  descriptionOfPerson:
    "A member of The Draconic Circle as the head dragon priest who oversees communicating with dragons and protecting them.",
};

const tharokironclaw = {
  imageOfPerson: TharokIronclaw,
  nameOfPerson: "Tharok Ironclaw",
  descriptionOfPerson:
    "A veteran warrior and the current leader of the largest mercenary group in the Dominion of Xaendriad known as The Scale Swords.",
};

const lyrastarseer = {
  imageOfPerson: LyraStarSeer,
  nameOfPerson: "Lyra Starseer",
  descriptionOfPerson:
    "Head of record keeping but is also the leader of the cultural rituals that happen in the Dominion of Xaendriad. She serves as the cultural advisor on The Draconic Circle",
};

export const earisPeople: NationsPeople = {
  political: [
    seraphinaAurelia,
    cassianValtor,
    elaraFenwick,
    marielleThorne,
    theobaldMarcellus,
    luciusVeridian,
  ],
};

export const xaendriadPeople: NationsPeople = {
  political: [
    vaelinthestormborn,
    israflameheart,
    thalorinfiretongue,
    tharokironclaw,
    lyrastarseer,
  ],
};
