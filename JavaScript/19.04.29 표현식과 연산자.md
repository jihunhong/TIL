![enter image description here](https://cdn-images-1.medium.com/max/800/1*XkHY4KkKDnOdnwW0lIbqjg.png)
# 📖 자바 스크립트 완벽 가이드
## 📝 표현식과 연산자

### 💲 기본 표현식

- `this`

> `this`는 상수가 아니고 프로그램 안에서 위치에 따라 각기 다른 값으로 평가된다.
`this` 키워드는 객체 지향 프로그래밍에서 주로 사용된다.
메서드의 본문 안에서 `this`는 메서드를 호출한 객체 자기 자신으로 여겨진다.


### 💭 함수 정의 표현식
> 함수 정의 표현식은 '함수 리터럴'이라 할 수 있다.
```js
var square = function(x){return x*x;}
```

### 📱 `연산자`

|OP| description   | return   |
|---|---|---|
| delete  | 프로퍼티를 제거  |  boolean |
| typeof  | 피연산자의 타입 | 문자열  |
| instanceof  | 객체 타입 확인 | boolean |
| ?:  | 조건부 연산자  |  타입 무방  |

###  🔍 비트 단위 연산자
- 비트 단위 AND(&)
 	\- 비교하는 비트가 모두 1이라면 1반환
- 비트 단위 OR(|)
 	\- 비교하는 위치에 비트가 설정 되어 있으면 해당 비트로 설정

- 비트 단위 XOR(^)
 	\- 비교하는 위치에 비트중 하나가 true이지만 둘다 true는 아닐때 결과가 true가 된다

- 비트 단위 NOT(~)
	\- 모든 비트를 반전  

- 레프트 시프트(<<)
	\- 지정한 수만큼 비트 전체를 왼쪽으로 이동
- 라이트 시프트(>>)
	\- 지정한 수만큼 비트 전체를 오른쪽으로 이동
-	0으로 채우면서 오른쪽으로 이동(>>>)
	\- 지정한 수만큼 비트를 전부 오른쪽으로 이동 새로운 비트는 전부 0이 된다.

### ❓ 동치와 부등치 연산자
> =(할당), ==(동치), ===(일치)
- `=`		: 할당
- `==`	: 동등한 관계, 타입변환을 시도한 후에 비교를 다시 하게된다
- `===`	: 좀더 엄한 규칙, 같은 참조를 하고 있는 경우에 `true`

### `in` 연산자
> 좌변의 속성을 우변이 **포함** 하고 있을때.

```js
var point = { x:1, y:1};			
"x" in point						// true
"z" in point						// false
"toString" in point					// true : 상속된 프로퍼티
var data = [7,8,9];
"0" in data						// true : 배열에 0번째 원소가 있어서
1 in data						// true : 배열에 1번째 원소가 있기 때문에
3 in data						// false
```

### `instanceof` 연산자
> 피연산자의 상위클래스에 객체가 속하는지 판단
```js
var date = new Date();
d instanceof Date;   // true
d instanceof Object; // true
```

### `eval()` 평가 표현식
>**문자열** (로 이루어진 코드) 을 자바스크립트로 해석하고 결과를 값으로 출력하는 기능


```js
eval("3+2")				// => 5

var d;
eval("d = new Date;");			// => Mon Apr 29 2019 20:40:10 GMT+0900 (한국 표준시) {}
```

```
✔️ 전달 하려는 문자열이 독립된 스크립트로서 문제가 없을때 사용하는것에 유의하여야 한다.
```

### `?:` 조건부 연산자
```js
x > 0 ? x : -x             // x의 절대 값을 구한다.
```
```js
greeting = "hello " + (username ? username : "there");
// 'username'이 true 즉, username에 변수가 정의되어 있지않다면 "there"를 사용하는것 문장
```


### `typeof` 연산자
```js
(type value == "string") ? "'" + value "'" : value;
// value의 타입이 문자열이라면 문자열 'value'를 반환
```

#

### `delete` 연산자

```js
var o = {x:1, y:2};
delete o.x;						// return true
"x" in o;						// false

var array = [1,2,3];
delete a[2];
2 in a;							// false
a.length;						// ✔️ 3 배열의 길이는 변하지 않는다.
```
