let first = Math.ceil(Math.random() * 9);
let second = Math.ceil(Math.random() * 9);
let result = first * second;

const word = document.createElement('div');
word.textContent = `${first} ${second}`;

const form = document.createElement('form');
document.body.append(form);

const input = document.createElement('input');
input.type = 'number';

form.append(input);

const button = document.createElement('button');
button.textContent = '입력';

form.append(button);

const resultDiv = document.createElement('div');
document.body.append(resultDiv);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(result === Number(input.value)){
        resultDiv.textContent = '정답';
        first = Math.ceil(Math.random() * 9);
        second = Math.ceil(Math.random() * 9);
        result = first * second;
        word.textContent = `${first} 곱하기 ${second}는?`
    } else {
        resultDiv.textContent = '틀렸어여';
        input.value = '';
        input.focus();
    }
})
