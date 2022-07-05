### 이미지 preloading
이미지를 노출함과 동시에 로딩이 이루어지기 때문에 로딩시간동안 빈 화면이 존재하면 ux가 안좋아질 수 있다.

이를 위해 이미지 preloading을 이용하는데 js의 Image 오브젝트를 이용한다.

```
const img = new Image();
img.src = 'https://example.com/test.png';
```

위의 코드를 콘솔에서 입력한다면 network탭에 코드를 실행하는 순간 로딩이 이루어지는것을 확인 할 수 있다.

이를 통해 useEffect를 이용하여 첫 랜더링 시점에 해당 이미지를 preloading 할 수 있다.

주의할 점은 같은 이미지를 여러번 로드하는 상황이 발생할 경우 preloading을 하는 장점이 사라지기 때문에 이미지가 제대로 캐시되어있는지 cache-control 헤더를 잘 확인하자.

또한 preloading을 무분별하게 사용하게 된다면 이점에서도 성능 이슈가 발생할 여지가 있을 수 있기 때문에 중요한 소수의 컨텐츠에만 적용 방식을 지향하자