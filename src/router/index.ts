import Vue from "vue";
import VueRouter from "vue-router";

import RandomView from "../views/RandomView.vue";

import type { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "random-view",
    component: RandomView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
