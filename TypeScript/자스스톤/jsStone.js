"use strict";
const opponent = {
    hero: document.getElementById('rival-hero'),
    deck: document.getElementById('rival-deck'),
    field: document.getElementById('rival-card'),
    cost: document.getElementById('rival-cost'),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null
};
const me = {
    hero: document.getElementById('my-hero'),
    deck: document.getElementById('my-deck'),
    field: document.getElementById('my-cards'),
    cost: document.getElementById('my-cost'),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
};
class Hero {
    constructor(mine) {
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.mine = mine;
        this.field = true;
    }
}
class Sub {
    constructor(mine) {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
        this.mine = mine;
        this.field = false;
    }
}
function isSub(data) {
    if (data.cost) {
        return true;
    }
    return false;
}
const turnButton = document.getElementById('turn-btn');
let turn = true; // true면 내턴, false면 상대 턴
function isHero(data) {
    if (data.hero) {
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
    createDeck({ mine: true, count: 5 });
    createDeck({ mine: false, count: 5 });
    createHero({ mine: false });
    createHero({ mine: true });
    redrawScreen({ mine: true });
    redrawScreen({ mine: false });
}
initiate();
function createDeck({ mine, count }) {
    const player = mine ? me : opponent;
    for (let i = 0; i < count; i++) {
        player.deckData.push(new Sub(mine));
    }
    ;
    redrawDeck(player);
}
function createHero({ mine }) {
    const player = mine ? me : opponent;
    player.heroData = new Hero(mine);
    connectCardDom({ data: player.heroData, DOM: player.hero, hero: true });
}
function connectCardDom({ data, DOM, hero }) {
    const cardEl = document.querySelector('.card-hidden .card').cloneNode(true);
    cardEl.querySelector('.card-att').textContent = String(data.att);
    cardEl.querySelector('.card-hp').textContent = String(data.hp);
    if (hero) {
        cardEl.querySelector('.card-cost').style.display = 'none';
        const name = document.createElement('div');
        name.textContent = '영웅';
        cardEl.appendChild(name);
    }
    else {
        cardEl.querySelector('.card-cost').textContent = String(data.cost);
    }
    cardEl.addEventListener('click', function () {
        if (isSub(data) && data.mine === turn && !data.field) {
            if (!deckTofield({ data })) {
                createDeck({ mine: turn, count: 1 });
            }
        }
    });
    DOM.appendChild(cardEl);
}
function redrawScreen({ mine }) {
    const player = mine ? me : opponent;
    redrawHero(player);
}
function redrawHero(target) {
    if (!target.heroData) {
        throw new Error('영웅이 없습니다');
    }
    target.hero.innerHTML = '';
    connectCardDom({ data: target.heroData, DOM: target.hero, hero: true });
}
function redrawDeck(target) {
    target.deck.innerHTML = '';
    target.deckData.forEach((data) => {
        connectCardDom({ data, DOM: target.deck });
    });
}
function redrawField(target) {
    target.field.innerHTML = '';
    target.fieldData.forEach((data) => {
        connectCardDom({ data, DOM: target.field });
    });
}
function deckTofield({ data }) {
    const target = turn ? me : opponent;
    const currentCost = Number(target.cost.textContent);
    if (currentCost < data.cost) {
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
