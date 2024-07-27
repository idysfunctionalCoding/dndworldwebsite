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
import AelianaSkwing from "../assets/people/minao/AelianaSkwing.png";
import ArionStafal from "../assets/people/minao/ArionStafal.png";
import CaelumBrightstar from "../assets/people/minao/caelumbrightstar.png";
import DravenNiade from "../assets/people/minao/dravennightshade.png";
import HilkrayneNyraruic from "../assets/people/minao/HilkrayneNyraruic.png";
import LioraWendruic from "../assets/people/minao/liorawendruic.png";
import ThalindraWindwhisper from "../assets/people/minao/thalindrawindwhisper.png";
import VictorBloodthorn from "../assets/people/egitia/VictorBloodthorn.png";
import AdkranaNilyuik from "../assets/people/egitia/AdkranaNilyuik.png";
import Grakor from "../assets/people/egitia/Grakor.png";
import IsabellaAndGraham from "../assets/people/egitia/IsabellaAndGrahm.png";

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

// Minao People
const aelianaskwing = {
  imageOfPerson: AelianaSkwing,
  nameOfPerson: "Aeliana Skwing",
  descriptionOfPerson:
    "The Avariel Elf representative, she is known as the median of the group. A fair elf who is not afraid to lash out if the need for it arises.",
};

const caelumbrightstar = {
  imageOfPerson: CaelumBrightstar,
  nameOfPerson: "Caelum Brightstar",
  descriptionOfPerson:
    "The current representative of the high elves. He is known for his talent at speaking and is one of the most charismatic elves.",
};

const thalindrawindwhisper = {
  imageOfPerson: ThalindraWindwhisper,
  nameOfPerson: "Thalindra Windwhisper",
  descriptionOfPerson:
    "The free spirited nature-lover, even by Elvish standards, wood elf representative of the council. She is known for her fierce protection of the woods especially.",
};

const liorawendruic = {
  imageOfPerson: LioraWendruic,
  nameOfPerson: "Liora Wendruic",
  descriptionOfPerson:
    "A graceful religious leader on the council. Her ideas and main purpose is to stop others from trying to spread their religious ideals to their lands. This especially includes their neighbors the Earis Empire. She is the moon elf representative of the council.",
};

const dravenniade = {
  imageOfPerson: DravenNiade,
  nameOfPerson: "Draven Niade",
  descriptionOfPerson:
    "A rumble tough and ready to fight elf. He is the least interested of the members of the council but is also the oldest and is a very important resource when the council doesn’t know a way forward. He is the night elf representative of the council.",
};

const hilkraynenyraruic = {
  imageOfPerson: HilkrayneNyraruic,
  nameOfPerson: "Hilkrayne Nyraruic",
  descriptionOfPerson:
    "The blood elf representative, on the outside she appears very self-centered and money-focused. That’s why she is the expert of trade and business for the council and also is a respectable mage.",
};

const arionstafal = {
  imageOfPerson: ArionStafal,
  nameOfPerson: "Arion Stafal",
  descriptionOfPerson:
    "A race mostly interested in magic he is the most inattentive to the council as is typical by the rarer astral elves. Arion would usually rather be in his lab than at a council meeting.",
};

// Egitia People

const victorbloodthorn = {
  imageOfPerson: VictorBloodthorn,
  nameOfPerson: "Victor Bloodthorn",
  descriptionOfPerson:
    "The current warlord in the capital of Handicrilu. He keeps his men and the people of this area in control through fear as he is a respectable fighter and a known necromancer wielding both the living and dead to fight his battles.",
};
const adkranaNilyuik = {
  imageOfPerson: AdkranaNilyuik,
  nameOfPerson: "Adkrana Nilyuik",
  descriptionOfPerson:
    "The charismatic and feared leader of the dominant cult in Egitia, dedicated to the forgotten goddess of death, Ereshkigal. She wields considerable influence through her control of the cult's followers and their dark rituals. Her necromantic powers are legendary, and she uses them to maintain her position within the cult.",
};
const grakor = {
  imageOfPerson: Grakor,
  nameOfPerson: "Grakor the Beast",
  descriptionOfPerson:
    "Grakor leads the Iron Claw Gang, one of the most notorious and violent criminal organizations in Egitia. His gang controls much of the black market trade in the southern parts of the territory.",
};
const isabellaAndGraham = {
  imageOfPerson: IsabellaAndGraham,
  nameOfPerson: "Isabella and Graham Thorn",
  descriptionOfPerson:
    "The married couple is the joint head of the information guild within the Dominion of Egitia known as The Underbelly’s Shadow. Their network gathers intelligence and sells it to the highest bidder or even multiple of them if the price is right. A valuable ally and dangerous enemy to have.",
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

export const minaoPeople: NationsPeople = {
  political: [
    aelianaskwing,
    caelumbrightstar,
    thalindrawindwhisper,
    dravenniade,
    liorawendruic,
    hilkraynenyraruic,
    arionstafal,
  ],
};

export const egitiaPeople: NationsPeople = {
  political: [victorbloodthorn, adkranaNilyuik, grakor, isabellaAndGraham],
};
