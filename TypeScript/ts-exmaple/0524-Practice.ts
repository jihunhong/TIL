let number: number;
// number = 'hello' // error

let num: number;
num = 3;

let str: string = String(num);
// 이런 방식으로 사용하자 (다시 선언하는 방식)

let foo: number;
let bar: Number; 
// 대문자 Number는 Number 객체로 취급된다.

let arr: number[] = [1, 2, 3];
let _arr: Array<number> = [1, 2, 3];
// 두가지 경우 모두 사용할 수 있다

let array : (string | number | boolean)[] = [true, 2, 'str'];
// 셋중에 하나의 타입만 만족해도 된다

let fixedArray: [boolean, number, string] = [true, 2, 'str'];
// fixedArray[3] = 5;
// error => 배열의 길이까지 선언하는 방식으로 좀더 엄격하다.
fixedArray.push(3);     // not error
// push 는 막을 수 없다

// 또한 아래와 같은 방식도 가능하다.
// let strictArray: [boolean, 2, string] = [true, 0, 'str'];
// error

let readonlyArray = [true, 2, 'str'] as const
// readonlyArray[4] = 3;       // error
// readonlyArray.push('1');    // error

// 위 경우에서 사용된 as const를 그냥 const로 선언하면 되지않나?
// 일반적인 const 와의 차이점은

const obj = { a: 1 };
obj.a = 2;
// const 로 선언된 obj의 a값이 변경됨을 방지하기 위해 as const를 사용할 수 있다.

const _obj = {a : 1} as const;
// _obj.a = 2; // error

const object : {a : string } = {a : 'b'};
// object의 선언 방식

const _object : {a: string, b : number} = { a: 'b', b: 3};

const optional : {a: string, b? : number} = { a: 'b'};


enum Color { Red, Green, Blue }
let c : Color = Color.Green;
/*
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
*/

Color[0] === 'Red';
Color['Red'] === 0;

const op = abc?.name;

function add(a: number, b:number): number{
    return a + b;
}

function log(a: number, b: number): void{
    console.log(a, b)
    // 리턴이 없는 경우 return 타입은 void
}

function high(a: number, b: number): (c:string) => number{
    return (c: string) => {
        return 3;
    }
}

const obj2: {a? : (b?: number) => string} = {
    a(b?: number){
        return 'hello';
    }
}

// typecast
const paragraph: number;
(paragraph as unknown as string).substr(1, 2);
(<string>paragraph).substr(1, 2);