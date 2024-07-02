import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
