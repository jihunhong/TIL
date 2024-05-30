#### useSelect 렌더링 최적화

```js
 const { modalVisible, bgColor, src, alt } = useSelector(state => ({
    modalVisible: state.imageModal.modalVisible,
    bgColor: state.imageModal.bgColor,
    src: state.imageModal.src,
    alt: state.imageModal.alt,
  }));
```

useSelector에서 리턴되는 state의 비교는 useSelector 함수에서 리턴되는 부분을 통해 비교된다.

그렇기 때문에 여러개의 값을 가져오기 위해 object를 리턴하는 방식이 아닌 단일 값으로 가져오는것이 좋다.

```js
const modalVisible = useSelector(state => state.imageModal.modalVisible);
const bgColor = useSelector(state => state.imageModal.bgColor);
const src = useSelector(state => state.imageModal.src);
const alt = useSelector(state => state.imageModal.alt);
```

위 예제에서는 각 가져오는 state들이 문자열이기 때문에 위와 같이 이용하는것이 좋지만 Object를 가져와야 할때는 새로운 `Equality Function`을 이용해야 올바르게 판단할 수 있다.

기본적으로 내장되어 있는 Equality Function은 가장 단순한 비교가 이루어 지기 때문이다.

##### Equality Function

react-redux 패키지에서는 `shallowEqual` 비교 함수를 제공하는데 이 함수는 하나의 depth, object 바로 아래의 값을 비교하여 이용한다.

```js
// const modalVisible = useSelector(state => state.imageModal.modalVisible);
// const bgColor = useSelector(state => state.imageModal.bgColor);
// const src = useSelector(state => state.imageModal.src);
// const alt = useSelector(state => state.imageModal.alt);
const { modalVisible, bgColor, src, alt } = useSelector(state => ({
    modalVisible: state.imageModal.modalVisible,
    bgColor: state.imageModal.bgColor,
    src: state.imageModal.src,
    alt: state.imageModal.alt,
}), shallowEqual);
```

