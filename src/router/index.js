import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Kladde from "../views/Kladde.vue";
import ShooterList from "../views/ShooterList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/kladde",
    name: "kladde",
    component: Kladde
  },
  {
    path: "/historie",
    name: "historie",
    component: ShooterList
  }
];

const router = new VueRouter({
  routes
});

export default router;
