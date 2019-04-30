![enter image description here](https://cdn-images-1.medium.com/max/800/1*XkHY4KkKDnOdnwW0lIbqjg.png)
## 💬 어휘 구조
> HTML의 태그나 속성이름이 대문자와 소문자가 섞여있는것과는 달리, `JS`에서는 모두 **소문자** 로 처리한다.


### 💲 타입, 값, 변수
- **타입**
  \- 원시타입 (primitive type) : 숫자, 텍스트의 나열, 불리언 진리값, `null`과 `undefined`
  \- 객체타입 (object type)    : 원시타입 외의 값은 모두 객체이다.
<br>
- **값**
  \- 클래스는 객체 타입의 하위 타입으로 생각 할 수 있다.

>자바스크립트 인터프리터는 메모리 관리르 위해 자동으로 기비지 컬렉션을 수행한다.
객체에 더이상 접근 할 수 없을때 인터프리터는 자동으로 메모리에서 해제한다.

- **변수**
  \- 타입이 정해져있지 않아 같은 변수에 다른 타입의 값을 할당할 수 있다.
  \- 어휘 유효범위(scope)를 사용한다.

### 📕 `Math`

|Method| description   |
|---|---|
| .pow(2,53)  | 2의 53승  |
| .PI  | 원주율  |
| .E  | 자연 로그 상수 |
| .sin  | 삼각함수 (.cos, .atan)  |
| Math.log(100)/Math.LN10  | 밑이 10인 로그 100  |
| .exp(3)  | Math.E의 3 거듭제곱  |

#

### ⚠️ 이진 부동소수점과 반올림 오류
> JS의 분수는 이진 표현법으로 표현되어 10진수 분수와 같은 수치들은 정확하게 표현할 수 없다.

```js
var x = .3 - .2; // 0.3 - 0.2
var y = .2 - .1;
x == y           // false
x == .1          // false
y == .1          // true
```

이진 부동소수점 숫자를 사용하기때문에 값들의 비교문에서 문제가 발생한다.
#

### 🔍 패턴 매칭
> 문자열과 RegExp 객체는 모두 패턴 매칭과 '검색 후 바꾸기' 기능을 수행하는 메서드를 가지고 있다.

``` java
/^HTML/                   //  `HTML`로 시작하는 문자열
/[1-9][0-9]*/             //   0 아닌 숫자로 시작하는 숫자
/\bjavascript\b/i         //   대소문자 구별 없이 javascript와 일치하는 문자열

```

### 🔮 전역 객체
> 최상위 코드(함수의 일부가 아닌 코드) 에서는 this 키워드를 통해 전역 객체를 참조 할 수 있다.
``` js
var global = this;            // 전역 객체를 참조하는 변수를 정의
```

### 🔭 변수의 유효범위
> 같은 이름을 갖는 경우, 함수 내부에서 지역 변수는 전역 변수에 우선한다.
> 지역 변수 혹은 함수 매개변수를 전역 변수와 같은 이름으로 선언하면, 전역 변수는 감춰 버리게된다.

```js
var scope = "global";
function checkscope(){
   var scope = "local";
   return scope;                //전역 변수가 아닌 지역변수를 반환한다.
}
checkscope();                   // return "local"
```

#

> 함수 정의는 중첩 될 수 있다. 각 함수에는 자신만의 유효범위가 있다. 따라서 아래와 같이 유효범위가 여러단계로 중첩 될수 있다.

```js

var scope = "global";

function checkscope() {
  var scope = "local";
    function nested() {
        var scope = "nested";
        return scope;
    }
    return nested();
}

checkscope();                                     // "nested scope"
```

#### ⚓️ 함수 유효범위와 끌어올림 (hoisting)
> 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는것이다. 즉, 변수가 함수내에서 정의 되었을 경우
**선언이 함수의 최상위로,**  **함수 바깥에서 정의되었을 경우는 전역 컨텍스트의 최상위로 변경됩니다.**
<br>
 **말 그대로 선언 혹은 정의의 위치가 끌어올려 지는것이다.**

```js
function showName() {
     console.log("First Name : " + name);
     var name = "Ford";
     console.log("Last Name : " + name);
}
showName();
```

이 코드는 자바스크립트 엔진에 의해 다음과 같이 해석된다.

```js
function showName() {
     var name; // ⚓️ Hoist!
     console.log("First name : " + name);
     name = "Ford";
     console.log("Last Name : " + name);
}
```
[- JavaScript Variable Scope and Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)  By [  Richard Bovell 📝](http://javascriptissexy.com/author/richardb/)


#### ⛓ 유효범위 체인
