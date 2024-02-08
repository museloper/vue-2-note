### 스크립트의 위치

```html
<!-- 틀린 예시❎ -->
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="index.css" />
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="index.js"></script>
</head>

<!-- 옳은 예시✅ -->
<body>
  <div id="app">
    <!-- 기본적으로 Vue 객체로 전달받은 데이터는 {{ DATA }} 형식으로 전달받아 사용한다. -->
    {{ message }}
  </div>

  <script src="index.js"></script>
</body>
```

<br />

### Vue 앱의 DOM 요소 제어

```javascript
/* index.js */

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
})

// Vue 객체의 값을 업데이트하면 화면의 값이 바뀌는 것을 확인할 수 있다. 아마 즉각즉각 랜더링 하는 방식인 듯 하다.
app.message = 'I have changed the data!'
```
