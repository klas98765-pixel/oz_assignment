
# HTML/CSS 1일차 — HTML 태그 학습 정리

## 1. HTML이란?

HTML(HyperText Markup Language)은 웹페이지의 구조와 내용을 만드는 마크업 언어이다.

- HTML: 웹페이지의 구조와 내용
- CSS: 웹페이지의 디자인과 스타일
- JavaScript: 웹페이지의 동작과 상호작용

HTML은 태그를 이용하여 제목, 문단, 이미지, 링크, 표, 입력창 등을 표현한다.

## 2. HTML의 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>나의 웹페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>첫 번째 웹페이지입니다.</p>
</body>
</html>
```

| 태그 | 의미 |
|---|---|
| `<!DOCTYPE html>` | HTML5 문서임을 선언 |
| `<html>` | HTML 문서의 최상위 요소 |
| `<head>` | 문서 설정 및 메타데이터 |
| `<meta>` | 문자 인코딩 등 문서 정보 |
| `<title>` | 브라우저 탭에 표시되는 제목 |
| `<body>` | 실제 웹페이지에 표시되는 내용 |

## 3. 제목과 문단 태그

### 3.1. 제목 태그: h1 ~ h6

제목과 소제목을 구분할 때 사용한다.

```html
<h1>가장 중요한 제목</h1>
<h2>두 번째 수준 제목</h2>
<h3>세 번째 수준 제목</h3>
```

- `<h1>`부터 `<h6>`까지 사용 가능
- 숫자가 작을수록 높은 수준의 제목
- 문서의 구조를 구분하는 데 사용

### 3.2. p 태그

`<p>`는 문단을 작성하는 태그이다.

```html
<p>안녕하세요. 김민준입니다.</p>
<p>의료 인공지능을 공부하고 있습니다.</p>
```

### 3.3. hr 태그

`<hr>`은 내용 사이의 주제 전환을 나타낸다. 일반적으로 가로선으로 표시된다.

```html
<h2>자기소개</h2>
<p>저는 의료 AI에 관심이 있습니다.</p>
<hr>
<h2>학력</h2>
```

### 3.4. br 태그

`<br>`은 줄바꿈을 할 때 사용한다.

```html
<p>안녕하세요.<br>반갑습니다.</p>
```

## 4. 목록 태그

### 4.1. ul 태그

`<ul>`은 순서가 없는 목록이다.

```html
<ul>
    <li>Python</li>
    <li>HTML</li>
    <li>CSS</li>
</ul>
```

### 4.2. ol 태그

`<ol>`은 순서가 있는 목록이다.

```html
<ol>
    <li>HTML 학습</li>
    <li>CSS 학습</li>
    <li>JavaScript 학습</li>
</ol>
```

### 4.3. li 태그

`<li>`는 목록의 각 항목을 나타낸다.

- `<ul>` 안에서는 순서 없는 목록 항목
- `<ol>` 안에서는 순서 있는 목록 항목

## 5. 이미지와 링크 태그

### 5.1. img 태그

`<img>`는 웹페이지에 이미지를 삽입할 때 사용한다.

```html
<img src="profile.png" alt="프로필 사진" width="180">
```

| 속성 | 설명 |
|---|---|
| `src` | 이미지 파일의 경로 |
| `alt` | 이미지의 대체 텍스트 |
| `width` | 이미지 너비 |
| `height` | 이미지 높이 |

상대 경로 예시:

- `profile.png`: 현재 HTML 파일과 같은 폴더
- `../profile.png`: 한 단계 상위 폴더
- `images/profile.png`: 하위 images 폴더

### 5.2. a 태그

`<a>`는 다른 웹페이지로 이동하는 링크를 만든다.

```html
<a href="https://github.com">GitHub 바로가기</a>
```

새 탭으로 열기:

```html
<a href="https://github.com"
   target="_blank"
   rel="noopener noreferrer">
    GitHub
