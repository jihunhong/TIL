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

let interval: number;
let point: number = 0;
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', function(this: HTMLButtonElement, e: Event){
        clearInterval(interval);
        setTimeout(intervalMaker, 2000);
        const myChoice = this.textContent as keyof RSP;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgcoords)]

        const diff = myScore - computerScore;
        if(diff === 0){
            console.log('비겼습니다');
        }else if([-1, 2].includes(diff)){
            console.log('이겼습니다');
            point++;

        }else{
            console.log('졌습니다')
            point--;
        }
        (document.querySelector('#point') as HTMLDivElement)!.textContent = String(point);
    })
})


function intervalMaker(){
    interval = setInterval(function(){
        if(imgcoords === rsp.ROCK){
            imgcoords = rsp.SCISSORS;
        }else if(imgcoords === rsp.PAPER){
            imgcoords = rsp.PAPER;
        }else if(imgcoords === rsp.SCISSORS){
            imgcoords = rsp.ROCK
        }

        // const computer = document.querySelector<HTMLDivElement>('#computer');
        // if(computer){
        //     computer.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgcoords}`
        // }

        if(document.querySelector('#computer')){
            (document.querySelector('#computer') as HTMLDivElement).style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgcoords}`
        }
    }, 100);
}

intervalMaker();