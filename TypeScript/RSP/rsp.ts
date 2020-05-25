let imgcoords: RSP[keyof RSP] = '0';

interface RSP {
    // readonly ROCK : '0'
    readonly SCISSORS : '-142px'
    readonly PAPER : '-284px'
}

interface RSP {
    readonly ROCK : '0'
}


interface Example {
    a : 3
    b : 7
    [key : string] : number
    // 무엇이 들어오는지 알수없을때 key
}

const example : Example = {
    a : 3,
    b : 7,
    c : 1
}

const rsp: RSP = {
    ROCK : '0',
    SCISSORS: '-142px',
    PAPER : '-284px',
} as const;

const score = {
    ROCK : 0,
    SCISSORS : 1,
    PAPER : -1
} as const;

function computerChoice(imgcoords: RSP[keyof RSP]): keyof RSP {
    return (Object.keys(rsp) as ['ROCK', 'SCISSORS', 'PAPER']).find((k) => rsp[k] === imgcoords)!;
}

document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', function(this: HTMLButtonElement, e: Event){
        const myChoice = this.textContent as keyof RSP;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgcoords)]

        const diff = myScore - computerScore;
        if(diff === 0){
            console.log('비겼습니다');
        }else if([-1, 2].indexOf(diff)){
            console.log('이겼습니다')
        }else{
            console.log('졌습니다')
        }
    })
})