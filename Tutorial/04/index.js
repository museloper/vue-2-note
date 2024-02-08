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
