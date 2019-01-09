<template>
<div>
  <header-app></header-app>
  <router-view></router-view>
</div>
</template>

<script>
import Header from "./components/Header";
import News from "./components/News";
import Games from "./components/Games";
import NewsDetails from "./components/NewsDetail";
export default {
  data () {
    return {

    }
  },
  components : {
    headerApp : Header,
    newsApp : News,
    gamesApp : Games,
    newsDetailsApp : NewsDetails
  }
}
</script>

<style>

body{
  background-image: url("./assets/steam-wallpaper.jpg");
}
</style>
