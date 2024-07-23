import earisEmblem from '../assets/emblems/shieldemblem.png'
import xaendriadEmblem from '../assets/emblems/dragonswordemblem.png'
import foressianEmblem from '../assets/emblems/griffonemblem.png'
import netiaEmblem from '../assets/emblems/birdemblem.png'
import egitiaEmblem from '../assets/emblems/snakeeemblem.png'

interface nationCard {
    cardEmblem: string;
    titleText: string;
    subtext: string;
    pagelink: string;
}

export const nationCards: nationCard[] = [
    {
        cardEmblem: earisEmblem,
        titleText: 'Holy Earis Empire',
        subtext: 'An empire which strongly believes in Earis, the goddess of light, and believes its their duty to spread her beliefs',
        pagelink: '/dndworldwebsite/nations/holyearisampire'
    },
    {
        cardEmblem: xaendriadEmblem,
        titleText: 'Dominion of Xaendriad',
        subtext: 'The strong survive in this nation, which is heavily tied to dragons and mercenary groups and scoffs at most godly faiths',
        pagelink: '/dndworldwebsite/nations/dominionofxaendriad'
    },
    {
        cardEmblem: foressianEmblem,
        titleText: 'Foressian Triumvirate',
        subtext: 'Ruled over by three people the triumvirate a strong sense of justice and foreign policy has this nation closely tied to others',
        pagelink: '/dndworldwebsite/nations/foressiantriumvirate'
    },
    {
        cardEmblem: netiaEmblem,
        titleText: 'Duchy of Netia',
        subtext: 'Governed by the Netia family after rebelling against the kingdom of Minao it has a warlike history which it continues to this day',
        pagelink: '/dndworldwebsite/nations/duchyofnetia'
    },
    {
        cardEmblem: egitiaEmblem,
        titleText: 'Dominion of Egitia',
        subtext: 'Cursed long ago by the goddess of death and rot only the toughest and desperate live in this rotting land where next to nothing grows',
        pagelink: '/dndworldwebsite/nations/dominionofegitia'

    }
]