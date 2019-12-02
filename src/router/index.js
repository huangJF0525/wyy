import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
