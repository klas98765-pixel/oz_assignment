
# HTML/CSS 2일차 — CSS 학습 정리

## 1. CSS란?

CSS(Cascading Style Sheets)는 HTML로 작성한 웹페이지의 디자인과 배치를 담당하는 스타일 언어이다.

HTML이 웹페이지의 구조를 만든다면 CSS는 색상, 글꼴, 크기, 여백, 정렬, 레이아웃 등을 설정한다.

| 구분 | 역할 | 예시 |
|---|---|---|
| HTML | 웹페이지의 구조 | 제목, 문단, 이미지, 표 |
| CSS | 웹페이지의 디자인 | 색상, 글씨 크기, 여백 |
| JavaScript | 웹페이지의 동작 | 클릭 이벤트, 데이터 처리 |

### CSS를 사용하는 이유

1. 웹페이지의 디자인을 자유롭게 변경할 수 있다.
2. 여러 HTML 요소에 동일한 스타일을 적용할 수 있다.
3. HTML 구조와 디자인을 분리하여 관리할 수 있다.
4. PC와 모바일 화면에 맞는 반응형 디자인을 구현할 수 있다.

---

## 2. CSS 기본 문법

CSS는 선택자, 속성, 값으로 구성된다.

```css
선택자 {
    속성: 값;
}
```

예제:

```css
h1 {
    color: navy;
    font-size: 30px;
    text-align: center;
}
```

| 구성 | 설명 |
|---|---|
| `h1` | 스타일을 적용할 HTML 요소 |
| `color` | 글자 색상 속성 |
| `navy` | 글자 색상 값 |
| `font-size` | 글자 크기 속성 |
| `30px` | 글자 크기 값 |
| `text-align` | 텍스트 정렬 속성 |

### 주의사항

- 속성과 값은 콜론(`:`)으로 구분한다.
- 선언은 세미콜론(`;`)으로 구분한다.
- 여러 CSS 선언은 중괄호 `{}` 안에 작성한다.
- CSS 주석은 `/* 설명 */` 형태로 작성한다.

---

## 3. CSS 적용 방식 3가지

CSS를 HTML에 적용하는 방법은 세 가지이다.

### 3.1. Inline CSS (인라인 방식)

HTML 태그 안에 `style` 속성을 직접 작성하는 방식이다.

```html
<p style="color: blue; font-size: 18px;">
    안녕하세요.
</p>
```

**장점**
- 특정 요소에 빠르게 스타일을 적용할 수 있다.
- 간단한 테스트에 유용하다.

**단점**
- HTML과 CSS가 섞여 가독성이 떨어진다.
- 동일한 스타일을 반복 작성해야 한다.
- 유지보수가 어려워질 수 있다.

### 3.2. Internal CSS (내부 스타일 방식)

