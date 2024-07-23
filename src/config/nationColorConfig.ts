import { LandmarkCardProps } from "../components/landmarkcards/landmarkCard";
import { earisCulturalSection } from "./culturalCardConfig";
import earisBackground from '../assets/earisbackground.png'

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

export const earisEmpirePageCofig: nationPageConfig = {
    name: 'Holy Earis Empire',
    backgroundImage: earisBackground,
    heroText: 'The Goddess\' Light Will Protect Us On Our Holy Conquest',
    color: 'rgb(205, 257, 246)',
    backgroundColorStatic: 'rgb(120, 97, 85)',
    highlightColor: 'rgb(22, 38, 46)',
    textColor: 'black',
    landmarks: earisCulturalSection
};