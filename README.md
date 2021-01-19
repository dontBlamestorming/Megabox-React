# Megabox-react

## 요약

클론코딩한 Megabox 프로젝트를 React와 Sass(Scss 문법)으로 리팩토링한 페이지입니다.

## 자세히

### Swiper React

> 기존의 프로젝트에서는 swiper 라이브러리를 html에 css와 같이 직접 스크립팅 시켰습니다. 하지만 검색을 좀 해보니 react에서 swiper를 컴포넌트 형식으로 사용할 수 있음을 확인하여 package를 설치하고 document를 보며 사용하였습니다. 확실히 이전보다 props로 swiper를 config하는 것이 사용성에 있어서 매우 편합니다. 또한 어떠한 코드가 swiper에 이용되는지를 클래스명이 아닌 component로 확인이 가능하기 때문에 코드를 읽는데에 있어서 이해가 직관적으로 됩니다. 약간의 단점이라면 style을 커스터마이징에 있어서 제한은 있지만 이는 충분히 다른 방법으로 슈팅이 가능합니다.

```javascript
const SwiperSlider = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {genSlide()}
    </Swiper>
  );
};
```

### Sass

#### Before

<img src="https://user-images.githubusercontent.com/41932978/105009730-2f3f7880-5a7e-11eb-961c-9d74e8ce6dad.png" style="width : 600px"/>

<br />

이 프로젝트의 가장 큰 목표는 중복되는 코드를 최소한으로 줄이는 것이었습니다. 이 목표에 있어서 Sass는 강력한 도구 중 하나였다고 생각합니다. Nesting을 통해 각각의 클래스별 계층을 직관적으로 파악할 수 있었고, 계층을 직관적으로 보니 더 나아가 css자체에 대한 이해도를 높일 수 있었던 것 같습니다. 4 deeps 이상을 최대한 피하려고 했으며 최악의 경우에도 상위 선택자 참조(:&)로서만 작성되어 있습니다.

Css 내의 변수와 mixin을 최대한 사용하려고 했습니다. Nesting은 구조적인 부분에서 매우 유용한 도구임에는 틀림없지만 sass를 잘 다룬다고 하기에는 역부족인 것 같습니다. 개인적인 이해로서는 mix-in과 sass내에서 변수, 함수를 잘 적용시키기 위해서는 구현하려는 웹 페이지 자체의 color나 layout, 그리고 position 등등 css적 요소들이 일정부분 통일되어야 한다는 것을 느꼈습니다.

하지만 해당 프로젝트에서는 상대적으로 통일성이 떨어져있기에 적용시키기가 어려웠습니다. 그럼에도 불구하고 각각의 다른 클래스에 동일한 css를 적용시키는 부분은 상속(@extend)를 통해 중복된 코드를 제거하였으며 변수는 color, 그리고 mix-in은 background-position을 적용시킬 때 활용하였습니다. 특히 mix-in은 미디어 쿼리를 작성할 때 많은 도움이 될 것 같습니다.

#### After

<p align="center">
<img src="https://user-images.githubusercontent.com/41932978/105009733-3070a580-5a7e-11eb-9761-13f04afb75ff.png"/>
</p>

### Split data and code

> 웹페이지 전체의 내용이 html로 하드코딩되어 있는 부분을 Header, Banner 등의 컴포넌트를 통해 분리하였습니다. 또한 각 component 별로 중복작성 되어 있는 부분은 텍스트 부분만 도려내어 data.js에 json형식으로 저장하고 주로 map()을 활용하여 html을 생성하도록 했습니다. 이와 같은 방법으로 기존 프로젝트에서 중복된 코드를 상당 수 줄일 수 있었습니다. 하지만 정적인 페이지의 특성상 단순히 html tag를 생성해준다는 한계점이 있다는 것은 분명하다고 생각합니다.

```javascript
export const movie__slidesInfo = [
  {
    title: "침묵",
    rank: 1,
    limit: {
      en: "all",
      ko: "전체관람가",
    },
  },
  {
    title: "신세계",
    rank: 2,
    limit: {
      en: "a19",
      ko: "19세 이상 관람",
    },
  },
  {
    title: "마스터",
    rank: 3,
    limit: {
      en: "all",
      ko: "12세 이상 관람",
    },
  },
  {
    title: "마약왕",
    rank: 4,
    limit: {
      en: "a19",
      ko: "15세 이상 관람",
    },
  },
...

```

## 후기

중복되어있는 코드를 줄인다는 것은 확실히 의미가 있는 작업이라고 생각합니다. 특히 코드의 가독성을 획기적으로 향상시킬뿐만 아니라 하다보면 새로운 아이디어가 떠오르기도 합니다. 특정 코드를 참조해야 할 때에도 큰 틀을 금방 잡을 수 있었습니다. Sass는 css를 좀 더 구조적으로 접근할 수 있게하는 강력한 도구였습니다. 얼른 타 프로젝트에서 좀 더 재사용성이 있는 css를 Sass로 만들어보고 싶은 생각이 들었습니다. 아쉬운 것이 있다면 정적 페이지 특성상 React를 좀 더 React스럽게 사용하지 못한 부분입니다. 리드미컬하게 데이터가 동적으로 움직이는 웹페이지를 React로 다시 짜보면서 데이터의 흐름을 제어해보고 싶다는 생각을 다시 하게 되었습니다.
