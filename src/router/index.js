import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AccountView from "../views/AccountView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/account/:id",
    name: "Account Detail",
    component: AccountView,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
