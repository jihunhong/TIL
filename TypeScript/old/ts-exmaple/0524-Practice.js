"use strict";
let number;
// number = 'hello' // error
let num;
num = 3;
let str = String(num);
// 이런 방식으로 사용하자 (다시 선언하는 방식)
let foo;
let bar;
// 대문자 Number는 Number 객체로 취급된다.
let arr = [1, 2, 3];
let _arr = [1, 2, 3];
// 두가지 경우 모두 사용할 수 있다
let array = [true, 2, 'str'];
// 셋중에 하나의 타입만 만족해도 된다
let fixedArray = [true, 2, 'str'];
// fixedArray[3] = 5;
// error => 배열의 길이까지 선언하는 방식으로 좀더 엄격하다.
fixedArray.push(3); // not error
// push 는 막을 수 없다
// 또한 아래와 같은 방식도 가능하다.
// let strictArray: [boolean, 2, string] = [true, 0, 'str'];
// error
let readonlyArray = [true, 2, 'str'];
// readonlyArray[4] = 3;       // error
// readonlyArray.push('1');    // error
// 위 경우에서 사용된 as const를 그냥 const로 선언하면 되지않나?
// 일반적인 const 와의 차이점은
const obj = { a: 1 };
obj.a = 2;
// const 로 선언된 obj의 a값이 변경됨을 방지하기 위해 as const를 사용할 수 있다.
const _obj = { a: 1 };
// _obj.a = 2; // error
const object = { a: 'b' };
// object의 선언 방식
const _object = { a: 'b', b: 3 };
const optional = { a: 'b' };
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
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
const abc = 1;
const op = abc === null || abc === void 0 ? void 0 : abc.name;
function add(a, b) {
    return a + b;
}
function log(a, b) {
    console.log(a, b);
    // 리턴이 없는 경우 return 타입은 void
}
function high(a, b) {
    return (c) => {
        return 3;
    };
}
const obj2 = {
    a(b) {
        return 'hello';
    }
};
// typecast
const paragraph = 1;
paragraph.substr(1, 2);
paragraph.substr(1, 2);
