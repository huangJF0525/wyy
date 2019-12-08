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
        path: "/caselist",
        name: "caselist",
        component: () => import("../views/main/caselist")
      },
      {
        path: "/case/:id",
        name: "case",
        component: () => import("../views/main/case")
      }
    ],
    redirect: "/home"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin"),
    children: [
      {
        path: "/admin/mine",
        name: "mine",
        component: () => import("../views/admin/mine")
      },
      {
        path: "/admin/change",
        name: "change",
        component: () => import("../views/admin/mine/change")
      },
      {
        path: "/admin/mycontent",
        name: "mycontent",
        component: () => import("../views/admin/mine/mycontent")
      },
      {
        path: "/admin/myoperation",
        name: "myoperation",
        component: () => import("../views/admin/mine/myoperation")
      },
      {
        path: "/admin/mylogin",
        name: "mylogin",
        component: () => import("../views/admin/mine/mylogin")
      },
      {
        path: "/admin/myequipment",
        name: "myequipment",
        component: () => import("../views/admin/mine/myequipment")
      },
      {
        path: "/admin/myauthorization",
        name: "myauthorization",
        component: () => import("../views/admin/mine/myauthorization")
      }
    ],
    redirect: "/admin/mine"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
