var first = Math.ceil(Math.random() * 9);
var second = Math.ceil(Math.random() * 9);
var result = first * second;
var word = document.createElement('div');
word.textContent = first + " " + second;
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'number';
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (result === Number(input.value)) {
        resultDiv.textContent = '정답';
        first = Math.ceil(Math.random() * 9);
        second = Math.ceil(Math.random() * 9);
        result = first * second;
        word.textContent = first + " \uACF1\uD558\uAE30 " + second + "\uB294?";
    }
    else {
        resultDiv.textContent = '틀렸어여';
        input.value = '';
        input.focus();
    }
});
