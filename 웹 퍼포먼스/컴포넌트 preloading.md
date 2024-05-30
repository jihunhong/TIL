### 컴포넌트 preloading

모달과 같은 컴포넌트를 lazy, suspense를 이용해 처리할 경우 상호작용이 일어남에 따라

evaluation 시간 이후에 컴포넌트가 보여지는 문제점이 있을수있다.

이것은 evaluation이 이루어지는 시점을 좀 더 세밀하게 조정하여 컨트롤 할 수 있는데

1. 버튼 클릭시 보여지는 컴포넌트는 사용자가 버튼위에 마우스를 올려놨을때 로딩 (onMouseEnter)
```js
    const handleMouseEnter = () => {
            const lazyComponent = import('./components/ImageModal');
    }
    ...
        <ButtonModal onMouseEnter={handleMouseEnter}>올림픽 사진 보기</ButtonModal>
    ...
```
2. 페이지의 모든 컴포넌트가 마운트 되었을때
```js
    function lazyWithPreload(importFunction) {
        const Component = React.lazy(importFunction);
        Component.preload = importFunction;
        return Component;
    }
```

로 바꾸어 생각할 수 있다.

