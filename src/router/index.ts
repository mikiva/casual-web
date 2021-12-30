import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {

    path: "/servers",
    name: "Servers",
    component: () => import("@/views/Servers.vue")
  },
  {

    path: "/servers/instances",
    name: "Servers Instances",
    component: () => import("@/views/ServersInstances.vue")
  },
  {

    path: "/executables",
    name: "Executables",
    component: () => import("@/views/Executables.vue")
  },
  {

    path: "/executables/instances",
    name: "Executables Instances",
    component: () => import("@/views/ExecutablesInstances.vue")
  },
  {

    path: "/groups",
    name: "Groups",
    component: () => import("@/views/Groups.vue")
  },
  {

    path: "/services",
    name: "Services",
    component: () => import("@/views/Services.vue")
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
