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

<br />

### 디렉티브

디렉티브는 Vue에서 제공하는 특수 속성임을 나타내는 `v-` 접두어가 붙어있으며 사용자가 짐작할 수 있듯 렌더링 된 DOM에 특수한 반응형 동작을 한다.

<br />

1. 조건문

   `v-if`

   ```html
   <!-- index.html -->

   <div id="app2">
     <!-- 속성의 값이 참일 때 엘리먼트가 표시된다. -->
     <span v-if="seen">Now you see me</span>
   </div>
   ```

   ```javascript
   /* index.js */

   var app2 = new Vue({
     el: '#app2',
     data: {
       seen: true,
     },
   })

   // 속성의 값을 거짓으로 업데이트하면 엘리먼트가 화면에서 사라진다.
   app2.seen = false
   ```

   <br />

1. 반복문

   `v-for`

   ```html
   <!-- index.html -->

   <div id="app3">
     <ol>
       <!-- todos 배열을 순서대로 반복하여 todo라는 item에 담는다. -->
       <li v-for="todo in todos">{{ todo.text }}</li>
     </ol>
   </div>
   ```

   ```javascript
   /* index.js */

   var app3 = new Vue({
     el: '#app3',
     data: {
       todos: [
         { text: 'Learn JavaScript' },
         { text: 'Learn Vue' },
         { text: 'Build something awesome' },
       ],
     },
   })

   // 배열의 값을 추가하면 화면 상에도 리스트가 바로 생성된다.
   app3.todos.push({ text: 'New item' })
   ```
