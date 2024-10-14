import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/daniilvolkov.github.io/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

export default router;
