# HTML, CSS 의 display 속성

- tag 의 보여지는 성질을 변경할수 있는 속성
- 모든 tag 는 자신만의 고유의 display 속성을 갖는다
- 기본속성은 block, inline 성질을 갖는다

## display:block 속성

- header, nav, div, section, p, article, footer 등의 속성은 기본적으로 block 성질을 갖는다
- block 성질은 box 의 보여지는 모양과 달리 무조건 화면의 width 만큼의 영역을 차지하는 구조이다
- block 성질을 갖는 tag 는 width값을 변경하여도 보여지는 크기만 달라질 뿐 실제 box 의 영역은 화면의 width 이다.
- block 성질을 가진 상태에서는 box 들을 가로방향으로 배치할 수 없다.
- css2 이전에는 block 성질을 가진 box 들을 가로방향으로 배치하기 위하여 float 라는 속성을 트릭으로 사용했다.
- css 속성에 float 라는 속성을 사용하는 순간, 화면개발을 하는 개발자는 탈모가 시작된다
- 만약 box 를 가로로 배치하면서 원하는 형태로 배열을 하는 것은 정말 어려운 작업이 었다.

## display:inline 속성

- a, span, strong, b, label, input, button 등과 같이 글자단위의 표현 tag 들
- 실질적으로 tag 의 width 를 임의로 조절할수 없다.
- 이 tag 들의 width 는 tag 가 포함하는 Content(text)의 길이만큼으로 자동 설정된다
- 심지어 이 tag 들은 padding 도 설정이 안되는 경우가 있다

## display:inline-block 속성

- block 속성의 성질과, inline 속성의 성질을 함께 포함하는 속성
- 이 속성은 기본 display 속성을 변경하여 표현되는 성질을 변경하는 것
- block 속성의 tag 를 inline-block 으로 변경한 후 width 속성을 설정하면 실제 보여지는 width와 영역 width 가 같아진다.
- inline 속성의 tag 를 inline-block 으로 변경하면 width 지정이 가능하고, padding 등을 사용할 수 있다.

## display:flex 속성

- css2 에서 추가된 display 속성중에 flex 속성과 grid 속성이 있다.
- flex 속성은 화면 layout 을 만드는데 혁신적인 변화를 가져온 속성

- `display:flex` 속성은 `부모 box tag` 에 지정하는 style
- 부모 tag 에 `display:flex` 속성이 지정되면 `children tag` 들은 자동으로 `display:flex-item` 속성으로 변경된다
- `display:flex-item` 속성을 받는 children tag 들은 기본적으로 `inline-block` 성질을 갖게되고 추하여 독특한 속성 성질을 부여 받게 된다.
