#### 병목함수에 memoization 적용

- 순수함수 : 같은 input이 다음에도 들어온다면 이후에도 같은 ouput을 리턴하는것

- 함수를 최적화하는 방식에는 알고리즘을 개선해 실행 속도를 줄이는 방식과 순수함수에서 적용시킬 수 있는 memoization 방식이 있다.

```js
const cache = {};

export function getAverageColorOfImage(imgElement) {
  if (cache.hasOwnProperty(imgElement.src)) {
    return cache[imgElement.src];
  }


  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  const averageColor = {
    r: 0,
    g: 0,
    b: 0,
  };

  if (!context) {
    return averageColor;
  }

  const width = (canvas.width =
    imgElement.naturalWidth || imgElement.offsetWidth || imgElement.width);
  const height = (canvas.height =
    imgElement.naturalHeight || imgElement.offsetHeight || imgElement.height);

  context.drawImage(imgElement, 0, 0);

  const imageData = context.getImageData(0, 0, width, height).data;
  const length = imageData.length;

  for (let i = 0; i < length; i += 4) {
    averageColor.r += imageData[i];
    averageColor.g += imageData[i + 1];
    averageColor.b += imageData[i + 2];
  }

  const count = length / 4;
  averageColor.r = ~~(averageColor.r / count); // ~~ => convert to int
  averageColor.g = ~~(averageColor.g / count);
  averageColor.b = ~~(averageColor.b / count);

  cache[imgElement] = averageColor;


  return result;
}
```

#### getAverageColorOfImage 함수의 개선점
퍼포먼스 탭을 확인해 봤을때 긴 실행시간을 차지하는 부분은 drawImage, getImageData, rgb값을 더해주는 반복문으로 확인된다

개선할 수 있는 방안
- 강의에서는 함수의 파라미터로 들어오는 imgElement의 source에 해당하는 이미지 사이즈가 큰 사이즈로 들어오기 때문에 이미지 사이즈 자체를 줄여서 가져온 이미지를 파라미터로 이용한다.
- 또한 데이터를 분석하기 위해 이용하는 캔버스의 사이즈를 줄이는 방법 또한 유효하다.
```js
  // 캔버스의 사이즈를 더 줄인다고해도 속도가 무조건적으로 개선되지는 않는다
  canvas.width = width / 2;
  canvas.height = height / 2;
  drawImage(imgElement, 0, 0, canvas.width, canvas.height)
```
- 반복문의 개선은 한 픽셀씩 계산되는 반복문의 증감식을 이미지 데이터의 컬러값을 계산한다는 관점에서 봤을때 여러 픽셀을 건너뛰는 방식으로 진행한다면 개선 될 수 있다.
```js
  for (let i = 0; i < length; i += 4 * 10) {
    averageColor.r += imageData[i];
    averageColor.g += imageData[i + 1];
    averageColor.b += imageData[i + 2];
  }
```



```js
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(args.length !== 1) {
            return fn(...args);
        }

        if(cache.hasOwnProperty(args)) {
            return cache[args];
        }
        const result = fn(...args);
        cache[args] = result;
        return result;
    }
}
```

