interface Player {
    hero : HTMLDivElement
    deck : HTMLDivElement
    field : HTMLDivElement
    cost : HTMLDivElement
    deckData : Card[]
    heroData? : Card | null
    fieldData : Card[]
    chosenCard? : HTMLDivElement | null
    chosenCardData? : Card | null
}

interface Card { 
    att: number,
    hp: number,
    cost: number
}

const opponent: Player = {
    hero : document.getElementById('rival-hero') as HTMLDivElement,
    deck : document.getElementById('rival-deck') as HTMLDivElement,
    field : document.getElementById('rival-card') as HTMLDivElement,
    cost : document.getElementById('rival-cost') as HTMLDivElement,
    deckData : [],
    heroData :  null,
    fieldData : [],
    chosenCard :  null,
    chosenCardData :  null
}