<template>
  <div>
    <!-- Here we pass in the post for use in props in children (passing the :post="post" in-->
    <single-post v-for="post in posts" :key="post.id" :post="post"></single-post>
  </div>
</template>

<script>
// import Component locally rather than making it global in main.js
import SinglePost from './SinglePost.vue';

export default {
  components: {
    'single-post': SinglePost
  },
  data: function() {
    return {
      posts: []
    }
  },
  created: function() {
    var baseUrl = "http://yourWordPressUrl.com";

    // (in main.js)  Vue.prototype.$http = axios;
    // (use)  this.$http.get   (instead of)  this.axios.get

    this.$http.get(baseUrl + '/wp-json/wp/v2/posts')
      .then(response => {
        this.posts = response.data;
        console.log('WordPress Rest API Status: ' + response.status);
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>