import empressSeraphinaAurelia from "../assets/people/earis/empressseraphinaaurelia.png";
import generalCassianValtor from "../assets/people/earis/generalcassianvaltor.png";
import diplomatElaraFenwick from "../assets/people/earis/elarafenwick.png";
import sisterMarielleThorne from "../assets/people/earis/sistermariellethorne.png";
import grandInquisitorTheobaldMarcellus from "../assets/people/earis/theobaldmarcellus.png";
import highScholarLuciusVeridian from "../assets/people/earis/luciusveridian.png";

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
