let one = Math.ceil(Math.random() * 9);
let two = Math.ceil(Math.random() * 9);
let result = one * two;

const word = document.createElement('div');
word.textContent = `${one} 곱하기 ${two}`;
document.body.append(word);

const form = document.createElement('form');
document.body.append(form);