![enter image description here](https://cdn-images-1.medium.com/max/800/1*XkHY4KkKDnOdnwW0lIbqjg.png)
# 📖 자바 스크립트 완벽 가이드

## 6장 객체
> 자바 스크립트 객체는 객체가 가진 고유 프로퍼티를 유지하는 것 외에 `프로토타입`이라고 하는 다른 객체의
프로퍼티를 상속 받는다.
>> 객체의 메서드 들은 일반적으로 상속 받은 프로퍼티이고, 이를 `프로토타입 상속` 이라고 한다.

### `프로토타입`
> 자바 스크립트에서 객체의 생성시 주어지는 Constructor를 선언할때마다 new를 사용하며
`Prototype Object` 도 같이 생성된다.
![enter image description here](https://cdn-images-1.medium.com/max/800/1*PZe_YnLftVZwT1dNs1Iu0A.png)
이렇게 생성된 `prototype object`를 통해 속성을 컨트롤 하는것으로,
생성된 객체는  `__proto__` 속성를 통해 함수로 선언된 객체의 프로퍼티를 참조하는것이다.

```js
	function Person() {}

	Person.prototype.eyes = 2;
	Person.prototype.nose = 1;

	var kim  = new Person();
	var park = new Person():

	console.log(kim.eyes); // => 2
```

### `Object.create()`
> 임의의 프로토타입으로 새 객체(상속자 객체)를 만드는데 유용하게 사용된다.
```js
function inherit(p){
	if(p == null) throws TypeError();
	if(Object.create())
		return Object.create(p);
	var t = typeof p;

	function f(){};
	f.prototype = p;
	return new f();
}
//프로토 타입 객체 p의 속성을 상속받아 새롭게 생성된 객체를 반환한다.
```

### `연관 배열로서의 객체`
```js
object.property
object.["property"]

//✔️인덱스가 아닌 문자열을 인덱스로 갖는 배열에 접근하는 형태 => `Hash` `Map` `diectionary`
```

- `배열 표기법`
> 자바스크립트에서의 연관 배열 사용은 `객체.프로퍼티`로 이루어진 접근방식과는 달리
객체["property_name"]과 같이 **프로퍼티의 이름을 미리 알아야 한다는점보다 유연하다.**


### 👪 `상속`
> ✔️ 프로토타입 객체와의 관계를 유의하자.

```js
var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z	= 3;
var s = q.toString();

q.x + q.y; 		// return 3 q의 프로퍼티 x와 y는 각각 o와 p에서 상속받았다.

```

```js
var len = book && book.subtitle && book.subtitle.length;
// book 객체와 그 프로퍼티들 값들의 무결성을 확인해 변수에 할당하는 방식
```

### 🔎 프로퍼티 검사하기 `.containsKey()`
- `in`
- `hasOwnProperty()`
- `propertyIsEnumerable()`
#
- `Object.keys()` : `iterator` 처럼 키 나열

### 💡 프로퍼티 Getter와 Setter
> getter/setter로 정의된 프로퍼티는 `접근자 프로퍼티` 로 `데이터 프로퍼티`와는 다르다.
```js

var o = {
	data_prop : value,    // 데이터 프로퍼티

	get accessor_prop() { ... },
	set accessor_prop(value) { ... }
};
```

### ⚛️ 프로퍼티 속성
- writable		 : 프로퍼티 값들의 변경 가능 여부
- enmerable 	 : 프로퍼티들의 열거될 수 있는지의 여부
- configurable : 속성 값의 변경 가능 여부

## 객체 속성

### `class 속성`
> 객체의 타입에 대한 정보를 담고 있는 문자열이다.
```js
function classof(o){
	if(o === null) return "Null";
	if(o === undefined) return "Undefined";
	return Object.prototype.toString.call(o).slice(8, -1);
}
```

### `extensible 속성`
> 객체에 새 프로퍼티를 추가 할 수 있는지 여부를 결정한다.
>> 여부의 질의를 하려면 Object.isExtensible() 함수에 해당 객체를 인자로 넘긴다.

### 📐 객체 직렬화
> 객체의 상태를 문자열로 변환하는 과정을 말한다. ECMAScript 5는
자바스크립트 객체를 직렬화 하는 JSON.stringify() 메서드와 직렬화한
문자열을 객체로 복원하는 JSON.parse() 메서드를 지원한다.

### `toString() 메서드`
> 호출 대상 객체의 값을 어떠한 방식으로든 문자열로 만들어 반환한다. 그렇기 때문에 많은 클래스가 고유한 방식으로 toString() 메서드를 정의하고 있다.

### `valueOf() 메서드`
> toString()과 유사하지만 원시 타입 값을 필요로 하는 문맥안에서 사용될때 자동으로 호출되는 메소드이다.