HTML 문서의 `<head>` 안에 `<style>` 태그를 작성한다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>CSS 연습</title>

    <style>
        h1 {
            color: navy;
            text-align: center;
        }

        p {
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>CSS 공부</h1>
    <p>내부 스타일 적용 예제</p>
</body>
</html>
```

**장점**
- 하나의 HTML 문서에서 스타일을 관리할 수 있다.
- 같은 페이지의 여러 요소에 적용할 수 있다.

**단점**
- 다른 HTML 페이지에서 재사용하기 불편하다.
- HTML 문서가 길어질 수 있다.

### 3.3. External CSS (외부 스타일 방식)

CSS를 별도의 `.css` 파일로 작성하고 HTML 문서에서 연결한다.

HTML 파일:

```html
<head>
    <link rel="stylesheet" href="resume_style.css">
</head>
```

CSS 파일:

```css
body {
    background-color: #f4f6f8;
    font-family: Arial, sans-serif;
}

h1 {
    color: navy;
}
```

**장점**
- HTML과 CSS를 분리하여 관리할 수 있다.
- 여러 HTML 페이지에 같은 CSS 파일을 적용할 수 있다.
- 코드 관리와 유지보수에 유리하다.

**단점**
- CSS 파일을 별도로 관리해야 한다.
- 파일 경로가 잘못되면 스타일이 적용되지 않는다.

### 적용 방식 비교

| 방식 | 작성 위치 | 특징 |
|---|---|---|
| Inline | HTML 태그 내부 | 특정 요소에 직접 적용 |
| Internal | HTML의 style 태그 | 한 페이지에서 관리 |
| External | 별도 CSS 파일 | 분리·재사용에 유리 |

**이번 이력서 과제에서는 External CSS 방식을 사용하였다.**

---

## 4. CSS Selector (선택자)

선택자는 어떤 HTML 요소에 스타일을 적용할지 지정하는 문법이다.

### 4.1. 전체 선택자 (*)

모든 HTML 요소를 선택한다.

```css
* {
    box-sizing: border-box;
}
```

### 4.2. 태그 선택자

특정 HTML 태그를 선택한다.

```css
p {
    color: gray;
}
```

모든 `<p>` 요소에 적용된다.

### 4.3. 클래스 선택자 (.)

동일한 스타일을 여러 요소에 적용할 때 사용한다.

HTML:

```html
<p class="highlight">중요한 내용</p>
<p class="highlight">강조할 내용</p>
```

CSS:

```css
.highlight {
    color: red;
    font-weight: bold;
}
```

### 4.4. ID 선택자 (#)

특정한 하나의 요소를 구분할 때 사용한다.

HTML:

```html
<h1 id="main-title">김민준 이력서</h1>
```

CSS:

```css
#main-title {
    text-align: center;
}
```

같은 문서에서 ID 값은 고유하게 사용하는 것이 원칙이다.

### 4.5. 그룹 선택자 (,)

여러 요소에 동일한 스타일을 적용한다.

```css
h1, h2, h3 {
    color: navy;
}
```

### 4.6. 자손 선택자

특정 요소 내부에 포함된 요소를 선택한다.

```css
div p {
    color: blue;
}
```

`div` 내부의 모든 `p` 요소에 적용된다.

### 4.7. 자식 선택자 (>)

특정 요소의 바로 아래 자식만 선택한다.

```css
div > p {
    color: green;
}
```

### 4.8. 가상 클래스 (:hover)

마우스를 올리는 등의 상태에 따라 스타일을 변경한다.

```css
button:hover {
    background-color: navy;
    color: white;
}
```

### 선택자 우선순위

일반적으로 동일한 출처와 중요도에서 선택자의 우선순위는 다음과 같다.

인라인 스타일 > ID 선택자 > 클래스·속성·가상 클래스 선택자 > 태그 선택자

단, `!important`, 스타일 선언의 출처, 레이어, 선언 순서 등도 최종 적용 결과에 영향을 준다.

---

## 5. CSS 스타일 속성

### 5.1. color

글자 색상을 설정한다.

```css
p {
    color: blue;
}
```

### 5.2. background-color

요소의 배경색을 설정한다.

```css
body {
    background-color: #eef2f7;
}
```

### 5.3. font-size

글자의 크기를 설정한다.

```css
h1 {
    font-size: 32px;
}
```

### 5.4. font-weight

글자의 굵기를 설정한다.

```css
h1 {
    font-weight: bold;
}

p {
    font-weight: 400;
}
```

대표적인 값:
- `400`: 일반 글자
- `700`: 굵은 글자
- `bold`: 굵게 표시

### 5.5. font-family

사용할 글꼴을 지정한다.

```css
body {
    font-family: Arial, sans-serif;
}
```

### 5.6. text-align

텍스트의 가로 정렬을 설정한다.

```css
h1 {
    text-align: center;
}

