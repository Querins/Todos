import "./style.scss";

var Vue = require('vue/dist/vue.js');

var app = new Vue({
  el: '#app',
  data: {
    posts: [],
    input: ''
  },
  methods: {
    add: function(event) {
      if (this.isInputValid) {
        this.posts.push({title: this.input});
        this.input = '';
      }
    }
  },
  computed: {
    matchedPosts: function() {
      let phrase = this.input;
      return this.posts.filter(function(post, index, posts) {
        return post.title.includes(phrase);
      });
    },
    isInputValid: function() {
      return this.input !== '';
    }
  }
});
