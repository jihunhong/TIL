#### Reselect를 통한 랜더링 최적화

```js
const { category, allPhotos } = useSelector(state => ({
    category: state.category.category,
    allPhotos: state.photos.data,
}))
const photos = category === 'all' ? allPhotos : allPhotos.filter(photo => photo.category === category)

return <PhotoList photos={photos} />
```

위 코드는 useSelector에서 리턴되는 데이터를 아래 photos 변수에서 category의 값에 따라 필터링 되는 로직을 거쳐 랜더링 되는 컴포넌트 이다.

useSelector의 리턴값에서 category에 따라 filter 함수를 이용한 객체를 리턴한다면 항상 새로운 값으로 판단되기 때문에 불필요한 랜더링이 이루어지기 때문에 위와 같은 형태로 바꾸었는데

위 코드에서도 여전히 문제점이 존재한다.

- category state는 단순히 photos를 필터링하기위해만 이용된다는 점
- useSelector의 다른 state들이 추가된다면 allPhotos의 데이터가 변하지 않았음에도 다른 state들의 값이 변함에 따라 매번 불필요한 필터링 로직이 실행된다는 점이다.

##### ReSelect

[Reselect](https://www.npmjs.com/package/reselect)

- createSelector(inputSelector: Array, ouputSelector: function)

```js
const selectFilterPhotos = createSelector([
        state => state.photos.data,
        state => state.category.category
    ], 
    (photos, category) => 
        category === 'all' ? photos : photos.filter(p => p.category === category))
)

const photos = useSelector(selectFilterPhotos);

return <PhotoList photos={photos} />
```