</a>
```

- `href`: 이동할 주소
- `target="_blank"`: 새 탭에서 열기
- `rel="noopener noreferrer"`: 새 탭 링크의 보안 및 정보 전달 설정

## 6. 테이블 태그

테이블은 행과 열로 구성된 데이터를 표현한다.

| 태그 | 의미 |
|---|---|
| `<table>` | 표 전체 |
| `<thead>` | 표의 머리글 영역 |
| `<tbody>` | 표의 본문 영역 |
| `<tr>` | 표의 행 |
| `<th>` | 제목 셀 |
| `<td>` | 데이터 셀 |

예제:

```html
<table border="1">
    <thead>
        <tr>
            <th>구분</th>
            <th>내용</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>전공</td>
            <td>의공학</td>
        </tr>
        <tr>
            <td>관심 분야</td>
            <td>의료 인공지능</td>
        </tr>
    </tbody>
</table>
```

참고: `border` 속성은 간단한 학습 예제로 사용할 수 있지만, 실제 웹페이지에서는 CSS로 테두리를 지정하는 것이 권장된다.

## 7. 입력 폼 관련 태그

### 7.1. form 태그

`<form>`은 사용자에게 정보를 입력받아 제출하는 영역이다.

```html
<form action="/submit" method="post">
    <input type="text" name="username">
    <button type="submit">제출</button>
</form>
```

- `action`: 입력 데이터를 보낼 주소
- `method`: 데이터를 전송하는 방법
- `GET`: 주로 조회 요청에 사용
- `POST`: 주로 데이터 제출에 사용

### 7.2. input 태그

`<input>`은 사용자 입력을 받는 태그이다.

| type | 기능 |
|---|---|
| `text` | 일반 텍스트 |
| `email` | 이메일 주소 |
| `password` | 비밀번호 |
| `number` | 숫자 |
| `date` | 날짜 |
| `checkbox` | 다중 선택 |
| `radio` | 단일 선택 |
| `submit` | 폼 제출 |

예제:

```html
<input type="text" placeholder="이름">
<input type="email" placeholder="이메일">
<input type="password" placeholder="비밀번호">
```

### 7.3. label 태그

`<label>`은 입력 요소의 이름이나 설명을 연결한다.

```html
<label for="username">이름:</label>
<input type="text" id="username">
```

`for`의 값과 입력 요소의 `id`를 일치시키면 된다.

### 7.4. textarea 태그

`<textarea>`는 여러 줄의 텍스트를 입력받는다.

```html
<textarea rows="5" cols="40"></textarea>
```

### 7.5. button 태그

`<button>`은 사용자가 클릭할 수 있는 버튼이다.

```html
<button type="submit">제출하기</button>
<button type="button">일반 버튼</button>
```

- `submit`: 폼 제출
- `button`: 일반 버튼

## 8. 종합 실습: 간단한 자기소개 폼

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>자기소개</title>
</head>
<body>
    <h1>김민준 자기소개</h1>

    <img src="profile.png"
         alt="프로필 사진"
         width="180">

    <h2>관심 분야</h2>
    <ul>
        <li>의료 인공지능</li>
        <li>딥러닝</li>
    </ul>

    <hr>

    <h2>문의하기</h2>
    <form action="mailto:example@gmail.com"
          method="post"
          enctype="text/plain">
        <label for="email">이메일:</label>
        <input type="email"
               id="email"
               name="email"
               required>

        <br>

        <button type="submit">
            메일 보내기
        </button>
    </form>
</body>
</html>
```

참고: `mailto:` 방식은 메일 앱을 열어 전송을 시도하는 방식이며, 서버를 통한 자동 메일 발송 기능은 아니다.

## 9. 학습 내용 요약

이번 학습에서 HTML 태그를 활용해 웹페이지의 기본 구조를 만드는 방법을 익혔다.

1. `head`, `body`로 문서 구조 구분
2. `h1~h6`, `p`, `hr`로 제목과 문단 표현
3. `ul`, `ol`, `li`로 목록 구성
4. `img`, `a`로 이미지 및 링크 추가
5. `table`, `tr`, `th`, `td` 등으로 표 작성
6. `form`, `input`, `button`으로 입력 폼 구성

### 느낀 점

HTML은 단순히 글자를 표시하는 것이 아니라 웹페이지의 내용을 의미에 맞게 구조화하는 언어라는 점을 배웠다. 직접 이력서를 만들어보면서 각 태그가 어떤 역할을 하는지 이해할 수 있었다.
