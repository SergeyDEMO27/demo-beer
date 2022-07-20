import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/components/pages/MainPage.vue";
import ProductPage from "@/components/pages/ProductPage.vue";

const scrollBehavior = () => window.scrollTo(0, 0);

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

export default router;
