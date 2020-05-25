"use strict";
let imgcoords = '0';
const example = {
    a: 3,
    b: 7,
    c: 1
};
const rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px',
};
const score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
function computerChoice(imgcoords) {
    return Object.keys(rsp).find((k) => rsp[k] === imgcoords);
}
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
        const myChoice = this.textContent;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgcoords)];
        const diff = myScore - computerScore;
        if (diff === 0) {
            console.log('비겼습니다');
        }
        else if ([-1, 2].indexOf(diff)) {
            console.log('이겼습니다');
        }
        else {
            console.log('졌습니다');
        }
    });
});
