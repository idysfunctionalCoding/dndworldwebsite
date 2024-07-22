import { LandmarkCardProps } from "../components/landmarkcards/landmarkCard";

export interface nationPageConfig {
    name: string;
    backgroundImage: string;
    heroText: string;
    color: string;
    backgroundColorStatic: string;
    highlightColor: string;
    textColor: string;
    landmarks: LandmarkCardProps[];
}

const testLandmark = {
    heading: "name",
    text: "The Kingdom of Eldoria is a realm of ancient magic and noble knights. Its lush forests and towering castles are home to many legendary creatures and brave adventurers.",
  };

export const earisEmpirePageCofig: nationPageConfig = {
    name: 'Holy Earis Empire',
    backgroundImage: '/images/earisbackground.png',
    heroText: 'The Goddess\' Light Will Protect Us On Our Holy Conquest',
    color: 'rgb(205, 257, 246)',
    backgroundColorStatic: 'rgb(120, 97, 85)',
    highlightColor: 'rgb(22, 38, 46)',
    textColor: 'black',
    landmarks: [testLandmark, testLandmark, testLandmark, testLandmark]
};