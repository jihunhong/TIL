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

const me: Player = {
    hero: document.getElementById('my-hero') as HTMLDivElement,
    deck: document.getElementById('my-deck') as HTMLDivElement,
    field : document.getElementById('my-cards') as HTMLDivElement,
    cost : document.getElementById('my-cost') as HTMLDivElement,
    deckData : [],
    heroData : null,
    fieldData : [],
    chosenCard : null,
    chosenCardData : null,
}

interface Card { 
    att : number;
    hp : number;
    mine : boolean;
    cost? : number;
    field? : boolean;
    hero? : boolean;
}

class Hero implements Card { 
    public att : number;
    public hp : number;
    public hero : boolean;
    public mine : boolean;
    public field : boolean;
    constructor(mine : boolean){
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.mine = mine;
        this.field = true;
    }
}

class Sub implements Card  {
    public att : number;
    public hp : number;
    public mine : boolean;
    public cost : number;
    public field : boolean;
    constructor(mine : boolean){
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
        this.mine = mine;
        this.field = false;
    }
}

function isSub(data : Card): data is Sub{
    if(data.cost){
        return true;
    }
    return false;
}

const turnButton = document.getElementById('turn-btn') as HTMLButtonElement;
let turn = true; // true면 내턴, false면 상대 턴

function isHero(data : Card): data is Hero{
    if(data.hero){
        return true;
    }
    return false;
}


function initiate() { 
    [opponent, me].forEach((item) => {
        item.deckData = [];
        item.heroData = null;
        item.fieldData = [];
        item.chosenCard = null;
        item.chosenCardData = null;
    });
    createDeck({mine : true, count : 5});
    createDeck({mine : false, count : 5});

    createHero({mine : false});
    createHero({mine : true});

    redrawScreen({mine : true});
    redrawScreen({mine : false});
}

initiate();

function createDeck({mine, count}: {mine : boolean, count : number}){
    const player = mine ? me : opponent;
    for(let i : number = 0; i < count; i++){
        player.deckData.push(new Sub(mine));
    };
    redrawDeck(player);
}

function createHero({mine}: {mine : boolean}){
    const player = mine ? me : opponent;
    player.heroData = new Hero(mine);
    connectCardDom({ data : player.heroData, DOM : player.hero, hero: true});
}

interface A{
    data : Card,
    DOM : HTMLDivElement,
    hero? : boolean
}

function connectCardDom({data, DOM, hero} : A){
    const cardEl = document.querySelector('.card-hidden .card')!.cloneNode(true) as HTMLDivElement;
    cardEl.querySelector('.card-att')!.textContent = String(data.att);
    cardEl.querySelector('.card-hp')!.textContent = String(data.hp);
    if(hero){
        (cardEl.querySelector('.card-cost') as HTMLDivElement).style.display = 'none';
        const name = document.createElement('div');
        name.textContent = '영웅';
        cardEl.appendChild(name);
    }else{
        cardEl.querySelector('.card-cost')!.textContent = String(data.cost);
    }
    cardEl.addEventListener('click', function() {
        if(isSub(data) && data.mine === turn && !data.field){
            if(!deckTofield({data})){
                createDeck({mine : turn, count : 1})
            }
        }
    })
    DOM.appendChild(cardEl);
}

function redrawScreen({mine} : {mine : boolean}){
    const player = mine ? me : opponent;
    redrawHero(player);
}

function redrawHero(target : Player){
    if(!target.heroData){
        throw new Error('영웅이 없습니다');
    }
    target.hero.innerHTML = '';
    connectCardDom({data : target.heroData, DOM: target.hero, hero : true});
}

function redrawDeck(target : Player){
    target.deck.innerHTML = '';
    target.deckData.forEach((data) => {
        connectCardDom({data, DOM : target.deck})
    })
}
function redrawField(target : Player){
    target.field.innerHTML = '';
    target.fieldData.forEach((data) => {
        connectCardDom({data, DOM : target.field})
    })
}




function deckTofield({data} : {data : Sub}): boolean { 
    const target = turn ? me : opponent;
    const currentCost = Number(target.cost.textContent);
    if(currentCost < data.cost){
        alert('코스트가 모자릅니q다');
    }
    data.field = true;
    const idx = target.deckData.indexOf(data);
    alert(idx);
    target.deckData.splice(idx, 1);
    target.fieldData.push(data);
    redrawField(target);
    redrawDeck(target);
    target.cost.textContent = String(currentCost - data.cost);
    return false;
}