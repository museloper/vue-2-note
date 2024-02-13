# Vue 2 지원이 2023년 12월 31일에 종료됩니다.

```
# 23년 12월 31일에 이미 지원이 종료되었는데..
# 24년도에 Vue2를 본다고 뒷북치고 있었다니 ㅠㅜ
# Vue3를 이해하기 위해 Vue2까지 살펴보았으나, 지원이 종료된 시점에서 이전 방식을 공부하는 것은 불필요한 것 같다.
# 필요가 느껴지기 전까지는 이 레포지토리는 잠정적으로 사용을 중단하겠다.
```

<br />

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

   <br />

1. 이벤트

   `v-on`

   ```html
   <!-- index.html -->

   <div id="app4">
     <p>{{ message }}</p>
     <!-- click 이벤트 발생 시 reverseMessage 메소드 호출 -->
     <button v-on:click="reverseMessage">Reverse Message</button>
   </div>
   ```

   ```javascript
   /* index.js */

   var app4 = new Vue({
     el: '#app4',
     data: {
       message: 'Hello Vue.js!',
     },
     methods: {
       reverseMessage: function () {
         this.message = this.message.split('').reverse().join('')
       },
     },
   })
   ```

   <br />

1. 데이터 양방향 바인딩

   `v-model`

   ```html
   <!-- index.html -->

   <div id="app5">
     <p>{{ message }}</p>
     <!-- 사용자 입력에 의해 Vue 앱의 데이터가 실시간으로 업데이트된다. -->
     <input type="text" v-model="message" />
   </div>
   ```

   ```javascript
   /* index.js */

   var app5 = new Vue({
     el: '#app5',
     data: {
       message: 'Hello Vue',
     },
   })
   ```

<br />

### 컴포넌트

```html
<!-- index.html -->

<div id="app6">
  <ol>
    <!-- todo-item 컴포넌트 사용 -->
    <todo-item></todo-item>
    <todo-item></todo-item>
  </ol>
</div>
```

```javascript
/* index.js */

// todo-item 컴포넌트 정의
Vue.component('todo-item', {
  template: '<li>This is a todo</li>',
})

var app6 = new Vue({
  el: '#app6',
})
```

위와 같이 작성된 코드는 `todo-item` 컴포넌트를 사용할 때 마다 똑같은 텍스트를 렌더링할 뿐이다.

아래와 같이 코드를 수정해보자.

```html
<!-- index.html -->

<div id="app7">
  <ol>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>
```

```javascript
/* index.js */

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
})

var app7 = new Vue({
  el: '#app7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' },
    ],
  },
})
```

이렇게 작성된 코드는 `v-bind`를 사용하여 각각의 반복되는 `todo-item` 컴포넌트에 각각의 다른 값들을 부여할 수 있다.