p {
    text-align: left;
}
```

대표적인 값:
- `left`: 왼쪽 정렬
- `center`: 가운데 정렬
- `right`: 오른쪽 정렬
- `justify`: 양쪽 정렬

### 5.7. line-height

텍스트의 줄 높이를 설정한다.

```css
p {
    line-height: 1.7;
}
```

### 5.8. text-decoration

밑줄 등의 텍스트 장식을 설정한다.

```css
a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

---

## 6. CSS Box Model

HTML 요소는 하나의 직사각형 박스로 표현된다.

박스 모델은 다음 네 영역으로 구성된다.

**Content → Padding → Border → Margin**

| 구성 요소 | 설명 |
|---|---|
| Content | 텍스트나 이미지 등 실제 내용 |
| Padding | 내용과 테두리 사이의 안쪽 여백 |
| Border | 요소의 테두리 |
| Margin | 요소 바깥쪽 여백 |

### 6.1. Content

실제 내용이 표시되는 영역이다.

```css
div {
    width: 300px;
    height: 150px;
}
```

기본 `content-box`에서는 지정한 너비와 높이가 콘텐츠 영역의 크기를 의미한다.

### 6.2. Padding

콘텐츠와 테두리 사이의 안쪽 여백이다.

```css
div {
    padding: 20px;
}
```

개별 방향 설정:

```css
div {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
}
```

### 6.3. Border

요소의 테두리를 설정한다.

```css
div {
    border: 2px solid navy;
}
```

- `2px`: 두께
- `solid`: 실선
- `navy`: 색상

### 6.4. Margin

요소의 바깥쪽 여백이다.

```css
div {
    margin: 20px;
}
```

가로 가운데 정렬 예제:

```css
.container {
    width: 80%;
    margin: 0 auto;
}
```

### 6.5. Width와 Height

요소의 너비와 높이를 설정한다.

```css
.box {
    width: 300px;
    height: 200px;
}
```

### 6.6. Box-sizing

요소의 너비와 높이를 계산하는 방식을 정한다.

**content-box**

```css
.box {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

실제 전체 너비는 다음과 같다.

200 + 40 + 10 = 250px

**border-box**

```css
.box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

실제 테두리까지 포함한 너비가 200px이다.

일반적으로 레이아웃 계산을 편리하게 하기 위해 다음과 같이 설정한다.

```css
* {
    box-sizing: border-box;
}
```

---

## 7. CSS 레이아웃과 정렬

### 7.1. display 속성

HTML 요소의 표시 방식을 지정한다.

| 값 | 의미 |
|---|---|
| block | 새 줄에서 시작하는 블록 요소 |
| inline | 글자처럼 한 줄에 배치되는 요소 |
| inline-block | 한 줄 배치와 크기 설정을 함께 지원 |
| flex | 유연한 1차원 레이아웃 |
| grid | 행과 열을 활용하는 2차원 레이아웃 |
| none | 요소를 화면 레이아웃에서 제외 |

### 7.2. Flexbox

