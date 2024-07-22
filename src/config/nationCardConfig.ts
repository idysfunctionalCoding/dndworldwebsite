interface nationCard {
    cardEmblem: string;
    titleText: string;
    subtext: string;
    pagelink: string;
}

export const nationCards: nationCard[] = [
    {
        cardEmblem: '/images/emblems/shieldemblem.png',
        titleText: 'Holy Earis Empire',
        subtext: 'An empire which strongly believes in Earis, the goddess of light, and believes its their duty to spread her beliefs',
        pagelink: '/nations/holyearisampire'
    },
    {
        cardEmblem: '/images/emblems/dragonswordemblem.png',
        titleText: 'Dominion of Xaendriad',
        subtext: 'The strong survive in this nation, which is heavily tied to dragons and mercenary groups and scoffs at most godly faiths',
        pagelink: '/nations/dominionofxaendriad'
    },
    {
        cardEmblem: '/images/emblems/griffonemblem.png',
        titleText: 'Foressian Triumvirate',
        subtext: 'Ruled over by three people the triumvirate a strong sense of justice and foreign policy has this nation closely tied to others',
        pagelink: '/nations/foressiantriumvirate'
    },
    {
        cardEmblem: '/images/emblems/birdemblem.png',
        titleText: 'Duchy of Netia',
        subtext: 'Governed by the Netia family after rebelling against the kingdom of Minao it has a warlike history which it continues to this day',
        pagelink: '/nations/duchyofnetia'
    },
    {
        cardEmblem: '/images/emblems/snakeeemblem.png',
        titleText: 'Dominion of Egitia',
        subtext: 'Cursed long ago by the goddess of death and rot only the toughest and desperate live in this rotting land where next to nothing grows',
        pagelink: '/nations/dominionofegitia'

    }
]