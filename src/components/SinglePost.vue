<template>
  <div class="row">
    <div class="col-md-5">
     <h3><span v-html="post.title.rendered"></span></h3>
     <p>Post Date: {{ post.date | momentDateFormat }}</p>
      <button class="btn btn-primary" @click="toggle()">Show Post</button>
    </div>
    <div class="col-md-7">
      <transition name="bounce">
        <div v-if="show">
          <div class="post-content" v-html="post.content.rendered"></div class="post-content">
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  // props is used to get properties from our parent PostList
  props: ['post'],
  data: function() {
    return {
      // set show to false initially to not show post until toggled
      show: false
    }
  },
  methods: {
    // method to toggle the posts and show them or hide them
    toggle: function () {
      // reverse with v-on: & this function
      this.show = !this.show;
      // this.$emit();
    }
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
/* If name="fade" is being used */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

/* if name="bounce"  is being used */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

/* Select all the Classes starting with .col */
[class*='col-'] {
  margin-bottom: 50px;
}

.post-content img {
/*  max-width: 10% !important;
  height: auto  !important;
  display: block !important;*/
}
</style>
