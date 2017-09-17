<template>
  <div class="container" id="posts">
    <div class="jumbotron" style="margin-top: 10px">
      <div id="app">
        <div class="row" v-for="post in posts" :key="post.id">
          <div class="col-md-4">
            <h3><span v-html="post.title.rendered"></span></h3>
            <p>Post Date: {{ post.date | momentDateFormat }}
              <button class="btn btn-primary" @click="toggle()">Show Post</button>
            </p>
          </div>
          <div class="col-md-8">
            <transition name="bounce">
              <div v-if="show">
                <p>Post ID: {{post.id}}</p>
                <span v-html="post.content.rendered"></span>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      posts: [],
      show: false
    }
  },
  methods: {
    toggle: function () {
      // reverse with v-on: & this function
      this.show = !this.show;
    }
  },
  created: function() {
    var baseUrl = "http://shootandshare.com";

    // (in main.js)  Vue.prototype.$http = axios;
    // (use)  this.$http.get   (instead of)  this.axios.get

    this.$http.get(baseUrl + '/wp-json/wp/v2/posts')
      .then(response => {
        this.posts = response.data;
        console.log(response.status);
    });
  },
  filters: {
    momentDateFormat: function (date) {
      //  In 2.4.0, the globally exported moment object was deprecated. It will be removed in next major release.
      // make moment work:
       var moment = require('moment');

      // return moment(date).format('MMMM Do YYYY, h:mm:ss a');
      return moment(date).format('MMMM Do YYYY');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
