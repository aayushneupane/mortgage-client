import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AccountView from "../views/AccountView.vue";
import AnalyticsView from "../views/AnalyticsView.vue";

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
  {
    path: "/analytics/",
    name: "Analytics Detail",
    component: AnalyticsView,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
