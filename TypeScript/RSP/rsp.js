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
        clearInterval(interval);
        setTimeout(intervalMaker, 2000);
        const myChoice = this.textContent;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgcoords)];
        const diff = myScore - computerScore;
        if (diff === 0) {
            console.log('비겼습니다');
        }
        else if ([-1, 2].includes(diff)) {
            console.log('이겼습니다');
        }
        else {
            console.log('졌습니다');
        }
    });
});
let interval;
function intervalMaker() {
    interval = setInterval(function () {
        if (imgcoords === rsp.ROCK) {
            imgcoords = rsp.SCISSORS;
        }
        else if (imgcoords === rsp.PAPER) {
            imgcoords = rsp.PAPER;
        }
        else if (imgcoords === rsp.SCISSORS) {
            imgcoords = rsp.ROCK;
        }
        // const computer = document.querySelector<HTMLDivElement>('#computer');
        // if(computer){
        //     computer.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgcoords}`
        // }
        if (document.querySelector('#computer')) {
            document.querySelector('#computer').style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgcoords}`;
        }
    }, 100);
}
intervalMaker();
