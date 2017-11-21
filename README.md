# vue-wp-restapi

> A Vue.js WordPress dealio

Just a little testing out Vue with the WordPress Rest API.  If you wanted to try it out you could just change the baseUrl variable to your own WordPress site url in:

    src/components/PostList.vue

![wp-api-vue](https://user-images.githubusercontent.com/1487071/33049081-3cfab0d4-ce13-11e7-8bc5-56981f6c44bb.gif)

The posts are not styled or parsed out, just gets a messy blob of the data.

## Build Setup
```
# Update baseUrl
    var baseUrl = "yourWordPressUrl";

# install dependencies
    npm i

# serve with hot reload at localhost:8080
    npm run dev
```