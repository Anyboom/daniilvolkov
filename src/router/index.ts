import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

export default router;
