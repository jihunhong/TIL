### 불필요한 css제거

- lighthouse에서 Remove unused CSS에 해당하는 방안이다. 말그대로 이용하지 않는 css가 포함되어있다는 말

- More tools에 Coverage를 확인해서 파일별 커버리지의 비율을 눈으로 확인할 수 있다.

![coverage tab](https://wd.imgix.net/image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/IzpB7injykyaq8PRDVwF.png?auto=format)

강의에서는 PurgeCSS를 이용하는데 PurgeCSS는  html, css에 포함되어있는 문자열들을 모두 추출하여 className과 비교해 이용하지않는 것들을 제거하는 작업을 한다.

className과 비교한다는 점은 태그의 attribute가 className으로 이용될경우 부정확한 비교가 이루어 질수 있어 단점으로 작용한다.

[PurgeCSS](https://purgecss.com/)

강의에서는 package.json에 purge 명령어를 다음과 같이 추가했다.

> purge: "purgecss --css ./build/css/*.css --output ./build/css/ --content ./build/index.html ./build/js/*.js"

빌드된 css파일과 js파일을 참조하여 이미 저장된 css 폴더내의 파일을 덮어씌우는 방식으로 동작한다

#### 적용이 이상하게 될때

className의 비교가 특수문자포함때문에 잘못 비교될경우 지워지는 css가 생길 수 있다.
> ex) lg:md-2 => 'lg md-2'로 인식

purgecss.config.js 파일을 만들고 defaultExtractor를 설정해 해결하자.

강의에서는 다음과 같은 정규식을 이용했다.

```js
module.exports = {
    defaultExtractor: (content) => content.match(/[\w\:\-]+/g) || [] // \w = [0-9, a-z, A-Z, _]
}
```

생성한 config 파일을 참조하도록 purgecss 명령어도 수정하자

> purge: "purgecss --css ./build/css/*.css --output ./build/css/ --content ./build/index.html ./build/js/*.js --config ./purgecss.config.js"
