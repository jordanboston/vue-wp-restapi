<template>
  <div class="container" id="post">
    {{ post }}
  </div>
</template>

<script>
Vue.component('post', PostList) {
  // [props: posts],
  data: function() {
    return {
      post: "This is a post!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
