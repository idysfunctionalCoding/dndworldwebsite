import empressSeraphinaAurelia from "../assets/people/earis/empressseraphinaaurelia.png";
import generalCassianValtor from "../assets/people/earis/generalcassianvaltor.png";

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

export const earisPeople: NationsPeople = {
  political: [seraphinaAurelia, cassianValtor],
};
