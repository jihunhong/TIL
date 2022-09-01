"use strict";
const { body } = document;
let candidate;
let array = [];
function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
const result = document.createElement('h1');
body.append(result);
const form = document.createElement('form');
body.append(form);
const input = document.createElement('input');
input.type = 'text';
input.maxLength = 4;
const button = document.createElement('button');
button.textContent = '입력';
form.append(button);
let wrongCount = 0;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answer = input.value;
    if (answer === array.join(',')) {
    }
});
