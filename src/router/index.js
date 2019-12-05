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
    component: () => import("../views/main"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/main/home")
      },
      {
        path: "/introduction",
        name: "introduction",
        component: () => import("../views/main/introduction")
      },
      {
        path: "/version",
        name: "version",
        component: () => import("../views/main/version")
      },
      {
        path: "/question",
        name: "question",
        component: () => import("../views/main/question")
      },
      {
        path: "/help",
        name: "help",
        component: () => import("../views/main/help")
      },
      {
        path: "/science",
        name: "science",
        component: () => import("../views/main/science")
      },
      {
        path: "/down",
        name: "down",
        component: () => import("../views/main/down")
      },
      {
        path: "/case",
        name: "case",
        component: () => import("../views/main/case")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
