![enter image description here](https://cdn-images-1.medium.com/max/800/1*XkHY4KkKDnOdnwW0lIbqjg.png)
## 🔍 자바스크립트 소개

>자바스크립트는 텍스트 최소한의 API만을 가지고있으며 다른 기능들은 `브라우저`가 내장하고있는 환경을 따른다.

### 1.1 자바 스크립트 언어(코어)
#### 변수에 관한 문법
``` js
 x = null;			
 x = undefined;		// null과 undefined는 유사한 관계를 갖는다.
```


#### 객체에 관한 선언
```js
var book = {
	topic : "JavaScript",
	fat : true
}
```

#### 배열과 객체
```js
var points = [
	{x:0, y:0},				//배열에 두 원소가 있다.
	{x:1, y:1}				//각 원소는 객체이다.
];


points[1].x - points[0].x  = 1;
```

#### 관계 연산자
```js
"two" > "three" // 알파벳순 정렬의 관점으로 보아 `true`이다.

```

#### JS에서의 생성자 함수 정의
```js

function Point(x,y){
	this.x = x;
	this.y = y;
}
```

#### ⭐️ 객체 메서드 정의

> 생성자 **함수** `Point`의 **prototype** 객체에 함수를 정의함으로써 메서드를 정의한다.

``` js
Point.prototype.r = function(){
	return Math.sqrt(this.x * this.x + this.y * this.y);
}
```

#

### 1.2 클라이언트 자바스크립트

#### ⚡️ `load` 이벤트

> `load`이벤트는 문서 로딩이 완료될때 발생한다. `<script>`태그의 실행보다 빠르다

``` js
window.onload = function(){
	var images = document.get...("img");

	if(image.addEventListener)
		image.addEventListener("click"), hide, false);
	else {
		image.attachEvent("onclick", hide);

		function hide(event) { event.target.style.visibility = "hidden";
	 }

	}
}
```

#### 🌏 `XMLHttpRequest`
> 서버로부터 url과 HTTP 요청을 지정해 request 신호를 보내는 객체이다.

```js
var req = new XMLHttpRequest();
var url = 'status?gender=man';
var params = '&name=jihunhong';
req.open('POST', url, true);

// req 객체에 RequestHeader 정보를 싣는다.
req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

req.onreadystatechange = function() {// state 정보가 갱신될경우 호출된다.
    if(req.readyState == 4 && req.status == 200) {
    	console.log(req.responseText);
    }
}
req.send(params);
```

## 💬 어휘 구조
> HTML의 태그나 속성이름이 대문자와 소문자가 섞여있는것과는 달리, `JS`에서는 모두 **소문자**로 처리한다.