Flexbox는 요소들을 가로 또는 세로 방향으로 유연하게 배치하는 방법이다.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
```

| 속성 | 설명 |
|---|---|
| `display: flex` | Flex 레이아웃 활성화 |
| `flex-direction` | 배치 방향 설정 |
| `justify-content` | 주축 방향 정렬 |
| `align-items` | 교차축 방향 정렬 |
| `gap` | 아이템 사이 간격 |
| `flex-wrap` | 아이템 줄바꿈 설정 |

가로 배치:

```css
.container {
    display: flex;
    flex-direction: row;
}
```

세로 배치:

```css
.container {
    display: flex;
    flex-direction: column;
}
```

---

## 8. 반응형 웹 디자인

반응형 웹 디자인은 화면 크기에 따라 웹페이지의 배치와 크기를 조절하는 기술이다.

예를 들어 PC에서는 넓은 레이아웃을 사용하고 모바일에서는 좁은 화면에 맞춰 요소를 재배치할 수 있다.

### Media Query

```css
@media (max-width: 600px) {
    body {
        margin: 10px;
        padding: 20px;
    }

    h1 {
        font-size: 24px;
    }

    img {
        max-width: 100%;
        height: auto;
    }
}
```

화면 너비가 600px 이하일 때 해당 스타일이 적용된다.

### 반응형 디자인의 장점

1. PC, 태블릿, 모바일 등 다양한 기기에 대응할 수 있다.
2. 화면 크기에 맞게 글자와 이미지 크기를 조절할 수 있다.
3. 사용자 경험과 가독성을 높일 수 있다.

---

## 9. Semantic HTML과 CSS

Semantic HTML은 태그의 이름만으로 해당 영역의 의미를 알 수 있도록 작성하는 방식이다.

대표적인 시맨틱 태그:

| 태그 | 의미 |
|---|---|
| `header` | 머리말 및 소개 영역 |
| `nav` | 탐색 메뉴 |
| `main` | 주요 콘텐츠 |
| `section` | 주제별 콘텐츠 구역 |
| `article` | 독립적인 콘텐츠 |
| `aside` | 부가 정보 |
| `footer` | 바닥글 영역 |

예제:

```html
<header>
    <h1>김민준 이력서</h1>
</header>

<main>
    <section>
        <h2>자기소개</h2>
        <p>의료 AI 분야에 관심이 있습니다.</p>
    </section>
</main>

<footer>
    <p>GitHub: klas98765-pixel</p>
</footer>
```

CSS로 디자인을 적용할 수 있다.

```css
header {
    text-align: center;
    padding: 20px;
}

main {
    max-width: 850px;
    margin: 0 auto;
}

footer {
    text-align: center;
    color: gray;
}
```

---

## 10. 이력서 과제 실습 정리

이번 과제에서는 1일차에 작성한 HTML 이력서에 External CSS 방식을 적용하였다.

### 작업 과정

1. `day1/resume.html` 파일을 `day2`로 복사하였다.
2. `resume_style.css` 파일을 생성하였다.
3. HTML의 `<head>`에 CSS 연결 코드를 추가하였다.
4. 제목과 본문의 글꼴, 색상, 크기를 변경하였다.
5. Box Model을 활용하여 여백과 테두리를 설정하였다.
6. 프로필 사진과 표, 링크, 버튼에 스타일을 적용하였다.
7. Media Query로 모바일 화면에 대응하는 스타일을 추가하였다.

### CSS 연결 코드

```html
<link rel="stylesheet" href="resume_style.css">
```

### 핵심적으로 사용한 CSS

```css
* {
    box-sizing: border-box;
}

body {
    max-width: 850px;
    margin: 40px auto;
    padding: 40px;
    background-color: white;
}

h1 {
    color: navy;
    text-align: center;
}

img {
    display: block;
    width: 180px;
    margin: 20px auto;
}

button:hover {
    background-color: #16344c;
}
```

---

## 11. 학습 내용 요약

이번 CSS 학습에서 익힌 내용은 다음과 같다.

1. CSS의 정의와 HTML과의 차이
2. Inline, Internal, External CSS 적용 방식
3. 태그, 클래스, ID 등 CSS 선택자
4. 글자 색상, 크기, 굵기, 정렬 속성
5. Margin, Padding, Border 등 Box Model
6. Width, Height, Box-sizing 속성
7. Flexbox의 기본 배치 원리
8. Media Query를 이용한 반응형 디자인
9. 시맨틱 HTML과 CSS의 관계

### 느낀 점

HTML로 웹페이지의 구조를 만들고 CSS로 디자인을 분리하여 적용하는 방법을 배웠다. 특히 Box Model의 margin과 padding의 차이, CSS 선택자, External CSS의 역할을 이해할 수 있었다.

직접 이력서를 꾸미면서 CSS가 단순히 색상을 바꾸는 역할뿐만 아니라 웹페이지 전체의 배치와 가독성을 결정하는 중요한 기술이라는 점을 알게 되었다.
