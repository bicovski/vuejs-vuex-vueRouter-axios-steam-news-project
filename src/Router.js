import Vue from "vue";
import News from "./components/News"
import Games from "./components/Games"
import NewsDetail from "./components/NewsDetail"
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path : "/haberler", component : News},
  { path : "/oyunlar", component : Games },
  { path : "/haber-detay", component : NewsDetail },

  { path : "*", redirect : "/oyunlar"}
];

export const router = new VueRouter({
  mode : "history",
  routes
});